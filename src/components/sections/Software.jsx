"use client";

import { useEffect, useState } from "react";

export default function Software() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/software.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  const stackItems = data.stack.split(", ");

  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {data.title}
          </h2>
          <p className="mt-3 text-gray-500">
            {data.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Solutions */}
          <div
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition hover:-translate-y-1"
            data-aos="fade-up"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Solutions
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data.solutions}
            </p>
          </div>

          {/* AI */}
          <div
            className="bg-linear-to-br from-[#0B1B2B] to-[#0F2A44] text-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-lg font-semibold mb-3">
              AI-Driven Development
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {data.ai}
            </p>
          </div>

        </div>

        {/* Tech Stack */}
        <div
          className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Technology Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {stackItems.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#22C1DC] hover:text-white transition cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}