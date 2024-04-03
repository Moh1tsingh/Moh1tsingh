import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://moh1tsingh.vercel.app/"),

  title: "Mohitsingh Thakur",
  authors: {
    name: "Mohitsingh Thakur",
  },
  icons: {
    icon: "/favicon-3.png",
  },
  description:
    "An Engineering student and a Fullstack developer passionate about building stuff that users love.",
  openGraph: {
    title: "Mohitsingh",
    description:
      "An Engineering student and a Fullstack developer passionate about building stuff that users love.",
    url: "https://moh1tsingh.vercel.app/",
    siteName: "Mohitsingh",
    images: "/og.png",
    type: "website",
  },
  keywords: ["Mohitsingh Thakur", "mohitsingh", "mohitsingh thakur", "mohit"],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
