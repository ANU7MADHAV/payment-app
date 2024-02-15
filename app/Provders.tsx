"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <ChakraProvider>{children}</ChakraProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </RecoilRoot>
  );
}
