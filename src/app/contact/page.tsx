import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 pb-65 pt-16 text-center bg-[#292522] px-6 pb-24 pt-40 text-[#eee8dc] md:px-16">
      <section className="max-w-5xl">
        <h1 className="mt-5 font-serif text-5xl md:text-7xl">
          Let's connect.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-[#b9b4a9]">
          For performance bookings, collaborations, interviews and
          general enquiries, feel free to get in touch.
        </p>
        <div>
          <h2 className="mt-10 font-serif text-2xl">
            General & Booking Enquiries
          </h2>
          <a
            href="mailto:p.srijith2004@gmail.com?subject=Enquiry%20for%20Srijith%20Poosarla"
            className="text-lg font-medium tracking-wide text-[#b9b4a9] transition-colors hover:text-[#b9b4a9] md:text-xl"
          >
            p.srijith2004@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
