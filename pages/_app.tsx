import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { MantineProvider, createTheme } from "@mantine/core";
import AppLayout from "@/Layout/AppLayout";
import { SWRConfig } from "swr";
import axios from "axios";
import { createContext, useState } from "react";

const theme = createTheme({
  /** Put your mantine theme override here */
});
export const FilterContext = createContext({});

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_WEB_URL}`;

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export default function App({ Component, pageProps }: AppProps) {
  const [filter, setFilter] = useState({ region: "", category: "" });
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher,
        }}
      >
        <MantineProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </MantineProvider>
      </SWRConfig>
    </FilterContext.Provider>
  );
}
