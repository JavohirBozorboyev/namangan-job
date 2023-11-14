import { Tabs } from "@mantine/core";
import { IconHome, IconSearch, IconLayoutGrid } from "@tabler/icons-react";
import router, { useRouter } from "next/router";
import React from "react";

type Props = {};

const BottomNavigation = (props: Props) => {
  const router = useRouter();

  return (
    <div>
      <Tabs
        value={router.query.activeTab as string}
        onChange={(value) => router.push(`${value}`)}
        defaultValue="gallery"
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          bottom: 0,
          background: "#fff",
          borderTop: "1px solid #A9ADB9",
        }}
        hiddenFrom="sm"
      >
        <Tabs.List grow>
          <Tabs.Tab
            value="/"
            leftSection={
              <IconHome
                color={`${router.route == "/" ? "#0063FF" : "#4A5167"}`}
              />
            }
          ></Tabs.Tab>
          <Tabs.Tab
            value="/search"
            leftSection={
              <IconSearch
                color={`${router.route == "/search" ? "#0063FF" : "#4A5167"}`}
              />
            }
          ></Tabs.Tab>
          <Tabs.Tab
            value="/edu"
            leftSection={
              <IconLayoutGrid
                color={`${router.route == "/edu" ? "#0063FF" : "#4A5167"}`}
              />
            }
          ></Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
};

export default BottomNavigation;
