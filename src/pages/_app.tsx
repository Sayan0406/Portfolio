import Navbar from "@/components/ui/navbar";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Box>
      <Navbar />
      <Component {...pageProps} />
      </Box>
    </Provider>
  );
}
