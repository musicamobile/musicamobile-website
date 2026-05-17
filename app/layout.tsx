import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Musicamobile",
  description: "Musicamobile - Música para todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
