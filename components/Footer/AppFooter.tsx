import {
  Container,
  Group,
  Anchor,
  Box,
  Paper,
  Grid,
  Text,
  Flex,
  Divider,
  ActionIcon,
  rem,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMacro,
} from "@tabler/icons-react";
import Logo from "../../public/favicon.ico";
import Image from "next/image";
import Link from "next/link";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Careers" },
];

export default function AppFooter() {
  const items = links.map((link) => (
    <Link key={link.label} href={link.link} style={{ textDecoration: "none" }}>
      <Text c={"dimmed"}>{link.label}</Text>
    </Link>
  ));

  return (
    <Paper bg={"dark.9"} radius={"0"}>
      <Container
        size={"xl"}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Grid py={'50px'} w={"100%"}>
          <Grid.Col
            span={{
              base: 12,
              xs: 6,
              sm: 3,
              md: 6,
            }}
          >
            <Image src={Logo} width={35} height={35} alt={""} />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              xs: 6,
              sm: 3,
              md: 2,
            }}
          >
            {" "}
            <Text
              w={{ base: "100%", sm: "50%" }}
              fw={"bold"}
              mb={"xs"}
              c={"white"}
            >
              About
            </Text>
            <Flex wrap={"wrap"} gap={"5px"} direction={"column"}>
              {items}
            </Flex>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              xs: 6,
              sm: 3,
              md: 2,
            }}
          >
            {" "}
            <Text
              w={{ base: "100%", sm: "50%" }}
              fw={"bold"}
              mb={"xs"}
              c={"white"}
            >
              About
            </Text>
            <Flex wrap={"wrap"} gap={"5px"} direction={"column"}>
              {items}
            </Flex>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              xs: 6,
              sm: 3,
              md: 2,
            }}
          >
            {" "}
            <Text
              w={{ base: "100%", sm: "50%" }}
              fw={"bold"}
              mb={"xs"}
              c={"white"}
            >
              About
            </Text>
            <Flex wrap={"wrap"} gap={"5px"} direction={"column"}>
              {items}
            </Flex>
          </Grid.Col>
        </Grid>

        <Grid
          style={{ borderTop: "1px solid grey" }}
          py={'xl'}
          w={"100%"}
          align="center"
          justify="space-around"
        >
          <Grid.Col span={"auto"}>
            <Text c={"dimmed"}>© 2023 . All rights reserved.</Text>
          </Grid.Col>
          <Grid.Col span={"auto"}>
            <Group gap={0} justify="flex-end" wrap="nowrap">
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandTwitter
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandYoutube
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandInstagram
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </Paper>
  );
}
