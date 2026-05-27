import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Trotta | VP of Technology",
  description:
    "Technology executive with 17 years of experience in enterprise security, compliance, and infrastructure in regulated financial services.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "John Trotta | VP of Technology",
    description:
      "Technology executive with 17 years of experience in enterprise security, compliance, and infrastructure.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Trotta | VP of Technology",
    description:
      "Technology executive with 17 years of experience in enterprise security, compliance, and infrastructure.",
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
