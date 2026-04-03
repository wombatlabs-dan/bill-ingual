import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] dark:bg-[#1a1c1c] text-[#000000] dark:text-[#f9f9f9] border-t border-[#c6c6c6]/20 py-12 w-full">
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-serif italic text-lg">Bill-ingual</span>
          <p className="font-sans text-[10px] tracking-widest uppercase text-[#474747] dark:text-[#c6c6c6]">
            © 2024 Bill-ingual. ALL RIGHTS RESERVED.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-8">
          <Link
            href="#"
            className="font-sans text-[10px] tracking-widest uppercase text-[#474747] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#f9f9f9] underline decoration-1 transition-all duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="font-sans text-[10px] tracking-widest uppercase text-[#474747] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#f9f9f9] underline decoration-1 transition-all duration-200"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="font-sans text-[10px] tracking-widest uppercase text-[#474747] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#f9f9f9] underline decoration-1 transition-all duration-200"
          >
            Methodology
          </Link>
          <Link
            href="#"
            className="font-sans text-[10px] tracking-widest uppercase text-[#474747] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#f9f9f9] underline decoration-1 transition-all duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
