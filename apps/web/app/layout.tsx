import type { Metadata } from "next";

import localFont from "next/font/local";
import QueryProvider from "@repo/shared/QueryProvider";

import "@/styles/global.css";
import { NaverMapProvider } from "@repo/naver-map";
import { META } from "@/constants/metadata";

export const metadata: Metadata = {
  title: META.title,
  description: META.description,

  openGraph: {
    title: META.title,
    description: META.description,
    url: META.url,
    type: "website",
    images: { url: META.ogImage },
  },
  twitter: {
    title: META.title,
    description: META.description,
    images: { url: META.ogImage },
  },
};

const pretendard = localFont({
  //localFont를 사용하여 로컬 폰트 적용
  src: "../public/fonts/PretendardVariable.woff2",
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
      <body
        style={{
          maxWidth: "600px",
          width: "100%",
          margin: "0 auto",
        }}
        className={pretendard.className}
      >
        <QueryProvider>
          <NaverMapProvider>{children}</NaverMapProvider>
        </QueryProvider>
      </body>

      <script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
        integrity="sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Hs90nka"
        crossOrigin="anonymous"
        async
      ></script>
    </html>
  );
}
