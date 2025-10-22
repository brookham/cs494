import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exploration 3",
  description: "Brook Hamilton - Exploration 3",
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
