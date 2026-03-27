'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface NewsItem {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  date: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'ЧОРНА П’ЯТНИЦЯ',
    shortDescription: 'Приходь на БЕЗКОШТОВНЕ пробне заняття і гарантировано виграй знижку: -1000, -2000 або -3000 грн на абонемент!',
    fullDescription: `🖤 ЧОРНА П’ЯТНИЦЯ у Vocal Camp — тільки цього тижня!
  
  Запрошуємо тебе на абсолютно БЕЗКОШТОВНЕ пробне заняття, після якого ти 100% отримаєш одну з трьох крутих знижок на подальше навчання:
  
  🔥 -1000 грн
  🔥 -2000 грн
  🔥 -3000 грн
    
  Кількість місць обмежена — записуйся вже зараз, щоб встигнути скористатися найвигіднішою пропозицією року!`,
    imageUrl: '/bf.webp',
    date: 'Акція діє до 30 листопада',
  },
  {
    id: 2,
    title: 'Halloween-вечірка',
    shortDescription: '31 жовтня запрошуємо всіх на атмосферну вечірку у студії: костюми, фото, пунш, спілкування та караоке!',
    fullDescription: `Запрошуємо тебе на Halloween-вечірку у Vocal Camp! 🎃

📅 Коли: п’ятниця, 31 жовтня, 17:00
📍 Де: У нашій студії (Бульварно-Кудрявська 26)
👻 Дрес-код: обов’язково у костюмах! Чим креативніше — тим краще, людина з найкращим костюмом отримає приз!

Що буде:
• знайомство та приємне спілкування
• тематичні фотозони
• приготування (і дегустація) пуншу
• настільні ігри та святковий вайб
• і, звісно, якщо захочеться — зможемо заспівати!

Це не квартирник, а саме тепла вечірка для всіх наших учнів та друзів. Чекаємо тебе, щоб разом створити незабутні спогади! 🖤🧡`,
    imageUrl: '/хеловін.webp',
    date: '31 жовтня',
  },
  {
    id: 3,
    title: 'Розіграш ЦІЛОГО МІСЯЦЯ навчання у Vocal Camp!',
    shortDescription: 'Перекажи 50 грн на монобанку - і отримай шанс виграти 16 занять по 2 години! Кожні 50 грн = один квиточок.',
    fullDescription: `У кожного охочого є можливість взяти участь у розіграші ЦІЛОГО МІСЯЦЯ НАВЧАННЯ У VOICE CAMP! 🤩
  
  За цей місяць ви отримаєте аж 16 занять по 2 години кожне.
  
  💵 Як взяти участь:
  • Перекажіть 50 гривень на банку
  • Кожні 50 грн = один квиточок (надсилайте кілька разів — збільшуйте шанси!)
  • У призначенні платежу обов’язково вкажіть ваше ім’я та контакт (телефон/соцмережі)
  
  Посилання на банку: https://send.monobank.ua/jar/5rTse33gGS
  Номер картки: 4441 1111 2405 0596
  
  Переможця оголосимо 31 жовтня о 20:00 за допомогою рандомайзера в прямому ефірі в Instagram.
  
  Дякуємо кожному за участь і бажаємо перемоги! ☀️`,
    imageUrl: '/конкурс.webp',
    date: 'До 31 жовтня',
  }
];

interface ArticleProps {
  news: NewsItem;
  isVisible: boolean;
  index: number;
}

const NewsCard: React.FC<ArticleProps> = ({ news, isVisible, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article
      className={`
        bg-black/80 rounded-xl shadow-lg flex flex-col 
        hover:shadow-2xl hover:shadow-pink-500/20 
        border border-white/5
        transition-all duration-700 ease-out
        self-start w-full relative
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
        ${isExpanded ? 'h-auto z-10' : 'h-[450px]'} 
      `}
      style={{ transitionDelay: `${index * 250}ms` }}
    >
      <div className="relative overflow-hidden h-52 rounded-t-xl shrink-0">
        <Image
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="p-6 flex-1 flex flex-col overflow-hidden pb-16">
        <div className="flex-1 flex flex-col">
          <time className="text-sm text-white/40 font-medium mb-2 block">{news.date}</time>
          
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 shrink-0">
            {news.title}
          </h3>

          <div 
            className={`
              text-white/70 leading-relaxed text-sm flex-1
              transition-all duration-300
              ${isExpanded ? '' : 'line-clamp-4'}
            `}
          >
            {isExpanded ? (
              <div className="whitespace-pre-line">{news.fullDescription}</div>
            ) : (
              news.shortDescription
            )}
          </div>
        </div>

        <button
          onClick={toggleExpand}
          className="absolute bottom-6 left-6 inline-flex items-center text-[#ff00be] hover:text-[#ff00be]/70 transition-colors w-fit shrink-0"
        >
          {isExpanded ? (
            <>Згорнути <ChevronUp className="ml-1 h-5 w-5" /></>
          ) : (
            <>Детальніше <ChevronDown className="ml-1 h-5 w-5" /></>
          )}
        </button>
      </div>
    </article>
  );
};

const News: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const MOBILE_BREAKPOINT = 900;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -20% 0px',
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
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

  const itemWidth = 340; 

  const navButtonClasses = `
    static transform-none p-2 text-white rounded-full 
    hover:bg-[#ff00be] transition duration-300 z-20 bg-black/50
    flex items-center justify-center
  `;

  return (
    <div ref={sectionRef} className="w-full h-full overflow-hidden relative">
      <div className="max-w-[1040px] w-full flex flex-col py-20 mx-auto px-4 relative">
        
        <div 
          className={`
            px-1 flex items-center justify-between mb-5 z-1 w-full
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
          `}
        >
          <h1 className="text-white font-extrabold text-4xl text-left">
            Новини
          </h1>

          <div className={`flex items-center gap-2 ${newsData.length <= 3 ? 'md:hidden' : ''}`}>
            <button
              onClick={scrollPrev}
              className={navButtonClasses}
              aria-label="Попередня новина"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={scrollNext}
              className={navButtonClasses}
              aria-label="Наступна новина"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative w-full flex justify-center overflow-visible">
          <div
            className="overflow-visible w-full md:w-auto"
            ref={emblaRef}
            style={{
              width: isMobile ? `${itemWidth}px` : '100%',
            }}
          >
            <div className="flex gap-6 items-start md:grid md:grid-cols-3 md:gap-6 md:items-start">
              {newsData.map((news, index) => {
                const currentSlideClass = isMobile
                  ? 'flex-[0_0_100%]'
                  : 'w-full';

                return (
                  <div
                    key={news.id}
                    className={currentSlideClass}
                  >
                    <NewsCard news={news} isVisible={isVisible} index={index} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;