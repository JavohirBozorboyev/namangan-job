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
import React, { useState } from "react";
import useSWR from "swr";

type Props = {};

const index = (props: Props) => {
  const { data, isLoading, error } = useSWR(
    `/api/${getCookie("lang")}/study_center/`
  );
  const [activePage, setPage] = useState<any>(1);

  if (error) {
    deleteCookie("lang");
    return <div>failed to load</div>;
  }

  return (
    <div>
      <Container size={"lg"} my={"lg"}>
        <Grid gutter={"xs"}>
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, i) => {
                  return (
                    <Grid.Col key={i} span={{ base: 12, lg: 6 }}>
                      <Paper p={"xs"} w={"100%"}>
                        <Skeleton h={200} radius={"xs"} />
                      </Paper>
                    </Grid.Col>
                  );
                })
            : data.results.map((item: any, i: number) => {
                return <EduCard data={item} key={i} />;
              })}
        </Grid>
      </Container>
    </div>
  );
};

export default index;
