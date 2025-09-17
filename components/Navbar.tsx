"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-neutral-950/40">
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="MARKVEIL — Home">
          {/* Light mode: plain wordmark */}
          <img src="/svg/logo/markveil-wordmark.svg" alt="MARKVEIL" className="h-6 w-auto dark:hidden" />

          {/* Dark mode: wordmark inside white glass panel */}
          <span className="hidden dark:inline-flex items-center rounded-xl border border-white/25 bg-white/20 backdrop-blur-sm px-3 py-1 shadow-sm">
            <img src="/svg/logo/markveil-wordmark-inverse.svg" alt="MARKVEIL" className="h-6 w-auto" />
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/explore" className="hover:underline">Explore</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
