import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JGC Solutions",
  description:
    "JGC Solutions provides AWS-powered software development, automation, and serverless architecture for small and mid-sized businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ 
        "@context": "https://schema.org", "@type": "LocalBusiness", name: "JGC Solutions", url: "https://jgcsol.com", logo: "https://jgcsol.com/logo.png", 
        description: "AWS cloud consulting and serverless software development for small and mid-sized businesses.", address: { "@type": "PostalAddress", 
        addressLocality: "Rochester", addressRegion: "NY", addressCountry: "US", }, areaServed: { "@type": "Country", name: "United States", }, 
        founder: { "@type": "Person", name: "Jesus Cabrero", }, sameAs: ["https://www.linkedin.com/in/YOUR-LINKEDIN", "https://github.com/jgcsol",], 
        serviceOffered: [{ "@type": "Service", name: "AWS Cloud Development" }, { "@type": "Service", name: "Serverless Automation" }, { "@type": "Service", name: "Cloud Migration to AWS" },], }), }} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
