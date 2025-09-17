export const metadata = {
  title: "Web Design & Development",
  description: "Modern, responsive, SEO-friendly sites that convert.",
  openGraph: { images: ["/og/services.png"] }
};

export default function Page() {
  return (
    <>
      <section className="relative h-[50vh] overflow-hidden">
        <img src="/img/services/hero.png" alt="Web Design & Development" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute left-1/2 -translate-x-1/2 top-10 text-center px-4">
          <div className="text-panel text-panel--loose inline-block max-w-3xl">
            <h1 className="h1 mb-0">Web Design & Development</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-3xl px-4 space-y-6">
          <p>At MARKVEIL, we create more than just websites—we build digital experiences that help your brand stand out, connect with your audience, and achieve measurable results.</p>
          <div className="space-y-3">
            <h2 className="h3">What We Do for You</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Custom Website Design</strong> — tailored to your brand’s identity, values, and goals.</li>
              <li><strong>Responsive Development</strong> — flawless performance across desktop, tablet, and mobile.</li>
              <li><strong>Fast & Secure Websites</strong> — clean code, speed optimizations, and modern security.</li>
              <li><strong>SEO-Friendly Structure</strong> — built to perform on search and be discovered.</li>
              <li><strong>E-Commerce Solutions</strong> — from simple stores to full platforms, secure and seamless.</li>
              <li><strong>Website Revamps & Redesigns</strong> — breathe new life into outdated experiences.</li>
              <li><strong>Ongoing Support</strong> — maintenance, updates, and technical support beyond launch.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="h3">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Creative + technical expertise for beautiful and functional outcomes.</li>
              <li>Collaborative process from concept to launch.</li>
              <li>Focus on results—turning visitors into loyal customers.</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <img src="/img/services/gallery/gallery-01.png" className="w-full h-56 object-cover rounded-2xl border border-neutral-200 dark:border-neutral-800" alt="" />
            <img src="/img/services/gallery/gallery-02.png" className="w-full h-56 object-cover rounded-2xl border border-neutral-200 dark:border-neutral-800" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
