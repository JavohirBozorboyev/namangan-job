import Head from "next/head";
import { Inter } from "next/font/google";
import HomeHeroHeader from "@/module/Home/HomeHeroHeader";
import { Container, Divider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Container size={"xl"} p={"xs"}>
          <HomeHeroHeader />
        </Container>
      </main>
    </>
  );
}
