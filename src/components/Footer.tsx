
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
    <footer className="border-t border-[#b99a63]/20 bg-[#292522] px-6 py-5 text-[#b9b4a9]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

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
                className="transition-colors duration-300 hover:text-[#c6a46a]"
              >
                <Icon size={23} />
              </a>
            );
          })}

            <a
              href="mailto:p.srijith2004@gmail.com"
              className="text-xs tracking-wider transition-colors duration-300 hover:text-[#c6a46a]"
            >
              p.srijith2004@gmail.com
            </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-[10px] tracking-wider text-[#928a7e]">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
