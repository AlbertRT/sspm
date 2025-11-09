import { useTranslations } from "next-intl";
import React from "react";

export default function Collabs() {
	const t = useTranslations("collabs");
	return (
		<section className="bg-white py-20">
			<div className="max-w-5xl mx-auto px-6">
				<h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-12">
					{t("title")}
				</h2>

				<div className="relative border-l-2 border-blue-100 pl-8 space-y-10">
					{[
						"OSEAN TEKNINDO BERJAYA",
						"PT MITRA MATAHARI MARITIM",
						"WARNA WARNI MEDIA ADVERTISING",
						"PETRACO.ID",
						"PT MEGA HARAPAN INTERNASIONAL LOGISTIK",
						"PT FUSION NIAGA BOGA",
						"PT GEBARI MEDAN SEGARA",
						"PT IDE RAYA INDONESIA",
						"PT HELM CARE INDONESIA",
						"CINDO GROUP INDONESIA",
					].map((client, index) => (
						<div key={client} className="relative group">
							{/* Titik koneksi */}
							<span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-600 group-hover:bg-blue-600 transition-colors" />

							{/* Isi */}
							<div className="bg-blue-50 rounded-xl p-5 shadow-sm group-hover:shadow-md transition-all">
								<p className="text-blue-900 font-semibold text-lg">
									{client}
								</p>
								<p className="text-gray-600 text-sm mt-1">
									Kolaborasi dan dukungan berkelanjutan
									bersama mitra bisnis kami.
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
