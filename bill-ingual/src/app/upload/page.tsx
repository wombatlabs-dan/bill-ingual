"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialSymbol from "@/components/MaterialSymbol";

export default function UploadDocument() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  function detectDoc(filename: string): string {
    const lower = filename.toLowerCase();
    if (lower.includes("medical")) return "medical";
    if (lower.includes("mortgage")) return "mortgage";
    return "mortgage";
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const doc = detectDoc(e.target.files[0].name);
      router.push(`/analysis?doc=${doc}`);
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const doc = detectDoc(e.dataTransfer.files[0].name);
      router.push(`/analysis?doc=${doc}`);
    }
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
        onChange={handleFileChange}
      />

      <main className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <header className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-6">
            Clarity from <span className="italic">complexity.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Upload your confusing financial documents. Bill-ingual extracts
            the truth behind the jargon, giving you a clear view of your
            financial health.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          <div className="lg:col-span-8 group">
            <div
              className="relative aspect-[16/9] md:aspect-[21/9] bg-surface-container-lowest border border-outline-variant/30 flex flex-col items-center justify-center p-12 transition-all hover:bg-surface-container-low cursor-pointer"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAl3UpYVSynjM9d-HMdqfDg-297iS1QfAvh_XX1Qz6HUnVY7LLM0Y8tK6-ZygnSp7LcwMKG5VnVvenHYxYBlB63QJbEg7LKM9qfzYtjxM8N9Lr4TwuQWHeX4GGNUNAe92mckU5b1sZLzYaatQxdUlRpXK5JIXJ-_BhDQKfhb5nEsREpxOv4-BjefJBQH6z0Zq_IXrkacMhSUFVCsqH59nAe31Ag1ChlOZDkOZvNVwwLek4HrbGdu8a0is6cSX90IOegbFUsQuoepwE')] bg-cover bg-center" />
              <MaterialSymbol
                icon="description"
                className="text-5xl mb-6 text-primary"
              />
              <h2 className="serif text-3xl mb-4 text-center">
                Drag and Drop your confusing document here
              </h2>
              <p className="font-body text-xs tracking-widest uppercase text-outline mb-8">
                PDF, JPG, PNG (Max 50MB)
              </p>
              <button
                className="bg-primary text-on-primary px-10 py-4 text-xs font-bold tracking-[0.3em] uppercase hover:bg-primary-container transition-all flex items-center gap-3"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                SELECT FILE
              </button>
            </div>
            <div className="mt-6 flex justify-between items-center px-2">
              <p className="font-body text-[10px] uppercase tracking-widest text-outline">
                SECURE ENCRYPTED UPLOAD
              </p>
              <div className="flex gap-4">
                <MaterialSymbol icon="lock" className="text-sm text-outline" />
                <MaterialSymbol
                  icon="verified_user"
                  className="text-sm text-outline"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12 pt-4">
            <div>
              <h3 className="font-body text-[10px] font-black tracking-[0.2em] uppercase text-primary mb-6">
                WHAT WE DECODE
              </h3>
              <div className="space-y-8">
                <div className="group border-b border-outline-variant/20 pb-4">
                  <span className="serif text-2xl block mb-1">
                    Mortgage Statements
                  </span>
                  <p className="text-on-surface-variant text-sm font-body">
                    Break down principal, interest, and escrow distributions.
                  </p>
                </div>
                <div className="group border-b border-outline-variant/20 pb-4">
                  <span className="serif text-2xl block mb-1">
                    Medical Bills
                  </span>
                  <p className="text-on-surface-variant text-sm font-body">
                    Identify billing errors and unexplained provider codes.
                  </p>
                </div>
                <div className="group border-b border-outline-variant/20 pb-4">
                  <span className="serif text-2xl block mb-1">
                    Insurance EOBs
                  </span>
                  <p className="text-on-surface-variant text-sm font-body">
                    Verify what you truly owe versus what is pending.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-on-primary p-8">
              <MaterialSymbol
                icon="auto_awesome"
                className="text-3xl mb-4"
              />
              <p className="serif text-xl italic mb-4 leading-snug">
                &quot;Bill-ingual found $400 in over-billed insurance premiums in
                under 30 seconds.&quot;
              </p>
              <p className="font-body text-[10px] uppercase tracking-widest opacity-60">
                — Quarterly Report, 2024
              </p>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="font-body text-[10px] font-black tracking-[0.2em] uppercase text-primary block mb-4">
                GALLERY
              </span>
              <h2 className="serif text-4xl md:text-5xl">
                Our Recent Analysis
              </h2>
            </div>
            <a
              href="#"
              className="font-body text-[10px] font-bold tracking-[0.2em] uppercase border-b-2 border-primary pb-1"
            >
              VIEW ALL ARCHIVES
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="bg-surface-container-low aspect-square overflow-hidden relative group">
              <Image
                fill
                className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                alt="Close-up of a complex financial document with architectural redline annotations"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFSWKwvRyvvAf40r-5upP8ZXcgX091wpnSOR7D4yeJ37Fz30M96aHNRpt6odTzoOw-pGneGLJu36WFj_-0J_auL8e3vT6X5NnKl2KF97DJgYplDRhTZFiVialNuZaR_nmnn8MoJUoeoabhODOu42UAGwmH_s1i0cTu0XjY1zUUIKYj_HghXnaUyiNpZ4rQ_qYRUEe--Lu6Z5qIj1rIlN8JmoLHCdTLbhaavqyIn9G1BFVyvRaEyvL7JBZgXxjbqwEYhX5eiKkDui4"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
                <span className="text-white font-body text-[10px] uppercase tracking-[0.2em]">
                  Sample Analysis
                </span>
                <p className="text-white serif text-xl italic">
                  Premium Mortgage Audit
                </p>
              </div>
            </div>

            <div className="bg-surface-container-low aspect-square overflow-hidden relative group">
              <Image
                fill
                className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                alt="High-contrast black and white photograph of a medical invoice"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCypwNI5ELNZvfE1VlN1xyiVFsxXXKwBadingK846KAKVwAvCFVfk-3Qqqp19e6XhZCLNLukoul7Gp4hM8Ri1tzvruqbbskce9qgrGqitUMSNLDHMeiH6M75ZdsAd8fhTgXuNMf9e4FRtrx1rmqwAEiehFUQ92-DvemREZwXNfMwdXwhUBkj9pY1bzOdoFgKnosIDy7tSCsktH9IGRej7n0i3euDoohIYPrMtH4Saho3Dreh6bJoCgTj3fiHSCJfDKiSbZodzLaYGA"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
                <span className="text-white font-body text-[10px] uppercase tracking-[0.2em]">
                  Sample Analysis
                </span>
                <p className="text-white serif text-xl italic">
                  Insurance Claim Review
                </p>
              </div>
            </div>

            <div className="bg-surface-container-low aspect-square overflow-hidden relative group">
              <Image
                fill
                className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                alt="Minimalist layout showing a blurred bank statement"
                src="https://images.unsplash.com/photo-1554224155-1696413575ec?auto=format&fit=crop&w=800&q=80"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
                <span className="text-white font-body text-[10px] uppercase tracking-[0.2em]">
                  Sample Analysis
                </span>
                <p className="text-white serif text-xl italic">
                  Monthly Wealth Digest
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t-4 border-primary pt-16 mb-32 text-center">
          <h2 className="serif text-5xl md:text-7xl mb-8">
            Ready to see the <span className="italic">numbers?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <button
              className="bg-primary text-on-primary px-12 py-5 text-sm font-bold tracking-[0.3em] uppercase hover:bg-primary-container transition-all"
              onClick={() => fileInputRef.current?.click()}
            >
              SCAN DOCUMENT NOW
            </button>
            <button className="text-primary px-12 py-5 text-sm font-bold tracking-[0.3em] uppercase border border-outline-variant/30 hover:bg-surface-container transition-all">
              VIEW DASHBOARD
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
