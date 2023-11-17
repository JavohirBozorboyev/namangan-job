import { Tabs } from "@mantine/core";
import { IconSearch, IconLayoutGrid, IconSmartHome } from "@tabler/icons-react";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const BottomNavigation = (props: Props) => {
  const router = useRouter();

  return (
    <div>
      <Tabs
        value={router.query.activeTab as string}
        onChange={(value) => router.push(`${value}`)}
        defaultValue={router.route}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 99,
          bottom: 0,

          border: "1px solid #F3F3FE",
        }}
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
                color={`${router.route == "/" ? "#228be6" : "#4A5167"}`}
              />
            }
          ></Tabs.Tab>
          <Tabs.Tab
            value="/search"
            leftSection={
              <IconSearch
                size={"22"}
                color={`${router.route == "/search" ? "#228be6" : "#4A5167"}`}
              />
            }
          ></Tabs.Tab>
          <Tabs.Tab
            value="/edu"
            leftSection={
              <IconLayoutGrid
                size={"22"}
                color={`${router.route == "/edu" ? "#228be6" : "#4A5167"}`}
              />
            }
          ></Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
};

export default BottomNavigation;
