import type { Metadata } from "next";
import { NameContextProvider } from "@/context/nameContext";
import { ThemeContextProvider } from "@/context/themeContext";
import "./globals.css"

export const metadata: Metadata = {
  title: "Assignment 6-1",
  description: "assignment 6-1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeContextProvider>
      <NameContextProvider>
        <body>{children}</body>
      </NameContextProvider>
      </ThemeContextProvider>

    </html>
  );
}
