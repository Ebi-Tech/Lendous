import type { Metadata } from "next";
import "./globals.css";
import Footer from "../../components/footer";

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
      <body className="font-aptos antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
