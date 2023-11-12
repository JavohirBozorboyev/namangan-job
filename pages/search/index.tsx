/* eslint-disable react-hooks/rules-of-hooks */
import { searchPagePaginationLength } from "@/constant/state";
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
} from "@mantine/core";
import { IconMoodEmpty, IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";
import useSWR from "swr";

type Props = {};

const index = (props: Props) => {
  const { data, isLoading, error } = useSWR("api/vacancy/");
  const [activePage, setPage] = useState<any>(1);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <Container size={"lg"} my={"lg"}>
        <Paper p={"xs"} mb={"sm"}>
          <Grid align="end" gutter={"xs"}>
            <Grid.Col span={{ base: 12, xs: 4, sm: 3, md: 3 }}>
              <Select
                data={["Chust", "Pop", "To'raqo'rg'on"]}
                defaultValue={"Chust"}
                variant="filled"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 6, sm: 7 }}>
              <Input
                placeholder="Search job"
                leftSection={<IconSearch size={"16px"} color="gray" />}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 2 }}>
              <Button variant="filled" fullWidth>
                Search
              </Button>
            </Grid.Col>
          </Grid>
        </Paper>
        <Grid gutter={"xs"}>
          {data.results.length == 0 ? (
            <Paper
              p={"xl"}
              w={"100%"}
              radius={"md"}
              style={{ textAlign: "center" }}
            >
              <IconMoodEmpty size={"100px"} />
              <Text fw={"600"} size="lg" c={"gray.6"}>
                {"Bu yo'nalishda ish o'rinlari topilmadi"}
              </Text>{" "}
            </Paper>
          ) : (
            data.results.map((item: any, i: number) => {
              return <SearchCard data={item} key={i} />;
            })
          )}
        </Grid>
        <Pagination
          total={Math.ceil(data.count / searchPagePaginationLength)}
          value={activePage}
          onChange={(value) => {
            setPage(value);
          }}
          mt={"lg"}
        />
      </Container>
    </div>
  );
};

export default index;
