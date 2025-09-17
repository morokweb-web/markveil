export const metadata = {
  title: "Media & Promotion",
  description: "Campaigns, launch assets, content, ads, and brand consistency.",
  openGraph: { images: ["/og/services.png"] }
};

export default function Page() {
  return (
    <>
      <section className="relative h-[50vh] overflow-hidden">
        <img src="/img/services/hero.png" alt="Media & Promotion" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute left-1/2 -translate-x-1/2 top-10 text-center px-4">
          <div className="text-panel text-panel--loose inline-block max-w-3xl">
            <h1 className="h1 mb-0">Media & Promotion</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-3xl px-4 space-y-6">
          <p>A great website is just the start—your brand also needs to be seen. At MARKVEIL, we create media and promotional campaigns that amplify your presence, spark engagement, and drive results.</p>
          <div className="space-y-3">
            <h2 className="h3">What We Do for You</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Social Media Campaigns</strong> — eye-catching, platform-tailored content.</li>
              <li><strong>Launch Assets</strong> — teasers, product visuals, and event graphics.</li>
              <li><strong>Content Creation</strong> — visuals, copy, and motion graphics.</li>
              <li><strong>Digital Advertising Design</strong> — Google Ads, display banners, sponsored content.</li>
              <li><strong>Consistent Brand Messaging</strong> — clear and cohesive across touchpoints.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="h3">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Creative ideas turned into measurable engagement.</li>
              <li>Launch strategies that make strong first impressions.</li>
              <li>Design + strategy + storytelling = memorable brands.</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <img src="/img/services/gallery/gallery-07.png" className="w-full h-56 object-cover rounded-2xl border border-neutral-200 dark:border-neutral-800" alt="" />
            <img src="/img/services/gallery/gallery-01.png" className="w-full h-56 object-cover rounded-2xl border border-neutral-200 dark:border-neutral-800" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
