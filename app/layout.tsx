import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inderjot's Link Tree",
  description: "This is link tree of Inderjot Singh",
  openGraph: {
    title: "Inderjot's Link Tree",
    description: "This is link tree of Inderjot Singh",
    url: "https://hi.inderjot.tech",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Inderjot's Link Tree",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-zinc-950'}>{children}</body>
    </html>
  );
}
