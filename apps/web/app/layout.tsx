import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/nav/NavBar";
import Footer from "@/components/layout/footer/Footer";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adakan Library Core",
  description:
    "Kisisel, okul veya kucuk kurumlar icin modern kutuphane yonetim sistemi.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="tr">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />
        </head>
        <body className={inter.className}>
          <div className="flex min-h-screen flex-col">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster closeButton />
        </body>
      </html>
    </SessionProvider>
  );
}
