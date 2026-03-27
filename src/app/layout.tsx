'use client';

import { PropsWithChildren, useState, useEffect } from "react";
import "@/app/globals.css";
import { Header } from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import TopButton from "@/components/ui/TopButton";
import { TabProvider } from "@/components/ui/TabContext";
import BurgerMenu from '@/components/ui/BurgerMenu';

const RootLayoutContent = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="burger-menu-container">
        <BurgerMenu />
      </div>
      {children}
      <TopButton />
      <div id="contacts">
        <Footer />
      </div>
    </>
  );
};

export default function RootLayout({ children }: PropsWithChildren) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;800&display=swap"
          rel="stylesheet"
        />
        <style jsx global>{`
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
          }

          .header-container {
            display: block;
            width: 100%;
            margin: 0;
            padding: 0;
            position: relative;
          }

          .header-container header {
            width: 100vw !important;
            margin: 0 !important;
            padding: 2px 0 !important;
            box-sizing: border-box;
            background: black !important;
            position: fixed;
            top: 0;
            z-index: 10;
            left: 0 !important;
          }

          .burger-menu-container {
            display: none;
          }

          @media (max-width: 1000px) {
            .header-container {
              display: none;
            }
            .burger-menu-container {
              display: block;
            }
          }

          @media (min-width: 1001px) and (max-width: 1190px) {
            .header-container header {
              width: 100vw !important;
              margin: 0 !important;
              padding: 0 !important;
              box-sizing: border-box;
              left: 0 !important;
            }
          }

          /* === Надійний фікс фону для iOS Safari та мобільних пристроїв === */
          body {
            background-attachment: scroll !important;
            background-size: cover !important;
            background-position: center center !important;
          }

          @supports (-webkit-touch-callout: none) {
            body {
              background-attachment: scroll !important;
              background-size: cover !important;
              background-position: center center !important;
            }
          }

          /* Для десктопу та планшетів — фіксований фон */
          @media (min-width: 768px) {
            body {
              background-attachment: fixed !important;
            }
          }
        `}</style>
      </head>
      <body className="relative min-h-screen 
        bg-[url('/bgg.webp')] 
        bg-cover 
        bg-center 
        bg-no-repeat
        md:bg-[url('/phone.webp')]
      ">
        <TabProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </TabProvider>
      </body>
    </html>
  );
}