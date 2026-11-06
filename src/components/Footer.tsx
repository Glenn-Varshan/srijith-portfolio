
import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/srijith_poosarla/" },
  { label: "X", href: "https://x.com/YOUR_USERNAME" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/YOUR_USERNAME/" },
  { label: "Facebook", href: "https://www.facebook.com/YOUR_USERNAME/" },
  { label: "YouTube", href: "https://www.youtube.com/@YOUR_CHANNEL" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#151512]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">

        <div className="grid gap-12 md:grid-cols-2">

          {/* Artist information */}
          <div>
            <Link
              href="/"
              className="text-2xl font-semibold tracking-[0.2em]"
            >
              SRIJITH<span className="text-[#b99462]">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              Exploring the expressive possibilities of the mandolin
              through tradition, melody and contemporary musical expression.
            </p>
          </div>

          {/* Contact and social links */}
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b99462]">
              Get in touch
            </p>

            <a
              href="mailto:p.srijith2004@gmail.com"
              className="mt-4 inline-block text-lg text-[#eee8dc] transition hover:text-[#b99462]"
            >
              p.srijith2004@gmail.com
            </a>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-white/50 transition hover:text-[#b99462]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom navigation */}
        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center">

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            © {new Date().getFullYear()} Srijith Poosarla. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="/about" className="text-xs text-white/40 hover:text-[#b99462]">
              About
            </Link>
            <Link href="/projects" className="text-xs text-white/40 hover:text-[#b99462]">
              Projects
            </Link>
            <Link href="/press" className="text-xs text-white/40 hover:text-[#b99462]">
              Press Kit
            </Link>
            <Link href="/contact" className="text-xs text-white/40 hover:text-[#b99462]">
              Contact
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
