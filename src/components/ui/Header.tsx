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
    <header className="p-2 px-5 bg-black sticky top-0 z-10">
      <nav>
        <ul className="flex items-center justify-between w-full">
          {tabs.map((tab) => (
            <li key={tab.index} className="flex-grow text-center">
              <div className="flex flex-row items-center justify-center space-x-4">
                <a
                  href={tab.href}
                  className={`py-2 text-white hover:text-[#ff00be] ${activeTab === tab.index ? 'text-[#ff00be]' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(tab.index, tab.href);
                  }}
                >
                  {tab.name}
                </a>
                {tab.index !== tabs.length && <div className="bg-white/20 h-5 rounded-full w-[3px] mx-4"></div>} {/* Роздільники з відступами */}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
