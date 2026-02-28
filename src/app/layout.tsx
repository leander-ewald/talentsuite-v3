import type { Metadata, Viewport } from "next";
import { Poppins, Rajdhani, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import MetaPixel from "@/components/MetaPixel";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://talentsuite.io"),
  title: "TalentSuite | Performance Recruiting, Neukundengewinnung & E-Commerce Agentur",
  description:
    "Fullservice-Agentur für Performance Recruiting, Neukundengewinnung und E-Commerce. 50+ Unternehmen vertrauen uns. Kostenlose Potenzialanalyse sichern.",
  openGraph: {
    title: "TalentSuite | Performance Recruiting, Neukundengewinnung & E-Commerce Agentur",
    description:
      "Fullservice-Agentur für Performance Recruiting, Neukundengewinnung und E-Commerce. 50+ Unternehmen vertrauen uns.",
    url: "https://talentsuite.io",
    siteName: "TalentSuite",
    locale: "de_DE",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "TalentSuite",
              url: "https://talentsuite.io",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Iserlohn",
                addressRegion: "NRW",
                addressCountry: "DE",
              },
              areaServed: ["DE", "AT", "CH"],
              serviceType: [
                "Performance Recruiting",
                "Neukundengewinnung",
                "E-Commerce",
                "Social Media Management",
                "Content Produktion",
                "Webentwicklung",
              ],
              sameAs: [
                "https://www.tiktok.com/@talentsuite",
                "https://www.youtube.com/@talentsuite",
                "https://www.instagram.com/talentsuite.io/",
                "https://www.facebook.com/profile.php?id=100095016041438&locale=de_DE",
                "https://www.linkedin.com/company/talentsuiteio/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${rajdhani.variable} ${inter.variable} antialiased`}>
        <MetaPixel />
        <CookieConsent />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N7J9WLXF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script id="gtm-consent-script" strategy="afterInteractive">
          {`
            function loadGTM(){if(window.__gtmLoaded)return;window.__gtmLoaded=true;
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N7J9WLXF');}
            if(document.cookie.indexOf('cookie_consent=accepted')!==-1){loadGTM();}
            window.addEventListener('cookieConsentAccepted',loadGTM);
          `}
        </Script>
      </body>
    </html>
  );
}
