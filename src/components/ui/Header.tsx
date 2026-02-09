// components/Header.tsx або src/components/ui/Header.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useTabContext } from '@/components/ui/TabContext';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import CartModal from './CartModal'; // або правильний шлях
import { useCartStore } from '@/store/cartStore';

export function Header() {
  const { activeTab, setActiveTab } = useTabContext();
  const router = useRouter();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getItemCount } = useCartStore();

  const tabs = [
    { name: 'Головна', href: '#home', index: 1 },
    { name: 'Майстер-клас', href: '#masterclass', index: 2 },
    { name: 'Про курси & Прайс', href: '#about', index: 3 },
    { name: 'Заходи', href: '#events', index: 4 },
    { name: 'Наша команда', href: '#team', index: 5 },
    { name: 'Сертифікати', href: '#certificates', index: 6 },
    { name: 'Портфоліо', href: '#portfolio', index: 7 },
    { name: 'Production', href: '#production', index: 8 },
    { name: 'Новини', href: '#news', index: 9 },
    { name: 'Контакти', href: '#contacts', index: 10 },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const updateURL = (href: string) => {
    const newPath = `${window.location.pathname}${href}`;
    router.push(newPath, { scroll: false });
  };

  const handleTabClick = (index: number, href: string) => {
    setActiveTab(index);
    scrollToSection(href);
    updateURL(href);
  };

  return (
    <>
      <header className="p-2 bg-black sticky top-0 z-10 w-full" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <nav className="w-full">
          <ul className="flex items-center justify-between w-full mx-auto max-w-[1250px] px-4 p-2 overflow-x-auto">
            <div className="flex items-center space-x-6 md:space-x-10">
              {tabs.map((tab) => (
                <li key={tab.index} className="flex-shrink-0 text-center">
                  <div className="flex flex-row items-center justify-center space-x-1.5">
                    <a
                      href={tab.href}
                      className={`py-1.5 text-white hover:text-[#ff00be] ${
                        activeTab === tab.index ? 'text-[#ff00be]' : ''
                      } whitespace-nowrap text-sm`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleTabClick(tab.index, tab.href);
                      }}
                    >
                      {tab.name}
                    </a>
                  </div>
                </li>
              ))}
            </div>

            {/* Іконка кошика */}
            <li className="flex-shrink-0">
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-white hover:text-[#ff00be] p-2 rounded-full transition-colors relative"
                aria-label="Кошик"
                suppressHydrationWarning // ← це виправляє помилку гідратації
              >
                <ShoppingCart size={24} />
                {getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#ff00be] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getItemCount()}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}