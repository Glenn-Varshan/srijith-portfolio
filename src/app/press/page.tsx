
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Download,
  FileText,
  Images,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const galleryImages = [
  {
    src: "/press/gallery/photo-1.png",
    alt: "Srijith Poosarla - Artist portrait",
    caption: "Artist Portrait",
  },
  {
    src: "/press/gallery/photo-2.png",
    alt: "Srijith Poosarla performing",
    caption: "Live Performance",
  },
  {
    src: "/press/gallery/photo-3.png",
    alt: "Srijith Poosarla with mandolin",
    caption: "Artist Photograph",
  },
  {
    src: "/press/gallery/photo-4.png",
    alt: "Srijith Poosarla at a concert",
    caption: "On Stage",
  },
  {
    src: "/press/gallery/photo-5.png",
    alt: "Srijith Poosarla professional photograph",
    caption: "Behind the Music",
  },
];

const downloads = [
  {
    title: "Artist Resume",
    description: "Professional background and artistic experience.",
    format: "PDF DOCUMENT",
    href: "/press/srijith-resume.pdf",
    icon: FileText,
  },
  {
    title: "Professional Photographs",
    description: "High-resolution photographs for media and publicity.",
    format: "ZIP ARCHIVE",
    href: "/press/professional-photos.zip",
    icon: Images,
  },
  {
    title: "Technical Rider",
    description: "Stage setup, audio equipment and technical requirements.",
    format: "PDF DOCUMENT",
    href: "/press/technical-rider.pdf",
    icon: FileText,
  },
];

export default function PressPage() {
  const [activeImage, setActiveImage] = useState(0);

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setActiveImage((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className="bg-[#292522] text-[#eee8dc]">

      {/* PAGE INTRO */}
      <section className="px-6 pb-16 pt-40 md:px-16">
        <p className="mb-5 text-xs tracking-[0.35em] text-[#b99a63]">
          MEDIA & RESOURCES
        </p>

        <h1 className="font-serif text-5xl md:text-7xl">
          Press Kit
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-[#b9b4a9]">
          Official information and media resources for Srijith
          Poosarla. For media publications, concert organisers,
          collaborators and event enquiries.
        </p>

        {/* SECTION NAVIGATION */}
        <div className="mt-12 flex flex-wrap gap-8 border-b border-[#454238]">
          <a
            href="#biography"
            className="border-b-2 border-[#b99a63] pb-4 text-xs tracking-[0.2em] text-[#b99a63]"
          >
            BIOGRAPHY & DOWNLOADS
          </a>

          <a
            href="#gallery"
            className="pb-4 text-xs tracking-[0.2em] text-[#b9b4a9] transition-colors hover:text-[#b99a63]"
          >
            PHOTO GALLERY
          </a>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section
        id="biography"
        className="scroll-mt-28 px-6 py-12 md:px-16"
      >
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">

          <div>
            <p className="text-xs tracking-[0.3em] text-[#b99a63]">
              ABOUT THE ARTIST
            </p>

            <h2 className="mt-5 font-serif text-3xl md:text-4xl">
              Biography
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-8 text-[#b9b4a9]">
              <p>
                [Insert Srijith Poosarla's official biography here.
                Introduce his musical journey, background and
                relationship with the mandolin.]
              </p>

              <p>
                [Continue with his musical influences, training,
                performances, collaborations and artistic approach.
                Include only verified information.]
              </p>

              <p>
                [Add any notable achievements, awards, recordings
                or important performances, where applicable.]
              </p>
            </div>
          </div>

          <div className="relative min-h-[350px] overflow-hidden md:min-h-[480px]">
            <Image
              src="/images/hero.jpg"
              alt="Srijith Poosarla"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="px-6 py-20 md:px-16">
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] text-[#b99a63]">
            PRESS MATERIAL
          </p>

          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Downloads
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#b9b4a9]">
            Official documents and photographs available for
            download and professional use.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {downloads.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex flex-col justify-between border border-[#454238] p-7 transition-colors duration-300 hover:border-[#b99a63]"
              >
                <div>
                  <Icon
                    size={27}
                    strokeWidth={1.3}
                    className="text-[#b99a63]"
                  />

                  <h3 className="mt-8 font-serif text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 min-h-14 text-sm leading-7 text-[#b9b4a9]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-9 border-t border-[#454238] pt-5">
                  <p className="mb-5 text-[10px] tracking-[0.2em] text-[#b99a63]">
                    {item.format}
                  </p>

                  <a
                    href={item.href}
                    download
                    className="flex items-center justify-between text-xs tracking-[0.2em] transition-colors hover:text-[#b99a63]"
                  >
                    DOWNLOAD FILE
                    <Download
                      size={17}
                      className="transition-transform group-hover:translate-y-1"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section
        id="gallery"
        className="scroll-mt-28 border-t border-[#454238] px-6 py-24 md:px-16"
      >
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#b99a63]">
              VISUAL ARCHIVE
            </p>

            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
              Photo Gallery
            </h2>

            <p className="mt-4 text-sm text-[#b9b4a9]">
              A collection of photographs from Srijith's musical journey.
            </p>
          </div>

          <p className="text-xs tracking-widest text-[#b99a63]">
            {String(activeImage + 1).padStart(2, "0")} /{" "}
            {String(galleryImages.length).padStart(2, "0")}
          </p>
        </div>

        {/* MAIN CAROUSEL */}
        <div className="relative overflow-hidden bg-[#201f1a]">
          <div className="relative aspect-[4/3] md:aspect-[16/9]">
            <Image
              key={galleryImages[activeImage].src}
              src={galleryImages[activeImage].src}
              alt={galleryImages[activeImage].alt}
              fill
              priority
              className="object-contain"
            />
          </div>

          <button
            onClick={previousImage}
            aria-label="Previous photograph"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 transition-colors hover:bg-[#b99a63] hover:text-[#151512] md:left-6"
          >
            <ChevronLeft size={23} />
          </button>

          <button
            onClick={nextImage}
            aria-label="Next photograph"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 transition-colors hover:bg-[#b99a63] hover:text-[#151512] md:right-6"
          >
            <ChevronRight size={23} />
          </button>
        </div>

        {/* CAPTION AND THUMBNAILS */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-[#b9b4a9]">
            {galleryImages[activeImage].caption}
          </p>

          <div className="flex gap-2">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                onClick={() => setActiveImage(index)}
                aria-label={`View photograph ${index + 1}`}
                className={`h-1.5 w-6 transition-colors ${
                  activeImage === index
                    ? "bg-[#b99a63]"
                    : "bg-[#454238] hover:bg-[#8b7958]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* THUMBNAIL STRIP */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-5">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setActiveImage(index)}
              className={`relative aspect-[4/3] overflow-hidden border transition-all ${
                activeImage === index
                  ? "border-[#b99a63] opacity-100"
                  : "border-transparent opacity-55 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 33vw, 20vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* ENQUIRIES */}
      <section className="border-t border-[#454238] px-6 py-20 text-center md:px-16">
        <p className="text-xs tracking-[0.3em] text-[#b99a63]">
          MEDIA & BOOKING ENQUIRIES
        </p>

        <h2 className="mt-5 font-serif text-3xl md:text-5xl">
          Let's work together.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#b9b4a9]">
          For interviews, publications, performances and collaborations,
          please get in touch.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-3 border border-[#b99a63] px-8 py-4 text-xs tracking-[0.2em] text-[#b99a63] transition-colors hover:bg-[#b99a63] hover:text-[#151512]"
        >
          CONTACT
          <ArrowUpRight size={16} />
        </a>
      </section>

    </main>
  );
}
