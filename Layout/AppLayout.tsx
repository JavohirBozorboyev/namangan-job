import AppFooter from "@/components/Footer/AppFooter";
import AppHeader from "@/components/Navbar/AppHeader";
import AppNavbar from "@/components/Navbar/AppNavbar";
import BottomNavigation from "@/components/Navbar/BottomNavigation";
import { AppShell, rem } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";

import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  return (
    <div>
      <Head>
        <title>Namangan Job</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
