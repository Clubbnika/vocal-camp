'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useTabContext } from '@/components/ui/TabContext';

const sectionToTabIndex = {
  home: 1,
  masterclass: 2,
  about: 3,
  events: 4,
  team: 5,
  certificates: 6,
  portfolio: 7,
  production: 8,
  news: 9,
};

export default function ActiveTabManager() {
  const router = useRouter();
  const { setActiveTab } = useTabContext();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const tabIndex = sectionToTabIndex[sectionId as keyof typeof sectionToTabIndex] || 1;
            setActiveTab(tabIndex);
            router.push(`#${sectionId}`, { scroll: false });
          }
        });
      },
      { root: null, threshold: 0.1 }
    );

    Object.keys(sectionToTabIndex).forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => observerRef.current?.disconnect();
  }, [router, setActiveTab]);

  return null;
}