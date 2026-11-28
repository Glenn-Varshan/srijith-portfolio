import type { Metadata } from "next";

import InstagramGallery from "@/components/InstagramGallery";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Performances, moments and music from Srijith Poosarla, Carnatic mandolinist.",
};

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">

      {/* PAGE HEADING */}
      <section className="px-6 pb-12 pt-40 text-center md:pb-16">
        <h1 className="font-heading text-5xl md:text-7xl">
          Media
        </h1>
      </section>

      {/* INSTAGRAM */}
      <InstagramGallery />
    </main>
  );
}
