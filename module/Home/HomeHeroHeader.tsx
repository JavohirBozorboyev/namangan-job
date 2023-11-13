"use client";
import {
  Overlay,
  Container,
  Title,
  Button,
  Text,
  Box,
  Input,
  rem,
  Paper,
  Flex,
} from "@mantine/core";
import classes from "./css/HeroContentLeft.module.css";
import { IconSearch } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

export default function HomeHeroHeader() {
  const matches = useMediaQuery("(min-width: 49em)");

  return (
    <Box bg={"#fff"} mt={"-md"}>
      <Container size={"xl"} py={"xl"} px={"xs"}>
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          style={{ minHeight: "50vh" }}
        >
          <Box>
            <Title ta={"center"}>
              Namangan viloyati{" "}
              <Text component="span" inherit c={"blue"}>
                NAMJOBS
              </Text>{" "}
              loyihasi
            </Title>
            <Text my={"lg"} size="md" c="dimmed" ta={"center"}>
              Build more reliable software with AI companion. AI is also trained
              to detect <br /> lazy developers who do nothing and just complain
              on Twitter.
            </Text>
          </Box>
          <Flex align={"center"}>
            <Input
              placeholder="Search"
              leftSection={
                <IconSearch style={{ width: rem(16), height: rem(16) }} />
              }
              style={{
                padding: "15px 0",
              }}
              variant="filled"
              size="md"
            />
            <Link href={"/search"}>
              <Button size="md" ml={"sm"}>
                {matches ? (
                  "Search"
                ) : (
                  <IconSearch style={{ width: rem(20), height: rem(20) }} />
                )}
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
