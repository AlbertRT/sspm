import React from "react";
import { useTranslations, useMessages } from "next-intl";

export default function WhyUS() {
	const t = useTranslations("why_us");
	const messages = useMessages() as Record<string, any>;
	const whyUs = messages.why_us || {};

	// ambil semua key "item_" biar gak hardcode
	const items = Object.keys(whyUs)
		.filter((key) => key.startsWith("item_"))
		.sort((a, b) => Number(a.split("_")[1]) - Number(b.split("_")[1]));

	return (
		<section className="px-6 py-20 bg-gray-50" id="why-us">
			<div className="mx-auto max-w-6xl text-center">
				<h2 className="mb-12 text-3xl font-bold text-blue-900">
					{t("title")}
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{items.map((key) => (
						<div
							key={key}
							className="group rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-200"
						>
							<div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
								{t(`${key}.icon`)}
							</div>
							<p className="mb-2 font-semibold text-blue-950 text-lg">
								{t(`${key}.title`)}
							</p>
							<p className="text-sm text-gray-600 leading-relaxed">
								{t(`${key}.desc`)}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
