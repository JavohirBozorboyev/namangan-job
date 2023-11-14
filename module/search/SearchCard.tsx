"use client";
import { Grid, Card, Group, Button, Pagination, Text } from "@mantine/core";
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

const SearchCard = ({ data }: Props) => {
  const formatter = new Intl.NumberFormat("uz", {
    style: "currency",
    currency: "UZS",
    useGrouping: true,
  });

  return (
    <>
      <Grid.Col span={{ base: 12, lg: 6 }}>
        <Card withBorder shadow="sm" radius={"xs"} padding="md">
          <Text fw={700} size="xl" c="blue">
            {data.position}
          </Text>
          <Text fw={500} my={"5px"} size="lg" c="dark">
            {data.salary}
          </Text>
          <Group>
            <Text size="sm" c={"dimmed"}>
              {data.name}
            </Text>
            <IconSquareCheck color="gray" size={"20px"} />
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
            {data.about}
          </Text>
          <Group mt={"md"}>
            <a href={`tel:${data.phone}`}>
              <Button leftSection={<IconPhone size={"20px"} />}>
                Telefon Raqam
              </Button>
            </a>
          </Group>
        </Card>
      </Grid.Col>
    </>
  );
};

export default SearchCard;
