import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-neutral-100 dark:bg-neutral-950 border-t border-black/5 dark:border-white/5">
      <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
        © 2024 THE FINANCIAL ARCHITECT. ALL RIGHTS RESERVED.
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <Link
          href="#"
          className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 hover:text-black dark:hover:text-white opacity-80 hover:opacity-100 transition-opacity"
        >
          Terms of Service
        </Link>
        <Link
          href="#"
          className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 hover:text-black dark:hover:text-white opacity-80 hover:opacity-100 transition-opacity"
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 hover:text-black dark:hover:text-white opacity-80 hover:opacity-100 transition-opacity"
        >
          Legal Disclaimer
        </Link>
        <Link
          href="#"
          className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 hover:text-black dark:hover:text-white opacity-80 hover:opacity-100 transition-opacity underline font-bold"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}