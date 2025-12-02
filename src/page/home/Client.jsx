"use client";

const clients = [
  { id: 1, name: "East Central Railway" },
  { id: 2, name: "Bihar Rajya Pul Nirman Nigam Limited" },
  { id: 3, name: "Building Construction Department, Patna" },
  { id: 4, name: "Hindustan Steelworks Construction Limited" },
  { id: 5, name: "Infrastructure Development Authority, Patna" },
  { id: 6, name: "National Project Construction Corporation Limited" },
  { id: 7, name: "Bihar State Building Construction Corporation Limited" },
  { id: 8, name: "Bihar Medical Services & Infrastructure Corporation Limited" },
  { id: 9, name: "Bihar State Educational Infrastructure Development Corporation Limited" },
  { id: 10, name: "Bihar State Tourism Development Corporation Limited" },
  { id: 11, name: "Central Public Works Department [CPWD]" },
  { id: 12, name: "Publc Health Engineering Department [PHED]" }
];

export default function GovernmentClients() {
  return (
    <section className="py-12 bg-white-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-10">
          Our Government & <span className="text-orange-600">PSU Sector Clients</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 ">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center gap-3 rounded-xl border border-gray-200 shadow-sm bg-gray-50 hover:bg-gray-100 transition p-4"
            >
              <div className="flex items-center justify-center min-w-8 h-8 rounded-full bg-orange-500 text-white font-semibold text-sm">
                {client.id}
              </div>
              <p className="text-gray-800 font-medium">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
