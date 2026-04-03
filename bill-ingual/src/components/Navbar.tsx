"use client";

import Link from "next/link";

interface NavbarProps {
  activeLink?: "analysis" | "history" | "archives";
}

export default function Navbar({ activeLink }: NavbarProps) {
  return (
    <nav className="bg-[#f9f9f9]/80 dark:bg-[#1a1c1c]/80 text-[#000000] dark:text-[#f9f9f9] border-b border-[#c6c6c6]/20 backdrop-blur-md sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="text-2xl font-sans font-black tracking-tighter text-[#000000] dark:text-[#f9f9f9] uppercase"
          >
            Bill-ingual
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/upload"
              className={`text-[10px] uppercase tracking-widest transition-colors border-b-2 pb-1 ${
                activeLink === "analysis"
                  ? "text-[#000000] dark:text-[#f9f9f9] border-[#000000] dark:border-[#f9f9f9]"
                  : "text-[#474747] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#f9f9f9] border-transparent"
              }`}
            >
              Analysis
            </Link>
            <Link
              href="#"
              className={`text-[10px] uppercase tracking-widest transition-colors border-b-2 pb-1 ${
                activeLink === "history"
                  ? "text-[#000000] dark:text-[#f9f9f9] border-[#000000] dark:border-[#f9f9f9]"
                  : "text-[#474747] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#f9f9f9] border-transparent"
              }`}
            >
              History
            </Link>
            <Link
              href="#"
              className={`text-[10px] uppercase tracking-widest transition-colors border-b-2 pb-1 ${
                activeLink === "archives"
                  ? "text-[#000000] dark:text-[#f9f9f9] border-[#000000] dark:border-[#f9f9f9]"
                  : "text-[#474747] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#f9f9f9] border-transparent"
              }`}
            >
              Archives
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/upload"
            className="bg-primary text-on-primary px-6 py-2.5 text-[10px] tracking-widest uppercase font-bold hover:bg-primary-container transition-all duration-300 active:scale-[0.98]"
          >
            Analyze a Document
          </Link>
          <button className="text-on-surface p-2 hover:bg-[#e8e8e8] dark:hover:bg-[#3b3b3b] transition-all duration-300">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
