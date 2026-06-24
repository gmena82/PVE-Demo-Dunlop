import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dunlop Residence Proposal | Built By Design",
  description:
    "Built By Design proposal for the Dunlop Residence Phase II addition and whole-home remodel."
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
