'use client';

import { Suspense } from 'react';
import AboutVC from "@/components/About/AboutVC";
import AboutMC from "@/components/MasterC/MasterC";
import About from "../../../components/About/About";
import Events from "../../../components/Events/Events";
import Team from "../../../components/Team/Team";
import Presents from "../../../components/Presents/Presents";
import Portfolio from "../../../components/Portfolio/Portfolio";
import Production from "../../../components/Production/Production";
import News from '../../../components/News/News';
import Image from 'next/image';

const HomePage = () => {
  const handleButtonClick = () => {
    const masterclassSection = document.getElementById('masterclass');
    if (masterclassSection) {
      masterclassSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="home" className="relative min-h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="max-w-[1040px] w-full flex flex-col items-center p-4 mt-[-50px]">
            <Image
              src="/logo.webp"
              alt="Vocal Camp logo"
              width={300}
              height={300}
              className="mb-4"
            />
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
        <div id="masterclass" className="min-h-[50vh]">
          <AboutMC />
        </div>
      </Suspense>

      <div id="about" className="min-h-[50vh]" style={{ marginTop: '1rem' }}>
        <About />
      </div>

      <div id="events">
        <Events />
      </div>

      <div id="team" style={{ marginTop: '1rem' }}>
        <Team />
      </div>

      <div id="certificates" style={{ marginTop: '1rem' }}>
        <Presents />
      </div>

      <div id="portfolio" style={{ marginTop: '1rem' }}>
        <Portfolio />
      </div>

      <div id="production" style={{ marginTop: '1rem' }}>
        <Production />
      </div>

      <div id="news">
        <News />
      </div>
    </>
  );
};

export default HomePage;