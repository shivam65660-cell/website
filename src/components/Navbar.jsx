import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo2.png"

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#03050b]/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
            <img
              src={ logo }
              alt="CYSSDR"
              className="h-10 w-10 object-contain"
            />
          </div>

          <div className="">
            <p className="text-base font-bold tracking-[0.14em] text-white">
              CYSSDR
            </p>

            <p className="mt-1 text-[9px] tracking-[0.12em] text-slate-500">
              CYBERSECURITY SOLUTIONS AND DIGITAL RESPONSE
            </p>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}

        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="p-2 text-slate-300 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#050811]/95 md:hidden">
          <nav className="flex flex-col px-5 py-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-sm text-slate-400 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;