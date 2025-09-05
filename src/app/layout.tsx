import { Header } from "@/components/ui/Header";
import { PropsWithChildren } from "react";
import "@/app/globals.css";

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="uk">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}