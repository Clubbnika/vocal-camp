
'use client';
import { useRouter } from 'next/navigation';
import { useTabContext } from '@/components/ui/TabContext';

export function Header() {
  const { activeTab, setActiveTab } = useTabContext();
  const router = useRouter();

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
    <header className="p-2 bg-black sticky top-0 z-10 w-full" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <nav className="w-full">
        <ul className="flex items-center justify-between w-full mx-auto max-w-[1200px] px-4 p-2 overflow-x-auto">
          {tabs.map((tab) => (
            <li key={tab.index} className="flex-shrink-0 text-center"> 
              <div className="flex flex-row items-center justify-center space-x-1.5">
                <a
                  href={tab.href}
                  className={`py-1.5 text-white hover:text-[#ff00be] ${activeTab === tab.index ? 'text-[#ff00be]' : ''} whitespace-nowrap text-sm`}
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
        </ul>
      </nav>
    </header>
  );
}
