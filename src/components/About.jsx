import {
  Target,
  Eye,
  CheckCircle2,
} from "lucide-react";

const principles = [
  "Security first",
  "Evidence driven",
  "Response ready",
];

function About() {
  return (
    <section
      id="about"
      className="space-bg relative overflow-hidden border-y border-white/10 py-28"
    >
      {/* Orbital background */}
      <div className="pointer-events-none absolute -left-48 top-1/2 h-150 w-150 -translate-y-1/2 rounded-full border border-blue-400/5" />

      <div className="pointer-events-none absolute -left-32 top-1/2 h-108 w-108 -translate-y-1/2 rounded-full border border-indigo-400/5" />

      <div className="space-glow -left-20 top-1/3 h-75 w-75 bg-indigo-700/5" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

          {/* Text */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-blue-400/60" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300/70">
                About CYSSDR
              </span>

            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

              Built around

              <span className="block text-blue-300">
                trust and resilience.
              </span>

            </h2>

            <p className="mt-6 leading-7 text-slate-400">
              CYSSDR — Cybersecurity Solutions and Digital Response —
              focuses on helping organizations understand, manage
              and respond to cybersecurity risks.
            </p>

            <p className="mt-4 leading-7 text-slate-500">
              Effective cybersecurity is more than a collection of
              tools. It requires disciplined processes, sound technical
              decisions and the ability to respond when security
              controls are tested.
            </p>

          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2">

            {/* Mission */}
            <div className="space-glass p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-300/10 bg-blue-400/5 text-blue-300">
                <Target size={20} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-200">
                Our Mission
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Provide reliable cybersecurity and digital response
                capabilities that help organizations operate securely
                and respond effectively to evolving threats.
              </p>

            </div>

            {/* Approach */}
            <div className="space-glass p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-300/10 bg-blue-400/5 text-blue-300">
                <Eye size={20} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-200">
                Our Approach
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Practical, evidence-driven and focused on the actual
                security requirements of each environment.
              </p>

            </div>

            {/* Principles */}
            <div className="space-glass p-7 sm:col-span-2">

              <div className="grid gap-5 sm:grid-cols-3">

                {principles.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-400"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-blue-400"
                    />

                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;