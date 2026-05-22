import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yalathe Environmental | Environmental Consultancy · East London, SA",
  description:
    "Yalathe Environmental is a 100% Black-owned South African environmental consultancy offering air quality, EIA, GIS, remediation, EHS, and sustainability services. Est. 2020, East London.",
  keywords: [
    "environmental consultancy South Africa",
    "EIA East London",
    "air quality consulting",
    "GIS environmental services",
    "Black-owned environmental firm",
    "remediation South Africa",
    "EHS management",
    "Yalathe Environmental",
  ],
  openGraph: {
    title: "Yalathe Environmental",
    description: "Protecting Nature · Empowering People · Sustaining The Future",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={poppins.variable}>
      <body className="font-poppins bg-base text-offwhite antialiased">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
