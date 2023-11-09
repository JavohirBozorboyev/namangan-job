"use client";

import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Input,
  Modal,
  Paper,
  TextInput,
} from "@mantine/core";
import { getHotkeyHandler, useDisclosure } from "@mantine/hooks";
import { IconArrowRight, IconMoodEmpty, IconSearch } from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import { Text } from "@mantine/core";
import Link from "next/link";

type Props = {};

const SearchComplect = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [data, setData] = useState([]);
  const searchInputRef = useRef<any>("");
  const [load, setLoad] = useState(false);

  const formatter = new Intl.NumberFormat("uz", {
    style: "currency",
    currency: "UZS",
    useGrouping: true,
  });

  async function SearchApiCall() {
    setLoad(!load);
    if (searchInputRef.current.value.length >= 2) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/vacancy/?search=${searchInputRef.current.value}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setData(data.results);
      console.log(data);
    } else {
      setLoad(!load);
    }
  }
  return (
    <div>
      <Input
        component="button"
        pointer
        onClick={open}
        leftSection={<IconSearch color="gray" size={15} />}
        w={250}
      >
        <Input.Placeholder>Search job</Input.Placeholder>
      </Input>

      <Modal
        zIndex={1000}
        opened={opened}
        onClose={close}
        withCloseButton={false}
        p={0}
      >
        <Grid gutter={"2px"}>
          <Grid.Col span={9}>
            <TextInput
              ref={searchInputRef}
              data-autofocus
              placeholder="Search job"
              leftSection={<IconSearch color="gray" size={15} />}
              onKeyDown={getHotkeyHandler([["Enter", SearchApiCall]])}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button fullWidth onClick={SearchApiCall}>
              Search
            </Button>
          </Grid.Col>
        </Grid>
        <Divider my={"sm"} />
        <Grid gutter={"xs"}>
          {data.length == 0 ? (
            <Paper p={"lg"} mx={"auto"}>
              {load ? (
                <>
                  <Text c={"red"} fw={"600"} fz={"sm"}>
                    Malumotni qaytadan kiriting..
                  </Text>
                </>
              ) : (
                <IconMoodEmpty size={"70px"} />
              )}
            </Paper>
          ) : (
            data.map((item: any, i: number) => {
              return (
                <Grid.Col key={i} span={12}>
                  <Paper p={"xs"} py={"4px"} withBorder>
                    <Grid align={"center"} justify={"space-between"}>
                      <Grid.Col span={8}>
                        <Text c={"blue"} fw={"600"} fz={"sm"}>
                          {item.position.slice(0, 20)}
                        </Text>
                        <Text c={"dimmed"} fz={"xs"}>
                          {item.name.slice(0, 30)}
                        </Text>
                      </Grid.Col>
                      <Grid.Col span={4}>
                        <Text c={"dimmed"} fw={"600"} fz={"sm"}>
                          {formatter.format(item.salary)} {"so'm"}
                        </Text>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
              );
            })
          )}
        </Grid>
      </Modal>
    </div>
  );
};

export default SearchComplect;
function useForm(arg0: {
  initialValues: { name: string; email: string; age: number };
  // functions will be used to validate values at corresponding key
  validate: {
    name: (value: any) => "Name must have at least 2 letters" | null;
    email: (value: any) => "Invalid email" | null;
    age: (value: any) => "You must be at least 18 to register" | null;
  };
}) {
  throw new Error("Function not implemented.");
}
