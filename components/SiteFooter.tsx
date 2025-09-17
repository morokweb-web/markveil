"use client";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const path = usePathname();
  if (path === "/") return null; // Home already has a footer
  return (
    <footer className="py-10 text-center text-xs text-neutral-500">
      © 2025 MARKVEIL
    </footer>
  );
}
