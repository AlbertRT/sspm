"use client";
import { useState } from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Services } from "@/types";

export const SERVICES: Services[] = [
	{
		title: "Konsultasi Asuransi & Manajemen Risiko",
		desc: "Solusi menyeluruh untuk pengelolaan risiko bisnis di berbagai sektor industri.",
		details: [
			{
				category: "Asuransi Energi",
				items: [
					"Risiko Pertambangan",
					"Migas (Minyak & Gas Bumi)",
					"Pembangkit Listrik Konvensional & Utilitas",
					"Energi Terbarukan & Alternatif",
				],
			},
			{
				category: "Asuransi Properti",
				items: [
					"Properti / Industri Semua Risiko",
					"Gangguan Usaha (Business Interruption)",
					"Terorisme & Sabotase",
					"Kerusakan Mesin (Machinery Breakdown)",
				],
			},
			{
				category: "Asuransi Kelautan",
				items: [
					"Risiko Pembangunan Kapal / Perbaikan Kapal",
					"Protection & Indemnity",
					"Asuransi Kapal (Marine Hull)",
					"Asuransi Kargo Laut (Marine Cargo)",
				],
			},
			{
				category: "Asuransi Kesehatan",
				items: [
					"Sistem Indemnity / Managed Care",
					"Asuransi Kesehatan Swasta",
					"Koordinasi Manfaat BPJS (COB BPJS)",
					"Rawat Inap, Rawat Jalan, Gigi, Kacamata, Melahirkan",
				],
			},
			{
				category: "Asuransi Tanggung Gugat",
				items: [
					"Public Liability",
					"Product Liability",
					"Vehicle Liability",
					"Employer’s Liability",
					"Forwarder Liability",
					"Port & Terminal Liability",
					"Environmental Liability",
					"Professional Liability",
					"Directors & Officers Liability",
				],
			},
			{
				category: "Asuransi Lain-Lain",
				items: [
					"Cyber Risk",
					"Hole-in-One (Turnamen Golf)",
					"Fine Art & Jewelry",
					"Fidelity / Uang di Brankas & Perjalanan",
					"Billboard / Videotron",
					"Travel Insurance",
					"Personal Accident",
					"Event Cancellation",
					"Umbrella Cover",
				],
			},
		],
	},
	{
		title: "Sertifikasi & Standarisasi",
		desc: "Mendukung kepatuhan dan kredibilitas bisnis melalui sertifikasi dan akreditasi nasional maupun internasional.",
		details: [
			{
				category: "Manajemen Mutu & Keamanan",
				items: [
					"ISO 9001, 14001, 45001, 27001, 22301",
					"SNI (Standar Nasional Indonesia)",
					"CE Marking (Eropa)",
					"HACCP, GMP, Halal (BPJPH/MUI)",
				],
			},
			{
				category: "Industri & Produk",
				items: [
					"Green Building Certification",
					"Ecolabel",
					"EHS Compliance",
				],
			},
			{
				category: "Sektor Spesifik",
				items: [
					"Energi: Konstruksi Migas, Listrik, Renewable",
					"Transportasi: ISM Code, ISPS Code, IATA Certified",
					"Kesehatan: Akreditasi RS, ISO 15189",
					"Lingkungan: Green Building, Ecolabel",
				],
			},
		],
	},
	{
		title: "Legalitas Usaha",
		desc: "Membantu pembuatan badan usaha, perizinan, dan dokumen hukum bisnis yang kredibel.",
		details: [
			{
				category: "Layanan Hukum",
				items: [
					"Pendirian CV & PT",
					"Perizinan & OSS",
					"Dokumen Kepatuhan Bisnis",
				],
			},
		],
	},
];

export default function ServicesSection() {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState<null | Services>(null);

	return (
		<section className="bg-gray-50 px-6 py-20">
			<div className="mx-auto max-w-6xl text-center">
				<h2 className="mb-12 text-3xl font-bold text-blue-900">
					Layanan Kami
				</h2>

				<div className="grid gap-6 md:grid-cols-3">
					{SERVICES.map((srv) => (
						<div
							key={srv.title}
							className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl cursor-pointer"
							onClick={() => {
								setSelected(srv);
								setOpen(true);
							}}
						>
							<div className="mb-4 h-1 w-16 bg-yellow-400" />
							<h3 className="mb-3 text-xl font-semibold text-blue-950">
								{srv.title}
							</h3>
							<p className="text-sm text-gray-600">{srv.desc}</p>
						</div>
					))}
				</div>
			</div>

			{/* Modal */}
			<Modal
				isOpen={open}
				onClose={() => setOpen(false)}
				placement="center"
				backdrop="blur"
				scrollBehavior="inside"
				size="2xl"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="text-xl font-semibold text-blue-950">
								{selected?.title}
							</ModalHeader>
							<ModalBody className="space-y-5">
								<p className="text-gray-700">
									{selected?.desc}
								</p>
								{selected?.details.map((d) => (
									<div key={d.category}>
										<h4 className="font-semibold text-blue-900 mb-2">
											{d.category}
										</h4>
										<ul className="ml-4 list-disc text-sm text-gray-700 space-y-1">
											{d.items.map((i) => (
												<li key={i}>{i}</li>
											))}
										</ul>
									</div>
								))}
							</ModalBody>
							<ModalFooter>
								<Button
									color="primary"
									variant="flat"
									onPress={onClose}
								>
									Tutup
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</section>
	);
}
