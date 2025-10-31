import React from "react";
import { useTranslations } from "next-intl";

export default function WelcomeMessage() {
	const t = useTranslations("welcome_message");
	return (
		<section
			className="relative px-8 py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100"
			id="welcome-message"
		>
			<div className="mx-auto max-w-4xl space-y-10 text-center">
				<h2 className="text-3xl font-bold text-blue-900">
					{t("title")}
				</h2>

				<blockquote className="relative text-gray-700 text-lg leading-relaxed italic before:content-['“'] before:text-5xl before:text-yellow-400 before:absolute before:-left-6 before:-top-2 after:content-['”'] after:text-5xl after:text-yellow-400 after:absolute after:-right-4 after:bottom-0">
					Dalam industri yang terus berubah dengan cepat, kepercayaan
					adalah fondasi yang paling berharga. Kami hadir bukan
					sekadar untuk memberi solusi, melainkan menjadi pilar
					strategis bagi mitra kami.
				</blockquote>

				<p className="text-gray-700 text-lg leading-relaxed">
					Kami percaya bahwa setiap tantangan adalah peluang untuk
					tumbuh. Dengan{" "}
					<span className="font-medium text-blue-900">
						integritas, inovasi, dan implementasi
					</span>
					, Senara siap menjadi mitra transformasi bagi industri
					asuransi, sertifikasi, dan legalitas di Indonesia.
				</p>

				<div className="pt-6 border-t border-gray-300">
					<p className="font-semibold text-blue-900">Hormat kami,</p>
					<p className="text-gray-600">
						Founder, PT Senara Stratava Pilar Mandiri
					</p>
				</div>
			</div>
		</section>
	);
}
