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
        <meta property="og:url" content="https://kargoas.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kargoas Dispachers" />
        <meta property="og:description" content="Kargoas provides reliable truck dispatching services that simplify logistics operations for drivers and fleet managers nationwide." />
        <meta property="og:image" content="https://ogcdn.net/c078a98b-9a33-4eaf-a5cf-e5ebf3ea450c/v4/kargoas.com/Kargoas%20Dispachers/Kargoas%20provides%20reliable%20truck%20dispatching%20services%20that%20simplify%20logistics%20operations%20for%20drivers%20and%20fleet%20managers%20nationwide./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa0d6d18b-0c4a-4115-a9d6-15b23788854f.jpg%3Ftoken%3D4e3FjGZftGmoc395SlJ_Tz4Mhd28K03Khk1bSiJ5Ncw%26height%3D1024%26width%3D1024%26expires%3D33293867101/rgba(117%2C%20158%2C%20240%2C%201)/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="kargoas.com" />
        <meta property="twitter:url" content="https://kargoas.com" />
        <meta name="twitter:title" content="Kargoas Dispachers" />
        <meta name="twitter:description" content="Kargoas provides reliable truck dispatching services that simplify logistics operations for drivers and fleet managers nationwide." />
        <meta name="twitter:image" content="https://ogcdn.net/c078a98b-9a33-4eaf-a5cf-e5ebf3ea450c/v4/kargoas.com/Kargoas%20Dispachers/Kargoas%20provides%20reliable%20truck%20dispatching%20services%20that%20simplify%20logistics%20operations%20for%20drivers%20and%20fleet%20managers%20nationwide./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa0d6d18b-0c4a-4115-a9d6-15b23788854f.jpg%3Ftoken%3D4e3FjGZftGmoc395SlJ_Tz4Mhd28K03Khk1bSiJ5Ncw%26height%3D1024%26width%3D1024%26expires%3D33293867101/rgba(117%2C%20158%2C%20240%2C%201)/og.png" />
        {children}
      </body>
    </html>
  );
}
