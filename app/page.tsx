import HeroImmersive from "@/components/hero";
import VisiMisi from "@/components/visi-misi";

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
			<section className="px-6 py-20">
				<div className="mx-auto max-w-6xl text-center">
					<h2 className="mb-12 text-3xl font-bold text-blue-900">
						Mengapa Memilih Kami
					</h2>
					<div className="grid grid-cols-2 gap-6 md:grid-cols-5">
						{[
							{
								title: "Integritas",
								desc: "Kejujuran dan tanggung jawab di setiap keputusan.",
							},
							{
								title: "Inovasi",
								desc: "Pendekatan adaptif berbasis data & teknologi.",
							},
							{
								title: "Implementasi",
								desc: "Strategi nyata, bukan sekadar teori.",
							},
							{
								title: "Kredibilitas",
								desc: "Rekam jejak terpercaya lintas industri.",
							},
							{
								title: "Fleksibilitas",
								desc: "Solusi yang menyesuaikan kebutuhan Anda.",
							},
						].map((i) => (
							<div
								key={i.title}
								className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl"
							>
								<p className="mb-2 font-semibold text-blue-950">
									{i.title}
								</p>
								<p className="text-sm text-gray-600">
									{i.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== SERVICES (RINGKAS) ===== */}
			<section className="bg-gray-50 px-6 py-20">
				<div className="mx-auto max-w-6xl text-center">
					<h2 className="mb-12 text-3xl font-bold text-blue-900">
						Layanan Kami
					</h2>
					<div className="grid gap-8 md:grid-cols-3 text-left">
						{[
							{
								title: "Konsultasi Asuransi & Risiko",
								desc: "Solusi strategis untuk pengelolaan risiko bisnis — dari energi, properti, marine hingga cyber & kesehatan.",
								items: [
									"Energi & Properti",
									"Marine & Cargo",
									"Kesehatan & Managed Care",
									"Cyber Risk & Event Cancellation",
								],
							},
							{
								title: "Sertifikasi & Standarisasi",
								desc: "Mendukung kepatuhan dan reputasi bisnis melalui ISO, SNI, CE, HACCP, dan sertifikasi sektor industri.",
								items: [
									"ISO 9001–27001",
									"SNI, CE, HACCP, Halal",
									"Green Building & Ecolabel",
									"Sertifikasi Sektor Energi & Kesehatan",
								],
							},
							{
								title: "Legalitas Usaha",
								desc: "Membantu pembuatan badan usaha (CV/PT), perizinan, dan dokumen hukum untuk bisnis yang kredibel.",
								items: [
									"Pendirian CV & PT",
									"Perizinan & OSS",
									"Dokumen Kepatuhan Bisnis",
								],
							},
						].map((srv) => (
							<div
								key={srv.title}
								className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-black/5"
							>
								<div className="mb-4 h-1 w-16 bg-yellow-400" />
								<h3 className="mb-3 text-xl font-semibold text-blue-950">
									{srv.title}
								</h3>
								<p className="mb-4 text-sm text-gray-600">
									{srv.desc}
								</p>
								<ul className="ml-4 list-disc text-sm text-gray-700 space-y-1">
									{srv.items.map((i) => (
										<li key={i}>{i}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== CONTACT ===== */}
			<section className="px-6 py-20 text-center">
				<h2 className="mb-6 text-3xl font-bold text-blue-900">
					Hubungi Kami
				</h2>
				<p className="mx-auto mb-6 max-w-2xl leading-relaxed text-gray-700">
					Office Tower 3 Level 16 Suite 30, Ciputra Internasional
					<br />
					Jl. Lingkar Luar Barat 11 No.101, Rawa Buaya, Cengkareng,
					Jakarta Barat 11740
				</p>
				<p className="mb-8 text-lg font-semibold text-blue-950">
					0859-2111-1881 • erick@sspm.co.id • www.sspm.co.id
				</p>
			</section>
		</main>
  );
}
