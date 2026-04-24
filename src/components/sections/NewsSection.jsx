"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function NewsSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) {
    return (
      <section className="px-6 md:px-20 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="h-40 animate-pulse bg-gray-200 rounded-xl"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {data.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-[#22C1DC] font-medium">
                  {item.category}
                </span>

                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
