import "@styles/globals.css";
import * as React from "react";
import Home, { HomePageProps } from "@pages/index";

interface ApplicationProps {
  Component: typeof Home;
  pageProps: HomePageProps;
}

function Application({ Component, pageProps }: ApplicationProps) {
  return <Component {...pageProps} />;
}

export default Application;
