'use client';
import Link from 'next/link';
import { PAGES } from '@/app/config/pages.config';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="p-5 pl-7 font-bold bg-black sticky top-0 z-10">
      <nav className="flex items-center gap-4">
        <Link
          className={
            pathname === PAGES.HOME ? 'text-[#ff00be]' : 'text-white'
          }
          href={PAGES.HOME}
        >
          Home
        </Link>

        <div className="bg-white/20 h-5 w-[2px]"></div>

        <Link
          className={
            pathname === PAGES.ABOUT ? 'text-[#ff00be]' : 'text-white'
          }
          href={PAGES.ABOUT}
        >
          Про курси & Прайс
        </Link>

        <div className="bg-white/20 h-5 w-[2px]"></div>

        <Link
          className={
            pathname === PAGES.EVENTS ? 'text-[#ff00be]' : 'text-white'
          }
          href={PAGES.EVENTS}
        >
          Заходи
        </Link>

        <div className="bg-white/20 h-5 w-[2px]"></div>

        <Link
          className={
            pathname === PAGES.TEAM ? 'text-[#ff00be]' : 'text-white'
          }
          href={PAGES.TEAM}
        >
          Наша команда
        </Link>

        <div className="bg-white/20 h-5 w-[2px]"></div>

        <Link
          className={
            pathname === PAGES.PRESENTS ? 'text-[#ff00be]' : 'text-white'
          }
          href={PAGES.PRESENTS}
        >
          Сертифікати
        </Link>

        <div className="bg-white/20 h-5 w-[2px]"></div>

        <Link
          className={
            pathname === PAGES.PORTFOLIO ? 'text-[#ff00be]' : 'text-white'
          }
          href={PAGES.PORTFOLIO}
        >
          Портфоліо
        </Link>

        <div className="bg-white/20 h-5 w-[2px]"></div>

        <Link
          className={
            pathname === PAGES.PRODUCTION ? 'text-[#ff00be]' : 'text-white'
          }
          href={PAGES.PRODUCTION}
        >
          Production
        </Link>

        <div className="bg-white/20 h-5 w-[2px]"></div>

        <Link
          className={
            pathname === PAGES.CONTACTS ? 'text-[#ff00be]' : 'text-white'
          }
          href={PAGES.CONTACTS}
        >
          Контакти
        </Link>

      </nav>
    </header>
  );
}