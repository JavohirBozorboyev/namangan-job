import AppFooter from "@/components/Footer/AppFooter";
import AppHeader from "@/components/Navbar/AppHeader";
import AppNavbar from "@/components/Navbar/AppNavbar";
import BottomNavigation from "@/components/Navbar/BottomNavigation";
import { AppShell, rem } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { getCookie, setCookie } from "cookies-next";

import Head from "next/head";
import React, { ReactNode } from "react";
import { createContext } from "vm";

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  if (!getCookie("lang")) {
    setCookie("lang", "uz");
  }
  return (
    <div>
      <Head>
        <title>Namangan Job</title>
        <meta
          name="google-site-verification"
          content="wck5g2JCAnxtuRR2eE5n8iAw7ZHfKgFPCVkOlC7GVCc"
        />
        <meta name="yandex-verification" content="9e0fb44a113d84ee" />
        <meta
          name="description"
          content="O'zbekiston Respublikasi Kambag'allikni Qisqartirish va Bandlik Vazirligi Namangan viloyati Kambag'allikni Qisqartirish va bandlik bosh boshqarmasi NAMJOBS loyihasi. Namanganda mavjud ish o'rinlarini taqdim etadi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/next.svg" />
        <link rel="mask-icon" color="#0090CD" href="/next.svg" />
        <link rel="icon" href="/next.svg" />
        <link href="https://www.namjobs.uz/" rel="canonical" />
        <meta http-equiv="refresh" content="3600" />
      </Head>
      <AppShell
        header={{ height: 60, collapsed: !pinned, offset: false }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
        bg={"gray.1"}
      >
        <AppHeader opened={opened} toggle={toggle} />

        <AppNavbar toggle={toggle} />

        <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
          {children}
          <AppFooter />
          <BottomNavigation />
        </AppShell.Main>
      </AppShell>
    </div>
  );
};

export default AppLayout;
