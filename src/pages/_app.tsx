import Navbar from "@/components/ui/navbar";
import { Provider } from "@/components/ui/provider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}
