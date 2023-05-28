import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { MyraProvider } from "@/dui/core/Provider";
import extendTheme from "@/dui/core/extendTheme";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	const theme = extendTheme({
		colors: {
			primary: {
				"100": "#E0E7FF",
				"200": "#C7D2FE",
				"300": "#A5B4FC",
				"400": "#818CF8",
				"500": "#6366F1",
				"600": "#4F46E5",
				"700": "#4338CA",
				"800": "#3730A3",
				"900": "#312E81",
			},
		},
		defaults: {
			colors: {
				light: {
					primary: "primary.600",
					secondary: "primary.400",
					text: "dark.100",
					bg: "dark.100",
				},
			},
		},
	});

	// console.log(theme);

	return (
		<MyraProvider theme={theme}>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</MyraProvider>
	);
}
