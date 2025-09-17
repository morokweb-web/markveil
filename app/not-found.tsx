export default function NotFound() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <picture>
        <source media="(max-width: 640px)" srcSet="/img/system/404-mobile.png" />
      <img src="/img/system/404.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="absolute left-6 top-6 sm:left-10 sm:top-10">
        <h1 className="h1">Page not found (404)</h1>
        <p className="muted">The page you’re looking for doesn’t exist.</p>
      </div>
    </section>
  );
}
