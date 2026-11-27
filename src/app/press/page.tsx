
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
  FileArchive,
} from "lucide-react";

const galleryImages = [
  {
    src: "/press/gallery/photo-1.JPG",
    alt: "Srijith Poosarla - Artist portrait",
    caption: "Artist Portrait",
  },
  {
    src: "/press/gallery/photo-2.JPG",
    alt: "Srijith Poosarla performing",
    caption: "Live Performance",
  },
  {
    src: "/press/gallery/photo-3.JPG",
    alt: "Srijith Poosarla with mandolin",
    caption: "Artist Photograph",
  },
  {
    src: "/press/gallery/photo-4.JPG",
    alt: "Srijith Poosarla at a concert",
    caption: "On Stage",
  },
  {
    src: "/press/gallery/photo-5.JPG",
    alt: "Srijith Poosarla professional photograph",
    caption: "Behind the Music",
  },
    {
    src: "/press/gallery/photo-6.JPG",
    alt: "Srijith Poosarla professional photograph",
    caption: "With the team",
  },
];

const downloads = [
  {
    title: "Download Resume",
    description: "Professional background and artistic experience.",
    format: "PDF DOCUMENT",
    href: "/press/srijith-resume.pdf",
    icon: FileText,
  },
  {
    title: "Technical Rider",
    description: "Stage setup, audio equipment and technical requirements.",
    format: "PDF DOCUMENT",
    href: "/press/technical-rider.pdf",
    icon: FileText,
  },
  {
    title: "Professional Photos",
    description: "High-resolution photographs for media and publicity.",
    format: "ZIP ARCHIVE",
    href: "/press/professional-photos.zip",
    icon: Images,
  },
  {
    title: "Full Press Kit",
    description: "All official press materials in one convenient archive.",
    format: "ZIP ARCHIVE",
    href: "/press/full-press-kit.zip",
    icon: FileArchive,
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
    <main className="bg-bg text-ink">

      
        {/* PAGE INTRO */}
        <section className="px-6 pb-12 pt-40 text-center md:px-16 md:pb-16">
          <h1 className="font-heading text-4xl tracking-wide md:text-6xl">
            Electronic Press Kit
          </h1>
          <div className="mx-auto mt-7 h-px w-20 bg-ink/60" />
        </section>


      {/* BIOGRAPHY AND DOWNLOADS */}
      <section
        id="biography"
        className="px-6 py-12 md:px-16 md:py-16"
      >
        <div className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT: BIOGRAPHY */}
          <div>
            <p className="text-xs tracking-[0.3em] text-ink">
              ABOUT THE ARTIST
            </p>

            <h2 className="mt-5 font-heading text-3xl md:text-4xl">
              Srijith Poosarla
            </h2>

            <div className="mt-8 space-y-5 text-md leading-8 text-muted">
              <p>
                Srijith Poosarla is a Carnatic mandolinist from Chennai and a student of the legendary Vidwan U. Rajesh. 
                He strives to carry forward the traditions of this style with sincerity, while bringing classical, folk and contemporary music into one sonic identity. 
                
              </p>

              <p>
                He has performed at respected venues and sabhas such as Bharat Mandapam, the India Habitat Centre, the Indian Fine Arts Society and Sri Parthasarathy Swami Sabha.
                He collaborates across dance, spoken word and fusion, performing in many languages alongside a wide range of instruments. 
                Rooted in raga but unbound by genre, he plays with classical depth and a performer’s warmth.
              </p>
            </div>
          </div>

          {/* RIGHT: DOWNLOADS */}
          <div>
            <p className="text-xs tracking-[0.3em] text-ink">
              MEDIA RESOURCES
            </p>

            <h2 className="mt-5 font-heading text-3xl md:text-4xl">
              Downloads
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              Official documents and media resources for
              publications, event organisers and collaborators.
            </p>

            <div className="mt-8 flex flex-col">
              {downloads.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    download
                    className="group flex items-center justify-between gap-4 border-b border-line py-5 transition-colors hover:border-accent"
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        size={23}
                        strokeWidth={1.4}
                        className="shrink-0 text-ink"
                      />

                      <div>
                        <h3 className="text-sm tracking-wide transition-colors group-hover:text-accent">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs text-muted/80">
                          {item.format}
                        </p>
                      </div>
                    </div>

                    <Download
                      size={18}
                      className="shrink-0 text-accent transition-transform group-hover:translate-y-1"
                    />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="mx-auto mb-28 mt-24 w-full max-w-5xl md:mb-36">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] text-ink">
              VISUAL ARCHIVE
            </p>

            <h2 className="mt-4 font-heading text-3xl md:text-5xl">
              Photo Gallery
            </h2>

            <p className="mt-4 text-sm text-muted">
              A collection of photographs from Srijith's musical journey.
            </p>
          </div>

          <p className="text-xs tracking-widest text-ink">
            {String(activeImage + 1).padStart(2, "0")} /{" "}
            {String(galleryImages.length).padStart(2, "0")}
          </p>
        </div>

        {/* MAIN CAROUSEL */}
        <div className="relative overflow-hidden bg-deep">
          <div className="relative aspect-[4/3] md:aspect-[16/9]">
            <Image
              key={galleryImages[activeImage].src}
              src={galleryImages[activeImage].src}
              alt={galleryImages[activeImage].alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={previousImage}
            aria-label="Previous photograph"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 transition-colors hover:bg-accent hover:text-bg md:left-6"
          >
            <ChevronLeft size={23} />
          </button>

          <button
            onClick={nextImage}
            aria-label="Next photograph"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 transition-colors hover:bg-accent hover:text-bg md:right-6"
          >
            <ChevronRight size={23} />
          </button>
        </div>

        {/* CAPTION AND INDICATORS */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-lg text-ink md:text-xl">
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
                    ? "bg-accent"
                    : "bg-line hover:bg-accent/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRIES */}
      <section className="border-t border-line px-6 py-20 text-center md:px-16">
        <p className="text-xs tracking-[0.3em] text-ink">
          MEDIA & BOOKING ENQUIRIES
        </p>

        <h2 className="mt-5 font-heading text-3xl md:text-5xl">
          Let's work together.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted">
          For interviews, publications, performances and collaborations,
          please get in touch.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-3 border border-accent px-8 py-4 text-xs tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-bg"
        >
          CONTACT
          <ArrowUpRight size={16} />
        </a>
      </section>

    </main>
  );
}
