import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  const title = pathname.replace("/", "");
  return (
    <div>
      <Head>
        <title>{`Claudio´s ${title}`}</title>
      </Head>
      <header>{/* <Navbar /> */}</header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
