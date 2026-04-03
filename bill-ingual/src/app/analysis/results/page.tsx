"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialSymbol from "@/components/MaterialSymbol";
import Link from "next/link";

const CONTENT = {
  mortgage: {
    labels: {
      breakdown: "EXPLAINER",
      actions: "YOUR OPTIONS",
    },
    bottomLine: (
      <>
        Your monthly payment is increasing by{" "}
        <span className="text-primary">$187.00</span> because your home&apos;s
        value was reassessed, raising your property taxes.
      </>
    ),
    sections: [
      {
        title: "WHAT DOES THIS SAY?",
        body: (
          <>
            Escrow is a savings account your mortgage lender manages on your
            behalf. Each month, part of your payment goes into this account, and
            your lender uses it to pay your property taxes and homeowner&apos;s
            insurance when they come due. Think of it like a piggy bank your
            lender holds so you&apos;re never hit with a big lump-sum tax or
            insurance bill.
          </>
        ),
      },
      {
        title: "WHY SHOULD I CARE?",
        body: (
          <>
            Your monthly payment increased $187 (from $1,800.42 to $1,987.14)
            because Travis County reassessed your home&apos;s value from $285,000 to
            $336,300 — an 18% jump. That raised your annual property tax by
            $1,077. Your insurance also went up slightly. Because your escrow
            account didn&apos;t have enough to cover the higher amounts, there&apos;s a
            $347 shortage your lender needs to collect. This is normal — it
            happens to most homeowners when property values change.
          </>
        ),
      },
      {
        title: "PAYMENT COMPARISON",
        comparison: { prev: "$1,800.42", next: "$1,987.14" },
      },
    ],
    actions: [
      {
        num: "01",
        heading: "OPTION A",
        body: "Pay the $347 shortage as a lump sum now. Your new monthly payment drops to $1,958.",
        cta: "PAY LUMP SUM",
        href: null,
      },
      {
        num: "02",
        heading: "OPTION B (RECOMMENDED)",
        body: "Spread the shortage over 12 months at $29/month. Your new monthly payment is $1,987. This is the easiest option — no upfront cost, and the monthly difference is small.",
        cta: "SELECT OPTION B",
        href: null,
      },
      {
        num: "03",
        heading: "PROTEST TAXES",
        body: "You can file a free property tax protest with Travis County by May 15. Protests succeed about 50% of the time in Texas. If your reassessment gets reduced, your payment could come back down.",
        cta: "VIEW PROTEST GUIDE",
        href: null,
      },
    ],
  },
  medical: {
    labels: {
      breakdown: "TRANSLATION / BREAKDOWN",
      actions: "RECOMMENDED ACTIONS",
    },
    bottomLine: (
      <>
        You were overbilled by{" "}
        <span className="text-primary">$312.00</span> — a duplicate procedure
        code your insurance already paid in full.
      </>
    ),
    sections: [
      {
        title: "DUPLICATE BILLING",
        body: (
          <>
            CPT code 99213 appears twice on this bill. Your insurer paid the
            first charge; the second is a{" "}
            <span className="font-semibold text-primary">billing error</span>.
            You are not responsible for this amount and can formally dispute it.
          </>
        ),
      },
      {
        title: "AMOUNT BREAKDOWN",
        comparison: { prev: "Billed: $624.00", next: "You owe: $0.00" },
      },
    ],
    actions: [
      {
        num: "01",
        heading: "DISPUTE LETTER",
        body: "Generate a pre-filled dispute letter citing the duplicate CPT code and your insurer's EOB reference number to send to the billing department.",
        cta: "GET DISPUTE LETTER",
        href: "/action-generator",
      },
      {
        num: "02",
        heading: "CALL SCRIPT",
        body: "Use this step-by-step script when calling the provider's billing line. Ask for a corrected claim (CMS-1500) and a written confirmation of the adjustment.",
        cta: "GET CALL SCRIPT",
        href: "/action-generator",
      },
      {
        num: "03",
        heading: "CHECK EOB",
        body: "Your Explanation of Benefits confirms this charge was paid at 100%. Keep this document — attach it to your dispute as supporting evidence.",
        cta: "VIEW CHECKLIST",
        href: null,
      },
    ],
  },
};

function AnalysisResultsInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const docType = (searchParams.get("doc") ?? "mortgage") as keyof typeof CONTENT;
  const content = CONTENT[docType] ?? CONTENT.mortgage;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeLink="analysis" />

      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        <section className="mb-24 border-b border-black/5 pb-16">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-outline mb-8">
            THE BOTTOM LINE
          </p>
          <h1 className="serif italic text-5xl md:text-7xl leading-[1.1] max-w-4xl tracking-tight">
            &quot;{content.bottomLine}&quot;
          </h1>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h2 className="font-sans text-[10px] uppercase tracking-[0.3em] text-outline mb-10 border-b border-black/5 pb-2">
                {content.labels.breakdown}
              </h2>
              <div className="space-y-12">
                {content.sections.map((section) => (
                  <div key={section.title} className="group">
                    <h3 className="font-sans font-bold text-sm tracking-widest uppercase mb-4">
                      {section.title}
                    </h3>
                    {"body" in section ? (
                      <div className="bg-surface-container-low p-8 border-l-4 border-primary">
                        <p className="text-lg leading-relaxed font-light text-on-surface-variant">
                          {section.body}
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-surface-container-high p-8">
                          <span className="block text-[10px] uppercase tracking-widest text-outline mb-2">
                            Before
                          </span>
                          <span className="text-3xl font-bold tracking-tighter">
                            {section.comparison!.prev}
                          </span>
                        </div>
                        <div className="bg-primary text-on-primary p-8 shadow-2xl">
                          <span className="block text-[10px] uppercase tracking-widest text-on-primary/60 mb-2">
                            After
                          </span>
                          <span className="text-3xl font-bold tracking-tighter">
                            {section.comparison!.next}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h2 className="font-sans text-[10px] uppercase tracking-[0.3em] text-outline mb-10 border-b border-black/5 pb-2">
                {content.labels.actions}
              </h2>
              <div className="space-y-12">
                {content.actions.map((action) => (
                  <div key={action.num} className="flex gap-6">
                    <span className="serif italic text-4xl text-outline/30 leading-none">
                      {action.num}
                    </span>
                    <div className="space-y-4 flex-1">
                      <h4 className="font-bold tracking-tight text-xl uppercase italic">
                        {action.heading}
                      </h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {action.body}
                      </p>
                      {action.href ? (
                        <Link href={action.href}>
                          <button className="w-full py-4 border border-primary text-primary font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-on-primary transition-colors">
                            {action.cta}
                          </button>
                        </Link>
                      ) : (
                        <button className="w-full py-4 border border-primary text-primary font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-on-primary transition-colors">
                          {action.cta}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-16 border-t border-black/5">
                <button
                  onClick={() => router.push("/upload")}
                  className="group flex items-center justify-between w-full p-6 bg-surface-container hover:bg-surface-container-high transition-colors"
                >
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em]">
                    SCAN ANOTHER DOCUMENT
                  </span>
                  <MaterialSymbol
                    icon="arrow_forward"
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function AnalysisResults() {
  return (
    <Suspense>
      <AnalysisResultsInner />
    </Suspense>
  );
}