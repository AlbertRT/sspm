import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async (params) => {
	const locale = await params.requestLocale ?? "id";

	const messages = (await import(`../app/messages/${locale}.json`)).default;
	return { locale, messages };
});
