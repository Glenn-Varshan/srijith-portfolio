import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg px-6 pb-24 pt-40 text-ink md:px-16">
      <section className="max-w-5xl">
        <p className="text-xs tracking-[0.35em] text-ink">
          GET IN TOUCH
        </p>

        <h1 className="mt-5 font-heading text-5xl md:text-7xl">
          Let's connect.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-muted">
          For performance bookings, collaborations, interviews and
          general enquiries, feel free to get in touch.
        </p>
        <div className="mt-10 max-w-xl rounded-3xl bg-ink p-8 text-bg md:p-10">
          <h2 className="font-heading text-3xl">
            General & Booking Enquiries
          </h2>

          <a
            href="mailto:p.srijith2004@gmail.com?subject=Enquiry%20for%20Srijith%20Poosarla"
            className="mt-5 inline-block text-base font-bold text-bg underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-panel"
          >
            p.srijith2004@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
