"use client";
import {
  Grid,
  Card,
  Group,
  Button,
  Image,
  Text,
  Box,
  ActionIcon,
} from "@mantine/core";
import {
  IconSquareCheck,
  IconBriefcase,
  IconMap2,
  IconPhone,
  IconBrandTelegram,
  IconMapPin,
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
        <Card  radius={"xl"} padding="md">
          <Box>
            <Image
              src={data.photo}
              fit="cover"
              radius={"lg"}
              h={280}
              alt="Norway"
            />
          </Box>

          <Group mt={"md"}>
            <Text size="xl" fw={"bold"} c={"blue"}>
              {data.name}
            </Text>
          </Group>

          <Group gap={"xs"} mt={"xs"}>
            <ActionIcon radius={'xl'} variant="light">
              <IconMapPin size={"18px"} />
            </ActionIcon>
            <Text size="md" c={"gray.7"}>
              {data.adress}
            </Text>
          </Group>

          <Text mt="xs" c="dimmed" size="sm">
            {data.about} ...
          </Text>
          <Group mt={"md"} gap={"xs"} align="center">
            <a href={`tel:${data.phone}`}>
              <Button
                variant="light"
                radius={"xl"}
                leftSection={<IconPhone size={"18px"} />}
              >
                Telefon Raqam
              </Button>
            </a>
            <a href={``}>
              <Button
                variant="light"
                radius={"xl"}
                leftSection={<IconBrandTelegram size={"18px"} />}
              >
                Telegram
              </Button>
            </a>
          </Group>
        </Card>
      </Grid.Col>
    </>
  );
};

export default EduCard;
