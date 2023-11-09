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
} from "@mantine/core";
import classes from "./css/HeroContentLeft.module.css";
import { IconSearch } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

export default function HomeHeroHeader() {
  const matches = useMediaQuery("(min-width: 49em)");

  return (
    <Container size="xl" px={"xs"}>
      <Paper
        className={classes.hero}
        p={"xs"}
        radius={"xs"}
        h={{ base: "200px", sm: "300px" }}
      >
        <Input
          placeholder="Search"
          leftSection={
            <IconSearch style={{ width: rem(16), height: rem(16) }} />
          }
          style={{
            width: "400px",
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
      </Paper>
    </Container>
  );
}
