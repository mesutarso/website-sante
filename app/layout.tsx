import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter as FontSans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/react-query";
import { rocgrotesk } from "@/fonts";
import { cn } from "@/lib/utils";
import { Menu } from "@/components/header/menu";
import { Footer } from "@/components/footer";
import { ViewTransitions } from 'next-view-transitions'



const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ministère de la Santé Publique, Hygiène et Prévention ",
  description: "Site Officiel du Ministère de la Santé Publique, Hygiène et Prévention",
  metadataBase: new URL("https://sante.gouv.cd"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="fr" suppressHydrationWarning>
        <body
          className={cn("min-h-screen font-sans antialiased", fontSans.variable, rocgrotesk.variable)}
        >
          <Providers>
            <Menu />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
