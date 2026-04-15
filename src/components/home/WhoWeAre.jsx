"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function WhoWeAre() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/who-we-are.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-stretch min-h-105">
          {/* Image */}
          <div
            className="relative h-75 md:h-auto rounded-2xl overflow-hidden"
            data-aos="fade-right"
          >
            <Image
              src={data.image}
              alt="who we are"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 h-full flex flex-col justify-center"
            data-aos="fade-left"
          >
            {/* Badge */}
            <p className="text-sm text-blue-500 bg-blue-100 inline-block px-4 py-1 rounded-full mb-4 w-fit">
              {data.badge}
            </p>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {data.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {data.description}
            </p>

            {/* Button */}
            <Link href="/about">
              <button className="bg-[#22C1DC] text-white px-6 py-3 rounded-full font-semibold w-fit hover:opacity-90 transition">
                About Us →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
