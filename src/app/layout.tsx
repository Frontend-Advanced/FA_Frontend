import type { Metadata } from "next";
import { inter } from "@/lib/font";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Frontend Advanced",
  description: "All-in-one educational platform for junior to senior frontend developers to lean advanced topics with interactive tools & hands-on coding sessions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`font-sans px-5 bg-background`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
