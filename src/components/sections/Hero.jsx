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
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-yilnan-base">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/hero.jpg"
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yilnan-base via-yilnan-base/92 to-yilnan-base/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-yilnan-base via-transparent to-yilnan-base/30" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px]"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(245,158,11,0.16), transparent 65%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-center px-6 pt-28 pb-10">
        <div className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-yilnan-accentBorder bg-yilnan-accentSoft px-3.5 py-1.5 text-xs tracking-wide text-yilnan-accent backdrop-blur-sm"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-yilnan-accent" />
            A global group — technology · food · trade
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-yilnan-text sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We build and back ventures
            <br />
            <span className="text-yilnan-textFaint">—</span> and we build for{" "}
            <span className="text-yilnan-accent">you.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mb-10 max-w-xl text-lg leading-relaxed text-yilnan-textMuted"
          >
            Yilnan Global Concepts builds and backs ventures across technology,
            food, and trade — from Nigeria to partners and markets worldwide. We
            create our own products and build world-class software for businesses
            everywhere. Your idea. Our code.
          </motion.p>

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
              className="rounded-[10px] border border-yilnan-borderStrong px-7 py-3.5 text-sm font-medium text-yilnan-text backdrop-blur-sm transition hover:bg-yilnan-surface"
            >
              Start a project
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-14 flex max-w-2xl border-t border-yilnan-border pt-6"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex-1 ${i < stats.length - 1 ? "border-r border-yilnan-border" : ""} px-4 first:pl-0`}
            >
              <div className="text-3xl font-semibold tracking-tight text-yilnan-text sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-0.5 text-sm text-yilnan-textFaint">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}