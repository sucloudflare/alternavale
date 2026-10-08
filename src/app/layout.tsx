import type { Metadata, Viewport } from "next";
import "@fontsource/pirata-one";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/playfair-display/700-italic.css";
import "@fontsource/permanent-marker";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "AlternaVale | @AlternaVale",
  description:
    "Rolê underground de gente esquisita do Vale do São Francisco. Junte-se a AlternaVale hoje — Instagram, TikTok, X e mais.",
  keywords: ["AlternaVale", "Vale do São Francisco", "rolê", "underground"],
  icons: {
    icon: "/images/logo-mono-v2.png",
  },
  openGraph: {
    title: "AlternaVale",
    description: "Mais que um rolê, uma comunidade! Vale do São Francisco.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased bg-black text-zinc-100 font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
