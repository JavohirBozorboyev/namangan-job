"use client";
import { Group, Container, Text, AppShell, Flex } from "@mantine/core";

import Logo from "../../public/logo.png";
import Image from "next/image";
import { NavData } from "@/data/NavData";
import Link from "next/link";
import LanguagePiker from "../Other/LanguagePiker";
import { useRouter } from "next/router";

export default function AppHeader({}: any) {
  const router = useRouter();
  return (
    <>
      <AppShell.Header>
        <Container h="100%" size={"xl"} px={"0"}>
          <Flex
            align={"center"}
            justify={"space-between"}
            gap={"sm"}
            h="100%"
            px="md"
          >
            <Group align="center">
              {/* <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
                bg={"gray.1"}
                style={{ borderRadius: "4px" }}
              /> */}
              <Link href={"/"}>
                <Image src={Logo} alt={"NamJobs"} height={40} />
              </Link>
            </Group>
            <Group visibleFrom="sm">
              {NavData.map((item, i) => {
                return (
                  <Link
                    href={item.url}
                    key={i}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    <Text
                      style={{ display: "flex", alignItems: "center" }}
                      size="sm"
                      h={"50px"}
                      c={`${router.route == item.url ? "blue" : "dimmed"}`}
                      fw={"500"}
                    >
                      {item.name}
                    </Text>
                  </Link>
                );
              })}
            </Group>
            <LanguagePiker />
          </Flex>
        </Container>
      </AppShell.Header>
    </>
  );
}
