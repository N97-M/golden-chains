import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import QuickInfo from "./components/QuickInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golden Chains Trading LLC",
  description: "Dubai based auto spare parts and components trading company specializing in KYB, Perfect Rubber Parts, IBN, Next Auto, Smart, and Mikatakno products.",
  keywords: ["auto spare parts", "car components", "Dubai auto parts", "KYB", "Perfect Rubber Parts", "IBN", "Next Auto", "Smart", "Mikatakno"],
  authors: [{ name: "Golden Chains Trading LLC" }],
  creator: "Golden Chains Trading LLC",
  publisher: "Golden Chains Trading LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://golden-chains.vercel.app'),
  openGraph: {
    title: "Golden Chains Trading LLC",
    description: "Dubai based auto spare parts and components trading company specializing in KYB, Perfect Rubber Parts, IBN, Next Auto, Smart, and Mikatakno products.",
    url: "https://golden-chains.vercel.app",
    siteName: "Golden Chains Trading LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Chains Trading LLC",
    description: "Dubai based auto spare parts and components trading company specializing in KYB, Perfect Rubber Parts, IBN, Next Auto, Smart, and Mikatakno products.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Header />
          <Breadcrumb />
          <main>
            {children}
          </main>
          <QuickInfo />
        </div>
      </body>
    </html>
  );
}
