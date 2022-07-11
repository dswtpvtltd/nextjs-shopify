import "@assets/main.css";
import { FC, ReactNode } from "react";
import { AppProps } from "next/app";

type Props = {
  children?: ReactNode;
};

const Noop: FC<Props> = ({ children }) => <>{children}</>;

export default function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<Props> } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
