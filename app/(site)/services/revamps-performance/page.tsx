export const metadata = {
  title: "Revamps & Performance",
  description: "Makeovers, performance, Core Web Vitals, accessibility, and mobile.",
  openGraph: { images: ["/og/services.png"] }
};

export default function Page() {
  return (
    <>
      <section className="relative h-[50vh] overflow-hidden">
        <img src="/img/services/hero.png" alt="Revamps & Performance" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute left-1/2 -translate-x-1/2 top-10 text-center px-4">
          <div className="text-panel text-panel--loose inline-block max-w-3xl">
            <h1 className="h1 mb-0">Revamps & Performance</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-3xl px-4 space-y-6">
          <p>Your website should never feel outdated, slow, or inaccessible. At MARKVEIL, we specialize in revamping existing websites to give them a fresh look and powerful performance boost—turning an underperforming site into a high-impact digital asset.</p>
          <div className="space-y-3">
            <h2 className="h3">What We Do for You</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Complete Site Makeovers</strong> — redesign with modern, engaging style.</li>
              <li><strong>Performance Optimization</strong> — lightning-fast load times and seamless browsing.</li>
              <li><strong>Core Web Vitals Enhancement</strong> — LCP, INP, CLS improvements.</li>
              <li><strong>Accessibility Upgrades</strong> — align with WCAG for inclusive experiences.</li>
              <li><strong>Mobile Responsiveness</strong> — consistent, optimized across devices.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="h3">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We transform tired websites into high-performing platforms.</li>
              <li>Technical depth: looks better and works better.</li>
              <li>Speed, accessibility, UX—keeps you competitive.</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <img src="/img/services/gallery/gallery-03.png" className="w-full h-56 object-cover rounded-2xl border border-neutral-200 dark:border-neutral-800" alt="" />
            <img src="/img/services/gallery/gallery-04.png" className="w-full h-56 object-cover rounded-2xl border border-neutral-200 dark:border-neutral-800" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
