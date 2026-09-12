import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "RASOLOMANANA Heritiana Noe | Mobile Developer – Flutter & Java",
  description:
    "Portfolio of RASOLOMANANA Heritiana Noe – Mobile Developer specialized in Flutter and Java. Based in Antananarivo, Madagascar.",
  keywords: [
    "Flutter",
    "Java",
    "Mobile Developer",
    "Android",
    "iOS",
    "Madagascar",
    "Antananarivo",
    "RASOLOMANANA Heritiana Noe",
  ],
  authors: [{ name: "RASOLOMANANA Heritiana Noe" }],
  openGraph: {
    title: "RASOLOMANANA Heritiana Noe | Mobile Developer",
    description:
      "Flutter & Java specialist building beautiful mobile apps from Antananarivo, Madagascar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col antialiased font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
