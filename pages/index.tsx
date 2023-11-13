import Head from "next/head";
import { Inter } from "next/font/google";
import HomeHeroHeader from "@/module/Home/HomeHeroHeader";
import { Container, Divider } from "@mantine/core";
import { Contact } from "@/module/Home/Contact";
import HomeJobCard from "@/module/Home/HomeJobCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <HomeHeroHeader />
        <HomeJobCard />
        <Contact />
      </main>
    </>
  );
}
