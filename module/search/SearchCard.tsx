"use client";
import {
  Grid,
  Card,
  Group,
  Button,
  Pagination,
  Text,
  Flex,
  ActionIcon,
} from "@mantine/core";
import {
  IconPhone,
  IconUser,
  IconCurrencyDollar,
  IconBuilding,
  IconMapPin,
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
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Card radius={"xl"} p="md" h={"100%"}>
          <Flex align={"center"} gap={"xs"} mt={"xs"}>
            <ActionIcon radius={"lg"} size={"md"} variant="light">
              <IconUser size={"18px"} />
            </ActionIcon>

            <Text fw={600} size="md" c="blue">
              {data.position}
            </Text>
          </Flex>

          <Flex align={"center"} gap={"xs"} mt={"xs"}>
            <ActionIcon radius={"lg"} size={"md"} variant="light">
              <IconCurrencyDollar size={"18px"} />
            </ActionIcon>
            <Text size="md" c="dark.6">
              {data.salary}
            </Text>
          </Flex>
          <Flex align={"center"} gap={"xs"} mt={"xs"}>
            <ActionIcon radius={"lg"} size={"md"} variant="light">
              <IconBuilding size={"18px"} />
            </ActionIcon>

            <Text size="sm" c={"dimmed"}>
              {data.name.slice(0, 80)}
            </Text>
          </Flex>

          <Group gap={"xs"} mt={"xs"}>
            <ActionIcon radius={"lg"} size={"md"} variant="light">
              <IconMapPin size={"18px"} />
            </ActionIcon>

            <Text size="sm" c={"dimmed"}>
              {data.region_name}
            </Text>
          </Group>

          <Text mt="xs" c="dimmed" size="sm">
            {data.about}
          </Text>
          <Group mt={"xs"}>
            <a href={`tel:${data.phone}`}>
              <Button
                radius={"xl"}
                leftSection={<IconPhone size={"17px"} />}
                variant="light"
              >
                {"Qo'ng'iroq qilish"}
              </Button>
            </a>
          </Group>
        </Card>
      </Grid.Col>
    </>
  );
};

export default SearchCard;
