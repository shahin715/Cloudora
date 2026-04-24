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
      className={`fixed top-0 left-0 w-full z-50
      px-6 md:px-10 py-4 flex items-center justify-between
      transition-all duration-500 ease-in-out ${bgStyle}`}
    >
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
        <Link href="/">
          <p className="cursor-pointer border-b-2 border-blue-400 pb-1">Home</p>
        </Link>

        {/*  SERVICES */}
        <div className="relative group">
          <p className="cursor-pointer hover:text-blue-400">Services ▾</p>

          {/* invisible bridge */}
          <div className="absolute top-full left-0 h-3 w-full"></div>

          <div
            className="
            absolute top-full left-0 mt-2
            bg-white text-black rounded-md shadow-lg
            opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            transition-all duration-200
            min-w-44
          "
          >
            <Link href="/bpo-services">
              <p className="px-4 py-2 hover:text-blue-500 cursor-pointer">
                BPO Services
              </p>
            </Link>

            <Link href="/software-services">
              <p className="px-4 py-2 hover:text-blue-500 cursor-pointer">
                Software Services
              </p>
            </Link>
          </div>
        </div>

        {/* ABOUT */}
        <div className="relative group">
          <p className="cursor-pointer hover:text-blue-400">About Us ▾</p>

          <div className="absolute top-full left-0 h-3 w-full"></div>

          <div
            className="
            absolute top-full left-0 mt-2
            bg-white text-black rounded-md shadow-lg
            opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            transition-all duration-200
            min-w-44
          "
          >
            <Link href="/ceo-message">
              <p className="px-4 py-2 hover:text-blue-500 cursor-pointer">
                CEO’s Message
              </p>
            </Link>

            <Link href="/about">
              <p className="px-4 py-2 hover:text-blue-500 cursor-pointer">
                Leadership Team
              </p>
            </Link>
          </div>
        </div>

        {/* NEWS */}
       <div>
         <Link href="/news">
          <p className="cursor-pointer hover:text-blue-400">News & Events</p>
        </Link>
     
       </div>
         

        <Link href="/life-at-cloudora">
          <p className="cursor-pointer hover:text-blue-400">Life at Cloudora</p>
        </Link>

       <Link href="/career">
          <p className="cursor-pointer hover:text-blue-400">Career</p>
        </Link>
      </div>

      {/* BUTTON */}
      <Link href="/contact">
        <button className="hidden md:block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#22C1DC] hover:text-white transition">
          Contact Us →
        </button>
      </Link>

      {/* MOBILE MENU */}
      <div
        className="md:hidden text-2xl cursor-pointer text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0B1B2B] flex flex-col gap-4 p-6 md:hidden z-50 text-white">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/bpo-services">
            <p>Services</p>
          </Link>
          <Link href="/about">
            <p>About Us</p>
          </Link>
          <p>News and Events</p>
          <Link href="/life-at-cloudora">
            <p>Life at Cloudora</p>
          </Link>
          <p>Career</p>

          <button className="bg-white text-black px-4 py-2 rounded-full mt-4">
            Contact Us →
          </button>
        </div>
      )}
    </div>
  );
}
