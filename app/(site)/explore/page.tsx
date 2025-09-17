import Link from "next/link";

export const metadata = {
  title: "Explore",
  description: "Concept sites in different styles & industries.",
  openGraph: { images: ["/og/explore.png"] }
};

const concepts = [
  { href: "/explore/construction", label: "Construction", img: "/img/explore/cards/construction.png" },
  { href: "/explore/clothing",     label: "Clothing",     img: "/img/explore/cards/clothing.png" },
  { href: "/explore/gym",          label: "Gym",          img: "/img/explore/cards/gym.png" },
  { href: "/explore/studio",       label: "Studio",       img: "/img/explore/cards/studio.png" },
];

export default function ExplorePage() {
  return (
    <>
      <section className="relative h-[60vh] overflow-hidden">
        <img src="/img/explore/landing.png" alt="Explore MARKVEIL concepts" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-xl">
          <div className="text-panel text-panel--loose inline-block">
            <h1 className="h1 m-0">Explore concepts</h1>
            <p className="muted m-0">Construction · Clothing · Gym · Studio</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {concepts.map((c) => (
            <Link key={c.href} href={c.href} className="group block rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
              <div className="relative h-60">
                <img src={c.img} alt={c.label} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute left-3 top-3">
                  <span className="text-panel text-panel--tight text-xs uppercase tracking-wide">{c.label}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
