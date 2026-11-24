import "@/styles/globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
const font = DM_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Folio Relay | Document sharing",
  description: "Share documents and manage viewing links in Folio Relay.",
  icons: { icon: "/_static/folio-relay.svg" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={font.className}>{children}</body></html>;
}
