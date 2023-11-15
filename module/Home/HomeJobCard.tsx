/* eslint-disable @next/next/no-async-client-component */
"use client";

import { FilterContext } from "@/pages/_app";
import {
  Card,
  Group,
  Text,
  Box,
  Container,
  Grid,
  Title,
  Divider,
  Skeleton,
  Paper,
} from "@mantine/core";
import { IconMap, IconMapPin, IconPencil } from "@tabler/icons-react";
import { getCookie } from "cookies-next";
import Link from "next/link";
import React, { useContext } from "react";
import useSWR from "swr";

type Props = {};

const RandomColor = [
  "blue",
  "gold",
  "pink",
  "aqua",
  "teal",
  "green",
  "yellow",
  "orange",
  "black",
];

const HomeJobCard = () => {
  const { data, error, isLoading } = useSWR(
    `/api/${getCookie("lang")}/region/`
  );

  const { filter, setFilter }: any = useContext(FilterContext);

  if (isLoading) {
    return (
      <Container size={"xl"} px={"xs"} my={"xl"}>
        <Grid>
          {Array(6)
            .fill(0)
            .map((_, i) => {
              return (
                <Grid.Col key={i} span={{ base: 12, xs: 6, lg: 4 }}>
                  <Paper bg={"white"} p={"xs"}>
                    <Skeleton h={45} bg={"blue"} />
                  </Paper>
                </Grid.Col>
              );
            })}
        </Grid>
      </Container>
    );
  }
  return (
    <Box
      bg={"#fff"}
      pb={"xl"}
      style={{
        borderBottomLeftRadius: "40px",
        borderBottomRightRadius: "40px",
        borderBottom: "1px solid #eee",
      }}
    >
      <Container size={"xl"} px={"xs"} py={"lg"}>
        <Grid>
          {data.map((item: any, i: number) => {
            let color = RandomColor[Math.round(Math.random() * 8)];
            return (
              <Grid.Col key={i} span={{ base: 12, xs: 6, lg: 4 }}>
                <Link
                  href={"/search"}
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    setFilter({
                      region: `${item.id}`,
                      addres: filter.category,
                    });
                  }}
                >
                  <Card
                    padding="lg"
                    radius="xl"
                    withBorder
                    // style={{ borderLeft: `10px solid ${color}` }}
                  >
                    <Group justify="space-between">
                      <Text fw={500} c={'dimmed'}>{item.name}</Text>
                      <IconMapPin color={`${color}`} />
                    </Group>
                  </Card>
                </Link>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeJobCard;
