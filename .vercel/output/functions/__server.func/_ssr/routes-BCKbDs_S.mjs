import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RefreshCw, c as HardDrive, i as ShieldCheck, l as Fan, o as PanelTop, r as Timer, s as Monitor, t as Wrench, u as Cpu } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BCKbDs_S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		title: "Windows format & backup",
		price: "From $79",
		detail: "Clean install, driver pass, and your files copied off before anything is wiped.",
		icon: RefreshCw
	},
	{
		title: "Hinge repair",
		price: "From $69",
		detail: "Loose lids, cracked barrels, and covers that no longer sit flush.",
		icon: PanelTop
	},
	{
		title: "Screen replacement",
		price: "From $89",
		detail: "Cracked glass, lines, flicker, or a panel that stays black.",
		icon: Monitor
	},
	{
		title: "RAM & storage upgrade",
		price: "From $49 labor",
		detail: "More memory or a faster SSD, sized to the machine you already own.",
		icon: HardDrive
	},
	{
		title: "System cleaning",
		price: "From $59",
		detail: "Dust out of fans and heatsinks so the machine stops throttling itself.",
		icon: Fan
	},
	{
		title: "Thermal paste replacement",
		price: "From $45",
		detail: "Fresh compound on the CPU (and GPU where it matters) after the old paste has dried out.",
		icon: Cpu
	}
];
var steps = [
	{
		n: "01",
		title: "Drop it off",
		body: "Tell us what broke. We log the device and anything you want preserved."
	},
	{
		n: "02",
		title: "A written quote",
		body: "Parts and labor before work starts. You approve, or you walk."
	},
	{
		n: "03",
		title: "Bench work",
		body: "Repair on the bench the same day when parts are in stock."
	},
	{
		n: "04",
		title: "Pickup test",
		body: "You see it running before you pay. 30-day warranty on labor."
	}
];
function Home() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-line bg-surface/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "font-display text-xl font-semibold tracking-tight",
							children: "ForgeDesk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-6 text-sm font-medium text-muted md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#services",
									className: "hover:text-ink",
									children: "Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how",
									className: "hover:text-ink",
									children: "How it works"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#visit",
									className: "hover:text-ink",
									children: "Visit"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							className: "inline-flex min-h-11 items-center rounded-full bg-copper px-4 text-sm font-semibold text-on-copper",
							children: "Book a repair"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-[0.18em] text-copper-deep",
								children: "Computer & laptop repair"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-display text-5xl leading-[1.05] font-semibold tracking-tight md:text-6xl",
								children: "Fixed on the bench. Not shipped away."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-lg text-muted",
								children: "Formats, hinges, screens, upgrades, and the heat that makes a laptop scream. Quoted before we open a screw."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#book",
									className: "inline-flex min-h-12 items-center rounded-full bg-char px-6 font-semibold text-on-char",
									children: "Request a quote"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+15550142080",
									className: "inline-flex min-h-12 items-center rounded-full border border-line bg-surface px-6 font-semibold",
									children: "(555) 014-2080"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-copper" }), " 30-day labor warranty"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "size-4 text-copper" }), " Same-day when parts are in"]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
							className: "overflow-hidden rounded-card border border-line shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/bench.jpg",
								alt: "Open laptop and repair tools on a wooden bench",
								className: "aspect-[16/10] w-full object-cover"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "services",
						className: "border-y border-line bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl font-semibold tracking-tight",
									children: "What we repair"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted",
									children: "Six jobs we do every week. Prices are starting points — the quote includes parts before you say yes."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
								children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-card border border-line bg-bg p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
											className: "size-5 text-copper",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 font-display text-2xl font-semibold tracking-tight",
											children: s.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm font-semibold text-copper-deep",
											children: s.price
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-muted",
											children: s.detail
										})
									]
								}, s.title))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "how",
						className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
							className: "overflow-hidden rounded-card border border-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/hinge.jpg",
								alt: "Laptop hinge parts and small repair tools on a mat",
								className: "aspect-[4/3] w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-semibold tracking-tight",
							children: "How a job goes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 space-y-6",
							children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[3rem_1fr] gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg text-copper",
									children: step.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: step.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: step.body
								})] })]
							}, step.n))
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "book",
						className: "border-t border-line bg-char text-on-char",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl font-semibold tracking-tight",
									children: "Tell us the machine"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-md text-on-char/80",
									children: "Model, what failed, and how soon you need it. We reply with a time and a ballpark before you leave the house."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									id: "visit",
									className: "mt-10 space-y-4 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-semibold",
											children: "Bench"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-on-char/75",
											children: "418 Copper Lane, Suite 2"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-semibold",
											children: "Hours"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-on-char/75",
											children: "Mon–Sat, 10:00–18:00"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-semibold",
											children: "Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+15550142080",
											className: "underline decoration-copper underline-offset-4",
											children: "(555) 014-2080"
										}) })] })
									]
								})
							] }), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-h-80 flex-col justify-center rounded-card bg-surface p-8 text-ink",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "size-6 text-copper" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-display text-3xl font-semibold",
										children: "Request noted."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-muted",
										children: "This preview stores the note on this page only. Swap in your real phone and email when you publish."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSent(false),
										className: "mt-6 inline-flex min-h-11 w-fit items-center rounded-full bg-char px-5 text-sm font-semibold text-on-char",
										children: "Send another"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit,
								className: "grid gap-4 rounded-card bg-surface p-6 text-ink sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1 text-sm font-medium",
										children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											name: "name",
											className: "min-h-11 rounded-xl border border-line bg-bg px-3"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1 text-sm font-medium",
										children: ["Device", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											name: "device",
											placeholder: "ThinkPad T14, 2021",
											className: "min-h-11 rounded-xl border border-line bg-bg px-3"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1 text-sm font-medium",
										children: ["Service", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "service",
											required: true,
											className: "min-h-11 rounded-xl border border-line bg-bg px-3",
											defaultValue: "",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												children: "Choose one"
											}), services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s.title }, s.title))]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1 text-sm font-medium",
										children: ["What happened", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											required: true,
											name: "note",
											rows: 4,
											className: "rounded-xl border border-line bg-bg px-3 py-2"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "inline-flex min-h-12 items-center justify-center rounded-full bg-copper font-semibold text-on-copper",
										children: "Request a quote"
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line px-5 py-8 text-sm text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-base text-ink",
						children: "ForgeDesk Repair"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Computers and laptops. Quoted before the first screw." })]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
