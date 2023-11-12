import { NavData } from "@/data/NavData";
import { AppShell, Flex, Group, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

type Props = {
  toggle: any;
};

const AppNavbar = ({ toggle }: Props) => {
  return (
    <AppShell.Navbar py="md" px={4}>
      <Flex direction={"column"} justify={"center"} h={"100%"}>
        {NavData.map((item, i) => {
          return (
            <Link
              href={item.url}
              key={i}
              style={{ textDecoration: "none" }}
              onClick={toggle}
            >
              {" "}
              <Text size="xl" py={"sm"} ta={"center"} c="dimmed" fw={"500"}>
                {item.name}
              </Text>
            </Link>
          );
        })}
      </Flex>
    </AppShell.Navbar>
  );
};

export default AppNavbar;
