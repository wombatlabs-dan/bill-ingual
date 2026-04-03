"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialSymbol from "@/components/MaterialSymbol";

export default function ActionGenerator() {
  const [activeTab, setActiveTab] = useState<"dispute" | "phone">("dispute");

  const disputeLetter = `To: HomeBridge Mortgage Services, Escrow Services Department
Date: April 3, 2026
Re: Dispute of Escrow Shortage and Payment Increase — Loan #0087-4421-9903

Dear Escrow Services Team,

I am writing to formally dispute the $186.72/month payment increase and the escrow shortage of $1,099.86 identified on my March 1, 2026 statement for the property at 1847 Oakridge Drive, Austin, TX 78745.

We dispute this charge on the following grounds:

1. The escrow shortage stems entirely from an unexpected 18% property tax assessment increase by Travis County (from $285,000 to $336,300). This assessment is being actively contested. We have filed — or intend to file — a protest with Travis County Appraisal District before the May 15, 2026 deadline.

2. Under RESPA Section 10 (12 CFR § 1024.17), if a property tax protest results in a reduced assessment, we have the right to request an updated escrow analysis. We ask that you note this dispute on our account and hold any collection of the shortage pending the outcome of the tax protest.

3. We request a full line-item breakdown of the escrow calculation, including all projected disbursements, per our rights under RESPA Section 10(e).

We are not refusing payment — we will continue making our current monthly payment of $1,800.42 while this dispute is under review. We ask that you delay implementing the increased payment until the tax protest is resolved.

Please respond in writing within 20 business days per RESPA requirements.

Sincerely,
Sarah Chen & Michael Chen
1847 Oakridge Drive, Austin, TX 78745
Loan #0087-4421-9903 | Servicer Acct #: HB-20250315-0874421`;

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
                    Reference: Mortgage Statement
                  </p>
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant">
                  Page 1 of 1
                </span>
              </div>
              <div className="bg-white p-8 md:p-12 shadow-sm border border-black/5 flex-grow min-h-[600px] relative overflow-hidden">
                <div className="space-y-6 opacity-80">
                  <div className="flex justify-between items-start border-b border-black/10 pb-6">
                    <div className="font-bold text-lg">HOMEBRIDGE MORTGAGE SERVICES</div>
                    <div className="text-right text-xs">
                      <p>Statement Date: March 1, 2026</p>
                      <p>Loan #: 0087-4421-9903</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                      Escrow Account Analysis
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-black/5">
                      <span>Property Taxes (Travis County)</span>
                      <span className="font-bold">$7,062.30/yr</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-black/5">
                      <span>Homeowner&apos;s Insurance</span>
                      <span className="font-bold">$1,608.00/yr</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-black/5">
                      <span>FHA Mortgage Insurance (MIP)</span>
                      <span className="font-bold">$138.50/mo</span>
                    </div>
                  </div>
                  <div className="mt-12 p-4 bg-primary/5 border border-primary/10">
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-primary">
                      System Flagged Issue
                    </p>
                    <p className="text-xs italic serif leading-relaxed">
                      &quot;Travis County raised assessed value 18% ($285,000 → $336,300),
                      creating a $1,099.86 escrow shortage. Protest deadline: May 15, 2026.&quot;
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
                      "Loan #0087-4421-9903 and Servicer Acct #HB-20250315-0874421",
                      "Your March 1, 2026 statement (page 1 — the escrow shortage table)",
                      "Travis County's reassessment notice showing $336,300",
                      "Pen and paper — get the rep's name and a call reference number",
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
                      &quot;Hi, I&apos;m calling about an escrow shortage on my account — loan number 0087-4421-9903. I received a statement showing a $186.72 monthly payment increase starting April 2026, and I&apos;d like to formally dispute it. Can you connect me with someone in Escrow Services?&quot;
                    </p>
                  </div>
                </div>

                {/* Talking points */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-3">Key Talking Points</p>
                  <div className="space-y-4">
                    {[
                      {
                        label: "The shortage isn't your fault",
                        script: "\"The shortage was caused entirely by Travis County raising my property tax assessment 18% — from $285,000 to $336,300. I had no way to anticipate that, and I'm actively filing a tax protest before the May 15 deadline.\"",
                      },
                      {
                        label: "Invoke your RESPA rights",
                        script: "\"Under RESPA Section 10, I have the right to request an updated escrow analysis if my tax protest is successful. I'm asking you to note this dispute on my account and hold the payment increase while the protest is pending.\"",
                      },
                      {
                        label: "Request an escrow account inspection",
                        script: "\"Per RESPA Section 10(e), I'd like to formally request a full line-item escrow account inspection — including all projected disbursements and the cushion calculation. Can you initiate that?\"",
                      },
                      {
                        label: "Confirm you're not stopping payments",
                        script: "\"To be clear, I'm not refusing to pay. I'll continue at my current $1,800.42/month. I'm just asking you to delay the increase until the assessment dispute is resolved.\"",
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
                      { q: "\"We can't stop the payment increase\"", a: "\"I understand. Can you escalate this to a supervisor and note my RESPA dispute request on the account? I'll also be following up in writing.\"" },
                      { q: "\"The shortage must be paid\"", a: "\"I'm aware of Option A and Option B. I'm not disputing the method — I'm disputing the underlying assessment. Please note the protest and we can revisit after May 15.\"" },
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
                      "Get the rep's full name and employee ID",
                      "Ask for a call reference or confirmation number",
                      "Confirm they've noted the RESPA dispute on your account",
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
                &quot;The strongest lever here is the tax protest. A successful appeal
                rolls back your escrow requirement and locks in a lower payment
                permanently.&quot;
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