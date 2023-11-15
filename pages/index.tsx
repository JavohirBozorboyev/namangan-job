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
      <main style={{ fontFamily: `${inter.style}` }}>
        <HomeHeroHeader />
        <HomeJobCard />
        <Contact />
      </main>
    </>
  );
}
