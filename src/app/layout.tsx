'use client';

import { PropsWithChildren, useState, useEffect } from "react";
import Image from 'next/image';
import "@/app/globals.css";
import { Header } from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import TopButton from "@/components/ui/TopButton";
import { TabProvider } from "@/components/ui/TabContext";
import BurgerMenu from '@/components/ui/BurgerMenu';

const RootLayoutContent = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Image
          src="/phone.webp"
          alt="background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

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
            width: 100vw;
            margin: 0;
            padding: 2px 0;
            box-sizing: border-box;
            background: black;
            position: fixed;
            top: 0;
            z-index: 10;
            left: 0;
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
              width: 100vw;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              left: 0;
            }
          }
        `
        }</style>
      </head>
      <body className="relative min-h-screen bg-black">
        <TabProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </TabProvider>
      </body>
    </html>
  );
}