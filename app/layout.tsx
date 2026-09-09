import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css";
import "../styles/home.css";
import "../styles/contact.css";
import "../styles/portfolio.css";
import "../styles/pricing.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import Navbar from "./components/navbar";
import BreadcrumbSchema from "./components/breadcrumbSchema";
import Footer from "./components/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      /* =========================
         ORGANIZATION
      ========================== */
      {
        "@type": "Organization",
        "@id": "https://jgcsol.com/#organization",
        name: "JGC Solutions",
        url: "https://jgcsol.com",
        logo: "https://jgcsol.com/logo.png",
        description:
          "AWS cloud consulting and serverless software development for small and mid-sized businesses.",
        sameAs: [
          "https://github.com/jgcsol"
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rochester",
          addressRegion: "NY",
          addressCountry: "US"
        },
        areaServed: {
          "@type": "Country",
          name: "United States"
        },
        founder: {
          "@type": "Person",
          name: "Jesus Cabrero"
        }
      },

      /* =========================
         WEBSITE + SEARCH
      ========================== */
      {
        "@type": "WebSite",
        "@id": "https://jgcsol.com/#website",
        url: "https://jgcsol.com",
        name: "JGC Solutions",
        publisher: {
          "@id": "https://jgcsol.com/#organization"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://jgcsol.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },

      /* =========================
         SERVICES + OFFERS
      ========================== */
      {
        "@type": "Service",
        "@id": "https://jgcsol.com/#aws-cloud-development",
        name: "AWS Cloud Development",
        provider: {
          "@id": "https://jgcsol.com/#organization"
        },
        areaServed: {
          "@type": "Country",
          name: "United States"
        },
        offers: {
          "@type": "Offer",
          url: "https://jgcsol.com/contact",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "@id": "https://jgcsol.com/#serverless-automation",
        name: "Serverless Automation",
        provider: {
          "@id": "https://jgcsol.com/#organization"
        },
        areaServed: {
          "@type": "Country",
          name: "United States"
        },
        offers: {
          "@type": "Offer",
          url: "https://jgcsol.com/contact",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "@id": "https://jgcsol.com/#cloud-migration",
        name: "Cloud Migration to AWS",
        provider: {
          "@id": "https://jgcsol.com/#organization"
        },
        areaServed: {
          "@type": "Country",
          name: "United States"
        },
        offers: {
          "@type": "Offer",
          url: "https://jgcsol.com/contact",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        }
      },

      /* =========================
         FAQ (HIGH SEO VALUE)
      ========================== */
      {
        "@type": "FAQPage",
        "@id": "https://jgcsol.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What services does JGC Solutions provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "JGC Solutions provides AWS cloud development, serverless automation, and cloud migration services for small and mid-sized businesses."
            }
          },
          {
            "@type": "Question",
            name: "Do you work with small businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. JGC Solutions specializes in helping small and mid-sized businesses adopt scalable, cost-effective AWS solutions."
            }
          },
          {
            "@type": "Question",
            name: "How do I get started?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "You can get started by contacting us through our website to discuss your business needs and goals."
            }
          }
        ]
      }
    ]
  };


  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BreadcrumbSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

