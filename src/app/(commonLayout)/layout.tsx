
import Header from "@/components/commonLayout/HomePage/Header";
import React from "react";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}