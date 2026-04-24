"use client";

import { useEffect, useState } from "react";

export default function Software() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/software.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  // Loading state
  if (!data) {
    return (
      <section className="px-6 md:px-20 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="h-40 bg-gray-200 animate-pulse rounded-xl"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-14">
        {/*  Title */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {data.title}
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/*  Cards */}
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

            <p className="text-gray-300 text-sm leading-relaxed">{data.ai}</p>
          </div>
        </div>

        {/*  TECH STACK  */}
        <div
          className="
    bg-white p-10 rounded-3xl 
    shadow-md hover:shadow-2xl 
    transition duration-500
    border border-gray-100
  "
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Technology Stack
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(data.stack).map(([category, items], i) => (
              <div
                key={i}
                className="
          bg-gray-50 
          p-6 rounded-2xl 
          border border-gray-100
          hover:shadow-lg 
          transition duration-300
        "
              >
                {/* Category Title */}
                <h4 className="text-sm font-semibold text-[#22C1DC] mb-4 uppercase tracking-wide">
                  {category}
                </h4>

                {/* Items */}
                <div className="flex flex-wrap gap-3">
                  {items.map((item, idx) => (
                    <span
                      key={idx}
                      className="
                px-4 py-2 text-sm font-medium
                bg-white text-gray-700
                rounded-full border border-gray-200
                shadow-sm
                hover:bg-[#22C1DC] hover:text-white
                hover:scale-105
                transition duration-300
                cursor-pointer
              "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
