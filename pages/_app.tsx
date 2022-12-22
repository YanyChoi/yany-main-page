import { useState } from "react";
import { WindowContextProvider } from "../hooks/context/window";
import WindowSizeListener from "react-window-size-listener";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global";
import Navbar from "../components/navbar/navbar";

export default function App({ Component, pageProps }: AppProps) {
  const [device, setDevice] = useState<string>("DESKTOP");

  return (
    <WindowContextProvider device={device}>
      <GlobalStyles />
      <WindowSizeListener
        onResize={(windowSize) => {
          if (windowSize.windowWidth > 1000) {
            setDevice("DESKTOP");
          } else if (windowSize.windowWidth > 500) {
            setDevice("TABLET");
          } else {
            setDevice("MOBILE");
          }
        }}
      />
      <Navbar />
      <Component {...pageProps} />
    </WindowContextProvider>
  );
}
