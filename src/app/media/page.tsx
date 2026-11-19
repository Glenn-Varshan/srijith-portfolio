
import InstagramGallery from "@/components/InstagramGallery";

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">

      {/* PAGE HEADING */}
      <section className="px-6 pb-12 pt-40 text-center md:pb-16">
        <p className="mb-5 text-xs tracking-[0.35em] text-ink">
          PERFORMANCES · MOMENTS · MUSIC
        </p>

        <h1 className="font-heading text-5xl md:text-7xl">
          Media
        </h1>

        <div className="mx-auto mt-7 h-px w-20 bg-ink/60" />
      </section>

      {/* INSTAGRAM */}
      <InstagramGallery />
    </main>
  );
}
