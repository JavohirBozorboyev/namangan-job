/* eslint-disable @next/next/no-async-client-component */
"use client";

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

const HomeJobCard = async () => {
  return (
    <Container size={"xl"} px={"xs"}>
      <Grid>
        {/* {data.map((item: any, i: number) => {
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
        })} */}
      </Grid>
    </Container>
  );
};

export default HomeJobCard;
