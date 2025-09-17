import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "Branding, web design, e-commerce, revamps, and media.",
  openGraph: { images: ["/og/services.png"] }
};

const services = [
  { href: "/services/web-design",       title: "Web design & development", copy: "Marketing sites and product UIs built on modern stacks." },
  { href: "/services/revamps-performance", title: "Revamps & performance", copy: "Site makeovers, Core Web Vitals, accessibility." },
  { href: "/services/branding-identity",   title: "Branding & identity",   copy: "Logos, guidelines, and visual systems." },
  { href: "/services/media-promotion",     title: "Media & promotion",     copy: "Launch assets and social campaigns." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[60vh] overflow-hidden">
        <img src="/img/services/hero.png" alt="Services" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute left-1/2 -translate-x-1/2 top-10 text-center px-4">
          <div className="text-panel text-panel--loose inline-block max-w-xl">
            <h1 className="h1 mb-2">Services</h1>
            <p className="muted m-0">Elegance in the details. Performance by default.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-2xl px-4 space-y-4">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="btn-service btn-fly">
              <div className="h3">{s.title}</div>
              <div className="muted mt-1">{s.copy}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
