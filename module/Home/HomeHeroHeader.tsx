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
import { IconSearch } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import Image from "next/image";
import Gerb from "../../public/gerb.png";
import { useRef, useContext } from "react";
import { FilterContext } from "@/pages/_app";
import { getHotkeyHandler } from "@mantine/hooks";
import { useRouter } from "next/router";

export default function HomeHeroHeader() {
  const matches = useMediaQuery("(min-width: 49em)");
  const searchValue = useRef<any>(null);
  const { filter, setFilter }: any = useContext(FilterContext);
  const router = useRouter();

  const SerachSubmit = () => {
    setFilter({
      region: filter.region,
      category: filter.category,
      search: `${searchValue?.current?.value}`,
    });
    if (searchValue.current.value.length > 1) {
      router.push("/search");
    }
  };

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
              width={140}
            />
            <Box mt={"md"}>
              <Text
                size={"md"}
                fw={"500"}
                ta={"center"}
                tt={"uppercase"}
                c={"dark.5"}
              >
                {`O'zbekiston Respublikasi`} <br />
                {`Kambag'allikni Qisqartirish va Bandlik Vazirligi`}
                <br />
                <Text component="span" mr={"xs"} inherit>
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
        pt={"xs"}
      >
        <Container size={"md"}>
          <Flex align={"center"} gap={"5px"}>
            <Input
              placeholder="Search job"
              radius={"xl"}
              leftSection={
                <IconSearch style={{ width: rem(20), height: rem(20) }} />
              }
              style={{
                padding: "15px 0",
              }}
              size="lg"
              w={"100%"}
              ref={searchValue}
              onKeyDown={getHotkeyHandler([["Enter", SerachSubmit]])}
            />
            <Link href={"/search"}>
              <Button size="lg" radius={"xl"} onClick={SerachSubmit}>
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
