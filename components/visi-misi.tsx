import React from "react";
import { useTranslations } from "next-intl";
import { useMessages } from "next-intl";


export default function VisiMisi() {
    const vision = useTranslations("vision");
    const mission = useTranslations("mission");

    const messages = useMessages() as Record<string, any>;
	const missionMessages = messages.mission || {};
	const missionKeys = Object.keys(missionMessages)
		.filter((key) => key.startsWith("points_"))
		.sort((a, b) => Number(a.split("_")[1]) - Number(b.split("_")[1]));


	return (
		<section
			className="bg-blue-950 px-6 py-24 text-white"
			id="vision-mission"
		>
			<div className="mx-auto max-w-5xl space-y-16">
				{/* VISI */}
				<div className="mx-auto max-w-4xl text-center space-y-6">
					<h3 className="inline-block text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
						{vision("title")}
					</h3>

					<div className="relative mx-auto max-w-2xl">
						<div className="absolute -inset-x-6 -top-4 h-1 bg-gradient-to-r from-yellow-400/40 via-yellow-300/60 to-yellow-400/40 blur-md" />
						<p className="relative text-base md:text-lg leading-relaxed text-gray-200/90">
							{vision("content")}
						</p>
					</div>
				</div>

				{/* MISI */}
				<div className="mx-auto max-w-5xl space-y-8">
					<h3 className="text-center text-xl font-semibold tracking-wide text-yellow-300">
						{mission("title")}
					</h3>

					<div className="grid gap-8 md:grid-cols-2">
						{missionKeys.map((key, i) => (
							<div
								key={key}
								className="group relative flex items-start gap-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-yellow-400/40"
							>
								<div className="relative flex-shrink-0">
									<span className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md" />
									<span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-300 font-semibold">
										{i + 1}
									</span>
								</div>

								<p className="text-gray-100 leading-relaxed">
									{mission(key)}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
