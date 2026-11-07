import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#292522] px-6 pb-24 pt-40 text-[#eee8dc] md:px-16">
      <section className="max-w-4xl">
        <p className="text-xs tracking-[0.35em] text-[#b99a63]">
          GET IN TOUCH
        </p>

        <h1 className="mt-5 font-serif text-5xl md:text-7xl">
          Let's connect.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-[#b9b4a9]">
          For performance bookings, collaborations, interviews and
          general enquiries, feel free to get in touch.
        </p>
      </section>

      <section className="mt-20 grid gap-16 border-t border-[#454238] pt-12 md:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.3em] text-[#b99a63]">
            EMAIL
          </p>

          <h2 className="mt-5 font-serif text-2xl">
            General & Booking Enquiries
          </h2>

          <a
            href="mailto:p.srijith2004@gmail.com?subject=Enquiry%20for%20Srijith%20Poosarla"
            className="mt-5 inline-block text-sm text-[#b9b4a9] underline decoration-[#b99a63] underline-offset-8 transition-colors hover:text-[#b99a63]"
          >
            p.srijith2004@gmail.com
          </a>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] text-[#b99a63]">
            SOCIAL MEDIA
          </p>

          <h2 className="mt-5 font-serif text-2xl">
            Follow the musical journey
          </h2>

          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-4 text-sm text-[#b9b4a9]">
            <a href= "https://www.instagram.com/srijith_poosarla/" className="hover:text-[#b99a63]">Instagram</a>
            <a href="https://www.youtube.com/@srijithpoosarla" className="hover:text-[#b99a63]">YouTube</a>
            <a href="https://www.facebook.com/srijith.poosarla" className="hover:text-[#b99a63]">Facebook</a>
          </div>
        </div>
      </section>

      <section className="mt-24 border-t border-[#454238] pt-10">
        <p className="text-xs tracking-[0.25em] text-[#b99a63]">
          EXPLORE
        </p>

        <Link
          href="/projects"
          className="mt-5 inline-block font-serif text-2xl transition-colors hover:text-[#b99a63]"
        >
          Discover the projects →
        </Link>
      </section>
    </main>
  );
}
