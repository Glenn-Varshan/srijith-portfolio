import Image from "next/image";
import Link from "next/link";

const resources = [
  {
    title: "Artist Biography",
    description:
      "A short introduction to Srijith Poosarla and his musical journey.",
    type: "BIOGRAPHY",
    status: "Coming soon",
  },
  {
    title: "Artist Photographs",
    description:
      "High-quality photographs for publications, event promotions and media use.",
    type: "PHOTOGRAPHS",
    status: "Coming soon",
  },
  {
    title: "Press & Media",
    description:
      "Interviews, articles, features and other media appearances.",
    type: "MEDIA",
    status: "Coming soon",
  },
];

export default function PressPage() {
  return (
    <main className="bg-[#151512] text-[#eee8dc]">
      {/* Page heading */}
      <section className="px-6 pb-20 pt-40 md:px-16">
        <p className="mb-5 text-xs tracking-[0.35em] text-[#b99a63]">
          MEDIA & RESOURCES
        </p>

        <h1 className="font-serif text-5xl md:text-7xl">
          Press Kit
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-[#b9b4a9]">
          Resources, photographs and information about mandolin artist
          Srijith Poosarla for media, event organisers and collaborators.
        </p>
      </section>

      {/* Artist image */}
      <section className="px-6 md:px-16">
        <div className="relative h-[350px] overflow-hidden md:h-[520px]">
          <Image
            src="/images/hero.jpg"
            alt="Srijith Poosarla performing"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>

      {/* Resources */}
      <section className="px-6 py-24 md:px-16">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-[#b99a63]">
            DOWNLOADABLE MATERIAL
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Media Resources
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="border border-[#454238] p-8 transition-colors duration-300 hover:border-[#b99a63]"
            >
              <p className="text-xs tracking-[0.25em] text-[#b99a63]">
                {resource.type}
              </p>

              <h3 className="mt-6 font-serif text-2xl">
                {resource.title}
              </h3>

              <p className="mt-4 min-h-20 text-sm leading-7 text-[#b9b4a9]">
                {resource.description}
              </p>

              <p className="mt-8 border-t border-[#454238] pt-5 text-xs tracking-widest text-[#b99a63]">
                {resource.status.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-[#454238] px-6 py-20 text-center md:px-16">
        <p className="text-xs tracking-[0.3em] text-[#b99a63]">
          MEDIA ENQUIRIES
        </p>

        <h2 className="mt-5 font-serif text-3xl md:text-5xl">
          Need more information?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#b9b4a9]">
          For interviews, press enquiries, photographs or collaboration
          requests, please get in touch.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block border border-[#b99a63] px-8 py-4 text-xs tracking-[0.2em] text-[#b99a63] transition-colors hover:bg-[#b99a63] hover:text-[#151512]"
        >
          CONTACT
        </Link>
      </section>
    </main>
  );
}