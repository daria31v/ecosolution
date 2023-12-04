import React from "react";
import type { Metadata } from "next";
import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ecosolution",
  description: "Renewable energy for any task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header/>
        <main className="relativ overflow-hidden">{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
