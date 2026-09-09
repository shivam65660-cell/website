import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#03050b] py-28"
    >
      {/* Background atmosphere */}
      <div className="space-glow left-1/2 top-0 h-125 w-175 -translate-x-1/2 bg-blue-700/5" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Contact information */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-blue-400/60" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300/70">
                Contact
              </span>

            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">

              Let's talk

              <span className="text-blue-300">
                {" "}security.
              </span>

            </h2>

            <p className="mt-6 max-w-lg leading-7 text-slate-500">
              Have a security requirement, assessment need or
              incident that needs attention? Get in touch with
              our team.
            </p>

            <div className="mt-10 space-y-6">

              {/* Email */}
              <a
                href="mailto:contact@cyssdr.com"
                className="group flex items-center gap-4"
              >

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-300/10 bg-blue-400/5 text-blue-300">
                  <Mail size={18} />
                </span>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-600">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-300 transition group-hover:text-white">
                    contact@cyssdr.com
                  </p>
                </div>

              </a>

              {/* Phone */}
              <div className="flex items-center gap-4">

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-300/10 bg-blue-400/5 text-blue-300">
                  <Phone size={18} />
                </span>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-600">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-300">
                    +91 XXXXX XXXXX
                  </p>
                </div>

              </div>

              {/* Location */}
              <div className="flex items-center gap-4">

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-300/10 bg-blue-400/5 text-blue-300">
                  <MapPin size={18} />
                </span>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-300">
                    India
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Form */}
          <div className="space-glass p-6 sm:p-8 lg:p-10">

            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">

              <div>

                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                  Secure enquiry
                </p>

                <h3 className="mt-1 text-xl font-semibold text-slate-200">
                  Send us a message
                </h3>

              </div>

              <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-blue-300/10 text-blue-300 sm:flex">
                <ArrowUpRight size={16} />
              </div>

            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="space-y-5"
            >

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-sm border border-white/10 bg-[#03050b] px-4 py-3 text-sm text-slate-200 outline-none placeholder:text-slate-700 focus:border-blue-400/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-sm border border-white/10 bg-[#03050b] px-4 py-3 text-sm text-slate-200 outline-none placeholder:text-slate-700 focus:border-blue-400/40"
                  />
                </div>

              </div>

              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-sm border border-white/10 bg-[#03050b] px-4 py-3 text-sm text-slate-200 outline-none placeholder:text-slate-700 focus:border-blue-400/40"
                />

              </div>

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us about your requirement..."
                  className="w-full resize-none rounded-sm border border-white/10 bg-[#03050b] px-4 py-3 text-sm text-slate-200 outline-none placeholder:text-slate-700 focus:border-blue-400/40"
                />

              </div>

              <button
                type="submit"
                className="w-full rounded-sm border border-blue-300/20 bg-blue-500/10 px-6 py-3.5 text-sm font-semibold text-blue-100 transition hover:border-blue-300/40 hover:bg-blue-500/15"
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;