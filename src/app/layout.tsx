import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "./components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Ignacio Smirlian — Full Stack Developer",
  description:
    "Full Stack Developer specializing in high-performance architecture, scalable Node.js microservices, and pixel-perfect React interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
