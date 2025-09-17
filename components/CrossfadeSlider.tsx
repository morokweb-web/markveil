"use client";
import { useEffect, useState } from "react";

export default function CrossfadeSlider({
  images,
  interval = 3000,
  className = "",
}: {
  images: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 ${className}`}
      aria-hidden="true"
    >
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
