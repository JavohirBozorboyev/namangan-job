import AppFooter from "@/components/Footer/AppFooter";
import AppHeader from "@/components/Navbar/AppHeader";
import { AppShell, Group, Burger, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <div>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
        bg={"gray.1"}
      >
        <AppHeader opened={opened} toggle={toggle} />

        <AppShell.Navbar py="md" px={4}></AppShell.Navbar>

        <AppShell.Main>
          {children}
          <AppFooter />
        </AppShell.Main>
      </AppShell>
    </div>
  );
};

export default AppLayout;
