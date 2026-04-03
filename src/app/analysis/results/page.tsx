import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialSymbol from "@/components/MaterialSymbol";
import Link from "next/link";

export default function AnalysisResults() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeLink="analysis" />

      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        <section className="mb-24 border-b border-black/5 pb-16">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-outline mb-8">
            THE BOTTOM LINE
          </p>
          <h1 className="serif italic text-5xl md:text-7xl leading-[1.1] max-w-4xl tracking-tight">
            &quot;Your monthly payment is increasing by{" "}
            <span className="text-primary">$244.00</span> effective next billing
            cycle due to a shortfall in your escrow projections.&quot;
          </h1>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h2 className="font-sans text-[10px] uppercase tracking-[0.3em] text-outline mb-10 border-b border-black/5 pb-2">
                TRANSLATION / BREAKDOWN
              </h2>
              <div className="space-y-12">
                <div className="group">
                  <h3 className="font-sans font-bold text-sm tracking-widest uppercase mb-4">
                    ESCROW SHORTAGE
                  </h3>
                  <div className="bg-surface-container-low p-8 border-l-4 border-primary">
                    <p className="text-lg leading-relaxed font-light text-on-surface-variant">
                      Your property taxes rose higher than the bank predicted
                      last year. This creates a{" "}
                      <span className="font-semibold text-primary">
                        &quot;shortage&quot;
                      </span>{" "}
                      because your account doesn&apos;t have enough to cover the
                      upcoming tax bill. The bank is now collecting extra to
                      catch up.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h3 className="font-sans font-bold text-sm tracking-widest uppercase mb-4">
                    ADJUSTED PAYMENT
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-surface-container-high p-8">
                      <span className="block text-[10px] uppercase tracking-widest text-outline mb-2">
                        Previous Payment
                      </span>
                      <span className="text-3xl font-bold tracking-tighter">
                        $1,850.00
                      </span>
                    </div>
                    <div className="bg-primary text-on-primary p-8 shadow-2xl">
                      <span className="block text-[10px] uppercase tracking-widest text-on-primary/60 mb-2">
                        New Payment
                      </span>
                      <span className="text-3xl font-bold tracking-tighter">
                        $2,094.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-64 w-full bg-surface-container overflow-hidden">
              <Image
                alt="Abstract financial architecture"
                fill
                className="object-cover grayscale opacity-40 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9scFR7ur3yW1NxDiky9ihQOhv2TiloBTOkuFRT5JC8T6Up4T-shxeTGcTeyVX4AJvV0v7w5X7V0qyb9m0RXkv-OaGsD4N5u4ZW-6tTYt0HE_NxXJnqCZjx365CYUOwIvycE5cqmxdYIB4FJOUCZVliUObxJsTig-JEpomFikaY5coiWioeFr8ZbNrABWvSvXFMHGhQQeKQzGgSlErQwYBG4rdpafkaNr_0uQwVNfomrGrDfzix2mn5Gl_YhZV-LZy7wwJ9Tmn0Q"
              />
              <div className="absolute inset-0 flex items-center justify-center border border-black/5">
                <div className="bg-white/90 backdrop-blur p-6 text-center border border-black/5">
                  <p className="serif italic text-xl">The Architecture of Equity</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h2 className="font-sans text-[10px] uppercase tracking-[0.3em] text-outline mb-10 border-b border-black/5 pb-2">
                RECOMMENDED ACTIONS
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <span className="serif italic text-4xl text-outline/30 leading-none">
                    01
                  </span>
                  <div className="space-y-4 flex-1">
                    <h4 className="font-bold tracking-tight text-xl uppercase italic">
                      PAY SHORTAGE
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Eliminate the $244 monthly increase by paying the lump sum
                      shortage of $2,928 upfront. This keeps your payment at the
                      current rate.
                    </p>
                    <button className="w-full py-4 border border-primary text-primary font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-on-primary transition-colors">
                      PAY SHORTAGE
                    </button>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="serif italic text-4xl text-outline/30 leading-none">
                    02
                  </span>
                  <div className="space-y-4 flex-1">
                    <h4 className="font-bold tracking-tight text-xl uppercase italic">
                      GET TEMPLATE
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Your tax assessment seems abnormally high for your zip
                      code. Generate a formal appeal letter to contest the
                      valuation.
                    </p>
                    <Link href="/action-generator">
                      <button className="w-full py-4 border border-primary text-primary font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-on-primary transition-colors">
                        GET TEMPLATE
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="serif italic text-4xl text-outline/30 leading-none">
                    03
                  </span>
                  <div className="space-y-4 flex-1">
                    <h4 className="font-bold tracking-tight text-xl uppercase italic">
                      CHECK ELIGIBILITY
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Current market rates are 1.2% lower than your note. You
                      may be eligible for a streamline refinance to offset the
                      tax increase.
                    </p>
                    <button className="w-full py-4 border border-primary text-primary font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-on-primary transition-colors">
                      CHECK ELIGIBILITY
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-black/5">
                <button className="group flex items-center justify-between w-full p-6 bg-surface-container hover:bg-surface-container-high transition-colors">
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