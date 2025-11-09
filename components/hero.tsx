import { useTranslations } from "next-intl";


export default function HeroImmersive() {
	const t = useTranslations("hero");

	return (
		<section className="relative isolate min-h-screen w-full overflow-hidden bg-slate-950 text-white">
			{/* BACKGROUND LAYERS */}
			<div aria-hidden className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
				<div className="absolute inset-0 opacity-[0.06] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>')]" />
			</div>

			{/* CONTENT */}
			<div className="relative mx-auto flex max-w-7xl flex-col items-start px-5 pb-24 pt-28 sm:px-8 md:px-10 lg:px-12 xl:px-16">
				<div className="w-full">
					{/* Tagline */}
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] sm:text-xs tracking-wide text-white/80 backdrop-blur">
						<span className="inline-block h-1 w-1 rounded-full bg-emerald-400" />
						{t("subtitle")}
					</div>

					{/* Headline */}
					<h1 className="leading-tight text-balance">
						<SplitLine>
							<span className="block text-4xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl">
								{t("title").split(",")[0]},
							</span>
						</SplitLine>
						<SplitLine>
							<span className="block text-4xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl">
								{t("title").split(",")[1]}
							</span>
						</SplitLine>
						<SplitLine>
							<span className="block text-4xl font-extrabold text-yellow-400 sm:text-6xl md:text-7xl lg:text-8xl">
								{t("title").split(",")[2]}
							</span>
						</SplitLine>
					</h1>

					{/* Subheadline */}
					<p className="mt-5 max-w-md sm:max-w-lg md:max-w-2xl text-sm sm:text-base text-white/70">
						{t("tagline")}
					</p>

					{/* Buttons */}
					<div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
						<a
							href="#services"
							className="group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium ring-1 ring-white/15 transition hover:bg-white hover:text-slate-900"
						>
							{t("cta_1")}
							<span className="-mr-1 transition-transform group-hover:translate-x-0.5">
								→
							</span>
						</a>
						<a
							href="https://wa.me/+62085921111881"
							className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300"
						>
							{t("cta_2")}
						</a>
					</div>
				</div>

				<AccentBeams />
			</div>
		</section>
	);
}

// --- Helpers ---
function SplitLine({ children }: { children: React.ReactNode }) {
	return (
		<span className="relative inline-block">
			{children}
			<span className="absolute -bottom-2 left-0 h-[3px] w-0 bg-yellow-400 transition-[width] duration-500 ease-out hover:w-full" />
		</span>
	);
}

function AccentBeams() {
	return (
		<div
			aria-hidden
			className="pointer-events-none absolute inset-x-0 top-10 mx-auto max-w-7xl"
		>
			<div className="relative h-48">
				<div className="absolute left-10 top-0 h-48 w-1/2 -rotate-6 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-transparent blur-2xl" />
				<div className="absolute right-10 top-5 h-48 w-1/2 rotate-6 bg-gradient-to-l from-yellow-400/0 via-yellow-400/20 to-transparent blur-2xl" />
			</div>
		</div>
	);
}
