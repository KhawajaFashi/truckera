import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import GoogleAnalytics from "@/components/GoogleAnalytics";

const ubranist_font = localFont({
  src: [
    {
      path: './Fonts/Urbanist-VariableFont_wght.ttf',
      style: "SemiBold",
      weight: "600",
    }
  ],
  variable: '--font-ubranist',
});

export const metadata: Metadata = {
  title: "Kargoas Dispachers",
  description: "Kargoas provides reliable truck dispatching services that simplify logistics operations for drivers and fleet managers nationwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubranist_font.variable} antialiased`}
      >
        <GoogleAnalytics GA_ID="G-TK82WQBMRG" />
        <meta name="google-site-verification" content="GHLaxdZt2xhWfuYUvt8elUeKQF6r4Id4thCVdeQJLRQ" />
        {children}
      </body>
    </html>
  );
}
