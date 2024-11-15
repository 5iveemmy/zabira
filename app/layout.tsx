import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";

const plusJakarta = localFont({
  src: "./fonts/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-PlusJakartaSans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zabira - Buy and Sell Your Cryptocurrencies in Nigeria | Zabira",
  description: "Buy and Sell Your Cryptocurrencies in Nigeria | Zabira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${plusJakarta.variable} antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <main className="plus_jakarta_sans">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
