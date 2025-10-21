import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  { name: "МАКСИМ БОНДАР", image: "/max.jpg" },
  { name: "НІКА ОХТЕНЬ", image: "/nikaaa.jpg" },
  { name: "КОСТЯ ЦАРЕНКОВ", image: "/kost.png" },
  { name: "НАСТЯ ЧЕРНЕЦЬ", image: "/nasti.jpg" },
  { name: "ІРА НЕХАЄНКО", image: "/ira.png" },
];

interface TeamMember {
  name: string;
  image: string;
}

interface ArticleProps {
  data: TeamMember;
}

const Article: React.FC<ArticleProps> = ({ data }) => {
  const { image, name } = data;

  return (
    <figure className="group relative flex-shrink-0 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div 
        className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-4 rounded-full"
        style={{
          filter: "drop-shadow(0 0 50px rgba(255, 0, 190, 0.7)) drop-shadow(0 0 20px rgba(255, 0, 190, 0.5))",
        }}
      >
        <h3 className="text-lg uppercase font-normal opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 letter-spacing-wide mb-1 text-center">
          {name}
        </h3>
      </div>
      <img src={image} alt={name} className="w-[280px] h-[280px] rounded-full object-cover" />
    </figure>
  );
};


const Team = () => {
  const [isMobile, setIsMobile] = useState(false);
  const MOBILE_BREAKPOINT = 900; 

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: isMobile ? 'center' : 'start', 
    loop: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const itemWidth = 280;
  const gap = 16;
  
  const visibleItems = isMobile ? 1 : 3; 
  
  const visibleAreaWidth = itemWidth * visibleItems + gap * (visibleItems - 1);

  const slideClass = isMobile ? `flex-[0_0_100%]` : `flex-[0_0_${itemWidth}px]`;

  return (
    <div className="w-full h-full">
      <div className="max-w-[1040px] w-full flex flex-col pt-[60px] pb-[140px] mx-auto px-4 sm:px-6 md:px-4"> 
        <h1 className="text-white inline-block font-extrabold text-4xl text-center mb-8 z-1">
          Наша команда
        </h1>
        <div className="relative w-full flex justify-center">
          <div 
            className="overflow-hidden" 
            ref={emblaRef}
            style={{ 
              width: isMobile ? 'calc(280px)' : `${visibleAreaWidth}px`, 
            }}
          >
            <div 
              className="flex gap-4"
              style={{ 
                height: '280px' 
              }}
            >
              {teamMembers.map((member, index) => {
                const isLast = index === teamMembers.length - 1;
                
                const lastItemSpacingClass = isLast ? 'mr-4' : '';

                return (
                  <div 
                    key={index} 
                    className={`${slideClass} ${lastItemSpacingClass}`}
                  >
                    <div className="flex justify-center items-center h-full w-full">
                       <Article data={member} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <button
            onClick={scrollPrev}
            className={`
              absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full 
              hover:bg-[#ff00be] transition duration-300 z-20 bg-black/50
              
              /* Мобільні стилі (за замовчуванням): кнопки всередині */
              -translate-x-1/2 
              
              /* Десктопні стилі (від 900px) */
              ${!isMobile ? '-ml-10 translate-x-0' : ''}
            `}
          >
            <ChevronLeft />
          </button>
          
          <button
            onClick={scrollNext}
            className={`
              absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full 
              hover:bg-[#ff00be] transition duration-300 z-20 bg-black/50
              
              /* Мобільні стилі (за замовчуванням): кнопки всередині */
              translate-x-1/2 
              
              /* Десктопні стилі (від 900px) */
              ${!isMobile ? '-mr-10 translate-x-0' : ''}
            `}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;