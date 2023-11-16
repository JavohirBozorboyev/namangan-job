"use client";
import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Container,
  Text,
  AppShell,
  UnstyledButton,
  Flex,
} from "@mantine/core";

import Logo from "../../public/logo.png";
import Image from "next/image";
import { NavData } from "@/data/NavData";
import Link from "next/link";
import LanguagePiker from "../Other/LanguagePiker";

export default function AppHeader({ opened, toggle }: any) {
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
              <Image src={Logo} alt={""} height={40} />
            </Group>
            <Group visibleFrom="sm">
              {NavData.map((item, i) => {
                return (
                  <Link
                    href={item.url}
                    key={i}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <Text size="sm" c="dimmed" fw={"500"}>
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
