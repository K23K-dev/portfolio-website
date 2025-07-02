import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin's Portfolio",
  description: "Kevin Kou, an aspiring software engineer studying at Georgia Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
