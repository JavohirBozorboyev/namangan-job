/* eslint-disable react-hooks/rules-of-hooks */
import { searchPagePaginationLength } from "@/constant/state";
import SearchCard from "@/module/search/SearchCard";
import {
  Container,
  Grid,
  Paper,
  Pagination,
  Select,
  Input,
  Button,
  Skeleton,
  Title,
  Flex,
} from "@mantine/core";
import { IconMoodEmpty, IconSearch } from "@tabler/icons-react";
import { deleteCookie, getCookie } from "cookies-next";
import React, { useState, useContext } from "react";
import useSWR from "swr";
import { FilterContext } from "../_app";

type Props = {};

const index = (props: Props) => {
  const { filter, setFilter }: any = useContext(FilterContext);

  const { data, isLoading, error } = useSWR(
    `/api/${getCookie("lang")}/vacancy/?region=${filter.region}`
  );
  const {
    data: Region,
    error: erReg,
    isLoading: loadReg,
  } = useSWR(`/api/${getCookie("lang")}/region/`);
  const [activePage, setPage] = useState<any>(1);

  if (error) {
    deleteCookie("lang");
    return <div>failed to load</div>;
  }

  let SelectData = Region?.map((val: any) => {
    return { value: `${val.id}`, label: val.name };
  });

  return (
    <div>
      <Container size={"lg"} mb={"lg"} mt={"-xs"}>
        <Paper p={"xs"} mb={"sm"} radius={"xl"}>
          <Grid align="end" gutter={"xs"}>
            <Grid.Col span={{ base: 12, xs: 4, sm: 3, md: 3 }}>
              <Select
                data={SelectData}
                placeholder="Barcha tumanlar"
                defaultValue={filter.region}
                variant="filled"
                onChange={(val) => {
                  setFilter({ region: `${val}`, category: filter.category });
                }}
                radius={"xl"}
                size="md"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 6, sm: 7 }}>
              <Input
                size="md"
                radius={"xl"}
                placeholder="Search job"
                leftSection={<IconSearch size={"16px"} color="gray" />}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 2 }}>
              <Button radius={"xl"} size="md" variant="filled" fullWidth>
                Search
              </Button>
            </Grid.Col>
          </Grid>
        </Paper>
        <Grid gutter={"xs"}>
          {isLoading ? (
            Array(6)
              .fill(0)
              .map((_, i) => {
                return (
                  <Grid.Col key={i} span={{ base: 12, lg: 6 }}>
                    <Paper p={"xs"} radius={"xl"} w={"100%"}>
                      <Skeleton h={200} radius={"xl"} />
                    </Paper>
                  </Grid.Col>
                );
              })
          ) : data.results.length == 0 ? (
            <Grid.Col>
              <Paper radius={"xl"}>
                <Flex h={"60vh"} align={"center"} p={"lg"}>
                  <Title order={2} c={"dimmed"} w={"100%"} ta={"center"}>
                    Bu xududda ishlar topilmadi !{" "}
                  </Title>
                </Flex>
              </Paper>
            </Grid.Col>
          ) : (
            data.results.map((item: any, i: number) => {
              return <SearchCard data={item} key={i} />;
            })
          )}
        </Grid>
        {isLoading ? (
          <></>
        ) : (
          <>
            <Pagination
              total={Math.ceil(data.count / searchPagePaginationLength)}
              value={activePage}
              onChange={(value) => {
                setPage(value);
              }}
              radius={"xl"}
              mt={"lg"}
              size={"lg"}
            />
          </>
        )}
      </Container>
    </div>
  );
};

export default index;
