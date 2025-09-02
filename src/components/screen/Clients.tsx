'use client'

import Image from "next/image";

interface Client {
  src: string;
  alt: string;
}

const clients: Client[] = [
  { src: "/image/client-1.png", alt: "Propertree" },
  { src: "/image/client-2.svg", alt: "Pertamina" },
  { src: "/image/client-3.png", alt: "XYZ" },
  { src: "/image/client-4.png", alt: "SIM" },
  { src: "/image/client-5.png", alt: "ProReliant" },
  { src: "/image/client-6.png", alt: "Kementerian Pertanian" },
  { src: "/image/client-07.webp", alt: "Axiata" },
  { src: "/image/client-8.png", alt: "Kabupaten" },
];

const Client = () => {
  return (
    <section className="py-20 px-4 text-black">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">The Clients</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          We’ve had the pleasure to work together with some remarkable brands.
        </p>
      </div>

      {/* Clients grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-6xl mx-auto border border-gray-600">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-40 p-4 border border-gray-600 bg-white"
          >
            <Image
              src={client.src}
              alt={client.alt}
              width={200}
              height={100}
              className="object-contain filter grayscale opacity-60 
                         hover:grayscale-0 hover:opacity-100 
                         transition-all duration-200 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
