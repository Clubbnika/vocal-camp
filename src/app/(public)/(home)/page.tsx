'use client';
import { Suspense, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useTabContext } from '@/components/ui/TabContext';
import AboutVC from "@/components/ui/AboutVC";
import AboutMC from "@/components/ui/MasterC/MasterC";
import About from "../about/page";
import Events from "../events/page";
import Team from "../team/page";
import Presents from "../presents/page";
import Portfolio from "../portfolio/page";
import Production from "../production/page";

const HomePage = () => {
  const router = useRouter();
  const { setActiveTab } = useTabContext();
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({
    home: null,
    'about-vc': null,
    masterclass: null,
    about: null,
    events: null,
    team: null,
    certificates: null,
    portfolio: null,
    production: null,
    news: null,
    contacts: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const tabIndex = Object.keys(sectionRefs.current).indexOf(sectionId) + 1;
            setActiveTab(tabIndex);
            router.push(`#${sectionId}`, { scroll: false });
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    Object.keys(sectionRefs.current).forEach((key) => {
      const element = sectionRefs.current[key];
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      Object.keys(sectionRefs.current).forEach((key) => {
        const element = sectionRefs.current[key];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [router, setActiveTab]);

  const handleButtonClick = () => {
    // Встановлюємо активну вкладку одразу, щоб UI оновився миттєво
    setActiveTab(3);

    // Оновлюємо URL для правильного відображення в адресному рядку
    router.push('#masterclass');

    // Прокручуємо до потрібної секції вручну, що гарантує плавний скрол
    const masterclassSection = sectionRefs.current.masterclass;
    if (masterclassSection) {
      masterclassSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="home" ref={(el) => {
        sectionRefs.current.home = el;
      }}>
        <div className="relative min-h-screen bg-[url('/phone.png')] bg-cover bg-center bg-repeat bg-fixed">
          <div className="flex justify-center">
            <div className="max-w-[1040px] w-full flex flex-col mt-35 items-center">
              <img
                src="/logo.png"
                alt="Vocal Camp logo"
                className="w-[300px]"
              />
              <button
                onClick={handleButtonClick}
                className="inline-block text-black bg-white px-4 py-2 rounded-3xl mb-80 mt-2 font-bold hover:bg-[#ff00be] transition duration-300"
              >
                ЗАПИСАТИСЯ НА БЕЗКОШТОВНИЙ МАЙСТЕР-КЛАС!
              </button>
            </div>
          </div>
        </div>
        <AboutVC />
      </div>

      <Suspense>
        <div id="masterclass" className="min-h-[50vh]" ref={(el) => {
          sectionRefs.current.masterclass = el;
        }}>
          <AboutMC />
        </div>
      </Suspense>

      <div id="about" className="min-h-[50vh]" ref={(el) => {
        sectionRefs.current.about = el;
      }}>
        <About />
      </div>

      <div id="events" ref={(el) => {
        sectionRefs.current.events = el;
      }}>
        <Events />
      </div>

      <div id="team" ref={(el) => {
        sectionRefs.current.team = el;
      }}>
        <Team />
      </div>

      <div id="certificates" ref={(el) => {
        sectionRefs.current.certificates = el;
      }}>
        <Presents />
      </div>

      <div id="portfolio" ref={(el) => {
        sectionRefs.current.portfolio = el;
      }}>
        <Portfolio />
      </div>

      <div id="production" ref={(el) => {
        sectionRefs.current.production = el;
      }}>
        <Production />
      </div>

      <div id="news" ref={(el) => {
        sectionRefs.current.news = el;
      }}></div>
    </>
  );
};

export default HomePage;
