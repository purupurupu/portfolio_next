import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Main, NextScript, Html } from "next/document";
import theme from "../libs/theme.js";

export default class document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
