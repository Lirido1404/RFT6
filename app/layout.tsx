import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import FlecheRemonte from "./(components)/FlecheRemonte";
import Footer from "./(components)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <FlecheRemonte />
        <div>
          <Nav />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
