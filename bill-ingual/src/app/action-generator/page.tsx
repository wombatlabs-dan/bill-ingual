"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialSymbol from "@/components/MaterialSymbol";

export default function ActionGenerator() {
  const [activeTab, setActiveTab] = useState<"dispute" | "phone">("dispute");

  const disputeLetter = `To: Austin Regional Medical Center, Patient Billing Department
Date: April 3, 2026
Re: Formal Dispute of Duplicate Charge — Account #MED-2026-00341

Dear Billing Department,

I am writing to formally dispute a duplicate charge on my bill dated March 15, 2026 for services rendered on February 28, 2026 at Austin Regional Medical Center.

My bill (Account #MED-2026-00341) includes CPT code 99213 (Office Visit, Established Patient) listed twice — on lines 4 and 7 — totaling $312.00 in duplicate charges. My insurance EOB (Reference #BCBS-2026-88214) confirms that the first instance of CPT 99213 was paid in full at $312.00. The second charge is a billing error.

I dispute this charge on the following grounds:

1. Duplicate billing for the same CPT code on the same date of service is a violation of standard medical billing practice and may constitute insurance fraud under 18 U.S.C. § 1347.

2. My Explanation of Benefits from Blue Cross Blue Shield (attached) confirms only one instance of CPT 99213 was authorized and paid for the February 28, 2026 visit.

3. Under the No Surprises Act and standard patient billing rights, I am entitled to an itemized bill and a correction of any billing errors identified.

I am requesting:
— Immediate removal of the duplicate CPT 99213 charge ($312.00)
— A corrected itemized statement reflecting the accurate balance owed
— Written confirmation of the adjustment within 30 days

Please contact me at the information below to confirm receipt of this dispute.

Sincerely,
Sarah Chen
4201 Congress Ave, Austin, TX 78701
Account #MED-2026-00341 | Insurance ID: BCBS-TX-4421839`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeLink="analysis" />

      <main className="pt-24 min-h-screen">
        <div className="max-w-[1600px] mx-auto px-8 py-12">
          <div className="mb-16">
            <Link
              href="/analysis/results?doc=medical"
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors mb-8"
            >
              <MaterialSymbol icon="arrow_back" className="text-sm" />
              Back to Results
            </Link>
            <h1 className="serif text-5xl md:text-7xl font-light tracking-tight text-primary mb-4 italic">
              Resolution Blueprint
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant">
                Strategic Framework
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
                    Reference: Medical Bill
                  </p>
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant">
                  Page 1 of 1
                </span>
              </div>
              <div className="bg-white p-8 md:p-12 shadow-sm border border-black/5 flex-grow min-h-[600px] relative overflow-hidden">
                <div className="space-y-6 opacity-80">
                  <div className="flex justify-between items-start border-b border-black/10 pb-6">
                    <div className="font-bold text-lg">AUSTIN REGIONAL MEDICAL CENTER</div>
                    <div className="text-right text-xs">
                      <p>Statement Date: March 15, 2026</p>
                      <p>Account #: MED-2026-00341</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                      Itemized Charges — Visit: Feb 28, 2026
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-black/5">
                      <span>99213 — Office Visit, Est. Patient</span>
                      <span className="font-bold">$312.00</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-black/5">
                      <span>85025 — Complete Blood Count (CBC)</span>
                      <span className="font-bold">$47.00</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-black/5 text-primary font-semibold">
                      <span>99213 — Office Visit, Est. Patient</span>
                      <span className="font-bold">$312.00</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-black/5">
                      <span>36415 — Routine Venipuncture</span>
                      <span className="font-bold">$28.00</span>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-primary/5 border border-primary/10">
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-primary">
                      System Flagged Issue
                    </p>
                    <p className="text-xs italic serif leading-relaxed">
                      &quot;CPT 99213 appears twice on the same date of service.
                      Insurance EOB #BCBS-2026-88214 confirms this code was paid in full ($312.00). Second charge is a duplicate billing error.&quot;
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
              {activeTab === "dispute" ? (
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
                    <MaterialSymbol icon="content_copy" className="text-sm" />
                    COPY TO CLIPBOARD
                  </button>
                  <button className="border border-primary text-primary py-4 px-6 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-surface-container transition-all">
                    <MaterialSymbol icon="picture_as_pdf" className="text-sm" />
                    DOWNLOAD PDF
                  </button>
                </div>
              </div>
              ) : (
              <div className="flex-grow flex flex-col overflow-y-auto space-y-8">

                {/* Before you call */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-3">Before You Call</p>
                  <div className="bg-surface-container-low p-6 space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-3">Have these ready:</p>
                    {[
                      "Account #MED-2026-00341 and your date of service: February 28, 2026",
                      "Your itemized bill showing CPT 99213 on lines 4 and 7",
                      "Insurance EOB #BCBS-2026-88214 showing CPT 99213 paid in full",
                      "Pen and paper — get the rep's name and a case reference number",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <span className="serif italic text-outline/60 leading-none mt-0.5">{i + 1}.</span>
                        <span className="text-on-surface-variant leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Opening */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-3">Opening</p>
                  <div className="border-l-4 border-primary p-5 bg-surface-container-lowest">
                    <p className="text-sm leading-relaxed serif italic">
                      &quot;Hi, I&apos;m calling about a billing error on account number MED-2026-00341. My bill from March 15, 2026 has a duplicate charge — CPT code 99213 appears twice for the same visit on February 28th. My insurance already paid that code in full. I&apos;d like to dispute the duplicate charge and get a corrected statement. Can you connect me with someone in patient billing?&quot;
                    </p>
                  </div>
                </div>

                {/* Talking points */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-3">Key Talking Points</p>
                  <div className="space-y-4">
                    {[
                      {
                        label: "Identify the exact duplicate",
                        script: "\"CPT 99213 appears on line 4 and again on line 7 of my itemized bill — both for February 28, 2026. The same CPT code cannot be billed twice for the same visit. This is a duplicate charge.\"",
                      },
                      {
                        label: "Reference your EOB",
                        script: "\"My Explanation of Benefits from Blue Cross Blue Shield, reference number BCBS-2026-88214, confirms that CPT 99213 was authorized and paid in full at $312.00. I have this document in front of me.\"",
                      },
                      {
                        label: "Cite your rights",
                        script: "\"Under the No Surprises Act, I'm entitled to an accurate itemized bill. I'm formally requesting that the duplicate $312.00 charge be removed and that I receive a corrected statement in writing within 30 days.\"",
                      },
                      {
                        label: "Clarify what you owe",
                        script: "\"I'm not disputing any other charges on this bill. I'm happy to pay the corrected balance once the duplicate CPT 99213 is removed. I just need a corrected statement first.\"",
                      },
                    ].map((point, i) => (
                      <div key={i} className="border border-black/10 p-5">
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-2">{point.label}</p>
                        <p className="text-sm serif italic leading-relaxed text-on-surface-variant">{point.script}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* If they push back */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-3">If They Push Back</p>
                  <div className="space-y-3">
                    {[
                      { q: "\"Both charges are valid\"", a: "\"Can you explain how the same CPT code for the same patient on the same date of service can be billed twice? I have my EOB showing it was already paid. I'd like to escalate this to a billing supervisor.\"" },
                      { q: "\"You still owe the balance\"", a: "\"I understand there may be other charges. I'm only disputing the duplicate CPT 99213 line. Once I receive a corrected itemized statement, I'll pay the remaining balance promptly.\"" },
                    ].map((item, i) => (
                      <div key={i} className="bg-surface-container-low p-5">
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-outline">They say:</p>
                        <p className="text-sm serif italic mb-3">{item.q}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1">You say:</p>
                        <p className="text-sm serif italic text-on-surface-variant">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Closing */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-3">Before You Hang Up</p>
                  <div className="bg-primary text-on-primary p-6 space-y-2">
                    {[
                      "Get the rep's full name and direct extension",
                      "Ask for a case or reference number for this dispute",
                      "Confirm a corrected statement will be mailed or emailed within 30 days",
                      "Follow up with the written dispute letter within 24 hours",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <span className="serif italic opacity-60 leading-none mt-0.5">{i + 1}.</span>
                        <span className="leading-relaxed opacity-90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              )}
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="col-span-1 border-t border-black pt-8">
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                Expert Insight
              </h3>
              <p className="serif text-lg italic leading-tight mb-4">
                &quot;Duplicate CPT codes on the same date of service are one of the
                most common — and most winnable — medical billing disputes.
                Providers correct these in over 90% of cases when presented with
                an EOB.&quot;
              </p>
              <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                — Bill-ingual Analysis
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