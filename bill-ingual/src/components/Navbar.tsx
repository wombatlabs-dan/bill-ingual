"use client";

import Link from "next/link";

interface NavbarProps {
  activeLink?: "analysis" | "history" | "archives";
}

export default function Navbar({ activeLink }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-neutral-50/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
      <Link
        href="/"
        className="text-xl font-bold tracking-tighter text-black dark:text-white font-serif italic"
      >
        Bill-ingual
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/analysis"
          className={`font-body text-[10px] uppercase tracking-widest transition-colors ${
            activeLink === "analysis"
              ? "text-black dark:text-white border-b-2 border-black dark:border-white pb-1"
              : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
          }`}
        >
          Analysis
        </Link>
        <Link
          href="#"
          className={`font-body text-[10px] uppercase tracking-widest transition-colors ${
            activeLink === "history"
              ? "text-black dark:text-white border-b-2 border-black dark:border-white pb-1"
              : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
          }`}
        >
          History
        </Link>
        <Link
          href="#"
          className={`font-body text-[10px] uppercase tracking-widest transition-colors ${
            activeLink === "archives"
              ? "text-black dark:text-white border-b-2 border-black dark:border-white pb-1"
              : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
          }`}
        >
          Archives
        </Link>
      </div>
      <button className="bg-primary text-on-primary px-6 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-primary-container transition-all scale-95 duration-200 ease-in-out">
        NEW SCAN
      </button>
    </nav>
  );
}