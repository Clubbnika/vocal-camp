import { Header } from "@/components/ui/Header";
import { PropsWithChildren } from "react";
import "@/app/globals.css";

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="uk">
            <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}