/* eslint-disable react-hooks/rules-of-hooks */
import { searchPagePaginationLength } from "@/constant/state";
import SearchCard from "@/module/search/SearchCard";
import { Container, Grid, Paper, Pagination, Text } from "@mantine/core";
import { IconMoodEmpty } from "@tabler/icons-react";
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
        <Grid>
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
