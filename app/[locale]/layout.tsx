import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Navbar from "@/components/navbar";
import ContactFloating from "@/components/contact-floating";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export function generateStaticParams() {
	return [{ locale: "id" }, { locale: "en" }];
}

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params:  Promise<{ locale: string }>;
}) {
     let messages;
     const { locale } = await params;
		try {
			messages = (await import(`../messages/${locale}.json`)).default;
		} catch (error) {
			notFound();
		}

        console.log("Locale:", locale);
	return (
		<html suppressHydrationWarning lang={locale}>
			<head />
			<body
				className={clsx(
					"min-h-screen text-foreground bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Providers>
						<Navbar />
						<ContactFloating />
						{children}
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
