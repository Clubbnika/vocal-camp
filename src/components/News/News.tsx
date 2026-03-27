'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    shortDescription: 'Приходь на БЕЗКОШТОВНЕ пробне заняття і гарантовано виграй знижку: -1000, -2000 або -3000 грн на абонемент!',
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

const News: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div ref={sectionRef} className="min-h-screen py-12 px-4 bg-gradient-to-t from-transparent to-black">
      <div className="max-w-7xl mx-auto">
        <h1 
          className={`
            text-4xl font-bold text-center text-white mb-12
            transition-all duration-1200 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
          `}
        >
          Новини
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <article
              key={news.id}
              className={`
                bg-black/80 rounded-xl shadow-lg overflow-hidden flex flex-col 
                hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 
                border border-white/5
                transition-all duration-1400 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
              `}
              style={{ transitionDelay: `${index * 250}ms` }}
            >
              <div className="relative overflow-hidden h-56">
                <Image
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <time className="text-sm text-white/40 font-medium mb-2">{news.date}</time>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-3">
                  {news.title}
                </h3>

                <p 
                  className={`
                    text-white/70 leading-relaxed text-sm 
                    transition-all duration-500
                    ${expandedId === news.id ? 'line-clamp-none' : 'line-clamp-4'}
                  `}
                >
                  {expandedId === news.id ? news.fullDescription : news.shortDescription}
                </p>

                <button
                  onClick={() => toggleExpand(news.id)}
                  className="mt-6 inline-flex items-center text-[#ff00be] hover:text-[#ff00be]/70 transition-colors"
                >
                  {expandedId === news.id ? (
                    <>Згорнути <ChevronUp className="ml-1 h-5 w-5" /></>
                  ) : (
                    <>Детальніше <ChevronDown className="ml-1 h-5 w-5" /></>
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;