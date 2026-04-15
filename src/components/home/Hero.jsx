"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6 pt-20">
        
        <div className="max-w-4xl">
          
          {/* Heading */}
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Revolutionizing{" "}
            <span className="text-[#22C1DC]">Cloudora</span>{" "}
            Administration with Trusted Expertise and Scalable Software Solutions.
          </h1>

          {/* Paragraph */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-gray-300 text-lg md:text-xl"
          >
            Leverage our expert team to streamline operations, enhance efficiency,
            and develop tailored solutions that meet your unique business needs.
          </p>

          {/* Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-8"
          >
            <Link href="#what-we-do">
              <button className="bg-[#22C1DC] text-white px-8 py-3 cursor-pointer rounded-full text-lg font-semibold hover:opacity-90 transition">
                Explore Our Services
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}