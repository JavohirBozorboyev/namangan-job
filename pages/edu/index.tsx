/* eslint-disable react-hooks/rules-of-hooks */
import { searchPagePaginationLength } from "@/constant/state";
import EduCard from "@/module/edu/EduCard";
import SearchCard from "@/module/search/SearchCard";
import {
  Container,
  Grid,
  Paper,
  Pagination,
  Text,
  Box,
  Select,
  Input,
  Button,
  Skeleton,
} from "@mantine/core";
import { IconMoodEmpty, IconSearch } from "@tabler/icons-react";
import { deleteCookie, getCookie } from "cookies-next";
import Head from "next/head";
import React, { useState } from "react";
import useSWR from "swr";

type Props = {};

const index = (props: Props) => {
  const { data, isLoading, error } = useSWR(
    `/api/${getCookie("lang")}/study_center/`
  );

  if (error) {
    deleteCookie("lang");
    return <div>failed to load</div>;
  }

  return (
    <>
      <Head>
        <title>Namangan Job - Monomarkazlar</title>
        <meta
          name="description"
          content="Namanganda mavjud kasbga yo'naltirilgan talim markazlar."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container size={"lg"} mb={"md"}>
        <Grid gutter={"xs"}>
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, i) => {
                  return (
                    <Grid.Col key={i} span={{ base: 12, lg: 6 }}>
                      <Paper p={"xs"} w={"100%"} radius={"xl"}>
                        <Skeleton h={400} radius={"xl"} />
                      </Paper>
                    </Grid.Col>
                  );
                })
            : data.map((item: any, i: number) => {
                return <EduCard data={item} key={i} />;
              })}
        </Grid>
      </Container>
    </>
  );
};

export default index;
