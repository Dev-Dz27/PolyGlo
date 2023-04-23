"use client";
import Providers from "~/components/atoms/Providers";
import Header from "~/components/widgets/Header";
import Announcement from "~/components/widgets/Announcement";
import Footer2 from "~/components/widgets/Footer2";

import { Inter as CustomFont } from "@next/font/google";
import "~/assets/styles/base.css";
import Head from "./head";
import { announcementData, announcementDataFr, footerData, footerData2, footerData2Fr, headerData, headerDataFr } from "~/shared/data";

const customFont = CustomFont({
  subsets: ["latin"],
  variable: "--font-custom",
});

export interface LayoutProps {
  children: React.ReactNode;
  currentLang: string;
  currentCountry: string;
}

// const RootLayout  = ({ children }: LayoutProps) => {
const RootLayout = ({
  children,
  params,
}: {
  children: LayoutProps;
  params: { lang: string; country: string };
}) => {


    // callToActionDataTranslated
    const footerData2Translated =
    params.lang === "en" ? footerData2 : footerData2Fr;

    // callToActionDataTranslated
    const announcementDataTranslated =
    params.lang === "en" ? announcementData : announcementDataFr;

    const headerDataTranslated =
    params.lang === "en" ? headerData : headerDataFr;


  return (
    <html
      lang="en"
      className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-100">
        <Providers>
          <Announcement {...announcementDataTranslated} />
          <Head />
          <Header params={params} {...headerDataTranslated} />
          <main>{children}</main>
          <Footer2  {...footerData2Translated} />
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
