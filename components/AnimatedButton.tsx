"use client";
import Link from "next/link";
import { useState } from "react";

export default function AnimatedButton({ href, children, ghost=false }:{ href:string; children:React.ReactNode; ghost?:boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <Link href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className={`${ghost ? "btn-ghost" : "inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"} transition-transform ${hover ? "scale-[1.03]" : "scale-100"}`}>
      {children}
    </Link>
  );
}
