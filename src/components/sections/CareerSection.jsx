"use client";

import { useEffect, useState } from "react";
import { MapPin, Briefcase } from "lucide-react";

export default function CareerSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/career-jobs.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {data.title}
          </h2>
          <p className="text-gray-500 mt-3">
            {data.subtitle}
          </p>
        </div>

        {/* Jobs */}
        <div className="space-y-5">

          {data.jobs.map((job) => (
            <div
              key={job.id}
              className="
                group
                flex flex-col md:flex-row md:items-center justify-between
                bg-white p-6 rounded-2xl
                border border-gray-100
                shadow-sm hover:shadow-xl
                transition duration-300
                hover:-translate-y-1
              "
            >

              {/* LEFT */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {job.title}
                </h3>

                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">

                  <div className="flex items-center gap-1">
                    <Briefcase size={16} />
                    {job.type}
                  </div>

                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {job.location}
                  </div>

                  <span className="bg-[#22C1DC]/10 text-[#22C1DC] px-3 py-1 rounded-full text-xs">
                    {job.tag}
                  </span>

                </div>
              </div>

              {/* RIGHT */}
              <button className="
                mt-4 md:mt-0
                px-6 py-2 rounded-full
                border border-gray-300
                text-sm font-medium
                hover:bg-[#22C1DC] hover:text-white hover:border-[#22C1DC]
                transition
              ">
                Apply Now →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}