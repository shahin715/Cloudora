"use client";

import { useEffect, useState } from "react";

export default function Life() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/life.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Intro */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {data.title}
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Intro paragraph */}
        <p
          className="text-gray-600 mb-10 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {data.intro}
        </p>

        {/* Culture */}
        <div
          className="bg-white p-6 rounded-xl shadow-sm mb-8 hover:shadow-md transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {data.culture.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            {data.culture.description}
          </p>
        </div>

        {/* Perks */}
        <div
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {data.perks.title}
          </h3>

          <ul className="space-y-2 text-gray-600 text-sm">
            {data.perks.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#22C1DC]">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}