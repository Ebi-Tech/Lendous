import "./globals.css";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

// Define the Poppins font with desired weights and subsets
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

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
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      
      <body className="bg-white font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}