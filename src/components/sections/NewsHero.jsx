"use client";

import Image from "next/image";

export default function NewsHero() {
  return (
    <div className="relative h-[50vh] w-full">
      {/* Background Image */}
      <Image
        src="/news.png"
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          News & Events
        </h1>

      </div>
    </div>
  );
}