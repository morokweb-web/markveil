export const metadata = {
  title: "MARKVEIL — Explore: Construction",
  description: "Concept website for a construction company.",
  openGraph: { images: ["/og/explore.png"] }
};

export default function Concept() {
  return (
    <>
      <section className="relative h-[60vh] overflow-hidden">
        <img src="/img/concepts/construction/hero.png" alt="Construction concept" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-xl">
          <div className="text-panel text-panel--loose inline-flex flex-col gap-3">
            <h1 className="h1 m-0">Construction</h1>
            <a href="/contact" className="btn-ghost">Start a project</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-6">
          <img src="/img/concepts/construction/tile-1.png" alt="" className="w-full h-64 object-cover rounded-2xl border border-neutral-200 dark:border-neutral-800" />
          <img src="/img/concepts/construction/tile-2.png" alt="" className="w-full h-64 object-cover rounded-2xl border border-neutral-200 dark:border-neutral-800" />
        </div>
      </section>
    </>
  );
}
