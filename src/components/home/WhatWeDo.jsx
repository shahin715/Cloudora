"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  FileText,
  Database,
  Send,
  ShieldCheck,
  Calculator,
} from "lucide-react";

const iconMap = {
  briefcase: Briefcase,
  "file-text": FileText,
  database: Database,
  send: Send,
  "shield-check": ShieldCheck,
  calculator: Calculator,
};

export default function WhatWeDo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/what-we-do.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
  <section
  id="what-we-do"
  className="scroll-mt-24 px-6 md:px-20 py-16 bg-linear-to-b from-gray-50 to-white"
>
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {data.title}
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {data.services.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <Link key={index} href={item.link || "/"}>

                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="
                    relative group
                    bg-white
                    p-6 rounded-2xl
                    border border-gray-100
                    shadow-sm hover:shadow-2xl
                    transition duration-300
                    hover:-translate-y-2
                    cursor-pointer
                    overflow-hidden
                  "
                >

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-[#22C1DC]/5 opacity-0 group-hover:opacity-100 transition rounded-2xl"></div>

                  {/* ICON */}
                  <div className="
                    w-12 h-12 flex items-center justify-center
                    rounded-xl bg-[#22C1DC]/10
                    text-[#22C1DC]
                    mb-4
                    group-hover:bg-[#22C1DC]
                    group-hover:text-white
                    transition
                  ">
                    <Icon size={22} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#22C1DC] transition">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* ARROW (premium feel) */}
                  <span className="inline-block mt-4 text-sm text-[#22C1DC] opacity-0 group-hover:opacity-100 transition">
                    Learn More →
                  </span>

                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}