'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTabContext } from '@/components/ui/TabContext';

export default function BurgerMenu() {
  const { activeTab, setActiveTab } = useTabContext();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false); // Закриваємо меню перед прокручуванням
    setTimeout(() => {
      scrollToSection(href); // Прокручуємо після закриття меню
      updateURL(href);
    }, 300); // Затримка відповідає анімації закриття меню (0.3s)
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Ek+Mukta:wght@200;300;400;500;600;700;800&display=swap');

        :root {
          --cubic-bezier: cubic-bezier(0.4, 0.01, 0.165, 0.99);
          --header-height: 50px;
          --burger-size: 50px;
          --bar-width: 18px;
          --bar-height: 1px;
          --bar-spacing: 6px;
          --menu-items: ${tabs.length};
        }

        body {
          margin: 0;
          line-height: 1.4;
          background: transparent;
          transition: all 0.3s ease;
        }

        .burger-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background: rgba(0, 0, 0, 0.8);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 20px;
          box-sizing: border-box;
        }

        .burger-container {
          position: relative;
          display: inline-block;
          height: var(--burger-size);
          width: var(--burger-size);
          cursor: pointer;
          transition: all 0.3s var(--cubic-bezier);
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          z-index: 1001;
        }

        #burger {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: var(--bar-width);
          height: calc(var(--bar-height) * 2 + var(--bar-spacing));
          display: block;
        }

        .bar {
          width: 100%;
          height: var(--bar-height);
          display: block;
          position: absolute;
          background: #FFF;
          transform-origin: center;
          transition: all 0.4s var(--cubic-bezier);
          left: 0;
        }

        .bar.topBar {
          top: 0;
          transform: rotate(0deg);
        }

        .bar.btmBar {
          top: var(--bar-spacing);
          transform: rotate(0deg);
        }

        .menu-overlay {
          position: fixed;
          top: var(--header-height);
          left: 0;
          width: 100%;
          height: calc(100vh - var(--header-height));
          background: #000;
          z-index: 999;
          transform: translateY(-100%);
          transition: transform 0.3s var(--cubic-bezier);
          overflow: hidden;
        }

        .menu-opened .menu-overlay {
          transform: translateY(0);
        }

        ul.menu {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          list-style: none;
          margin: 0;
          padding: 48px 48px 0;
          box-sizing: border-box;
          overflow-y: auto;
        }

        ul.menu::-webkit-scrollbar {
          display: none;
        }

        li.menu-item {
          border-bottom: 1px solid #333;
          margin-top: 5px;
          transform: scale(1.15) translateY(-30px);
          opacity: 0;
          transition: transform 0.5s var(--cubic-bezier), opacity 0.6s var(--cubic-bezier);
        }

        .menu-opened ul.menu li.menu-item {
          transform: scale(1) translateY(0px);
          opacity: 1;
        }

        li.menu-item a {
          display: block;
          position: relative;
          color: #FFF;
          font-family: 'Ek Mukta', sans-serif;
          font-weight: 200;
          text-decoration: none;
          font-size: 22px;
          line-height: 2.35;
          width: 100%;
          transition: color 0.3s ease;
          padding: 10px 0;
        }

        li.menu-item a:hover {
          color: #ff00be; /* Рожевий лише при наведенні */
        }

        .menu-item.active a {
          color: #FFF; /* Активна вкладка залишається білою */
        }

        .menu-opened .burger-container #burger .bar {
          transition-delay: 0.2s;
        }

        .menu-opened .burger-container #burger .bar.topBar {
          top: calc(var(--bar-spacing) / 2);
          transform: rotate(45deg);
        }

        .menu-opened .burger-container #burger .bar.btmBar {
          top: calc(var(--bar-spacing) / 2);
          transform: rotate(-45deg);
        }

        @media(max-width: 600px) {
          .burger-header {
            padding-left: 10px;
          }

          ul.menu {
            padding: 20px;
          }
        }
      `}</style>

      <div className={`burger-menu ${isMenuOpen ? 'menu-opened' : ''}`}>
        <div className="burger-header">
          <div className="burger-container" onClick={toggleMenu}>
            <div id="burger">
              <span className="bar topBar"></span>
              <span className="bar btmBar"></span>
            </div>
          </div>
        </div>
        <div className="menu-overlay">
          <ul className="menu">
            {tabs.map((tab, index) => (
              <li
                key={tab.index}
                className={`menu-item ${activeTab === tab.index ? 'active' : ''}`}
                style={{
                  transitionDelay: isMenuOpen ? `${0.07 * (index + 1) + 0.2}s` : '0s',
                } as React.CSSProperties}
              >
                <a
                  href={tab.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(tab.index, tab.href);
                  }}
                  style={{
                    transitionDelay: isMenuOpen ? `${0.07 * (index + 1) + 0.2}s` : '0s',
                  } as React.CSSProperties}
                >
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}