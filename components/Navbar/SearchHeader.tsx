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
  AppShell,
  Flex,
  Input,
  Paper,
} from "@mantine/core";

import { getHotkeyHandler, useDisclosure, useMediaQuery } from "@mantine/hooks";

import Logo from "../../app/favicon.ico";
import classes from "./css/HeaderMegaMenu.module.css";
import Image from "next/image";
import { NavData } from "@/data/NavData";
import Link from "next/link";
import { IconSearch } from "@tabler/icons-react";
import { useContext, useRef } from "react";
import SearchComplect from "../Search/SearchComplect";

interface Props {
  opened: any;
  toggle: any;
}

export default function SearchHeader({ opened, toggle }: Props) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const matches = useMediaQuery("(min-width: 56.25em)");
  const searchInput = useRef<any>("");

  return (
    <>
      <AppShell.Header>
        <div>
          <Flex align={"center"} justify={"space-between"} h="60" px="md">
            <Box visibleFrom="sm">
              <Link href={"/"}>
                <Image src={Logo} width={40} height={40} alt="" />
              </Link>
            </Box>

            <Group h="100%" gap={5}>
              <SearchComplect />
            </Group>

            {/* <Group visibleFrom="sm">
              <Link href={"/auth"}>
                <Button variant="default">Log in</Button>
              </Link>
              <Link href={"/auth"}>
                {" "}
                <Button>Sign up</Button>
              </Link>
            </Group> */}

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
              size={"sm"}
            />
          </Flex>
        </div>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider />

            {NavData.map((item, i) => {
              return (
                <Link href={item.url} key={i} className={classes.link}>
                  {item.name}
                </Link>
              );
            })}
            <Divider />

            {/* <Group justify="center" grow pb="xl" px="md">
              <Link href={"/auth"}>
                <Button variant="default" fullWidth>
                  Log in
                </Button>
              </Link>
              <Link href={"/auth"}>
                {" "}
                <Button fullWidth>Sign up</Button>
              </Link>
            </Group> */}
          </ScrollArea>
        </Drawer>
      </AppShell.Header>

      <Paper
        p={"sm"}
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "100",
          margin: "0 auto",
        }}
        onClick={toggle}
        hiddenFrom="sm"
      >
        <Button fullWidth size="sm">
          Filter
        </Button>
      </Paper>
    </>
  );
}
