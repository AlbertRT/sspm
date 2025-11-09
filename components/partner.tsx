import { PARTNERS } from "@/config/constant";
import { useTranslations } from "next-intl";
import React from "react";

export default function Partner() {
	const p = useTranslations("partners");
	return (
		<section className="px-6 py-20 bg-white">
			<div className="mx-auto max-w-6xl text-center">
				<h2 className="mb-10 text-3xl font-bold text-blue-900">
					{p("title")}
				</h2>
				<div className="flex flex-wrap items-center justify-center gap-10">
					{PARTNERS.map((src) => (
						<div
							key={src}
							className="h-16 flex items-center justify-center"
						>
							<img
								src={`/partners/${src}`}
								alt="partner logo"
								className="h-full w-auto object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
