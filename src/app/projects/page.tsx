
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Recordings",
    title: "Musical Explorations",
    description:
      "A collection of instrumental recordings and musical expressions.",
    image: "/images/hero.jpg",
    status: "Featured",
  },
  {
    number: "02",
    category: "Collaborations",
    title: "Musical Collaborations",
    description:
      "Creative collaborations and musical exchanges with other artists.",
    image: "/images/hero.jpg",
    status: "Explore",
  },
  {
    number: "03",
    category: "Performances",
    title: "Live Performances",
    description:
      "Selected live performances and moments from the stage.",
    image: "/images/hero.jpg",
    status: "Explore",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#151512] text-[#eee8dc]">

      {/* Page heading */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-40 lg:px-12">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#b99462]">
          Selected Work
        </p>

        <h1 className="font-serif text-6xl leading-tight md:text-8xl">
          PROJECTS<span className="text-[#b99462]">.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/55">
          A collection of musical projects, recordings,
          collaborations and performances from Srijith's
          musical journey.
        </p>
      </section>

      {/* Projects grid */}
      <section className="border-y border-white/10 bg-[#1b1b17]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">

          <div className="mb-14 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b99462]">
              The Collection
            </p>
            <p className="text-xs text-white/35">
              Selected Projects
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">

            {projects.map((project) => (
              <article key={project.number} className="group">

                {/* Project image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#25231e]">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/5" />

                  <span className="absolute left-5 top-5 text-xs tracking-widest text-white/80">
                    {project.number}
                  </span>

                </div>

                {/* Project information */}
                <div className="mt-6">

                  <p className="text-xs uppercase tracking-[0.25em] text-[#b99462]">
                    {project.category}
                  </p>

                  <div className="mt-3 flex items-start justify-between gap-4">

                    <h2 className="font-serif text-3xl md:text-4xl">
                      {project.title}
                    </h2>

                    <span className="text-xl text-[#b99462]">
                      ↗
                    </span>

                  </div>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/50">
                    {project.description}
                  </p>

                  <div className="mt-6 border-b border-white/15 pb-5">
                    <span className="text-xs uppercase tracking-[0.15em] text-white/40">
                      {project.status}
                    </span>
                  </div>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">

        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#b99462]">
          Discover More
        </p>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Have a project
            <br />
            in mind?
          </h2>

          <Link
            href="/contact"
            className="self-start border border-[#b99462] px-7 py-4 text-xs uppercase tracking-[0.15em] text-[#c5a477] transition hover:bg-[#b99462] hover:text-[#151512] md:self-auto"
          >
            Get in Touch ↗
          </Link>

        </div>
      </section>

    </main>
  );
}