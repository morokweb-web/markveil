import "./globals.css";
import Navbar from "@/components/Navbar";
import { fontSerif } from "@/app/fonts";
import RouteFade from "@/components/RouteFade";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  metadataBase: new URL("https://gomarkveil.com"),
  title: { default: "MARKVEIL", template: "%s — MARKVEIL" },
  description: "High-performance websites crafted in Cape Town.",
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "MARKVEIL" },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32" }, { url: "/favicon-16.png", sizes: "16x16" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSerif.variable} scroll-smooth`}>
      <body className="antialiased font-serif">
        <Navbar />
        <main>
          <RouteFade>{children}</RouteFade>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
