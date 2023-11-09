/* eslint-disable @next/next/no-async-client-component */
"use client";

import { Filter } from "@/layout/AppLayout";
import {
  Card,
  Group,
  Text,
  Box,
  Container,
  Grid,
  Title,
  Divider,
} from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import Link from "next/link";
import React, { useContext } from "react";

type Props = {};

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WEB_URL}/api/category/`, {
    next: { revalidate: 60 * 10 * 20 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const HomeJobCard = async () => {
  const { filter, setFilter } = useContext(Filter);
  const data = await getData();

  return (
    <Container size={"xl"} px={"xs"}>
      <Grid>
        {data.map((item: any, i: number) => {
          return (
            <Grid.Col key={i} span={{ base: 12, xs: 6, lg: 4 }}>
              <Link
                href={"/search"}
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setFilter({ category: item.id, addres: filter.addres });
                }}
              >
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="xs"
                  style={{ borderLeft: "10px solid #339AF0" }}
                >
                  <Group justify="space-between">
                    <Text fw={500}>{item.name}</Text>
                  </Group>
                </Card>
              </Link>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default HomeJobCard;
