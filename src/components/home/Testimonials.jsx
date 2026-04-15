"use client";

import { useEffect, useState } from "react";

export default function Testimonials() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <section className="px-6 md:px-20 py-20 bg-linear-to-r from-[#0B1B2B] to-[#0F2A44] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            {data.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {data.reviews.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                bg-white/5 backdrop-blur-md
                border border-white/10
                p-6 rounded-xl
                hover:bg-white/10
                transition duration-300
                flex flex-col justify-between
                min-h-55
              "
            >

              {/* Text */}
              <p className="text-sm leading-relaxed text-gray-200">
                “{item.text}”
              </p>

              {/* Author */}
              <p className="mt-6 text-xs text-gray-400">
                — {item.author}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}