import {
  ShieldCheck,
  Search,
  Bug,
  Network,
  FileSearch,
  Lock,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Cybersecurity Assessment",
    description:
      "Identify security gaps across systems, applications and infrastructure before they become incidents.",
  },
  {
    number: "02",
    icon: Search,
    title: "Digital Forensics",
    description:
      "Examine digital evidence to establish what happened, how it happened and what was affected.",
  },
  {
    number: "03",
    icon: Bug,
    title: "Vulnerability Assessment",
    description:
      "Discover, validate and prioritize weaknesses across networks, systems and applications.",
  },
  {
    number: "04",
    icon: Network,
    title: "Network Security",
    description:
      "Evaluate network architecture, controls and exposure to strengthen connected environments.",
  },
  {
    number: "05",
    icon: FileSearch,
    title: "Incident Response",
    description:
      "Support containment, investigation and recovery when a security event requires rapid response.",
  },
  {
    number: "06",
    icon: Lock,
    title: "Security Advisory",
    description:
      "Practical guidance for improving security posture, controls and organizational readiness.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="space-bg relative overflow-hidden border-t border-white/10 py-28"
    >
      {/* Background glow */}
      <div className="space-glow -right-30 top-1/3 h-100 w-100 bg-blue-700/5" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="max-w-2xl">

          <div className="mb-5 flex items-center gap-3">

            <span className="h-px w-10 bg-blue-400/60" />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300/70">
              Our capabilities
            </span>

          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Security services for
            <span className="text-blue-300">
              {" "}complex environments.
            </span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-slate-500">
            From proactive assessment to digital investigation,
            our capabilities are focused on understanding risk
            and improving resilience.
          </p>

        </div>

        {/* Services */}
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative overflow-hidden bg-[#070b14]/90 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#0a1020]"
              >

                {/* Top line */}
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-blue-400/50 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/10 bg-blue-400/5 text-blue-300 transition-all group-hover:border-blue-300/30 group-hover:bg-blue-400/10">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <span className="font-mono text-[10px] tracking-widest text-slate-700">
                    {service.number}
                  </span>

                </div>

                <h3 className="mt-7 text-lg font-semibold text-slate-200">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-7 h-px w-8 bg-blue-400/40 transition-all duration-300 group-hover:w-16" />

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Services;