"use client";

import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#0B1B2B] text-gray-300 px-6 md:px-16 py-16 relative">
      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Left */}
        <div>
          <Link href="/">
            <h1 className="text-2xl font-semibold text-white cursor-pointer">
              {siteConfig.name}
            </h1>
          </Link>

          <p className="mt-4 text-sm">Delivering Expertise You Can Trust</p>
        </div>

        {/* Middle */}
        <div>
          <h2 className="text-white mb-4 border-b border-gray-600 pb-2">
            Quick links
          </h2>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link href="/bpo-services" className="hover:text-white transition">
              BPO Services
            </Link>

            <Link href="/about" className="hover:text-white transition">
              About Us
            </Link>

            <Link
              href="/software-services"
              className="hover:text-white transition"
            >
              Software Services
            </Link>

            <Link href="/career" className="hover:text-white transition">
              Career
            </Link>

            <Link href="/news" className="hover:text-white transition">
              News and Events
            </Link>

            <Link href="/contact" className="hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-white mb-4 border-b border-gray-600 pb-2">
            Contact us
          </h2>

          {/* Email */}
          <a
            href="mailto:hr@cloudora.com"
            className="text-sm hover:text-white transition"
          >
            hr@cloudora.com
          </a>

          {/* Phone */}
          <a
            href="tel:+88012345678"
            className="block text-blue-400 mt-3 text-sm font-medium"
          >
            +880 12345678
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© 2026, all right reserved.</p>
      </div>
    </div>
  );
}
