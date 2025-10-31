import Footer from "@/components/footer";
import HeroImmersive from "@/components/hero";
import Services from "@/components/services";
import VisiMisi from "@/components/visi-misi";
import { SERVICES, WHY_US } from "@/config/constant";

export default function Home() {


  return (
		<main className="flex flex-col bg-gradient-to-b from-gray-50 to-white text-gray-900">
			<HeroImmersive />

			{/* ===== WELCOME MESSAGE ===== */}
			<section className="px-6 py-20">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="mb-6 text-3xl font-bold text-blue-900">
						Welcome Message
					</h2>
					<p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
						Dalam perjalanan industri yang terus berubah cepat,
						kepercayaan menjadi fondasi yang paling berharga. PT
						Senara Stratava Pilar Mandiri hadir bukan hanya untuk
						memberi solusi, tetapi untuk menjadi pilar strategis
						yang membantu klien menghadapi risiko, membangun
						kepercayaan, dan memperkuat daya saing. Kami percaya
						bahwa setiap tantangan adalah peluang untuk tumbuh.
						Melalui integritas, inovasi, dan implementasi yang
						konsisten, Senara siap menjadi mitra transformasi bagi
						industri asuransi, sertifikasi, dan legalitas di
						Indonesia.{" "}
						<span className="block mt-4 font-medium">
							— Founder, PT Senara Stratava Pilar Mandiri
						</span>
					</p>
				</div>
			</section>

			{/* ===== VISION & MISSION ===== */}
			<VisiMisi />

			{/* ===== WHY US ===== */}
			<section className="px-6 py-20 bg-gray-50" id="why-us">
				<div className="mx-auto max-w-6xl text-center">
					<h2 className="mb-12 text-3xl font-bold text-blue-900">
						Mengapa Memilih Kami
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
						{WHY_US.map((i) => (
							<div
								key={i.title}
								className="group rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-200"
							>
								<div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
									{i.icon}
								</div>
								<p className="mb-2 font-semibold text-blue-950 text-lg">
									{i.title}
								</p>
								<p className="text-sm text-gray-600 leading-relaxed">
									{i.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== SERVICES (RINGKAS) ===== */}
			<Services />

			{/* ===== CONTACT ===== */}
			<Footer />
		</main>
  );
}
