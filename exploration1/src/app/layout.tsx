import type { Metadata } from "next";
// import "./globals.css";


export const metadata: Metadata = {
  title: "Exploration 1",
  description: "My first Next.js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
