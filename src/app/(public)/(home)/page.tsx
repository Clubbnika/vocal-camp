'use client';
import { Suspense, useEffect, useRef, useCallback } from 'react';
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
    masterclass: null,
    about: null,
    events: null,
    team: null,
    certificates: null,
    portfolio: null,
    production: null,
    news: null,
  });

  const observerRef = useRef<IntersectionObserver | null>(null);

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

  const makeSectionRef = useCallback(
    (sectionId: string) => (el: HTMLElement | null) => {
      sectionRefs.current[sectionId] = el;
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    },
    []
  );

  const createObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

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
      {
        root: null,
        threshold: 0.1,
      }
    );

    Object.values(sectionRefs.current).forEach((element) => {
      if (element) {
        observerRef.current?.observe(element);
      }
    });
  }, [router, setActiveTab]);

  useEffect(() => {
    createObserver();

    return () => {
      observerRef.current?.disconnect();
    };
  }, [createObserver]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (observerRef.current) {
        Object.values(sectionRefs.current).forEach((element) => {
          if (element) {
            observerRef.current!.observe(element); 
          }
        });
      }
    }, 100); 

    return () => clearTimeout(timeoutId);
  }, []);

  const handleButtonClick = () => {
    setActiveTab(2);
    router.push('#masterclass');
    const masterclassSection = sectionRefs.current.masterclass;
    if (masterclassSection) {
      masterclassSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="home" ref={makeSectionRef('home')} className="relative min-h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="max-w-[1040px] w-full flex flex-col items-center p-4 mt-[-50px]">
            <img src="/logo.png" alt="Vocal Camp logo" className="w-[300px] mb-4" />
            <button
              onClick={handleButtonClick}
              className="inline-block text-black bg-white px-4 py-2 rounded-3xl mb-4 font-bold hover:bg-[#ff00be] transition duration-300"
            >
              ЗАПИСАТИСЯ НА БЕЗКОШТОВНИЙ МАЙСТЕР-КЛАС!
            </button>
          </div>
        </div>
        <AboutVC />
      </div>

      <Suspense>
        <div id="masterclass" className="min-h-[50vh]" ref={makeSectionRef('masterclass')}>
          <AboutMC />
        </div>
      </Suspense>

      <div id="about" className="min-h-[50vh]" ref={makeSectionRef('about')} style={{ marginTop: '1rem' }}>
        <About />
      </div>

      <div id="events" ref={makeSectionRef('events')}>
        <Events />
      </div>

      <div id="team" ref={makeSectionRef('team')} style={{ marginTop: '1rem' }}>
        <Team />
      </div>

      <div id="certificates" ref={makeSectionRef('certificates')} style={{ marginTop: '1rem' }}>
        <Presents />
      </div>

      <div id="portfolio" ref={makeSectionRef('portfolio')} style={{ marginTop: '1rem' }}>
        <Portfolio />
      </div>

      <div id="production" ref={makeSectionRef('production')} style={{ marginTop: '1rem' }}>
        <Production />
      </div>

      <div id="news" ref={makeSectionRef('news')} style={{ marginTop: '1rem' }}></div>
    </>
  );
};

export default HomePage;