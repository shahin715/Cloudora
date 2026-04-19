"use client";

import Image from "next/image";

export default function Hero({
  title = "Contact Us",
  subtitle = "Ready to take the next step? Connect with us to explore how we can deliver smart, scalable solutions tailored to your needs.",
  image = "/bpo.jpg",
}) {
  return (
    <section className="relative h-[55vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt="hero"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-100 hover:scale-105 transition duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0B1B2B]/95 via-[#0B1B2B]/70 to-[#0B1B2B]/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-16">
        <div className="max-w-3xl">
          {/* Title */}
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-gray-300 text-sm md:text-lg leading-relaxed"
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
