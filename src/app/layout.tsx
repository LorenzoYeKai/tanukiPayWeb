import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import moment from "moment";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanuki Pay",
  description: "Accept stablecoins in your store, restaurant, or event.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = moment().format("YYYY");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col justify-between h-screen w-screen">
          {children}
          <div>
            <footer className="flex-col md:flex-row flex justify-between p-4">
              <p>Copyright © {currentYear} Tanuki Pay</p>
              <p>
                <a href="https://x.com/TanukiPay" target="_blank">
                  X
                </a>{" "}
                |{" "}
                <Link href="/terms" target="_blank">
                  Terms of Service
                </Link>{" "}
                |{" "}
                <Link href="/privacy" target="_blank">
                  Privacy Policy
                </Link>
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
