import AnimatedButton from "@/components/AnimatedButton";

export const metadata = {
  title: "Home",
  description: "High-performance websites crafted in Cape Town.",
  openGraph: { images: ["/og/home.png"] }
};

export default function HomePage() {
  return (
    <>
      <section className="relative h-[70vh] overflow-hidden">
        <picture>
          <source media="(max-width: 640px)" srcSet="/img/home/hero-mobile.png" />
          <img
            src="/img/home/hero.png"
            alt="MARKVEIL — editorial hero"
            className="absolute inset-0 h-full w-full object-cover ken-burns"
          />
        </picture>

        {/* Left headline + CTA with panel */}
        <div className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-lg">
          <div className="text-panel text-panel--loose inline-flex flex-col gap-3 reveal-up">
            <h1 className="h1 m-0">Crafted digital experiences</h1>
            <div className="reveal-up-delay">
              <AnimatedButton href="/explore" ghost={true}>View work</AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Skinny welcome strip */}
      <section className="py-3 text-center text-sm tracking-wider uppercase">
        welcome to MARKVEIL
      </section>

      {/* Large image block under strip — now uses feature.png */}
      <section className="relative h-[60vh] overflow-hidden">
        <picture>
          <source media="(max-width: 640px)" srcSet="/img/home/feature-mobile.png" />
          <img
            src="/img/home/feature.png"
            alt="Selected MARKVEIL project showcase"
            className="absolute inset-0 h-full w-full object-cover ken-burns"
          />
        </picture>
      </section>

      {/* Footer text */}
      <footer className="py-10 text-center text-xs text-neutral-500">
        © 2025 MARKVEIL
      </footer>
    </>
  );
}
