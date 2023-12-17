import { MainLayout } from "@/layout/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Samnang Lorn</title>
        <meta
          name="description"
          content="Samnang is a software developer and cross platform developer based in Phnom Penh, Cambodia. He is a self-taught developer who loves to build things with code."
        />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
