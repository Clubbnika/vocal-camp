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
    <header className="p-2 pl-7 bg-black sticky top-0 z-10">
      <nav>
        <ul className="flex items-center gap-4">
          {tabs.map((tab) => (
            <li key={tab.index}>
              <div className="flex flex-row items-center">
                <a
                  href={tab.href}
                  className={` px-3 py-2 text-white hover:text-[#ff00be] ${activeTab === tab.index ? 'text-[#ff00be]' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(tab.index, tab.href);
                  }}
                >
                  {tab.name}
                </a>
                {tab.index !== tabs.length && <div className="bg-white/20 h-5 w-[2px]"></div>}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}


// 'use client';
// import Link from 'next/link';
// import { PAGES } from '@/app/config/pages.config';
// import { usePathname } from 'next/navigation';

// export function Header() {
//   const pathname = usePathname();

//   return (
//     <header className="p-5 pl-7 bg-black sticky top-0 z-10">
//       <nav className="flex items-center gap-4">
//         <Link
//           className={
//             pathname === PAGES.HOME ? 'text-[#ff00be] font-bold' : 'text-white'
//           }
//           href={PAGES.HOME}
//         >
//           Home
//         </Link>

//         <div className="bg-white/20 h-5 w-[2px]"></div>

//         <Link
//           className={
//             pathname === PAGES.HOME ? 'text-[#ff00be] font-bold' : 'text-white'
//           }
//           href={PAGES.HOME}
//         >
//           Майстер-клас
//         </Link>

//         <div className="bg-white/20 h-5 w-[2px]"></div>

//         <Link
//           className={
//             pathname === PAGES.ABOUT ? 'text-[#ff00be] font-bold' : 'text-white'
//           }
//           href={PAGES.ABOUT}
//         >
//           Про курси & Прайс
//         </Link>

//         <div className="bg-white/20 h-5 w-[1px]"></div>

//         <Link
//           className={
//             pathname === PAGES.EVENTS ? 'text-[#ff00be] font-bold' : 'text-white'
//           }
//           href={PAGES.EVENTS}
//         >
//           Заходи
//         </Link>

//         <div className="bg-white/20 h-5 w-[2px]"></div>

//         <Link
//           className={
//             pathname === PAGES.TEAM ? 'text-[#ff00be] font-bold' : 'text-white'
//           }
//           href={PAGES.TEAM}
//         >
//           Наша команда
//         </Link>

//         <div className="bg-white/20 h-5 w-[1px]"></div>

//         <Link
//           className={
//             pathname === PAGES.PRESENTS ? 'text-[#ff00be] font-bold' : 'text-white'
//           }
//           href={PAGES.PRESENTS}
//         >
//           Сертифікати
//         </Link>

//         <div className="bg-white/20 h-5 w-[2px]"></div>

//         <Link
//           className={
//             pathname === PAGES.PORTFOLIO ? 'text-[#ff00be] font-bold' : 'text-white'
//           }
//           href={PAGES.PORTFOLIO}
//         >
//           Портфоліо
//         </Link>

//         <div className="bg-white/20 h-5 w-[2px]"></div>

//         <Link
//           className={
//             pathname === PAGES.PRODUCTION ? 'text-[#ff00be] font-bold' : 'text-white'
//           }
//           href={PAGES.PRODUCTION}
//         >
//           Production
//         </Link>

//         <div className="bg-white/20 h-5 w-[2px]"></div>

//         <Link
//           className={
//             pathname === PAGES.CONTACTS ? 'text-[#ff00be] font-bold' : 'text-white'
//           }
//           href={PAGES.CONTACTS}
//         >
//           Контакти
//         </Link>

//           <div className="bg-white/20 h-5 w-[2px]"></div>

//         <Link
//           className={
//             pathname === PAGES.CONTACTS ? 'text-[#ff00be] font-bold' : 'text-white'
//           }
//           href={PAGES.CONTACTS}
//         >
//           Новини
//         </Link>

//       </nav>
//     </header>
//   );
// }