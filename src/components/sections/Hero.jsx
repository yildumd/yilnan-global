import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { value: "2", label: "ventures owned" },
  { value: "5", label: "live client products" },
  { value: "6+", label: "sectors" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-yilnan-base">
      {/* soft amber glow, upper-right — asymmetric */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px]"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(245,158,11,0.14), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
        <div className="max-w-3xl">
          {/* eyebrow pill */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-yilnan-accentBorder bg-yilnan-accentSoft px-3.5 py-1.5 text-xs tracking-wide text-yilnan-accent"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-yilnan-accent" />
            A group building across tech and food
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-yilnan-text sm:text-5xl md:text-6xl"
          >
            We build and back ventures
            <br />
            <span className="text-yilnan-textFaint">—</span> and we build for{" "}
            <span className="text-yilnan-accent">you.</span>
          </motion.h1>

          {/* subcopy */}
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mb-10 max-w-xl text-lg leading-relaxed text-yilnan-textMuted"
          >
            Yilnan Global Concepts is a Jos-based group. We own and run our own
            products across technology and food, and we build software for
            businesses across Africa. Your idea. Our code.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-3.5"
          >
            <Link
              to="/portfolio"
              className="rounded-[10px] bg-yilnan-accent px-7 py-3.5 text-sm font-semibold text-yilnan-accentDark transition hover:brightness-95"
            >
              See our work →
            </Link>
            <Link
              to="/contact"
              className="rounded-[10px] border border-yilnan-borderStrong px-7 py-3.5 text-sm font-medium text-yilnan-text transition hover:bg-yilnan-surface"
            >
              Start a project
            </Link>
          </motion.div>
        </div>
      </div>

      {/* stat row — full-width, bordered */}
      <motion.div
        variants={fadeUp}
        custom={4}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-6xl border-t border-yilnan-border"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex-1 px-6 py-6 ${
              i < stats.length - 1 ? "border-r border-yilnan-border" : ""
            }`}
          >
            <div className="text-3xl font-semibold tracking-tight text-yilnan-text">
              {s.value}
            </div>
            <div className="mt-0.5 text-sm text-yilnan-textFaint">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
