import { Suspense } from 'react';
import AboutVC from "@/components/About/AboutVC";
import AboutMC from "@/components/MasterC/MasterC";
import About from "@/components/About/About";
import Events from "@/components/Events/Events";
import Team from "@/components/Team/Team";
import Presents from "@/components/Presents/Presents";
import Portfolio from "@/components/Portfolio/Portfolio";
import Production from "@/components/Production/Production";
import News from "@/components/News/News";
import ActiveTabManager from "@/components/ActiveTabManager";
import HeroSection from '@/components/ui/HeroSection';

const HomePage = () => {
  return (
    <>
      <ActiveTabManager />

      <div id="home" className="relative min-h-screen">
        <HeroSection />
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