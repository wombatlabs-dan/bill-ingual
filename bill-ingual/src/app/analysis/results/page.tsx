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
    bottomLine: (
      <>
        Your monthly payment is increasing by{" "}
        <span className="text-primary">$244.00</span> effective next billing
        cycle due to a shortfall in your escrow projections.
      </>
    ),
    sections: [
      {
        title: "ESCROW SHORTAGE",
        body: (
          <>
            Your property taxes rose higher than the bank predicted last year.
            This creates a{" "}
            <span className="font-semibold text-primary">&quot;shortage&quot;</span>{" "}
            because your account doesn&apos;t have enough to cover the upcoming
            tax bill. The bank is now collecting extra to catch up.
          </>
        ),
      },
      {
        title: "ADJUSTED PAYMENT",
        comparison: { prev: "$1,850.00", next: "$2,094.00" },
      },
    ],
    actions: [
      {
        num: "01",
        heading: "PAY SHORTAGE",
        body: "Eliminate the $244 monthly increase by paying the lump sum shortage of $2,928 upfront. This keeps your payment at the current rate.",
        cta: "PAY SHORTAGE",
        href: null,
      },
      {
        num: "02",
        heading: "GET TEMPLATE",
        body: "Your tax assessment seems abnormally high for your zip code. Generate a formal appeal letter to contest the valuation.",
        cta: "GET TEMPLATE",
        href: "/action-generator",
      },
      {
        num: "03",
        heading: "CHECK ELIGIBILITY",
        body: "Current market rates are 1.2% lower than your note. You may be eligible for a streamline refinance to offset the tax increase.",
        cta: "CHECK ELIGIBILITY",
        href: null,
      },
    ],
  },
  medical: {
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
                TRANSLATION / BREAKDOWN
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
                RECOMMENDED ACTIONS
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
                  onClick={() => router.push("/")}
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