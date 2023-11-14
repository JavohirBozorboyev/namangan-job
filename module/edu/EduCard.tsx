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

  console.log(data);

  return (
    <>
      <Grid.Col span={{ base: 12, lg: 6 }}>
        <Card withBorder shadow="sm" radius={"md"} padding="md">
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={240}
              alt="Norway"
            />
          </Card.Section>
          <Group>
            <Text size="xl" fw={"bold"} c={"blue"}>
              {data.name}
            </Text>
          </Group>
          {data.experience ? (
            <Group gap={"xs"} mt={"xs"}>
              <IconBriefcase color="gray" size={"20px"} />
              <Text size="sm" c={"dimmed"}>
                {data.experience}
              </Text>
            </Group>
          ) : null}
          {data.languages ? (
            <Group gap={"xs"} mt={"xs"}>
              <Text size="sm" c={"dimmed"}>
                Til:
              </Text>
              <Text size="sm" c={"dimmed"}>
                {data.languages}
              </Text>
            </Group>
          ) : null}
          <Group gap={"xs"} mt={"xs"}>
            <IconMap2 color="gray" size={"20px"} />
            <Text size="sm" c={"dimmed"}>
              {data.region_name}
            </Text>
          </Group>

          <Text mt="xs" c="dimmed" size="sm">
            {data.about.slice(0, 200)} ...
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
