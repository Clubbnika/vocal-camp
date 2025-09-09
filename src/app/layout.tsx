import { Header } from "@/components/ui/Header";
import { PropsWithChildren } from "react";
import "@/app/globals.css";
import Footer from "@/components/ui/Footer";
import TopButton from "@/components/ui/TopButton";

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;800&display=swap" rel="stylesheet" />
      </head>
      <body className="relative min-h-screen bg-[url('/phone.png')] bg-cover bg-center bg-repeat bg-fixed">
        <Header />
        {children}
        <TopButton />
      <Footer />
      </body>
    </html>
  );
}

