"use client";

import Image from "next/image";

export default function CeoHero() {
  return (
    <div className="relative h-[50vh] w-full">

      {/* Background Image */}
      <Image
        src="/bpo.jpg"
        alt="about hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0B1B2B]/90 via-[#0B1B2B]/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
        >
          CEO’s Message
        </h1>

      </div>
    </div>
  );
}