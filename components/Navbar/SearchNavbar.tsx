"use clinet";
import { Filter } from "@/layout/AppLayout";
import {
  AppShell,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Paper,
  Radio,
  ScrollArea,
  Skeleton,
  Spoiler,
  Text,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import React, { useContext, useEffect, useState } from "react";

type Props = {
  toggle: any;
};

const SearchNavbar = ({ toggle }: Props) => {
  const { filter, setFilter } = useContext(Filter);
  const [category, setCategory] = useState([]);
  const [address, setAddress] = useState({ results: [] });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_WEB_URL}/api/category/`)
      .then((response) => response.json())
      .then((json) => setCategory(json));
    fetch(`${process.env.NEXT_PUBLIC_WEB_URL}/api/region/`)
      .then((response) => response.json())
      .then((json) => setAddress(json));
  }, []);

  return (
    <AppShell.Navbar pb={{ base: "45px", sm: "xs" }}>
      <AppShell.Section component={ScrollArea}>
        <Paper p={"md"}>
          <Box mb={"sm"}>
            <Text fw={"600"} size="sm" c={"gray.6"}>
              {"Manzil bo'yicha filterlash"}
            </Text>{" "}
            <Divider my={"xs"} />
            {address?.results?.length === 0 ? (
              <Flex gap={"sm"} wrap={"wrap"}>
                <Skeleton height={25} w={150} radius="sm" />
                <Skeleton height={25} w={100} radius="sm" />
                <Skeleton height={25} w={100} radius="sm" />
                <Skeleton height={25} w={150} radius="sm" />
                <Skeleton height={25} radius="sm" />
                <Skeleton height={25} w={150} radius="sm" />
                <Skeleton height={25} w={100} radius="sm" />
                <Skeleton height={25} w={100} radius="sm" />
                <Skeleton height={25} w={150} radius="sm" />
              </Flex>
            ) : (
              <Group gap={"xs"}>
                <Button
                  size="xs"
                  color="gray"
                  onClick={() => {
                    setFilter({
                      category: filter.category,
                      addres: "",
                    });
                    toggle();
                  }}
                >
                  Barchasi
                </Button>
                {address.results.map((item: any) => {
                  return (
                    <Button
                      key={item.id}
                      size="xs"
                      variant={`${
                        filter.addres === item.id ? "filled" : "outline"
                      }`}
                      onClick={() => {
                        setFilter({
                          category: filter.category,
                          addres: item.id,
                        });
                        toggle();
                      }}
                    >
                      {item?.name}
                    </Button>
                  );
                })}
              </Group>
            )}
          </Box>
          <Box mb={"sm"}>
            <Text fw={"600"} size="sm" c={"gray.6"}>
              {"Yo'nalishlar bo'yicha filterlash"}
            </Text>{" "}
            <Divider my={"xs"} />
            {category.length === 0 ? (
              <Flex gap={"sm"} wrap={"wrap"}>
                <Skeleton height={25} w={150} radius="sm" />
                <Skeleton height={25} w={100} radius="sm" />
                <Skeleton height={25} w={100} radius="sm" />
                <Skeleton height={25} w={150} radius="sm" />
                <Skeleton height={25} radius="sm" />
                <Skeleton height={25} w={150} radius="sm" />
                <Skeleton height={25} w={100} radius="sm" />
                <Skeleton height={25} w={100} radius="sm" />
                <Skeleton height={25} w={150} radius="sm" />
              </Flex>
            ) : (
              <Group gap={"xs"}>
                <Button
                  size="xs"
                  color="gray"
                  onClick={() => {
                    setFilter({
                      category: "",
                      addres: filter.addres,
                    });
                    toggle();
                  }}
                >
                  Barchasi
                </Button>
                {category?.map((item: any) => {
                  return (
                    <Button
                      key={item.id}
                      color="teal"
                      size="xs"
                      variant={`${
                        filter.category === item.id ? "filled" : "outline"
                      }`}
                      onClick={() => {
                        setFilter({
                          category: item.id,
                          addres: filter.addres,
                        });
                        toggle();
                      }}
                    >
                      {item?.name}
                    </Button>
                  );
                })}
              </Group>
            )}
          </Box>
        </Paper>
      </AppShell.Section>

      <AppShell.Section
        style={{ bottom: "0", position: "fixed", width: "100%" }}
        px={"md"}
        py={"sm"}
        hiddenFrom="sm"
      >
        <Button
          onClick={toggle}
          leftSection={<IconX size={18} />}
          fullWidth
          size="sm"
        >
          Close Filter
        </Button>
      </AppShell.Section>
    </AppShell.Navbar>
  );
};

export default SearchNavbar;
