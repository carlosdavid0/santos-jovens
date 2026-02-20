import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.instagram.com"),
  title: {
    default: "Juventude de Varjota",
    template: "%s | Juventude de Varjota",
  },
  description: "Histórias de santos para a juventude católica.",
  openGraph: {
    title: "Juventude de Varjota",
    description: "Histórias de santos para a juventude católica.",
    url: "https://www.instagram.com/juventudedevarjota/",
    siteName: "Juventude de Varjota",
    images: [
      {
        url: "https://i.ibb.co/Nn9N46g4/Imagem-Instagram-1.jpg",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juventude de Varjota",
    description: "Histórias de santos para a juventude católica.",
    images: ["https://i.ibb.co/Nn9N46g4/Imagem-Instagram-1.jpg"],
  },
  icons: {
    icon: "https://i.ibb.co/Nn9N46g4/Imagem-Instagram-1.jpg",
    shortcut: "https://i.ibb.co/Nn9N46g4/Imagem-Instagram-1.jpg",
    apple: "https://i.ibb.co/Nn9N46g4/Imagem-Instagram-1.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
