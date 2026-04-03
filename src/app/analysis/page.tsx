import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialSymbol from "@/components/MaterialSymbol";

export default function AnalysisInProgress() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeLink="analysis" />

      <main className="min-h-screen pt-32 pb-20 px-8 max-w-7xl mx-auto flex flex-col items-center">
        <header className="w-full mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
            Analyzing your <span className="italic">Mortgage Statement...</span>
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
                  <div className="absolute top-0 left-0 h-full bg-primary w-[65%]" />
                </div>
              </div>
              <div className="text-[10px] font-label uppercase tracking-widest font-bold">
                65% Complete
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <section>
              <h2 className="font-label text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-on-surface-variant">
                Active Operations
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <span className="serif text-2xl leading-none text-primary">
                    01
                  </span>
                  <div className="flex-1 border-b border-black/5 pb-4">
                    <p className="font-label text-[11px] font-bold uppercase tracking-widest mb-1 flex justify-between items-center">
                      Reading line items...
                      <MaterialSymbol
                        icon="check_circle"
                        className="text-sm text-primary"
                      />
                    </p>
                    <p className="text-[13px] text-on-surface-variant leading-relaxed">
                      Extracting principal, interest, and escrow distributions
                      from page 01.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="serif text-2xl leading-none text-primary">
                    02
                  </span>
                  <div className="flex-1 border-b border-black/5 pb-4">
                    <p className="font-label text-[11px] font-bold uppercase tracking-widest mb-1 flex justify-between items-center">
                      Comparing to tax records...
                      <MaterialSymbol
                        icon="sync"
                        className="text-sm text-primary"
                        filled
                      />
                    </p>
                    <p className="text-[13px] text-on-surface-variant leading-relaxed">
                      Cross-referencing municipal assessment with current escrow
                      withholdings.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="serif text-2xl leading-none text-neutral-300">
                    03
                  </span>
                  <div className="flex-1 border-b border-black/5 pb-4">
                    <p className="font-label text-[11px] font-bold uppercase tracking-widest mb-1 text-neutral-400">
                      Identifying discrepancy...
                    </p>
                    <p className="text-[13px] text-neutral-400 leading-relaxed italic">
                      Awaiting data from previous sequence.
                    </p>
                  </div>
                </li>
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