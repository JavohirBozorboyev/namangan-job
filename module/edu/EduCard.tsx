"use client";
import { Grid, Card, Group, Button, Image, Text } from "@mantine/core";
import {
  IconSquareCheck,
  IconBriefcase,
  IconMap2,
  IconPhone,
} from "@tabler/icons-react";
import React, { useContext } from "react";

type Props = {
  data: any;
};

const EduCard = ({ data }: Props) => {
  const formatter = new Intl.NumberFormat("uz", {
    style: "currency",
    currency: "UZS",
    useGrouping: true,
  });

  return (
    <>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Card withBorder radius={"xl"} padding="md">
          <Card.Section>
            <Image src={data.photo} height={240} alt="Norway" />
          </Card.Section>
          <Group mt={"md"}>
            <Text size="xl" fw={"bold"} c={"blue"}>
              {data.name}
            </Text>
          </Group>

          <Group gap={"xs"} mt={"xs"}>
            <IconMap2 color="gray" size={"20px"} />
            <Text size="md" c={"gray.7"}>
              {data.adress}
            </Text>
          </Group>

          <Text mt="xs" c="dimmed" size="sm">
            {data.about} ...
          </Text>
          <Group mt={"md"}>
            <a href={`tel:${data.phone}`}>
              <Button
                variant="outline"
                radius={"xl"}
                leftSection={<IconPhone size={"20px"} />}
              >
                Telefon Raqam
              </Button>
            </a>
          </Group>
        </Card>
      </Grid.Col>
    </>
  );
};

export default EduCard;
