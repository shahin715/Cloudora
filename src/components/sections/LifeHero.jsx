"use client";

import Image from "next/image";

export default function LifeHero() {
  return (
    <div className="relative h-[60vh] w-full">

      {/* Background Image */}
      <Image
        src="/bpo.jpg"
        alt="life hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Gradient Overlay (improved) */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0B1B2B]/90 via-[#0B1B2B]/60 to-[#0B1B2B]/20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl md:text-5xl font-bold text-white leading-tight"
        >
          Life at Cloudora
        </h1>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl"
        >
          A place where people grow, collaborate, and enjoy meaningful work
        </p>

      </div>
    </div>
  );
}