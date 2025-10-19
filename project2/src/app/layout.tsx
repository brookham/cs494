import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project 2",
  description: "Brook Hamilton Project 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
