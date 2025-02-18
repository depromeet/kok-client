import type { Metadata } from "next";

import React from "react";
import QueryProvider from "@repo/shared/QueryProvider";
import localFont from "next/font/local";

import "./globals.css";

export const metadata: Metadata = {
  title: "콕",
  description: "",
};

const pretendard = localFont({
  //localFont를 사용하여 로컬 폰트 적용
  src: "../src/asset/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
