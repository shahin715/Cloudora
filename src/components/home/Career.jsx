"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Career() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/career.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <section className="px-60000 md:px-20 py-14 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* Wrapper Card */}
        <div className="
          grid md:grid-cols-2 gap-12 items-center
          bg-white/70 backdrop-blur-md
          border border-gray-100
          rounded-3xl p-8 md:p-12
          shadow-lg hover:shadow-2xl
          transition duration-500
        ">

          {/* LEFT */}
          <div data-aos="fade-right">

            {/* Badge */}
            <span className="inline-block bg-[#22C1DC]/10 text-[#22C1DC] text-sm px-4 py-1 rounded-full mb-4">
              {data.badge}
            </span>

            {/* BIG NUMBER */}
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-none">
              {data.title}
            </h2>

            {/* Divider */}
            <div className="w-12 h-1 bg-[#22C1DC] mb-6 rounded-full"></div>

            {/* POINTS */}
            <div className="space-y-4">
              {data.points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CheckCircle
                    className="text-[#22C1DC] group-hover:scale-110 transition"
                    size={20}
                  />

                  <p className="text-gray-600 group-hover:text-gray-900 transition">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA (🔥 upgrade) */}
            <button className="mt-8 bg-[#22C1DC] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Join Our Team →
            </button>

          </div>

          {/* RIGHT IMAGE */}
         <div
  className="group relative h-80 md:h-105 rounded-2xl overflow-hidden"
  data-aos="fade-left"
>
  <Image
    src={data.image}
    alt="career"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="
      object-cover
      transition duration-700 ease-out
      group-hover:scale-110 group-hover:rotate-1
    "
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
</div>

        </div>

      </div>
    </section>
  );
}