import { Select } from "@mantine/core";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const LanguagePiker = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <Select
        radius={'xl'}
        data={[
          { value: "uz", label: "Uzb" },
          { value: "kr", label: "Krl" },
        ]}
        defaultValue={`${getCookie("lang")}`}
        w={100}
        variant="filled"
        onChange={(v) => {
          setCookie("lang", v);
          router.reload();
        }}
      />
    </div>
  );
};

export default LanguagePiker;
