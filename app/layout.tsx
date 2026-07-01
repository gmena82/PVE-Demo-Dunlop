import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dunlop Residence Proposal | Built By Design",
  description:
    "Built By Design proposal for the Dunlop Residence Phase II addition and whole-home remodel.",
  icons: {
    icon: [
      {
        url: "/assets/bbd-brand/bbd-logo-icon.png",
        type: "image/png",
        sizes: "512x512"
      }
    ],
    apple: [
      {
        url: "/assets/bbd-brand/bbd-logo-icon.png",
        type: "image/png",
        sizes: "512x512"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
