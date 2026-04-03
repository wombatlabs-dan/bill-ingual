"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialSymbol from "@/components/MaterialSymbol";

const TOTAL_DURATION = 4000; // ms

const steps = [
  {
    num: "01",
    label: "Reading line items...",
    detail: "Extracting principal, interest, and escrow distributions from page 01.",
    completesAt: 0.3,
  },
  {
    num: "02",
    label: "Comparing to tax records...",
    detail: "Cross-referencing municipal assessment with current escrow withholdings.",
    completesAt: 0.65,
  },
  {
    num: "03",
    label: "Identifying discrepancy...",
    detail: "Flagging anomalies and preparing your plain-language breakdown.",
    completesAt: 1.0,
  },
];

export default function AnalysisInProgress() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(elapsed / TOTAL_DURATION, 1);
      setProgress(pct);

      if (pct >= 1) {
        clearInterval(interval);
        setTimeout(() => router.push("/analysis/results"), 300);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [router]);

  const progressPct = Math.round(progress * 100);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeLink="analysis" />

      <main className="min-h-screen pt-32 pb-20 px-8 max-w-7xl mx-auto flex flex-col items-center">
        <header className="w-full mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
            Analyzing your <span className="italic">document...</span>
          </h1>
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
            Sequence ID: ARCH-4492-X
          </p>
        </header>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 relative group">
            <div className="aspect-[4/5] bg-surface-container-low relative overflow-hidden border border-black/5">
              <div className="scanning-line" />
              <Image
                alt="Document under analysis"
                fill
                className="object-cover grayscale opacity-40 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBouKlCwtdJ8gqiCWN9h-5tJSmY1IGalKKqggCqAIB-F6CT-kN-kIZZR_L2w6Kq9ARq_gmWzUz1RY5pwemSzRh2Hg-6T_bICdZbLossDlx-fIrXxgUQd8xsan6NYzGQywHCRut9QoeMPpeSg-N8WVdZXNp4gCdM_l9G0_ZAcRqHo-P_cCyjhBPY9WTzleHv2x6by36VCyhJwnNJVI-hsgoUcWbkaKvQgjuDEZvnvqk-xrE9VEZr4Z6sLtw7VRQBBk6lC5ANiY97Hfk"
              />
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-8 pointer-events-none">
                {[...Array(48)].map((_, i) => (
                  <div
                    key={i}
                    className={`border-r ${i < 42 ? "border-b" : ""} border-black/5`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-between items-end">
              <div className="space-y-1">
                <div className="text-[10px] font-label uppercase tracking-widest font-bold">
                  Progress
                </div>
                <div className="w-64 h-[2px] bg-surface-container-high relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-100"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>
              <div className="text-[10px] font-label uppercase tracking-widest font-bold">
                {progressPct}% Complete
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <section>
              <h2 className="font-label text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-on-surface-variant">
                Active Operations
              </h2>
              <ul className="space-y-6">
                {steps.map((step) => {
                  const done = progress >= step.completesAt;
                  const active =
                    !done &&
                    progress >= (steps[steps.indexOf(step) - 1]?.completesAt ?? 0);

                  return (
                    <li key={step.num} className="flex items-start gap-4 group">
                      <span
                        className={`serif text-2xl leading-none transition-colors ${
                          done || active ? "text-primary" : "text-neutral-300"
                        }`}
                      >
                        {step.num}
                      </span>
                      <div className="flex-1 border-b border-black/5 pb-4">
                        <p
                          className={`font-label text-[11px] font-bold uppercase tracking-widest mb-1 flex justify-between items-center transition-colors ${
                            done || active ? "" : "text-neutral-400"
                          }`}
                        >
                          {step.label}
                          {done && (
                            <MaterialSymbol
                              icon="check_circle"
                              className="text-sm text-primary"
                            />
                          )}
                          {active && (
                            <MaterialSymbol
                              icon="sync"
                              className="text-sm text-primary"
                              filled
                            />
                          )}
                        </p>
                        <p
                          className={`text-[13px] leading-relaxed transition-colors ${
                            done || active
                              ? "text-on-surface-variant"
                              : "text-neutral-400 italic"
                          }`}
                        >
                          {done || active
                            ? step.detail
                            : "Awaiting data from previous sequence."}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
            <div className="bg-surface-container-lowest p-8 border-l-4 border-black">
              <p className="serif italic text-xl leading-snug text-primary">
                &quot;Precision in audit is the foundation of structural wealth.&quot;
              </p>
              <p className="mt-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">
                — The Architect&apos;s Handbook, 1924
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
