import { Select } from "@mantine/core";
import React from "react";

type Props = {};

const LanguagePiker = (props: Props) => {
  return (
    <div>
      <Select
        data={["Lotin", "Kril"]}
        defaultValue="Lotin"
        w={100}
        variant="filled"
      />
    </div>
  );
};

export default LanguagePiker;
