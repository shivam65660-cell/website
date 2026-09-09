import {
  ArrowUp,
  ShieldCheck,
} from "lucide-react";
import logo from "../assets/logo2.png"

const navigation = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020409]">

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <img
                  src={ logo }
                  alt="CYSSDR"
                  className="h-11 w-11 object-contain"
                />
              </div>

              <div>

                <p className="text-lg font-bold tracking-[0.15em] text-white">
                  CYSSDR
                </p>

                <p className="mt-1 text-[9px] tracking-[0.12em] text-slate-600">
                  CYBERSECURITY SOLUTIONS
                </p>

              </div>

            </div>

            <p className="mt-6 max-w-md text-sm leading-6 text-slate-600">
              Cybersecurity Solutions and Digital Response.
              Helping organizations strengthen security,
              investigate incidents and build resilience
              against evolving digital threats.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {navigation.map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="text-sm text-slate-500 transition-colors hover:text-white"
                >
                  {name}
                </a>
              ))}

            </div>

          </div>

          {/* Security */}
          <div>

            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Security
            </h3>

            <div className="mt-5 flex items-start gap-3">

              <ShieldCheck
                size={19}
                className="mt-0.5 shrink-0 text-blue-400"
              />

              <p className="text-sm leading-6 text-slate-600">
                Security-focused services built around
                confidentiality, evidence and operational
                readiness.
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">

          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} CYSSDR. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 transition-colors hover:text-white"
          >
            Back to top

            <ArrowUp size={14} />

          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;