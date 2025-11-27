
'use client';
import { useEffect, useRef } from 'react';
import { PropsWithChildren } from "react";
import "@/app/globals.css";
import { Header } from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import TopButton from "@/components/ui/TopButton";
import { TabProvider, useTabContext } from "@/components/ui/TabContext";
import { useRouter } from 'next/navigation';
import BurgerMenu from '@/components/ui/BurgerMenu';

const RootLayoutContent = ({ children }: PropsWithChildren<unknown>) => {
  const { setActiveTab } = useTabContext();
  const router = useRouter();
  const contactsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'contacts') {
            setActiveTab(10);
            router.push('#contacts', { scroll: false });
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (contactsRef.current) {
      observer.observe(contactsRef.current);
    }

    return () => {
      if (contactsRef.current) {
        observer.unobserve(contactsRef.current);
      }
    };
  }, [setActiveTab, router]);

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
      <div id="contacts" ref={contactsRef}>
        <Footer />
      </div>
    </>
  );
};

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;800&display=swap" rel="stylesheet" />
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
        `}</style>
      </head>
      <body className="relative min-h-screen bg-[url('/phone.webp')] bg-cover bg-center bg-repeat bg-fixed">
        <TabProvider>
          <RootLayoutContent>
            {children}
          </RootLayoutContent>
        </TabProvider>
      </body>
    </html>
  );
}
