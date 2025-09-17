import CrossfadeSlider from "@/components/CrossfadeSlider";

export const metadata = {
  title: "About",
  description: "Our story, vision, and mission in Cape Town, South Africa.",
  openGraph: { images: ["/og/about.png"] }
};

const gallery = [
  "/img/services/gallery/gallery-01.png",
  "/img/services/gallery/gallery-02.png",
  "/img/services/gallery/gallery-03.png",
  "/img/services/gallery/gallery-04.png",
  "/img/services/gallery/gallery-05.png",
  "/img/services/gallery/gallery-06.png",
  "/img/services/gallery/gallery-07.png",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[60vh] overflow-hidden">
        <img src="/img/about/story.png" alt="Our story" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-2xl">
          <div className="text-panel text-panel--loose inline-flex flex-col gap-2">
            <h1 className="h1 m-0">Our story</h1>
            <p className="muted max-w-xl m-0">
              We started as an idea no one believed in—“the market is saturated.” We believed in better:
              precision, performance, and taste. Today, MARKVEIL builds digital experiences that feel inevitable.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="h2 mb-4">Cape Town, South Africa</h2>
            <p className="muted">We’re grounded in Cape Town’s craft culture and global in ambition.</p>
            <CrossfadeSlider images={gallery} className="mt-6 h-[50vh]" />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="h3 flex items-center gap-2"><img src="/svg/icons/vision.svg" className="h-6 w-6" alt="" /> Vision</h3>
              <p className="muted">To set the bar for elegant, high-performance web design in Africa.</p>
            </div>
            <div>
              <h3 className="h3 flex items-center gap-2"><img src="/svg/icons/mission.svg" className="h-6 w-6" alt="" /> Mission</h3>
              <p className="muted">Craft sites that are fast, accessible, and beautiful—without compromise.</p>
            </div>
            <div>
              <h3 className="h3 flex items-center gap-2"><img src="/svg/icons/values.svg" className="h-6 w-6" alt="" /> Values</h3>
              <p className="muted">Clarity, reliability, and respect for the user’s time.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
