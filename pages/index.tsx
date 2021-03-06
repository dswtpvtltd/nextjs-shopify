import React from "react";
import getAllProducts from "@framework/product/get-all-products";
import type { InferGetStaticPropsType } from "next";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{JSON.stringify(products)}</div>;
}

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

Home.Layout = Layout;
