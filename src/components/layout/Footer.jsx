"use client";

import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  // Scroll to top function
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
          <h1 className="text-2xl font-semibold text-white">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-sm">
            Delivering Expertise You Can Trust
          </p>
        </div>

        {/* Middle */}
        <div>
          <h2 className="text-white mb-4 border-b border-gray-600 pb-2">
            Quick links
          </h2>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <p className="hover:text-white cursor-pointer">BPO Services</p>
            <p className="hover:text-white cursor-pointer">About Us</p>

            <p className="hover:text-white cursor-pointer">
              Software Services
            </p>
            <p className="hover:text-white cursor-pointer">Career</p>

            <p className="hover:text-white cursor-pointer">
              News and Events
            </p>
            <p className="hover:text-white cursor-pointer">Contact Us</p>
          </div>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-white mb-4 border-b border-gray-600 pb-2">
            Contact us
          </h2>

          <p className="text-sm hover:text-white cursor-pointer">
            hr@cloudora.com
          </p>

          <p className="text-blue-400 mt-3 text-sm font-medium">
            +880 9639 770099
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        
        <p>© 2026, all right reserved.</p>

        {/* Scroll to top button */}
        <div
          onClick={scrollToTop}
          className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition"
        >
          ↑
        </div>
      </div>
    </div>
  );
}