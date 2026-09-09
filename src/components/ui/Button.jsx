const variants = {
  primary:
    "border border-violet-500/30 bg-violet-600 text-white shadow-lg shadow-violet-950/30 hover:border-violet-400/50 hover:bg-violet-500 hover:shadow-violet-900/40",

  secondary:
    "border border-white/10 bg-white/[0.04] text-slate-200 hover:border-violet-500/30 hover:bg-violet-500/[0.07] hover:text-white",

  outline:
    "border border-white/10 bg-transparent text-slate-300 hover:border-violet-500/40 hover:bg-violet-500/[0.05] hover:text-white",

  ghost:
    "border border-transparent bg-transparent text-slate-400 hover:bg-white/[0.04] hover:text-white",

  dark:
    "border border-white/[0.08] bg-[#0a1424] text-slate-200 hover:border-violet-500/30 hover:bg-[#0d192b] hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm",
  xl: "px-7 py-3.5 text-sm",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  icon = true,
  type = "button",
  onClick,
}) {
  const classes = `
    group relative inline-flex items-center justify-center
    gap-2 overflow-hidden rounded-lg
    font-medium tracking-[-0.01em]
    transition-all duration-200
    active:scale-[0.98]
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-violet-500/40
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const content = (
    <>
      <span
        className="
          pointer-events-none absolute inset-0
          -translate-x-full
          bg-linear-to-r
          from-transparent
          via-white/8
          to-transparent
          transition-transform duration-700
          group-hover:translate-x-full
        "
      />

      <span className="relative flex items-center gap-2">
        {children}

        {icon && (
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
              d="M5 12h14M13 6l6 6-6 6"
            />
          </svg>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
}

export default Button;