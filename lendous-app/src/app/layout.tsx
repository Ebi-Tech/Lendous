import "./globals.css";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lendous",
  description: "Grow your business in Africa with Lendous",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="">
        <Navbar />
        <div className="">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}