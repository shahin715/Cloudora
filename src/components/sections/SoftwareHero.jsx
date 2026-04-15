"use client";

import Image from "next/image";

export default function SoftwareHero() {
  return (
    <div className="relative h-[50vh] w-full">

      <Image
        src="/bpo.jpg"
        alt="software hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#0B1B2B]/90 via-[#0B1B2B]/60 to-[#0B1B2B]/20"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <h1
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Software Services
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-4 text-gray-300"
        >
          Full Stack. Cloud Optimized. AI-Driven
        </p>

      </div>
    </div>
  );
}