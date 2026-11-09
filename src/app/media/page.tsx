
import InstagramGallery from "@/components/InstagramGallery";

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[#292522] text-[#eee8dc]">

      {/* PAGE HEADING */}
      <section className="px-6 pb-12 pt-40 text-center md:pb-16">
        <h1 className="font-serif text-5xl md:text-7xl">
          Media
        </h1>

        <div className="mx-auto mt-7 h-px w-20 bg-[#b99a63]" />
      </section>

      {/* INSTAGRAM */}
      <InstagramGallery />
    </main>
  );
}
