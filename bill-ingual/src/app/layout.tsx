import type { Metadata } from "next";
import "./globals.css";
import { Inter, Newsreader } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const newsreader = Newsreader({ 
  subsets: ['latin'], 
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  adjustFontFallback: false,
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Bill-ingual",
  description: "AI-powered financial document translator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, newsreader.variable)}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-background text-on-surface selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}