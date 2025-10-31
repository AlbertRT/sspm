import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./next-intl.config";

const intlMiddleware = createMiddleware({
	locales,
	defaultLocale,
	localeDetection: false,
});

export default function middleware(req: any) {
	const pathname = req.nextUrl.pathname;

	if (pathname === "/") {
		return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url));
	}

	return intlMiddleware(req);
}

export const config = {
	matcher: ["/((?!api|_next|favicon.ico).*)"],
};
