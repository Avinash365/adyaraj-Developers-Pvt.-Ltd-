'use client';

import { useState } from 'react';

export default function ApplicationForm() {

  const ADYARAJ_CV_UPLOAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxrxI0gtgpGhY6cPvR8k8aPdL3fgeD6et978Jgc2XL9wFm1fh2kzDF-d4p3spxqAqbd-A/exec';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    cv: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        cv: e.target.files[0]
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      if (!formData.cv) {
        setSubmitStatus('⚠️ Please upload your CV before submitting.');
        setIsSubmitting(false);
        return;
      }

      const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64String = reader.result.split(',')[1];
          resolve(base64String);
        };
        reader.onerror = (error) => reject(error);
      });

      const cvBase64 = await toBase64(formData.cv);

      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('contact', formData.contact);
      formDataToSend.append('cvBase64', cvBase64);
      formDataToSend.append('cvName', formData.cv.name);

      const response = await fetch(ADYARAJ_CV_UPLOAD_ENDPOINT, {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.result === 'success') {
        setSubmitStatus('✅ Application submitted successfully! We will contact you soon.');
        setFormData({ name: '', email: '', contact: '', cv: null });
        document.getElementById('cv').value = '';
      } else if (result.result === 'duplicate') {
        setSubmitStatus('⚠️ You have already submitted this form. Duplicate submission is not allowed.');
      } else {
        console.error(result);
        setSubmitStatus('❌ Error submitting application. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('❌ Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply-form" className="py-20 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side - Info / Image */}
          <div className="text-gray-800 text-center lg:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Build Your Career <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent"> With Us</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ready to shape the future with us? Submit your details and let’s build something extraordinary together.
            </p>
            <img
              src="/images/other/8.jpg"
              alt="Join Our Team"
              className="rounded-2xl shadow-xl w-full lg:w-[90%] mx-auto lg:mx-0 object-cover"
            />
          </div>

          {/* Right Side - Application Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100">
            <h3 className="text-3xl font-bold text-orange-600 text-center mb-8">
              Apply Now
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 transition-all text-gray-800 placeholder-gray-500 text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 transition-all text-gray-800 placeholder-gray-500 text-sm"
                  placeholder="Enter your email"
                />
              </div>

              {/* Contact */}
              <div>
                <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 transition-all text-gray-800 placeholder-gray-500 text-sm"
                  placeholder="Enter your contact number"
                />
              </div>

              {/* CV Upload */}
              <div>
                <label htmlFor="cv" className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload CV (PDF) *
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-gray-50 text-sm"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2 inline-block"></i>Submitting...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2 inline-block"></i>Submit Application
                    </>
                  )}
                </button>
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div
                  className={`mt-4 p-4 rounded-lg text-center font-medium ${
                    submitStatus.includes('successfully')
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
