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
            setActiveTab(10); // Index of the "Контакти" tab
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
      <Header />
      {/* <BurgerMenu /> */}
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
      </head>
      <body className="relative min-h-screen bg-[url('/phone.png')] bg-cover bg-center bg-repeat bg-fixed">
        <TabProvider>
          <RootLayoutContent>
            {children}
          </RootLayoutContent>
        </TabProvider>
      </body>
    </html>
  );
}