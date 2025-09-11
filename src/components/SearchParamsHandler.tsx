'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface SearchParamsHandlerProps {
  onSectionChange: (section: string | null) => void;
  children: React.ReactNode;
}

export function SearchParamsHandler({ onSectionChange, children }: SearchParamsHandlerProps) {
  const searchParams = useSearchParams();
  const section = searchParams.get('section');

  useEffect(() => {
    onSectionChange(section);
  }, [section, onSectionChange]);

  return <>{children}</>;
}