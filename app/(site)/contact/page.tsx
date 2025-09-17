import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch — enquiries and appointments.",
  openGraph: { images: ["/og/contact.png"] }
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-[55vh] overflow-hidden">
        <img src="/img/contact/backdrop.png" alt="Contact backdrop" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-2xl">
          <div className="text-panel text-panel--loose inline-flex flex-col gap-2">
            <h1 className="h1 m-0">Contact</h1>
            <p className="muted m-0">
              Our team is available Monday to Friday from 10am to 7pm (Stellenbosch Time) to answer your enquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="h3 mb-4">Approach</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
