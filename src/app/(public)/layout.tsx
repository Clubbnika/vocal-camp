import type { PropsWithChildren } from 'react';
import { Header } from '@/components/ui/Header';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}