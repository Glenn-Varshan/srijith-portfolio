
"use client";

import { useEffect } from "react";

const instagramPosts = [
  "https://www.instagram.com/reel/DfSGK8ECqFB/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DfZcwCrTQj6/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DVekZOlE7CQ/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DYOjuMWSkrK/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DfCXrLLqXd9/?utm_source=ig_embed&amp;utm_campaign=loading",
  "https://www.instagram.com/reel/DVjbCBFkiLc/?utm_source=ig_web_copy_link&mdxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  
];

export default function InstagramGallery() {
  useEffect(() => {
    const scriptId = "instagram-embed-script";

    const processEmbeds = () => {
    (
        window as Window & {
        instgrm?: {
            Embeds?: {
            process: () => void;
            };
        };
        }
    ).instgrm?.Embeds?.process();
    };

    let script = document.getElementById(
      scriptId
    ) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    script.addEventListener("load", processEmbeds);
    processEmbeds();

    return () => {
      script?.removeEventListener("load", processEmbeds);
    };
  }, []);

  return (
    <section className="px-6 py-20 md:px-16">
      <div className="mb-12 text-center">
        <p className="text-xs tracking-[0.3em] text-[#b99a63]">
          FOLLOW THE JOURNEY
        </p>

        <h2 className="mt-4 font-serif text-3xl md:text-5xl">
          Instagram
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {instagramPosts.map((url) => (
          <div
            key={url}
            className="flex justify-center overflow-hidden rounded-md bg-[#201f1a]"
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "#fff",
                border: 0,
                borderRadius: "8px",
                margin: 0,
                maxWidth: "540px",
                minWidth: "280px",
                padding: 0,
                width: "100%",
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.instagram.com/srijith_poosarla/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-[#b99a63] px-8 py-4 text-xs tracking-[0.2em] text-[#b99a63] transition-colors hover:bg-[#b99a63] hover:text-[#292522]"
        >
          FOLLOW ON INSTAGRAM
        </a>
      </div>
    </section>
  );
}
