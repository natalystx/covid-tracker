import NavBar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cx } from "@emotion/css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Covid Tracker",
  description: "Covid Tracker",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(inter.className, "text-gray-900 overflow-x-hidden")}>
        <NavBar />
        <div className="w-full flex flex-col min-h-screen p-4 md:px-8 md:py-6 xl:px-12 xl:py-8 2xl:max-w-[1440px] 2xl:mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
