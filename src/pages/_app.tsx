import MainLayout from "@/MainLayout/MainLayout";
import Providers from "@/Providers/Providers";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Providers>
  );
}
