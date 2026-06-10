import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import warrior from "@/assets/spartan-warrior.jpg";
import { SpartanCursor } from "@/components/SpartanCursor";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "300 Spartan Leads — We Don't Get Paid Until You Win" },
      { name: "description", content: "Performance-based lead generation exclusively for US freight, 3PL, trucking and logistics operators. $500 fully refundable. Pay $2,000 only when a shipper signs." },
      { property: "og:title", content: "300 Spartan Leads — We Eat When You Eat" },
      { property: "og:description", content: "Performance-based shipper lead generation for freight operators. Zero retainer. $500 refundable. Pay only when you win." },
    ],
  }),
  component: Landing,
});

const EMAIL = "zazu@300spartanleads.com";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-bold tracking-wider">
          <span className="text-blood">300</span>
          <span className="ml-2 text-white">SPARTAN LEADS</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {[
            ["How It Works", "#how"],
            ["Pricing", "#pricing"],
            ["Who We Serve", "#who"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="font-label text-xs text-white/70 transition hover:text-gold">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-spartan text-xs"><span>Deploy Now</span></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 grain">
      {/* ambient red glow */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8102E 0%, transparent 70%)" }}
      />
      {/* huge ghost lambda watermark */}
      <div
        className="font-display pointer-events-none absolute inset-0 flex items-center justify-center text-[60vw] font-bold leading-none text-white/[0.03] select-none lg:text-[40vw]"
        aria-hidden
      >
        Λ
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-20 lg:py-32">
        <Reveal>
          <div className="font-label inline-flex items-center gap-3 text-xs text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Performance-Based Lead Generation For Logistics
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-display mt-10 text-6xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[9rem]">
            We Don't<br />Get Paid<br /><span className="text-blood">Until You Win.</span>
          </h1>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-white/65">
            Built For Freight Operators That Close Big. We Eat When You Eat. Start with a fully refundable{" "}
            <span className="font-semibold text-white">$500 commitment</span> — we get to work immediately, and if we don't deliver a qualified shipper, you get every cent back.
          </p>
        </Reveal>
        <Reveal delay={380}>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a href="#contact" className="btn-spartan text-sm"><span>Start Winning Clients</span></a>
            <a href="#how" className="btn-ghost-spartan text-xs">See How It Works →</a>
          </div>
        </Reveal>
        <Reveal delay={520}>
          <div className="font-label mt-16 flex flex-wrap gap-x-10 gap-y-3 text-[10px] text-white/40">
            <span>★ Zero Retainer</span>
            <span>★ $500 Refundable</span>
            <span>★ Pay Per Closed Client</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    "Zero Retainer", "$500 Fully Refundable", "Pay Per Shipper Client",
    "Freight Brokers", "3PLs", "Last Mile Delivery",
    "We Eat When You Eat", "Zero Risk", "Pure Results", "300 Spartan Leads",
  ];
  const row = [...items, ...items];
  return (
    <div className="bg-blood border-y border-black/30 py-5 overflow-hidden">
      <div className="flex w-max animate-ticker whitespace-nowrap font-label text-sm font-semibold text-white">
        {row.map((t, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            {t}
            <span className="text-white/50">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Problem() {
  const pains = [
    "Growing on referrals — until they dry up",
    "Chasing unqualified leads while good contracts go to competitors",
    "No system to replace the pipeline when it dies",
  ];
  return (
    <section className="border-b border-white/5 bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-label text-xs text-blood">[ The Problem ]</div>
          <h2 className="font-display mt-6 max-w-3xl text-5xl font-bold uppercase leading-[1] text-white sm:text-6xl lg:text-7xl">
            Your Pipeline Is<br /><span className="text-blood">Leaking Revenue.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="reveal-card flex h-full flex-col justify-between bg-black p-10">
                <div className="font-display text-5xl font-bold text-white/10">0{i + 1}</div>
                <p className="mt-12 text-lg leading-snug text-white">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400}>
          <p className="font-display mt-16 text-3xl text-white sm:text-4xl">
            We <span className="text-blood">fix</span> that.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "We Identify Your Shippers", d: "Research and qualify decision makers at companies actively moving freight." },
    { n: "02", t: "We Launch The Campaign", d: "Cold email sequences plus personalised Loom video showing prospects their exact problem." },
    { n: "03", t: "You Close. You Pay.", d: "Verify the shipper, close the contract, then pay us $2,000. If we don't deliver, your $500 comes straight back." },
  ];
  return (
    <section id="how" className="relative border-b border-white/5 bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-label text-xs text-gold">[ How It Works ]</div>
          <h2 className="font-display mt-6 max-w-3xl text-5xl font-bold uppercase leading-[1] text-white sm:text-6xl">
            Three Moves. <span className="text-blood">One Outcome.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 140}>
              <div className="reveal-card relative h-full p-10 pt-16">
                <div
                  className="font-display pointer-events-none absolute right-4 top-2 text-[10rem] font-bold leading-none text-white/[0.04]"
                  aria-hidden
                >
                  {s.n}
                </div>
                <div className="font-label text-xs text-blood">Step {s.n}</div>
                <h3 className="font-display mt-6 text-3xl font-bold uppercase text-white">{s.t}</h3>
                <p className="mt-6 text-white/60 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { t: "Discovery Call", d: "We learn your ideal shipper profile." },
    { t: "SEO Audit", d: "We audit prospects before outreach using SEOptimer." },
    { t: "Personalised Loom Video", d: "90 seconds showing the prospect exactly what's costing them contracts." },
    { t: "Qualified Meetings", d: "Booked directly into your calendar ready to close." },
  ];
  return (
    <section className="border-b border-white/5 bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-label text-xs text-gold">[ Our Process ]</div>
          <h2 className="font-display mt-6 max-w-3xl text-5xl font-bold uppercase text-white sm:text-6xl">
            The <span className="text-blood">Phalanx</span> Playbook.
          </h2>
        </Reveal>
        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-blood/0 via-blood/50 to-blood/0 md:block" />
          <div className="grid gap-12 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center border border-blood bg-black font-display text-xl font-bold text-blood">
                    {i + 1}
                  </div>
                  <h3 className="font-display mt-6 text-xl font-bold uppercase text-white">{s.t}</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const features = [
    "$500 refundable deposit to deploy the campaign — returned in full if we don't deliver",
    "Full outreach campaign — research, copy, execution",
    "Freight and logistics decision makers only",
    "Personalised Loom video for every prospect",
    "No lock-in contract. No setup fee. No retainer.",
    "You verify the shipper before we raise the $2,000 invoice",
  ];
  const valueRows = [
    ["Your Commitment To Start", "$500", "(fully refundable)"],
    ["Fee Per Closed Client", "$2,000", ""],
    ["Average Freight Contract Value", "$50K–$500K", "/ yr"],
    ["Your Risk If We Fail", "$0", ""],
    ["ROI On First Client", "25x", "minimum"],
  ];
  return (
    <section id="pricing" className="border-b border-white/5 bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-label text-xs text-gold">[ Pricing ]</div>
          <h2 className="font-display mt-6 max-w-4xl text-5xl font-bold uppercase leading-[1] text-white sm:text-6xl">
            Skin In The Game. <span className="text-blood">Both Sides.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <div className="relative bg-[#0a0a0a] p-10 lg:p-12">
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, var(--blood), var(--gold))" }}
              />
              <div className="font-label inline-block border border-blood/60 px-3 py-1 text-[10px] text-blood">
                Performance Pricing
              </div>
              <h3 className="font-display mt-8 text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
                Start For <span className="text-gold">$500</span>.<br />
                Pay <span className="text-blood">$2,000</span> Only When You Win.
              </h3>

              <ul className="mt-10 space-y-5">
                {features.map((f) => (
                  <li key={f} className="flex gap-4 text-white/80">
                    <span className="mt-2 h-px w-6 flex-shrink-0 bg-blood" />
                    <span className="text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-spartan mt-10 w-full text-sm"><span>Deploy 300 Spartan Leads</span></a>

              <p className="font-label mt-6 text-center text-[11px] text-gold">
                ★ If we don't deliver a qualified shipper, your $500 is returned. No questions asked.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex h-full flex-col justify-center">
              <div className="font-label text-xs text-white/40">[ The Math ]</div>
              <h3 className="font-display mt-4 text-3xl font-bold uppercase text-white sm:text-4xl">
                One Shipper Pays For <span className="text-blood">Everything.</span>
              </h3>
              <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {valueRows.map(([label, value, suffix]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4 py-5">
                    <div className="font-label text-xs text-white/50">{label}</div>
                    <div className="text-right">
                      <span className="font-display text-3xl font-bold text-white">{value}</span>
                      {suffix && <span className="ml-2 text-xs text-white/40">{suffix}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-label mt-8 text-xs leading-relaxed text-white/50">
                We don't sell hours. We don't sell promises. We sell qualified shipper meetings — and we only get paid when one of them signs.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhoWeServe() {
  const cards = [
    { icon: "🚛", t: "Freight Brokers", d: "Connecting shippers and carriers, always hunting new shipper accounts." },
    { icon: "📦", t: "3PL Companies", d: "Third party logistics operators scaling their client base." },
    { icon: "🚚", t: "Trucking Companies", d: "Owner operators and fleets looking for consistent freight contracts." },
    { icon: "🏭", t: "Warehousing & Distribution", d: "Facilities needing consistent volume commitments." },
  ];
  return (
    <section id="who" className="border-b border-white/5 bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-label text-xs text-gold">[ Who We Serve ]</div>
          <h2 className="font-display mt-6 max-w-3xl text-5xl font-bold uppercase text-white sm:text-6xl">
            Logistics. <span className="text-blood">Period.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/60">
            One niche. One market. One message. If you don't move freight, this isn't for you.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <div className="reveal-card h-full p-8">
                <div className="text-4xl">{c.icon}</div>
                <h3 className="font-display mt-8 text-xl font-bold uppercase text-white">{c.t}</h3>
                <p className="mt-4 text-sm text-white/60 leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-40 grain"
      style={{ background: "linear-gradient(180deg, #1a0207 0%, #4a0612 50%, #1a0207 100%)" }}
    >
      <div
        className="font-display pointer-events-none absolute inset-0 flex items-center justify-center text-[14vw] font-bold leading-none text-black/20 select-none"
        aria-hidden
      >
        ΜΟΛΩΝ ΛΑΒΕ
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="font-label text-xs text-gold">[ The Manifesto ]</div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mt-8 text-5xl font-bold uppercase leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Most Freight Operators Grow On Referrals.<br />
            <span className="text-white/60">Until They Don't.</span>
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            When that pipeline dries up there's no system to replace it. We build that system. Vetted shipper clients delivered consistently. Start with a <span className="font-semibold text-white">$500 fully refundable commitment</span> — you pay $2,000 only when a shipper signs.
            <br /><br />
            <span className="text-white">Zero retainer. Zero risk. If we don't deliver, your $500 comes back. No questions.</span>
          </p>
        </Reveal>
        <Reveal delay={400}>
          <a
            href={`mailto:${EMAIL}`}
            className="font-label mt-12 inline-flex items-center gap-3 bg-white px-10 py-5 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-gold"
          >
            Email Zazu Directly →
          </a>
          <div className="font-label mt-6 text-xs text-white/60">{EMAIL}</div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-6 text-center md:grid-cols-3 md:text-left">
        <div className="font-display font-bold tracking-wider">
          <span className="text-blood">300</span>
          <span className="ml-2 text-white">SPARTAN LEADS</span>
        </div>
        <div className="font-label text-xs text-white/40 md:text-center">
          © 2026 300 Spartan Leads. All rights reserved.
        </div>
        <a
          href={`mailto:${EMAIL}`}
          className="font-label text-xs text-white/60 transition hover:text-gold md:text-right"
        >
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SpartanCursor />
      <Nav />
      <Hero />
      <Ticker />
      <Problem />
      <HowItWorks />
      <Process />
      <Pricing />
      <WhoWeServe />
      <Manifesto />
      <Footer />
    </div>
  );
}
