import Link from "next/link";
import { Button } from "@heroui/button";

export default function NotFoundPage() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white overflow-hidden">
			{/* Background Layers */}
			<div aria-hidden className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_0%,rgba(56,189,248,0.15),transparent_70%)]" />
				<div className="absolute inset-0 bg-[conic-gradient(from_200deg_at_60%_30%,rgba(250,204,21,.15),transparent_30%,rgba(99,102,241,.15)_55%,transparent_75%)] mix-blend-screen" />
				<div className="absolute inset-0 opacity-[0.05] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>')]" />
			</div>

			{/* Content */}
			<div className="relative z-10 mx-auto max-w-xl text-center px-6">
				<h1 className="text-[8rem] font-extrabold leading-none text-yellow-400 drop-shadow-lg">
					404
				</h1>
				<h2 className="mt-2 text-3xl font-semibold text-white">
					Halaman Tidak Ditemukan
				</h2>
				<p className="mt-4 text-white/70 text-base leading-relaxed">
					Kami tidak dapat menemukan halaman yang kamu cari. Mungkin
					sudah dipindahkan atau tautannya salah.
				</p>

				<div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
					<Button
						as={Link}
						href="/"
						size="lg"
						className="bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300"
					>
						Kembali ke Beranda
					</Button>
					
				</div>
			</div>
		</section>
	);
}
