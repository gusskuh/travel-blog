import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew"],
  variable: "--font-hebrew",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cheap-flights-blog.co.il'),
  title: "טיסות זולות - המדריך המלא למציאת טיסות במחירים הטובים ביותר",
  description: "גלה את הסודות למציאת טיסות זולות בישראל ובעולם. טיפים, טריקים ומדריכים מקצועיים לחיסכון על טיסות. השוואת מחירים בזמן אמת.",
  keywords: [
    "טיסות זולות",
    "טיסות",
    "מחירי טיסות",
    "השוואת טיסות",
    "טיסות זולות מישראל",
    "טיסות זולות לחו\"ל",
    "טיסות זולות לאירופה",
    "טיסות זולות לאמריקה",
  ],
  authors: [{ name: "טיסות זולות" }],
  creator: "טיסות זולות",
  publisher: "טיסות זולות",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://cheap-flights-blog.co.il",
    title: "טיסות זולות - המדריך המלא למציאת טיסות במחירים הטובים ביותר",
    description: "גלה את הסודות למציאת טיסות זולות בישראל ובעולם. טיפים, טריקים ומדריכים מקצועיים לחיסכון על טיסות.",
    siteName: "טיסות זולות",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "טיסות זולות - המדריך המלא",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "טיסות זולות - המדריך המלא למציאת טיסות במחירים הטובים ביותר",
    description: "גלה את הסודות למציאת טיסות זולות בישראל ובעולם. טיפים, טריקים ומדריכים מקצועיים לחיסכון על טיסות.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cheap-flights-blog.co.il",
    languages: {
      "he-IL": "https://cheap-flights-blog.co.il",
      "en-US": "https://cheap-flights-blog.co.il/en",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "טיסות זולות",
              url: "https://cheap-flights-blog.co.il",
              description: "המדריך המלא למציאת טיסות זולות בישראל ובעולם",
              inLanguage: "he-IL",
              author: {
                "@type": "Organization",
                name: "טיסות זולות",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://cheap-flights-blog.co.il/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${heebo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
