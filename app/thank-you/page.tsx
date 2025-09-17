export const metadata = { title: "Thank you", openGraph: { images: ["/og/home.png"] } };
export default function ThankYou() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <picture>
        <source media="(max-width: 640px)" srcSet="/img/system/thank-you-mobile.png" />
        <img src="/img/system/thank-you.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-md">
        <h1 className="h1 mb-3">Thank you</h1>
        <p className="muted">We’ll be in touch shortly.</p>
      </div>
    </section>
  );
}
