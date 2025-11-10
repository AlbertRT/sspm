import React from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("contact_us");

	return (
		<section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-20 text-center">
			<div className="max-w-4xl mx-auto space-y-6">
				<h2 className="text-3xl font-bold text-yellow-400">
					{t("title")}
				</h2>

				<div className="px-4 md:px-0 lg:px-0">
					<p className="text-gray-200 leading-relaxed">
						Office Tower 3 Level 16 Suite 39, Ciputra Internasional
						<br />
						Jl. Lingkar Luar Barat No.101, Rawa Buaya, Cengkareng,
						Jakarta Barat 11740
					</p>
				</div>

				<div className="text-lg font-medium text-gray-100 space-y-2">
					<p>📞 0859-2111-1881</p>
					<p>✉️ erick@sspm.co.id</p>
					<a
						href="https://maps.app.goo.gl/D3thVx1hPgkdqEuS8"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 bg-yellow-400 text-blue-950 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors mt-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
							/>
						</svg>
						{t("maps")}
					</a>
				</div>

				<p className="text-sm text-gray-400">
					© {new Date().getFullYear()} PT Senara Stratava Pilar
					Mandiri. All rights reserved.
				</p>
			</div>
		</section>
	);
}
