'use client';

import { useState, useEffect, useRef } from 'react';
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

          /* ────────────────────────────────────────────── */
          /* Анімації лоадера                                 */
          /* ────────────────────────────────────────────── */

          @keyframes eyeMove {
            0%, 10%   { transform: translate(0px, 0px); }
            13%, 40%  { transform: translate(-15px, 0px); }
            43%, 70%  { transform: translate(15px, 0px); }
            73%, 90%  { transform: translate(0px, 15px); }
            93%, 100% { transform: translate(0px, 0px); }
          }

          @keyframes blink {
            0%, 8%, 10%, 18%, 20%, 38%, 40%, 58%, 60%, 68%, 70%, 88%, 90%, 98%, 100% {
              transform: scaleY(1);
            }
            9%, 19%, 39%, 59%, 69%, 89%, 99% {
              transform: scaleY(0.4); /* стиснення всього ока */
            }
          }

          .eye {
            position: relative;
            width: 60px;
            height: 60px;
            background: white;
            border-radius: 50%;
            overflow: hidden;
            animation: blink 9s infinite; /* повільніше кліпання + додатковий цикл на початку */
          }

          .eye-iris-pupil {
            position: absolute;
            inset: 10px;
            background: #ff00be; /* суцільна рожева райдужка */
            border-radius: 50%;
            animation: eyeMove 9s infinite;
          }

          .eye-pupil {
            position: absolute;
            inset: 12px; /* більша зіниця */
            background: #000000;
            border-radius: 50%;
          }

          .loader-overlay {
            transition: opacity 0.7s ease-out;
          }
        `}</style>
      </head>
      <body className="relative min-h-screen bg-[url('/phone.webp')] bg-cover bg-center bg-repeat bg-fixed">
        <TabProvider>
          {showLoader ? (
            <div 
              className="
                loader-overlay 
                fixed inset-0 z-[9999] 
                flex items-center justify-center 
                bg-black
              "
            >
              <div className="flex items-center gap-6">
                <div className="eye">
                  <div className="eye-iris-pupil">
                    <div className="eye-pupil" />
                  </div>
                </div>

                <div className="eye">
                  <div className="eye-iris-pupil">
                    <div className="eye-pupil" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <RootLayoutContent>{children}</RootLayoutContent>
          )}
        </TabProvider>
      </body>
    </html>
  );
}