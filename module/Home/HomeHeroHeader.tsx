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
import Image from "next/image";
import Gerb from "../../public/gerb.png";

export default function HomeHeroHeader() {
  const matches = useMediaQuery("(min-width: 49em)");

  return (
    <>
      <Box
        bg={"#fff"}
        mt={"-md"}
        style={{
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          borderBottom: "1px solid #eee",
        }}
      >
        <Container size={"xl"} py={"xl"} px={"xs"}>
          <Flex
            direction={"column"}
            align={"center"}
            justify={"center"}
            // style={{ minHeight: "50vh" }}
          >
            <Image
              src={Gerb}
              placeholder="blur"
              // quality={100}
              alt=""
              width={160}
            />
            <Box mt={"md"}>
              <Text
                size={"xl"}
                fw={"500"}
                ta={"center"}
                tt={"uppercase"}
                c={"dark.5"}
              >
                {`O'zbekiston Respublikasi`} <br />
                {`Kambag'allikni Qisqartirish va Bandlik Vazirligi`}
                <br />
                <Text component="span" mr={"xs"} inherit c={"blue"}>
                  Namangan
                </Text>
                {`viloyati Kambag'allikni Qisqartirish`} <br />
                {`bandlik bosh boshqarmasi`}
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box
        mt={"xs"}
        bg={"#fff"}
        style={{
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          borderTop: "1px solid #eee",
        }}
        pt={'xs'}
      >
        <Container size={"md"}>
          <Flex align={"center"} gap={'5px'}>
            <Input
              placeholder="Search job"
              radius={'xl'}
              
              leftSection={
                <IconSearch style={{ width: rem(20), height: rem(20) }} />
              }
              style={{
                padding: "15px 0",
              }}
              // variant="filled"
              size="lg"
              w={"100%"}
            />
            <Link href={"/search"}>
              <Button size="lg" radius={'xl'} >
                {matches ? (
                  "Search"
                ) : (
                  <IconSearch style={{ width: rem(20), height: rem(20) }} />
                )}
              </Button>
            </Link>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
