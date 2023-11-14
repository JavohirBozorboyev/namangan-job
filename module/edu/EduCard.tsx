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
        <Card withBorder shadow="sm" radius={"md"} padding="md">
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={240}
              alt="Norway"
            />
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
