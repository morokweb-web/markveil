export const metadata = {
  title: "MARKVEIL — Explore: Clothing",
  description: "Concept website for a clothing brand.",
  openGraph: { images: ["/og/explore.png"] }
};

export default function Concept() {
  return (
    <>
      <section className="relative h-[60vh] overflow-hidden">
        <img src="/img/concepts/clothing/hero.png" alt="Clothing concept" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-xl">
          <div className="text-panel text-panel--loose inline-flex flex-col gap-3">
            <h1 className="h1 m-0">Clothing</h1>
            <a href="/contact" className="btn-ghost">Start a project</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-6">
          <img src="/img/concepts/clothing/tile-1.png" alt="" className="w-full h-64 object-cover rounded-2xl border border-neutral-200 dark:border-neutral-800" />
          <img src="/img/concepts/clothing/tile-2.png" alt="" className="w-full h-64 object-cover rounded-2xl border border-neutral-200 dark:border-neutral-800" />
        </div>
      </section>
    </>
  );
}
