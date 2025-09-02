import Image from "next/image";
import { RefObject } from 'react';
import { forwardRef } from "react";

const HomePage = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div>
      <section
        ref={ref} // ⬅️ pasang ref di sini
        className="relative min-h-screen bg-gradient-to-b from-[#0a1f6a] to-[#0e1649] text-white overflow-hidden"
      >
        {/* Hero content */}
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-md">
            Welcome To Aether
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold drop-shadow-sm">
            We Turn Idea Into Profitable Businesses
          </p>
        </div>

        {/* Decorative Waves */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/waves.png"
            alt="Waves"
            fill
            className="object-cover pointer-events-none"
          />
        </div>
      </section>
    </div>
  );
});

export default HomePage;
