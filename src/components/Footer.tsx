
import {
  SiInstagram,
  SiYoutube,
  SiFacebook,
} from "react-icons/si";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/srijith_poosarla?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw==",
    icon: SiInstagram,
  },
  {
    name: "YouTube",
    href: "#",
    icon: SiYoutube,
  },
  {
    name: "Facebook",
    href: "#",
    icon: SiFacebook,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#b99a63]/20 bg-[#292522] py-6 text-[#b9b4a9]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 md:flex-row lg:px-12">

        {/* SOCIAL MEDIA ICONS AND EMAIL */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-colors duration-300 hover:text-[#c6a46a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a46a]"
              >
                <Icon size={23} />
              </a>
            );
          })}

            <a
              href="mailto:p.srijith2004@gmail.com"
              className="text-sm tracking-wide transition-colors duration-300 hover:text-[#c6a46a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a46a]"
            >
              p.srijith2004@gmail.com
            </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs tracking-wide text-[#a39b8e]">
          © {new Date().getFullYear()} Srijith Poosarla. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
