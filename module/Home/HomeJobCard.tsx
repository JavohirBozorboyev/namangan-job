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
  ActionIcon,
} from "@mantine/core";
import { IconBug, IconMap, IconMapPin, IconPencil } from "@tabler/icons-react";
import { getCookie } from "cookies-next";
import Link from "next/link";
import React, { useContext } from "react";
import useSWR from "swr";

type Props = {};

const HomeJobCard = () => {
  const { data, error, isLoading } = useSWR(
    `/api/${getCookie("lang")}/region/`
  );

  const { filter, setFilter }: any = useContext(FilterContext);

  if (error)
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
        <Container py={"xl"}>
          <Paper ta={"center"}>
            <IconBug size={"80px"} color="gray" />
            <Text size="xl" c={"dimmed"} ta={"center"}>
              Server bilan muammo yuzaga keldi.
            </Text>
          </Paper>
        </Container>
      </Box>
    );
  if (isLoading) {
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
        <Container size={"xl"} px={"xs"} pt={"xl"}>
          <Grid>
            {Array(6)
              .fill(0)
              .map((_, i) => {
                return (
                  <Grid.Col key={i} span={{ base: 12, xs: 6, lg: 4 }}>
                    <Skeleton radius={"xl"} h={60} bg={"blue"} />
                  </Grid.Col>
                );
              })}
          </Grid>
        </Container>
      </Box>
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
          {data?.map((item: any, i: number) => {
            return (
              <Grid.Col key={i} span={{ base: 12, xs: 6, lg: 4 }}>
                <Link
                  href={"/search"}
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    setFilter({
                      region: `${item.id}`,
                      category: filter.category,
                      search: filter.search,
                    });
                  }}
                >
                  <Card
                    padding="md"
                    radius="xl"
                    withBorder
                    // style={{ borderLeft: `10px solid ${color}` }}
                  >
                    <Group justify="space-between">
                      <Text fw={500} size="sm" c={"dimmed"}>
                        {item.name}
                      </Text>
                      <ActionIcon variant="light" color="blue" radius={"xl"}>
                        <IconMapPin size={"18px"} />
                      </ActionIcon>
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
