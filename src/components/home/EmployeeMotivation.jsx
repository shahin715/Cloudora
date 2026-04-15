"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function EmployeeMotivation() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/employee.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {data.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {data.employees.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="
                group
                bg-white
                p-6 rounded-2xl
                shadow-sm hover:shadow-xl
                border border-gray-100
                transition duration-300
                hover:-translate-y-2
              "
            >

              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">

                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="56px"
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.team}
                  </p>
                </div>

              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed italic">
                “{item.quote}”
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}