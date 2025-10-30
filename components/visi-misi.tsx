import { VISI_MISI } from "@/config/constant";
import React from "react";

export default function VisiMisi() {
	return (
		<section className="bg-blue-950 px-6 py-24 text-white">
			<div className="mx-auto max-w-5xl space-y-16">
				{/* TITLE */}
				<div className="text-center">
					<h2 className="text-3xl font-bold text-yellow-400">
						Visi & Misi
					</h2>
				</div>

				{/* VISI */}
				<div className="mx-auto max-w-4xl text-center space-y-5">
					<h3 className="text-xl font-semibold tracking-wide text-yellow-300">
						Visi
					</h3>
					<p className="text-gray-200 leading-relaxed">
						Menjadi arsitek strategi transformasi industri asuransi,
						sertifikasi, dan legalitas melalui pendekatan
						terintegrasi, adaptif, dan berorientasi masa depan, yang
						memperkuat pilar kepercayaan dan daya saing nasional.
					</p>
				</div>

				{/* MISI */}
				<div className="mx-auto max-w-5xl space-y-8">
					<h3 className="text-center text-xl font-semibold tracking-wide text-yellow-300">
						Misi
					</h3>
					<div className="grid gap-6 md:grid-cols-2">
						{[0, 1].map((col) => (
							<ul key={col} className="space-y-4">
								{VISI_MISI.slice(col * 3, col * 3 + 3).map(
									(item, index) => (
										<li
											key={index + col * 3}
											className="group relative flex items-start gap-3 rounded-xl bg-white/5 p-5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-yellow-400/40"
										>
											<span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-300 font-semibold group-hover:bg-yellow-400/40">
												{index + 1 + col * 3}
											</span>
											<p className="text-gray-100 leading-relaxed">
												{item}
											</p>
										</li>
									)
								)}
							</ul>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
