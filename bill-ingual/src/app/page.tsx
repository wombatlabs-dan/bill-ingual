"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HeroLanding() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex flex-col justify-center px-6 md:px-12 py-24 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-surface-container-highest text-[10px] font-bold tracking-[0.2em] uppercase">
                  Intelligence First Analysis
                </span>
                <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-black tracking-tighter text-primary">
                  Financial Clarity,<br />
                  <span className="italic font-normal">Curated by Intelligence.</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
                Upload your most complex financial documents. Bill-ingual extracts the truth behind the jargon, delivering a plain-language breakdown and actionable next steps.
              </p>
              <div className="flex flex-wrap gap-8 items-center pt-4">
                <Link href="/upload" className="bg-primary text-on-primary px-10 py-5 text-sm tracking-widest uppercase font-extrabold hover:bg-primary-container transition-all duration-300 active:scale-[0.98] text-center">
                  Analyze a Document
                </Link>
                <Link href="#" className="text-sm font-bold tracking-widest uppercase border-b-2 border-primary pb-1 hover:border-outline transition-colors">
                  View Sample Analysis
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale brightness-95 contrast-110"
                  alt="Minimalist architectural photograph of clean concrete angles and dramatic shadows, symbolizing structural clarity and financial foundations"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2o0sXvxovPC0adoGbxUFkzbzaLShCc1CDsBO49YqM6VOZwxzyqr7NRRDIA_cwWID02aXfuXkTXgVfKORNBh6jc-cJfoCuDfJ4acb-FX5mkBEe2iH4Kos2HATMY6cnolaBY00ldE5WoCatTB0NQdJGn26Zu6adhZcf9X2IH00dhA9Wx-llhqvZgNyU59DHqTPwVPjxzSwvLSy91Q9nt8vmYSNZN3wT6e3YejC8GxUThBDDgjs3mQjKY58V55ZleXJVb5p_StDV-0"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface p-8 max-w-[280px] shadow-2xl border border-outline-variant/10">
                <p className="font-headline italic text-2xl mb-4">&quot;The strongest lever for the modern consumer.&quot;</p>
                <p className="text-[10px] tracking-widest uppercase font-bold text-on-surface-variant">— Global Finance Review</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Three-Layer Approach */}
        <section className="py-32 px-6 md:px-12 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-24 space-y-4">
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-on-surface-variant">
                The Methodology
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The Three-Layer Approach</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20">
              <div className="p-12 md:p-16 bg-surface hover:bg-surface-container-lowest transition-colors group">
                <span className="font-headline text-5xl md:text-7xl italic text-outline-variant mb-12 block group-hover:text-primary transition-colors">01</span>
                <h3 className="text-2xl font-bold mb-6">What it says.</h3>
                <p className="text-on-surface-variant leading-relaxed">Absolute transparency. We translate dense legal and financial terminology into a narrative format that anyone can understand instantly.</p>
              </div>
              <div className="p-12 md:p-16 bg-surface hover:bg-surface-container-lowest transition-colors group border-y md:border-y-0 md:border-x border-outline-variant/20">
                <span className="font-headline text-5xl md:text-7xl italic text-outline-variant mb-12 block group-hover:text-primary transition-colors">02</span>
                <h3 className="text-2xl font-bold mb-6">Why it matters.</h3>
                <p className="text-on-surface-variant leading-relaxed">Contextual analysis. Our intelligence engines cross-reference market data to tell you how this document impacts your net worth and liabilities.</p>
              </div>
              <div className="p-12 md:p-16 bg-surface hover:bg-surface-container-lowest transition-colors group">
                <span className="font-headline text-5xl md:text-7xl italic text-outline-variant mb-12 block group-hover:text-primary transition-colors">03</span>
                <h3 className="text-2xl font-bold mb-6">What to do.</h3>
                <p className="text-on-surface-variant leading-relaxed">Tactical execution. We provide a prioritized list of actions, from dispute letters to refinancing opportunities, tailored to your specific case.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-32 px-6 md:px-12 bg-primary text-on-primary">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
              <div className="max-w-2xl space-y-6">
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-on-primary-fixed-variant">Utility & Versatility</span>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight">Structured for every financial complexity.</h2>
              </div>
              <div className="hidden lg:block pb-4">
                <span className="material-symbols-outlined text-6xl opacity-20">architecture</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="space-y-8">
                <div className="aspect-video bg-primary-container relative overflow-hidden">
                  <img className="w-full h-full object-cover opacity-60 grayscale" alt="Close-up of modern architectural blueprints with high-contrast lighting and technical details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdfQGMLryTMgSnA_oP9Rd1bKam5qIWdiY_8wMGoyY2RMJMcuFRF_o9sphKOwOagiyWGbc3hx0xY7_RdTqf_sI4Z6CWbbt9Y4M0pKudSLr8Whfk-tNDnCQmfm6J5dlgS3vuBOm8nC7raYDhBMVn_IqRpsuawqlqoy91PCkMNH60Dx9JlUc-VGoScSM5RjyMgUaLa_Zgb146DXC5ZwoeudcKUlB5tAKbQc8z0lxG24z4v_Amu_wdPUERzXN_1chQWRGAql2hr48gxhU"/>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm tracking-widest uppercase font-black">Mortgage Statements</h4>
                  <p className="text-on-primary/60 leading-relaxed text-sm">Decode escrow adjustments, principal allocation, and interest rate benchmarks without calling a broker.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="aspect-video bg-primary-container relative overflow-hidden">
                  <img className="w-full h-full object-cover opacity-60 grayscale" alt="Abstract composition of glass and steel skyscraper reflecting the sky, sharp lines and professional aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM47r6QlO3Osz4zqNAlldmboSzvGkpf8-QTFyawpa6V8I2UsctnxoEZp77hvPY4JoB_n88CqnT-E_PeIBQU2WzoBM-IJNKqzNoUsFWrtCFmj0Pot_AE5zKJtGCGeVBHYNWlnz28vVpQatu-ihd2dWSRnLr87PetzHqoCeefVbM2cTNvgtIUnBWjjEFkj8V41q1PsKBPYR1yrQy0JiBkV80uUo3Kku4I3nq06Y0fWzt9G7AiU97aBGLjFMBfKca8jQrtnWgDMc4ZjY"/>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm tracking-widest uppercase font-black">Medical Bills</h4>
                  <p className="text-on-primary/60 leading-relaxed text-sm">Automated CPT code verification to identify billing errors and inflated provider charges before you pay a cent.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="aspect-video bg-primary-container relative overflow-hidden">
                  <img className="w-full h-full object-cover opacity-60 grayscale" alt="Dark dramatic image of a high-end fountain pen resting on a heavy paper document with rich ink textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv6ZQmjW1GpcZCHXablE2Sl7azqTizF7Hj8LH1Rn46Z_FFuEzXTa_XnuDFoY5TGjkQEFD7bnt_FR2NLGW0r_ZOaTTQAgUbrPGb6wI_Cbv_sxDtwT7sWjCZGxchtkc6D4qeg5gE05UPcO3iHpevXoUNjENsWd1CByhoWn43_iALxZDFbeX9BnOav28i1N6F4VibOCAqKQ92ECmobfYnGQy508RZFi2t45yipJyApqIy-AMMBuvPM2G3zrUchkzPuIuuh9E-B7kqQ5E"/>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm tracking-widest uppercase font-black">Insurance EOBs</h4>
                  <p className="text-on-primary/60 leading-relaxed text-sm">Understand your Explanation of Benefits. Map deductibles and out-of-pocket maximums with total precision.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Pull Quote */}
        <section className="py-48 px-6 md:px-12 bg-surface">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <span className="material-symbols-outlined text-4xl text-primary">format_quote</span>
            <blockquote className="text-4xl md:text-6xl font-headline italic leading-tight text-on-surface">
              &quot;Bill-ingual isn&apos;t just a tool; it&apos;s the intellectual barrier between the consumer and the complexity of the financial industry.&quot;
            </blockquote>
            <div className="pt-8">
              <div className="h-px w-24 bg-primary mx-auto mb-8"></div>
              <p className="text-xs tracking-[0.4em] uppercase font-extrabold">Executive Insight Quarterly</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
