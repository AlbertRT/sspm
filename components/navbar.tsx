"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
} from "@heroui/drawer";
import { Button } from "@heroui/button";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const t = useTranslations("navbar");
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			const heroHeight = 600;
			setScrolled(window.scrollY > heroHeight - 80);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Toggle locale
	const switchLocale = () => {
		const newLocale = locale === "id" ? "en" : "id";
		router.push(`/${newLocale}${pathname.replace(/^\/(id|en)/, "")}`);
	};

	// Example NAV_MENU translations (from messages/*.json)
	const NAV_MENU = [
		{ href: "/#welcome-message", label: t("welcome") },
		{ href: "/#vission-mission", label: t("visionMission") },
		{ href: "/#why-us", label: t("whyUs") },
		{ href: "/#services", label: t("services") },
	];

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
				scrolled
					? "bg-white/70 backdrop-blur-md shadow-md"
					: "bg-transparent backdrop-blur-md text-white"
			}`}
		>
			<div className="mx-auto flex max-w-7xl items-center justify-between h-20 px-6 md:px-12">
				{/* === LOGO === */}
				<Link
					href="/"
					className={`text-2xl font-bold ${
						scrolled ? "text-blue-900" : "text-white"
					}`}
				>
					SSPM
				</Link>

				{/* === DESKTOP MENU === */}
				<div className="hidden lg:flex items-center space-x-8">
					<ul className="flex items-center space-x-6">
						{NAV_MENU.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className={`relative text-sm font-medium transition-colors duration-300 
  ${scrolled ? "text-blue-900 hover:text-blue-950" : "text-white hover:text-yellow-300"}
  before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-0 
  before:-translate-x-1/2 before:bg-current before:transition-all before:duration-300 
  hover:before:w-full`}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>

					{/* BUTTON */}
					<a
						href="https://wa.me/+62085921111881"
						target="_blank"
						rel="noopener noreferrer"
						className={`rounded-lg border px-5 py-2 text-sm font-semibold transition-colors ${
							scrolled
								? "text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white"
								: "text-white border-white hover:bg-white hover:text-blue-900"
						}`}
					>
						{t("consultNow")}
					</a>

					{/* LANGUAGE SWITCH */}
					<button
						onClick={switchLocale}
						className={`ml-4 rounded-md border px-3 py-1 text-xs font-medium transition-colors ${
							scrolled
								? "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
								: "border-white text-white hover:bg-white hover:text-blue-900"
						}`}
					>
						{locale === "id" ? "EN" : "ID"}
					</button>
				</div>

				{/* === MOBILE MENU BUTTON === */}
				<button
					onClick={() => setIsOpen(true)}
					className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-50 ${
						scrolled ? "text-blue-900" : "text-white"
					} focus:outline-none`}
				>
					<svg
						className="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>

			{/* === MOBILE DRAWER === */}
			<Drawer
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				placement="right"
				backdrop="blur"
			>
				<DrawerContent className="bg-white">
					<DrawerHeader className="flex justify-between items-center border-b border-gray-200 px-4 py-3">
						<h2 className="text-xl font-bold text-blue-900">
							SSPM
						</h2>
					</DrawerHeader>

					<DrawerBody className="flex flex-col space-y-5 px-6 py-6">
						{NAV_MENU.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setIsOpen(false)}
								className="text-gray-800 text-base font-medium hover:text-blue-900 transition-colors"
							>
								{item.label}
							</Link>
						))}
						{/* Language Switch in mobile */}
						<button
							onClick={() => {
								switchLocale();
								setIsOpen(false);
							}}
							className="mt-4 w-fit text-sm font-semibold text-blue-900 underline"
						>
							{locale === "id"
								? "Switch to English"
								: "Ganti ke Bahasa Indonesia"}
						</button>
					</DrawerBody>

					<DrawerFooter className="border-t border-gray-200 px-6 py-4">
						<Button
							as={Link}
							href="https://wa.me/+62085921111881"
							target="_blank"
							rel="noopener noreferrer"
							color="primary"
							className="w-full bg-blue-900 text-white hover:bg-blue-800 font-semibold"
						>
							{t("consultNow")}
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</nav>
	);
}
