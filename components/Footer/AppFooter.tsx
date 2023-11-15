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
      <Text c={"dimmed"} size="xs">
        {link.label}
      </Text>
    </Link>
  ));

  return (
    <Paper bg={"#fff"} radius={"0"}>
      <Container
        size={"xl"}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
        pb={{ base: "40px", sm: "0" }}
      >
        <Grid py={"xl"} w={"100%"} align="center" justify="space-around">
          <Grid.Col span={"auto"}>
            <Text c={"dimmed"} size="xs">
              © 2023 . All rights reserved.
            </Text>
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
