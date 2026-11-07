
export default function Footer() {
  return (
    <footer className="border-t border-[#b99a63]/20 bg-[#292522] px-6 py-5 text-[#b9b4a9]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

        {/* SOCIAL LINKS AND EMAIL */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs tracking-wider">
          <a href="#" className="transition-colors hover:text-[#c6a46a]">
            Instagram
          </a>

          <a href="#" className="transition-colors hover:text-[#c6a46a]">
            YouTube
          </a>

          <a href="#" className="transition-colors hover:text-[#c6a46a]">
            Facebook
          </a>

          <span className="text-xs tracking-wider">
            P.srijith2004@gmail.com
          </span>
        </div>

        {/* COPYRIGHT */}
        <p className="text-[10px] tracking-wider text-[#928a7e]">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
