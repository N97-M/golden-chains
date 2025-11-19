import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import I18nProvider from "./i18n-provider";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import QuickInfo from "./components/QuickInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golden Chains",
  description: "Golden Chains Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          <div className="min-h-screen bg-white">
            <Header />
            <Breadcrumb />
            <main>
              {children}
            </main>
            <QuickInfo />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}