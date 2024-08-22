import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import {Footer, Header} from "@/components";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "ECommerce Nextjs Tailwind",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
