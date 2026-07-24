import type { Metadata } from "next";
import "./global.css";
import Navbar from "./components/navbar/Navbar";
import GridPulse from "./components/pureComponents/GridPulse";
import { LanguageProvider } from "@/i18/context";

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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <LanguageProvider>
          <GridPulse />
          <Navbar />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
