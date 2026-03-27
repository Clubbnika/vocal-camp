import { PropsWithChildren } from "react";
import Image from 'next/image';
import "@/app/globals.css";
import { Header } from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import TopButton from "@/components/ui/TopButton";
import { TabProvider } from "@/components/ui/TabContext";
import BurgerMenu from '@/components/ui/BurgerMenu';
import PageLoader from "@/components/ui/PageLoader";

import { Wix_Madefor_Display } from 'next/font/google';

export const metadata = {
  title: "Vocal Camp — Твоя вокальна сім'я",
  description: "Уроки вокалу, мюзикли та квартирники в Києві. Навчимо співати кожного! Записуйся на безкоштовний майстер-клас.",
  openGraph: {
    title: "Vocal Camp — Вокальна студія",
    description: "Навчимо співати кожного! Записуйся на безкоштовний майстер-клас.",
    url: "https://vocal-camp.vercel.app",
    siteName: "Vocal Camp",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "https://vocal-camp.vercel.app/prev.webp",
        width: 1200,
        height: 630,
        alt: "Логотип Vocal Camp",
      },
    ],
  },
};

const wixFont = Wix_Madefor_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '800'],
  display: 'swap',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="uk">
      <head /> 
      
      <body className={`${wixFont.className} relative min-h-screen bg-black antialiased`}>
        <PageLoader />

        <style>{`
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
            .header-container { display: none; }
            .burger-menu-container { display: block; }
          }

          @media (min-width: 1001px) and (max-width: 1190px) {
            .header-container header {
              width: 100vw;
              left: 0 !important;
            }
          }

          @keyframes eyeMove {
            0%, 10%   { transform: translate(0px, 0px); }
            13%, 40%  { transform: translate(-15px, 0px); }
            43%, 70%  { transform: translate(15px, 0px); }
            73%, 90%  { transform: translate(0px, 15px); }
            93%, 100% { transform: translate(0px, 0px); }
          }

          @keyframes blink {
            0%, 8%, 10%, 18%, 20%, 38%, 40%, 58%, 60%, 68%, 70%, 88%, 90%, 98%, 100% { transform: scaleY(1); }
            9%, 19%, 39%, 59%, 69%, 89%, 99% { transform: scaleY(0.4); }
          }

          .eye {
            position: relative;
            width: 60px;
            height: 60px;
            background: white;
            border-radius: 50%;
            overflow: hidden;
            animation: blink 9s infinite;
          }

          .eye-iris-pupil {
            position: absolute;
            inset: 10px;
            background: #ff00be;
            border-radius: 50%;
            animation: eyeMove 9s infinite;
          }

          .eye-pupil {
            position: absolute;
            inset: 12px;
            background: #000000;
            border-radius: 50%;
          }
        `}</style>

        <TabProvider>
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
        </TabProvider>
      </body>
    </html>
  );
}