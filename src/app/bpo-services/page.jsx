"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BpoPage() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const services = [
    {
      title: "Distributions",
      desc: "We manage all aspects of participant distributions including withdrawals, rollovers, RMDs, loans, and hardship distributions.",
    },
    {
      title: "Sales",
      desc: "Our sales team collaborates with advisors, sponsors, and partners to deliver tailored 401(k) solutions.",
    },
    {
      title: "New Business",
      desc: "We ensure a smooth onboarding process and efficient setup of retirement plans.",
    },
    {
      title: "Business Development",
      desc: "We build relationships to expand opportunities and strengthen services.",
    },
    {
      title: "ERISA Services",
      desc: "We prepare and maintain plan documents aligned with DOL and IRS guidelines.",
    },
    {
      title: "Compliance Services",
      desc: "We ensure plans meet all regulatory requirements through testing and reviews.",
    },
    {
      title: "Recordkeeping",
      desc: "Secure and accurate recordkeeping for all participant data and transactions.",
    },
    {
      title: "Form 5500",
      desc: "We handle filing to ensure compliance and reduce risk.",
    },
  ];

  return (
    <div>

      {/*  HERO SECTION */}
      <div className="relative h-[50vh] w-full">

        <Image
          src="/bpo.jpg"
          alt="BPO Services"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0B1B2B]/90 via-[#0B1B2B]/50 to-transparent"></div>

        {/* Content */}
        <div
          className="relative z-10 flex items-center justify-center h-full text-center px-6 pt-20"
          data-aos="fade-up"
        >
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              BPO Services
            </h1>

            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Cloudora delivers expert, compliant, and efficient support for modern business operations through specialized teams.
            </p>
          </div>
        </div>
      </div>

      {/*  CONTENT SECTION */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          {/* Intro */}
          <div
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive BPO Solutions
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto">
              At Cloudora Ltd., we specialize in providing comprehensive support for 401(k)
              retirement plans. Our experienced teams work across multiple specialized
              departments to deliver efficient, accurate, and compliant services tailored
              to your needs.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {services.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}