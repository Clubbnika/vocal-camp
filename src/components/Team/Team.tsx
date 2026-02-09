"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  { 
    "name": "МАКСИМ БОНДАР", 
    "image": "/max.webp",
    "role": "Співвласник школи, вокальний майстер, звукорежисер",
    "description": "<p>Максим розпочав свій творчий шлях ще у віці 8 років і з того часу не зупиняється.</p><p>У підлітковому віці він брав участь в багатьох творчих та музичних проектах, включаючи \"Х-Фактор\", \"Битва хорів\" та \"Топ модель по українськи\".</p><p>В 13 років Максим вперше написав свою власну пісню, а вже з 15 років почав продавати пісні артистам.</p><p>Максим співпрацював з такими артистами, як Ірина Білик, Руслана, Злата Огнєвіч, Вася Демчук, Wellboy, Нікіта Ломакін, Нікіта Кисельов, Софіно Лоретті, Гарік Кричевський та інші.</p><p>Максим об'їздив більше 10 європейських країн, виступаючи в музичних шоу.</p><p>Крім того, він здобув музичну освіту в музичній школі імені Глієра та закінчив Київську муніципальну академію естрадного та циркового мистецтв за спеціальністю \"естрадний вокал\".</p><p>Але головне, що Максим має більше 7 років досвіду викладання та більше 1000 задоволених та вдячних учнів. Він працює за власною авторською методикою викладання, яка допомагає кожному з наших учнів зрозуміти, що співати може кожен!</p>"
  },
  { 
    name: "НІКА ОХТЕНЬ", 
    image: "/nikaaa.webp",
    role: "Співвласниця школи, голова відділу по роботі з клієнтами, керуюча і просто Нікуся",
    description: "<p>Ніка стала однією з тих, хто заклав основи академії з самого початку. Вона повністю займалась створенням і відкриттям, розробила айдентику та сайт для академії, а також продовжує працювати над підтримкою її активного розвитку.</p><p>Як керуюча академією, Ніка займається впровадженням заходів, конкурсів та інтерактивів, завжди на зв'язку з учнями і підтримує їх у всіх питаннях. Вона — не просто організатор, а й надійний друг. Ніка, також, є ученицею нашої школи. Колись вона надихнулася нашим викладачем Максимом та його творчістю, він підкорив її серце своєю пристрастю до музики. З часом вони стали не лише колегами, а й партнерами, створюючи разом прекрасне та ділячись цією жагою до музики з усіма.</p><p>Ніка — це людина, яка вміє поєднувати творчий підхід до роботи з реальними результатами.</p>"
  }, 
  { 
    name: "КОСТЯ ЦАРЕНКОВ", 
    image: "/kost.png",
    role: "Піарник, звукорежисер",
    description: "<p>Костя — перлина нашого Vocal Camp. Він із першого дня існування нашої академії, активно допомагав у створенні та просуванні нашого творчого ком'юніті.</p> <p>Костя є одним із перших учнів нашого вокального майстра. Він прийшов до нас як людина, яка ніколи не займалась музикою, але вже зараз він випускає власні треки, які набирають сотні тисяч прослуховувань. Завдяки його праці та таланту, він вже має багато випущених пісень та мільйони переглядів у TikTok.</p> <p>Крім того, Костя пише мінусовки, просуває пісні для інших наших учнів, активно допомагає з рекламою та випуском треків на майданчики. Він не просто найкращий друг та учень, а ще й звукорежисер та невід’ємна частина нашого продакшну.</p>"
  },
];

interface TeamMember {
  name: string;
  image: string;
  role: string;
  description: string;
}

interface ArticleProps {
  data: TeamMember;
}

const Article: React.FC<ArticleProps> = ({ data }) => {
  const { image, name, role, description } = data;
  const [isExpanded, setIsExpanded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const maxLength = 150;

  const shortDescription = description.length > maxLength 
    ? `${description.substring(0, maxLength)}...` 
    : description;

  const toggleExpanded = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowOverlay(true);
    setIsExpanded(false);
  };

  const handleMouseEnter = () => {
    setShowOverlay(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
    setIsExpanded(false);
    setIsHovered(false);
  };

  const overlayVisible = showOverlay || isHovered;

  const figureHeight = isExpanded ? 'h-[700px]' : 'h-[280px]';

  return (
    <figure 
      className={`group relative cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:z-30 z-0 ${figureHeight}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-5">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <h3 className="text-base uppercase font-bold letter-spacing-wide mb-1">{name}</h3>
            <p className="text-xs font-medium text-white/80">{role}</p>
          </div>
          <button 
            onClick={handleArrowClick}
            className="text-white hover:text-[#ff00be] p-1 hover:bg-black/50 lg:hidden"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-white transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-4 ${overlayVisible ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
      >
        <h3 className={`text-lg uppercase font-bold transition-all duration-300 letter-spacing-wide mb-1 text-center text-black ${overlayVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
          {name}
        </h3>
        <p className={`text-sm font-medium transition-all duration-300 mb-2 text-center text-black ${overlayVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
          {role}
        </p>
        <div className={`text-xs transition-all duration-300 text-center text-black/60 leading-relaxed max-w-[240px] ${overlayVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}
          dangerouslySetInnerHTML={{ __html: isExpanded ? description : shortDescription }}
        />
        {description.length > maxLength && (
          <button
            onClick={toggleExpanded}
            className="ml-1 text-[#ff00be] hover:underline focus:outline-none"
          >
            {isExpanded ? 'менше' : 'більше'}
          </button>
        )}
      </div>
      <img src={image} alt={name} className="w-[280px] object-cover transition-all duration-300" 
           style={{ height: isExpanded ? '400px' : '280px' }} />
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

  const itemWidth = 300;
  const gap = 16;

  const visibleItems = isMobile ? 1 : 3;

  const visibleAreaWidth = itemWidth * visibleItems + gap * (visibleItems - 1);

  return (
    <div className="w-full h-full overflow-x-hidden">
      <div className="max-w-[1040px] w-full flex flex-col pt-[60px] pb-[140px] mx-auto px-4 sm:px-6 md:px-4">
        <h1 className="text-white inline-block font-extrabold text-4xl text-center mb-8 z-1">
          Наша команда
        </h1>
        <div className="relative w-full flex justify-center overflow-hidden">
          <div
            className="overflow-hidden"
            ref={emblaRef}
            style={{
              width: isMobile ? `${itemWidth}px` : `${visibleAreaWidth}px`,
            }}
          >
            <div
              className="flex gap-4 items-start"
              style={{
                minHeight: '300px'
              }}
            >
              {teamMembers.map((member, index) => {
                const isLast = index === teamMembers.length - 1;

                const lastItemSpacingClass = isLast ? 'mr-4' : '';

                const currentSlideClass = isMobile
                  ? 'flex-[0_0_100%]'
                  : `flex-none w-[${itemWidth}px]`;

                return (
                  <div
                    key={index}
                    className={`${currentSlideClass} ${lastItemSpacingClass}`}
                  >
                    <div className="w-full">
                      <div className="bg-white p-[10px] flex justify-center">
                        <Article data={member} />
                      </div>
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
              ${isMobile ? '-left-5' : '-left-10'}
            `}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollNext}
            className={`
              absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full 
              hover:bg-[#ff00be] transition duration-300 z-20 bg-black/50
              ${isMobile ? '-right-5' : '-right-10'}
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
