import {
  ArrowRight,
  Shield,
} from "lucide-react";

function Hero() {
  const capabilities = [
    {
      title: "Digital Forensics",
      description: "Evidence & Analysis",
      statusColor: "bg-blue-400/70",
    },
    {
      title: "Cyber Security",
      description: "Defence & Protection",
      statusColor: "bg-emerald-400/70",
    },
    {
      title: "Threat Intelligence",
      description: "Threat Discovery",
      statusColor: "bg-indigo-400/70",
    },
    {
      title: "Incident Response",
      description: "Detect & Respond",
      statusColor: "bg-blue-400/70",
    },
    {
      title: "Network Security",
      description: "Network Defence",
      statusColor: "bg-blue-400/70",
    },
    {
      title: "Security Research",
      description: "Research & Testing",
      statusColor: "bg-indigo-400/70",
    },
  ];

  return (
    <section
      id="home"
      className="space-bg star-field relative min-h-screen overflow-hidden pt-19"
    >
      {/* =====================================================
          ATMOSPHERIC BACKGROUND
      ====================================================== */}

      <div className="space-glow left-1/2 top-1/5 h-105 w-105 bg-blue-700/10" />

      <div className="space-glow left-1/12 top-3/5 h-75 w-75 bg-indigo-700/10" />

      {/* =====================================================
          BACKGROUND ORBITAL RINGS
      ====================================================== */}

      <div className="orbit pointer-events-none absolute -right-70 top-1/12 h-200 w-200" />

      <div className="orbit pointer-events-none absolute -right-45 top-1/6 h-150 w-150" />

      <div className="orbit pointer-events-none absolute -right-20 top-1/4 h-100 w-100" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-10">

            {/* Eyebrow */}

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-blue-400/60" />

              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-blue-300/70">
                CYSSDR // DIGITAL SECURITY
              </span>
            </div>

            {/* Heading */}

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Defending the

              <span className="block bg-linear-to-r from-white via-blue-200 to-indigo-400 bg-clip-text text-transparent">
                digital frontier.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              CYSSDR delivers cybersecurity, digital forensics and
              incident response capabilities designed to protect
              systems, investigate threats and strengthen digital
              resilience.
            </p>

            {/* =====================================================
                ACTION BUTTONS
            ====================================================== */}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <a
                href="#services"
                className="group flex items-center justify-center gap-3 rounded-sm border border-blue-400/20 bg-blue-500/10 px-6 py-3.5 text-sm font-semibold text-blue-100 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/15"
              >
                Explore capabilities

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center rounded-sm border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-300 transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                Contact us
              </a>

            </div>

            {/* =====================================================
                TECHNICAL INFORMATION
            ====================================================== */}

            <div className="mt-14 grid max-w-xl grid-cols-3 border-y border-white/10">

              <div className="py-5">

                <p className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
                  Focus
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  Cyber Defence
                </p>

              </div>

              <div className="border-x border-white/10 px-5 py-5">

                <p className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
                  Domain
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  Digital Security
                </p>

              </div>

              <div className="px-5 py-5">

                <p className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
                  Approach
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  Evidence Driven
                </p>

              </div>

            </div>

          </div>

          {/* =====================================================
              RIGHT CYBERSECURITY PANEL
          ====================================================== */}

          <div className="relative hidden h-160 lg:block">

            {/* Large atmospheric glow */}

            <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-3xl" />

            {/* Secondary glow */}

            <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />

            {/* =====================================================
                BACKGROUND TECHNICAL CIRCLE
            ====================================================== */}

            <div className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/5" />

            <div className="absolute left-1/2 top-1/2 h-115 w-115 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

            <div className="absolute left-1/2 top-1/2 h-95 w-95 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-400/5" />

            {/* =====================================================
                SMALL SPACE NODES
            ====================================================== */}

            <span className="absolute left-12 top-20 h-1.5 w-1.5 rounded-full bg-blue-400/60 shadow-[0_0_12px_rgba(96,165,250,0.7)]" />

            <span className="absolute right-14 top-28 h-1 w-1 rounded-full bg-white/40" />

            <span className="absolute bottom-24 left-20 h-1 w-1 rounded-full bg-indigo-400/50" />

            <span className="absolute bottom-16 right-20 h-1.5 w-1.5 rounded-full bg-blue-400/40" />

            {/* =====================================================
                CAPABILITY CARD
            ====================================================== */}

            <div className="space-glass absolute left-1/2 top-1/2 w-92 -translate-x-1/2 -translate-y-1/2 p-6 shadow-2xl">

              {/* =================================================
                  CARD HEADER
              ================================================== */}

              <div className="flex items-center justify-between border-b border-white/10 pb-5">

                <div>

                  <h3 className="mt-1 text-base font-semibold tracking-wide text-white">
                    CYSSDR
                  </h3>

                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/5">

                  <Shield
                    size={19}
                    strokeWidth={1.2}
                    className="text-blue-300"
                  />

                </div>

              </div>

              {/* =================================================
                  CAPABILITIES GRID
              ================================================== */}

              <div className="mt-5 grid grid-cols-2 gap-3">

                {capabilities.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-sm border border-white/10 bg-white/2 p-4 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-400/4"
                  >

                    {/* Top row */}

                    <div className="mb-3 flex items-center justify-between">

                      <span
                        className={`h-1.5 w-1.5 rounded-full ${item.statusColor} transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(96,165,250,0.8)]`}
                      />

                    </div>

                    {/* Title */}

                    <p className="text-[11px] font-medium text-slate-200">
                      {item.title}
                    </p>

                    {/* Description */}

                    <p className="mt-1 font-mono text-[7px] uppercase tracking-wider text-slate-600">
                      {item.description}
                    </p>


                  </div>
                ))}

              </div>

              {/* =================================================
                  CARD FOOTER
              ================================================== */}

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

                <div className="flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-500">
                    Systems operational
                  </span>

                </div>

                <span className="font-mono text-[7px] text-slate-700">
                  06 CAPABILITIES
                </span>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#03050b] to-transparent" />

    </section>
  );
}

export default Hero;