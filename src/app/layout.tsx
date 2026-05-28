import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jtrotta.dev"),
  title: "John Trotta | Chief Technology & Security Officer",
  description:
    "Security and technology executive with 17 years building enterprise security, compliance, and infrastructure programs in regulated financial services.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "John Trotta | Chief Technology & Security Officer",
    description:
      "Security and technology executive. 17 years building enterprise security, compliance, and infrastructure programs in regulated financial services.",
    type: "website",
    url: "https://jtrotta.dev",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Trotta | Chief Technology & Security Officer",
    description:
      "Security and technology executive. 17 years building enterprise security, compliance, and infrastructure programs in regulated financial services.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
