import { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "@/styles/globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

const data = {
  description:
    "Folio Relay is an open-source document sharing infrastructure. Free alternative to Docsend with custom domain. Manage secure document sharing with real-time analytics.",
  title: "Folio Relay | Document sharing",
  url: "/",
};

export const metadata: Metadata = {
  icons: { icon: "/brand-mark.svg" },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: data.title,
  description: data.description,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    siteName: "Folio Relay",
    images: [
      {
        url: "/_static/meta-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: data.title,
    description: data.description,
    images: ["/_static/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
