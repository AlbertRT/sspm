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
import { useMessages } from "next-intl";

export default function ServicesSection() {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState<any>(null);

	const messages = useMessages() as Record<string, any>;
	const servicesData = messages.services || {};

	const serviceKeys = Object.keys(servicesData)
		.filter((key) => key.startsWith("service_"))
		.sort((a, b) => Number(a.split("_")[1]) - Number(b.split("_")[1]));

	return (
		<section className="bg-gray-50 px-6 py-20" id="services">
			<div className="mx-auto max-w-6xl text-center">
				<h2 className="mb-12 text-3xl font-bold text-blue-900">
					{servicesData.title}
				</h2>

				<div className="grid gap-6 md:grid-cols-3">
					{serviceKeys.map((key) => {
						const srv = servicesData[key];
						return (
							<div
								key={key}
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
								<p className="text-sm text-gray-600">
									{srv.desc}
								</p>
							</div>
						);
					})}
				</div>
			</div>

			{/* ===== Modal Detail ===== */}
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

								{/* Render detail_X */}
								{selected &&
									Object.keys(selected)
										.filter((key) =>
											key.startsWith("detail_")
										)
										.sort(
											(a, b) =>
												Number(a.split("_")[1]) -
												Number(b.split("_")[1])
										)
										.map((detailKey) => {
											const detail = selected[detailKey];
											return (
												<div key={detailKey}>
													<h4 className="font-semibold text-blue-900 mb-2">
														{detail.category}
													</h4>
													<ul className="ml-4 list-disc text-sm text-gray-700 space-y-1">
														{detail.items.map(
															(item: string) => (
																<li key={item}>
																	{item}
																</li>
															)
														)}
													</ul>
												</div>
											);
										})}
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
