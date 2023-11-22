import Head from "next/head";
import { Inter } from "next/font/google";
import HomeHeroHeader from "@/module/Home/HomeHeroHeader";
import { Container, Divider } from "@mantine/core";
import { Contact } from "@/module/Home/Contact";
import HomeJobCard from "@/module/Home/HomeJobCard";

const inter = Inter({ subsets: ["cyrillic-ext"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Namangan Job</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Namangan viloyatidagi tumanlar aro bo'sh ish o'rinlari"
        />{" "}
        <meta
          name="keywords"
          content="Namangan, Chust, Uychi, Yangiqo'rg'on, Davlatabod, Norin, Pop, Kosonsoy, Mingbuloq, Chortoq, Norin, tumanlari"
        />
      </Head>
      <main>
        <HomeHeroHeader />
        <HomeJobCard />
        <Contact />
      </main>
    </>
  );
}
