"use client";

import Image from "next/image";

export default function CareerSectionHero() {
  return (
    <section className="relative h-[55vh] w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src="/bpo.jpg"
        alt="career hero"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-100 hover:scale-105 transition duration-700"
      />

      {/*  Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0B1B2B]/95 via-[#0B1B2B]/70 to-[#0B1B2B]/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6 pt-16">

        <div className="max-w-3xl">

          {/* Title */}
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Career
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-gray-300 text-sm md:text-lg leading-relaxed"
          >
            Build your future with a team that empowers growth, values your ideas,
            and turns ambition into real impact.
          </p>

        </div>

      </div>
    </section>
  );
}