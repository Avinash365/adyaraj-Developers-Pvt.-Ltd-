'use client';

import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import ContactUS from "@/page/contactUS/contact";
import Footer from "@/components/footer/Footer";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Adyaraj Developers Pvt. Ltd.</title>
        <meta
          name="description"
          content="Reach out to Adyaraj Developers Pvt. Ltd. for infrastructure, government projects, and partnership opportunities."
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <ContactUS />
        </main>
        <Footer />
      </div>
    </>
  );
}
