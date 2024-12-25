"use client";
import { Inter } from "next/font/google";
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import StoreProvider from "@/redux/store-provider";
import "../styles/app.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <MainLayout>{children}</MainLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
