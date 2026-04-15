"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CeoMessage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/ceo.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <section className="px-6 md:px-20 py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <div
          className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden"
          data-aos="fade-up"
        >

          <div className="grid md:grid-cols-2 items-stretch">

            {/* 🔥 IMAGE SIDE (BIG) */}
            <div
              className="relative h-87.5 md:h-auto"
              data-aos="fade-right"
            >
              <Image
                src={data.image}
                alt="CEO"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Gradient overlay for premium look */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
            </div>

            {/* 🔥 CONTENT SIDE */}
            <div
              className="p-8 md:p-12 flex flex-col justify-center"
              data-aos="fade-left"
            >

              {/* Name */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {data.name}
              </h2>

              <p className="text-blue-500 font-medium mb-6">
                {data.designation}
              </p>

              {/* Message */}
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed border-l-4 border-[#22C1DC] pl-4">
                {data.message.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Signature */}
              <div className="mt-8">
                <p className="font-semibold text-gray-900">
                  {data.name}
                </p>
                <p className="text-sm text-gray-500">
                  {data.designation}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}