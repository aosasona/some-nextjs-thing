import Head from "next/head";
import { ReactNode } from "react";

export interface LayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function BaseLayout(props: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f5f5f5" />
        <meta name="description" content={props?.description || "My App"} />
        <meta name="keywords" content="app,something" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.trulyao.dev" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props?.description || "My App"} />
        <meta property="og:image" content="/images/meta.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://www.trulyao.dev" />
        <meta property="twitter:title" content={props.title} />
        <meta property="twitter:description" content={props?.description || "My App"} />
        <meta property="twitter:image" content="/images/meta.png" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />

        <title>{props.title}</title>
      </Head>

      <main className="antialiased">{props.children}</main>
    </>
  );
}
