"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialSymbol from "@/components/MaterialSymbol";

export default function ActionGenerator() {
  const [activeTab, setActiveTab] = useState<"dispute" | "phone">("dispute");

  const disputeLetter = `To: Billing Department, City Medical Center
Date: January 15, 2024
Re: Formal Dispute of Invoice #9928-112

Dear Billing Administrator,

I am writing to formally dispute the "Facility Fee" and "Radiology Services" charges listed on the statement dated 12/04/2023. 

Upon independent review, I have identified a significant discrepancy in the Emergency Services Facility Fee ($2,450.00). According to Fair Health Consumer data for my zip code, a Level 3 triage facility fee typically ranges between $1,200 and $1,600. Your billing exceeds this benchmark by approximately 42%.

Furthermore, I am requesting a line-item audit for CPT Code 70450 (Radiology), as the listed charge appears to involve unbundled services which should be captured under the primary diagnostic code.

Please suspend collection activity while this dispute is under review. I look forward to receiving a revised statement within 30 days.

Sincerely,
[Your Name]`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeLink="analysis" />

      <main className="pt-24 min-h-screen">
        <div className="max-w-[1600px] mx-auto px-8 py-12">
          <div className="mb-16">
            <h1 className="serif text-5xl md:text-7xl font-light tracking-tight text-primary mb-4 italic">
              Action Generator
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant">
                Resolution Strategy
              </span>
              <div className="h-px w-24 bg-primary/10" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
                Case #2488-DXL
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-black/10">
            <div className="bg-surface-container-low p-8 md:p-12 border-r border-black/10 flex flex-col">
              <div className="mb-8 flex justify-between items-end">
                <div>
                  <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                    Original Document
                  </h2>
                  <p className="serif text-2xl italic">
                    Reference: Billing Statement
                  </p>
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant">
                  Page 1 of 1
                </span>
              </div>
              <div className="bg-white p-8 md:p-12 shadow-sm border border-black/5 flex-grow min-h-[600px] relative overflow-hidden">
                <div className="space-y-6 opacity-80">
                  <div className="flex justify-between items-start border-b border-black/10 pb-6">
                    <div className="font-bold text-lg">CITY MEDICAL CENTER</div>
                    <div className="text-right text-xs">
                      <p>Statement Date: 12/04/2023</p>
                      <p>Account: 9928-112</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                      Summary of Charges
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-black/5">
                      <span>Emergency Services - Facility Fee</span>
                      <span className="font-bold">$2,450.00</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-black/5">
                      <span>Radiology Services</span>
                      <span className="font-bold">$890.00</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-black/5">
                      <span>Lab Processing</span>
                      <span className="font-bold">$412.00</span>
                    </div>
                  </div>
                  <div className="mt-12 p-4 bg-primary/5 border border-primary/10">
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-primary">
                      System Flagged Discrepancy
                    </p>
                    <p className="text-xs italic serif leading-relaxed">
                      &quot;The facility fee of $2,450.00 exceeds regional averages
                      for level 3 triage by 42%. Coding mismatch detected in
                      Radiology Services (CPT 70450).&quot;
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-multiply">
                  <Image
                    alt="subtle premium paper texture"
                    fill
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs6v8C04PlRaCLQ18B51kfcb0G_ZvaVaV8z4Cej_t5qiLAo2ufVRp4ocVzQtro9rD8-sQfJZO9FYUsdDPMeoUeeWavOI-El4JyJaonc-6Gu9prGd1Ll4iZrnNW1QY_7kPyQ2qT0_5ukOuVJYZprlYMiM0mnEPnqyzTu0Kbdo4udRI92R0OFCxeJGZsnRUyrpmpArITMuimE9OKoGe-FadH3k2R-cftfYHEdpCyf1c4zBuAxcGr2kQd17PiadYkTgCsbNBVkAPpLP0"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 flex flex-col">
              <div className="mb-8 flex justify-between items-end">
                <div>
                  <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                    Generated Output
                  </h2>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setActiveTab("dispute")}
                      className={`serif text-2xl italic transition-colors ${
                        activeTab === "dispute"
                          ? "border-b-2 border-primary"
                          : "text-on-surface-variant hover:text-primary"
                      }`}
                    >
                      Dispute Letter
                    </button>
                    <button
                      onClick={() => setActiveTab("phone")}
                      className={`serif text-2xl italic transition-colors ${
                        activeTab === "phone"
                          ? "border-b-2 border-primary"
                          : "text-on-surface-variant hover:text-primary"
                      }`}
                    >
                      Phone Script
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-grow flex flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                    Interactive Editor
                  </span>
                  <MaterialSymbol
                    icon="edit_note"
                    className="text-on-surface-variant text-sm"
                  />
                </div>
                <textarea
                  className="w-full flex-grow p-0 border-0 border-b border-black/10 bg-transparent text-sm leading-relaxed serif resize-none focus:ring-0 mb-8"
                  spellCheck={false}
                  defaultValue={disputeLetter}
                />
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-primary text-on-primary py-4 px-6 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-primary-container transition-all">
                    <MaterialSymbol
                      icon="content_copy"
                      className="text-sm"
                    />
                    COPY TO CLIPBOARD
                  </button>
                  <button className="border border-primary text-primary py-4 px-6 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-surface-container transition-all">
                    <MaterialSymbol
                      icon="picture_as_pdf"
                      className="text-sm"
                    />
                    DOWNLOAD PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="col-span-1 border-t border-black pt-8">
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                Expert Insight
              </h3>
              <p className="serif text-lg italic leading-tight mb-4">
                &quot;The strongest lever here is the Coding Mismatch. Hospitals are
                often required to consolidate these fees.&quot;
              </p>
              <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                — AI Financial Architect
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 relative group overflow-hidden">
              <Image
                alt="high contrast minimalist architectural view with sharp geometric shadows"
                fill
                className="object-cover grayscale brightness-90 hover:brightness-100 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMlU8vBfiCNjU4jbpYPItGIYyr1fXG9q_B1FKjVJ29-kaLj68njIgmY0hh8c-68oU9nuFGmnd9nyf-3KR1V5z_o4C_fCb9kQnWf4DCycio3hhxjP-_3-IPy8sxUnumqJeAP8eAa3dcG_tdAQHCW0BA55cDGqZ9xJvPnnQOQNvYjcjR693nfi75hEO6oOI5alLNpB3uLyKLgMVN6IlVdPuEdGeX9Vc_544bpULYYzRvSxpwNlbhlNnMm83mOfoZEHcYcPnPkKAvsTw"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  Resolution Rate
                </span>
                <div className="text-4xl font-serif italic">84.2%</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}