import { AppShell, Container, Group } from "@mantine/core";
import React from "react";
import AppHeader from "./AppHeader";

type Props = {};

const BlogHeader = (props: Props) => {
  return (
    <div>
      <AppShell.Header>
        <AppHeader />
      </AppShell.Header>
    </div>
  );
};

export default BlogHeader;
