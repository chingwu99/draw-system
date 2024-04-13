import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Comfortaa } from "next/font/google";

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage_grotesque",
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comfortaa",
});

import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "倒數抽獎系統",
  description: "倒數抽獎系統",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage_grotesque.variable + comfortaa.variable}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
