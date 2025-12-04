import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// 1. Configure the Body Font (Standard reading text)
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

// 2. Configure the Heading Font (Bold headers)
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SWAPO Party | Unity, Liberty, Justice",
  description: "Official website of the SWAPO Party of Namibia. Founded 1960.",
  icons: {
    icon: '/favicon.ico', // You can add a favicon later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-neutral-100 text-neutral-900 flex flex-col min-h-screen`}
      >
        {/* Navigation is always at the top */}
        <Navbar />
        
        {/* Main Content Area 
            - 'flex-grow' forces this section to expand and fill available space
            - This pushes the Footer to the bottom even on empty pages
        */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer is always at the bottom */}
        <Footer />
      </body>
    </html>
  );
}