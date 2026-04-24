"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/siteConfig";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y < 50) setScrollState(0);
      else if (y < 200) setScrollState(1);
      else setScrollState(2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgStyle =
    scrollState === 0
      ? "bg-transparent"
      : scrollState === 1
      ? "bg-black/30 backdrop-blur-md border-b border-white/10"
      : "bg-gradient-to-r from-[#0B1B2B] to-[#0F2A44] shadow-lg";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-500 ${bgStyle}`}
    >
      {/* LOGO */}
      <Link href="/">
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-semibold tracking-wide cursor-pointer text-white hover:opacity-80 transition"
        >
          {siteConfig.name}
        </span>
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">

        <Link href="/" className="hover:text-blue-400 transition">
          Home
        </Link>

        {/* SERVICES */}
        <div className="relative group">
          <span className="cursor-pointer hover:text-blue-400">
            Services ▾
          </span>

          <div className="absolute top-full left-0 mt-2 min-w-44 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

            <Link href="/bpo-services" className="block px-4 py-2 hover:text-blue-500">
              BPO Services
            </Link>

            <Link href="/software-services" className="block px-4 py-2 hover:text-blue-500">
              Software Services
            </Link>

          </div>
        </div>

        {/* ABOUT */}
        <div className="relative group">
          <span className="cursor-pointer hover:text-blue-400">
            About Us ▾
          </span>

          <div className="absolute top-full left-0 mt-2 min-w-44 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

            <Link href="/ceo-message" className="block px-4 py-2 hover:text-blue-500">
              CEO’s Message
            </Link>

            <Link href="/about" className="block px-4 py-2 hover:text-blue-500">
              Leadership Team
            </Link>

          </div>
        </div>

        <Link href="/news" className="hover:text-blue-400 transition">
          News & Events
        </Link>

        <Link href="/life-at-cloudora" className="hover:text-blue-400 transition">
          Life at Cloudora
        </Link>

        <Link href="/career" className="hover:text-blue-400 transition">
          Career
        </Link>
      </div>

      {/* CTA BUTTON */}
      <Link href="/contact">
        <button className="hidden md:block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#22C1DC] hover:text-white transition">
          Contact Us →
        </button>
      </Link>

      {/* MOBILE MENU BUTTON */}
      <div
        className="md:hidden text-2xl cursor-pointer text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0B1B2B] flex flex-col gap-4 p-6 md:hidden text-white">

          <Link href="/">Home</Link>
          <Link href="/bpo-services">BPO Services</Link>
          <Link href="/software-services">Software Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/news">News & Events</Link>
          <Link href="/life-at-cloudora">Life at Cloudora</Link>
          <Link href="/career">Career</Link>

          <Link href="/contact">
            <button className="bg-white text-black px-4 py-2 rounded-full mt-4">
              Contact Us →
            </button>
          </Link>

        </div>
      )}
    </div>
  );
}