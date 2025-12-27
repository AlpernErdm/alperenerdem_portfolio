import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Alperen Erdem - Full-Stack Developer | .NET Specialist",
    template: "%s | Alperen Erdem",
  },
  description:
    "Alperen Erdem - Full-Stack Developer ve .NET Specialist. Ahi Evran Üniversitesi Bilgisayar Mühendisliği mezunu. .NET Core, React, TypeScript, Java Spring Boot ile modern web uygulamaları geliştiriyorum.",
  keywords: [
    "Alperen Erdem",
    "Full-Stack Developer",
    ".NET Developer",
    ".NET Core",
    "ASP.NET",
    "React",
    "TypeScript",
    "JavaScript",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "SQL Server",
    "Web Development",
    "Software Engineer",
    "İstanbul",
    "Yazılım Geliştirici",
  ],
  authors: [{ name: "Alperen Erdem", url: "https://alperenerdem-portfolio.vercel.app" }],
  creator: "Alperen Erdem",
  publisher: "Alperen Erdem",
  metadataBase: new URL("https://alperenerdem-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://alperenerdem-portfolio.vercel.app",
    title: "Alperen Erdem - Full-Stack Developer | .NET Specialist",
    description:
      "Full-Stack Developer ve .NET Specialist. .NET Core, React, TypeScript ile modern web uygulamaları geliştiriyorum.",
    siteName: "Alperen Erdem Portfolio",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Alperen Erdem - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alperen Erdem - Full-Stack Developer | .NET Specialist",
    description:
      "Full-Stack Developer ve .NET Specialist. .NET Core, React, TypeScript ile modern web uygulamaları geliştiriyorum.",
    images: ["/images/profile.jpeg"],
  },
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
  verification: {
    google: "google-site-verification-code", // User should replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for Person schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alperen Erdem",
    jobTitle: "Full-Stack Developer",
    description:
      "Full-Stack Developer ve .NET Specialist. Ahi Evran Üniversitesi Bilgisayar Mühendisliği mezunu.",
    url: "https://alperenerdem-portfolio.vercel.app",
    image: "https://alperenerdem-portfolio.vercel.app/images/profile.jpeg",
    email: "alpernerdm@gmail.com",
    telephone: "+905078663734",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Eyüp",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Ahi Evran Üniversitesi",
      department: "Bilgisayar Mühendisliği",
    },
    sameAs: [
      "https://github.com/alpernerdm",
      "https://www.linkedin.com/in/alpernerdm",
      "https://alperenerdem-portfolio.vercel.app",
    ],
    knowsAbout: [
      ".NET Core",
      "ASP.NET",
      "C#",
      "React",
      "TypeScript",
      "JavaScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "SQL Server",
      "Redis",
      "Elasticsearch",
    ],
  };

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${playfair.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
        <AnalyticsProvider />
      </body>
    </html>
  );
}
