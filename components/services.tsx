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
import { Accordion, AccordionItem } from "@heroui/accordion";

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

				<div className="hidden md:grid gap-6 md:grid-cols-3">
					{/* versi desktop */}
					{serviceKeys.map((key) => {
						const srv = servicesData[key];
						return (
							<div
								key={key}
								onClick={() => {
									setSelected(srv);
									setOpen(true);
								}}
								className="group relative rounded-xl bg-white p-6 sm:p-8 shadow-md ring-1 ring-black/5 cursor-pointer
             transition-all duration-200 
             hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-300
             active:scale-[0.98] active:shadow-inner"
							>
								{/* Efek bar di atas */}
								<div
									className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-yellow-400 to-blue-400 opacity-0 
                  transition-opacity duration-300 group-hover:opacity-100"
								/>

								<div className="mb-4 h-1 w-16 bg-yellow-400 group-hover:w-20 transition-all duration-300" />
								<h3 className="mb-3 text-lg sm:text-xl font-semibold text-blue-950 group-hover:text-blue-800">
									{srv.title}
								</h3>
								<p className="text-sm text-gray-600 group-hover:text-gray-800">
									{srv.desc}
								</p>

								<span className="absolute right-4 bottom-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									➜
								</span>
							</div>
						);
					})}
				</div>

				{/* versi mobile */}
				<div className="md:hidden">
					<Accordion variant="bordered" selectionMode="multiple">
						{serviceKeys.map((key) => {
							const srv = servicesData[key];
							return (
								<AccordionItem
									key={key}
									aria-label={srv.title}
									title={srv.title}
                                    className="text-left"
								>
									<div className="space-y-4 mt-2">
										{Object.keys(srv)
											.filter((k) =>
												k.startsWith("detail_")
											)
											.map((detailKey) => {
												const detail = srv[detailKey];
												return (
													<div key={detailKey}>
														<h4 className="font-semibold text-blue-900 mb-1">
															{detail.category}
														</h4>
														<ul className="ml-4 list-disc text-sm text-gray-700 space-y-1">
															{detail.items.map(
																(
																	item: string
																) => (
																	<li
																		key={
																			item
																		}
																	>
																		{item}
																	</li>
																)
															)}
														</ul>
													</div>
												);
											})}
									</div>
								</AccordionItem>
							);
						})}
					</Accordion>
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
