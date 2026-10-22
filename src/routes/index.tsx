import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Cpu,
  Fan,
  HardDrive,
  Monitor,
  PanelTop,
  RefreshCw,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const services = [
  {
    title: "Windows format & backup",
    price: "From RM79",
    detail: "Clean install, driver pass, and your files copied off before anything is wiped.",
    icon: RefreshCw,
  },
  {
    title: "Hinge repair",
    price: "From RM69",
    detail: "Loose lids, cracked barrels, and covers that no longer sit flush.",
    icon: PanelTop,
  },
  {
    title: "Screen replacement",
    price: "From RM89",
    detail: "Cracked glass, lines, flicker, or a panel that stays black.",
    icon: Monitor,
  },
  {
    title: "RAM & storage upgrade",
    price: "From RM49 labor",
    detail: "More memory or a faster SSD, sized to the machine you already own.",
    icon: HardDrive,
  },
  {
    title: "System cleaning",
    price: "From RM59",
    detail: "Dust out of fans and heatsinks so the machine stops throttling itself.",
    icon: Fan,
  },
  {
    title: "Thermal paste replacement",
    price: "From RM45",
    detail: "Fresh compound on the CPU (and GPU where it matters) after the old paste has dried out.",
    icon: Cpu,
  },
];

const steps = [
  { n: "01", title: "Drop it off", body: "Tell us what broke. We log the device and anything you want preserved." },
  { n: "02", title: "A written quote", body: "Parts and labor before work starts. You approve, or you walk." },
  { n: "03", title: "Bench work", body: "Repair on the bench the same day when parts are in stock." },
  { n: "04", title: "Pickup test", body: "You see it running before you pay. 30-day warranty on labor." },
];

function Home() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-bg text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight">
            FirdausTech
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
            <a href="#services" className="hover:text-ink">Services</a>
            <a href="#how" className="hover:text-ink">How it works</a>
            <a href="#visit" className="hover:text-ink">Visit</a>
          </nav>
          <a
            href="#book"
            className="inline-flex min-h-11 items-center rounded-full bg-copper px-4 text-sm font-semibold text-on-copper"
          >
            Book a repair
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper-deep">
              Computer & laptop repair
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
              Fixed on the bench. Not shipped away.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">
              Formats, hinges, screens, upgrades, and the heat that makes a laptop scream. Quoted before we open a screw.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-flex min-h-12 items-center rounded-full bg-char px-6 font-semibold text-on-char"
              >
                Request a quote
              </a>
              <a
                href="tel:+60105390137"
                className="inline-flex min-h-12 items-center rounded-full border border-line bg-surface px-6 font-semibold"
              >
                +60 10-539 0137
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <li className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-copper" /> 30-day labor warranty</li>
              <li className="inline-flex items-center gap-2"><Timer className="size-4 text-copper" /> Same-day when parts are in</li>
            </ul>
          </div>
          <figure className="overflow-hidden rounded-card border border-line shadow-sm">
            <img
              src="/bench.jpg"
              alt="Open laptop and repair tools on a wooden bench"
              className="aspect-[16/10] w-full object-cover"
            />
          </figure>
        </section>

        <section id="services" className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl font-semibold tracking-tight">What we repair</h2>
              <p className="mt-3 text-muted">
                Six jobs we do every week. Prices are starting points — the quote includes parts before you say yes.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s.title} className="rounded-card border border-line bg-bg p-6">
                  <s.icon className="size-5 text-copper" aria-hidden />
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-copper-deep">{s.price}</p>
                  <p className="mt-2 text-muted">{s.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <figure className="overflow-hidden rounded-card border border-line">
            <img
              src="/hinge.jpg"
              alt="Laptop hinge parts and small repair tools on a mat"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight">How a job goes</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((step) => (
                <li key={step.n} className="grid grid-cols-[3rem_1fr] gap-3">
                  <span className="font-display text-lg text-copper">{step.n}</span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="book" className="border-t border-line bg-char text-on-char">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-tight">Tell us the machine</h2>
              <p className="mt-3 max-w-md text-on-char/80">
                Model, what failed, and how soon you need it. We reply with a time and a ballpark before you leave the house.
              </p>
              <dl id="visit" className="mt-10 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold">Bench</dt>
                  <dd className="text-on-char/75">Lorong Raudah, Kampung Tok Jembal, 21300 Kuala Nerus, Terengganu</dd>
                </div>
                <div>
                  <dt className="font-semibold">Hours</dt>
                  <dd className="text-on-char/75">Mon–Sat, 10:00–18:00</dd>
                </div>
                <div>
                  <dt className="font-semibold">Phone</dt>
                  <dd>
                    <a href="tel:+60105390137" className="underline decoration-copper underline-offset-4">
                      +60 10-539 0137
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 overflow-hidden rounded-card border border-line/40">
                <iframe
                  title="FirdausTech on Google Maps"
                  src="https://maps.google.com/maps?q=5.3870196,103.0985394&z=17&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/Cm9PYjeEwgce6wAd9"
                className="mt-3 inline-flex text-sm underline decoration-copper underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </div>

            {sent ? (
              <div className="flex min-h-80 flex-col justify-center rounded-card bg-surface p-8 text-ink">
                <Wrench className="size-6 text-copper" />
                <p className="mt-4 font-display text-3xl font-semibold">Request noted.</p>
                <p className="mt-2 text-muted">
                  This preview stores the note on this page only. Swap in your real phone and email when you publish.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 inline-flex min-h-11 w-fit items-center rounded-full bg-char px-5 text-sm font-semibold text-on-char"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 rounded-card bg-surface p-6 text-ink sm:p-8">
                <label className="grid gap-1 text-sm font-medium">
                  Name
                  <input required name="name" className="min-h-11 rounded-xl border border-line bg-bg px-3" />
                </label>
                <label className="grid gap-1 text-sm font-medium">
                  Device
                  <input required name="device" placeholder="ThinkPad T14, 2021" className="min-h-11 rounded-xl border border-line bg-bg px-3" />
                </label>
                <label className="grid gap-1 text-sm font-medium">
                  Service
                  <select name="service" required className="min-h-11 rounded-xl border border-line bg-bg px-3" defaultValue="">
                    <option value="" disabled>Choose one</option>
                    {services.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1 text-sm font-medium">
                  What happened
                  <textarea required name="note" rows={4} className="rounded-xl border border-line bg-bg px-3 py-2" />
                </label>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-copper font-semibold text-on-copper"
                >
                  Request a quote
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-8 text-sm text-muted">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <p className="font-display text-base text-ink">FirdausTech Repair</p>
          <p>Computers and laptops. Quoted before the first screw.</p>
        </div>
      </footer>
    </div>
  );
}
