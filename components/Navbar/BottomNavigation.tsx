import { Tabs } from "@mantine/core";
import {
  IconHome,
  IconSearch,
  IconLayoutGrid,
  IconSmartHome,
} from "@tabler/icons-react";
import router, { useRouter } from "next/router";
import React from "react";

type Props = {};

const BottomNavigation = (props: Props) => {
  const router = useRouter();

  return (
    <div>
      <Tabs
        variant="pills"
        value={router.query.activeTab as string}
        onChange={(value) => router.push(`${value}`)}
        defaultValue={router.route}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 99,
          bottom: 0,
          borderRadius: "20px",
          border: "1px solid #F3F3FE",
        }}
        m={"5px"}
        mb={"1px"}
        hiddenFrom="sm"
        radius={"xl"}
        bg={"#fff"}
      >
        <Tabs.List grow>
          <Tabs.Tab
            value="/"
            leftSection={
              <IconSmartHome
                size={"22"}
                color={`${router.route == "/" ? "#fff" : "#4A5167"}`}
              />
            }
          ></Tabs.Tab>
          <Tabs.Tab
            value="/search"
            leftSection={
              <IconSearch
                size={"22"}
                color={`${router.route == "/search" ? "#fff" : "#4A5167"}`}
              />
            }
          ></Tabs.Tab>
          <Tabs.Tab
            value="/edu"
            leftSection={
              <IconLayoutGrid
                size={"22"}
                color={`${router.route == "/edu" ? "#fff" : "#4A5167"}`}
              />
            }
          ></Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
};

export default BottomNavigation;
