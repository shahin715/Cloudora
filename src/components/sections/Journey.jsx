"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Journey() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/journey.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* Image */}
          <div
            className="relative h-75 md:h-auto rounded-2xl overflow-hidden group cursor-pointer"
            data-aos="fade-right"
          >
            {/* Image */}
            <Image
              src={data.image}
              alt="journey"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>
          </div>

          {/* Content */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm transition-all duration-500 h-full flex flex-col justify-center cursor-pointer
            hover:shadow-xl hover:-translate-y-2 hover:scale-[1.01]"
            data-aos="fade-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 transition">
              {data.title}
            </h2>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              {data.description.map((para, i) => (
                <p
                  key={i}
                  className="transition duration-300 hover:text-gray-800"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}