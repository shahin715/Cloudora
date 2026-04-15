"use client";

import { useEffect, useState } from "react";

export default function KeyFacts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/key-facts.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {data.title}
          </h2>
          <p className="text-gray-500">{data.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Left stats */}
          <div className="md:col-span-3 grid sm:grid-cols-3 gap-6">
            {data.stats.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-[#22C1DC] mb-1">
                  {item.number}
                </h3>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Right highlight card */}
          <div
            data-aos="zoom-in"
            className="bg-linear-to-br from-[#22C1DC] to-[#4A90E2] text-white p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-lg"
          >
            <h3 className="text-3xl font-bold">{data.highlight.number}</h3>
            <p className="text-sm opacity-90 mt-1">{data.highlight.label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
