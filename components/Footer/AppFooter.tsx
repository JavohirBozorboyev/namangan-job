import { Container, Group, Anchor, Box, Paper } from "@mantine/core";
import { IconMacro } from "@tabler/icons-react";
import Logo from "../../public/favicon.ico";
import Image from "next/image";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Careers" },
];

export default function AppFooter() {
  const items = links.map((link) => (
    <Anchor<"a">
      c="#fff"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Paper bg={"dark.9"} radius={"0"}>
      <Container
        size={"xl"}
        py={"sm"}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Image src={Logo} width={35} height={35} alt={""} />
        <Group>{items}</Group>
      </Container>
    </Paper>
  );
}
