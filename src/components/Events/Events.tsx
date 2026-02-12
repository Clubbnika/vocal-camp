'use client';
import { useState, useMemo, useEffect, useRef } from 'react';

const CONTAINER_STYLE = 'w-full h-full bg-gradient-to-b to-transparent from-black/70 px-4';
const INNER_CONTAINER_STYLE = 'max-w-[1040px] w-full flex-col flex pt-35 pb-35 mx-auto';
const HEADING_STYLE = 'text-white inline-block font-extrabold text-3xl text-center mb-8 pt-5';
const EVENTS_ROW_STYLE = 'flex flex-col md:flex-row justify-center gap-4 md:gap-10 mb-8';
const EVENT_ITEM_STYLE = 'flex flex-col items-center min-w-50';
const IMAGE_STYLE = 'h-70 min-w-70 max-w-70 border-6 border-white';
const TEXT_STYLE = 'min-w-70 max-w-70 text-black bg-white min-h-20 p-5 text-center text-base';

const eventsData = [
  {
    imageSrc: '/jekis.webp',
    alt: '',
    text: 'Виступи в закладах.',
  },
  {
    imageSrc: '/kv.webp',
    alt: '',
    text: 'Тематичні квартирники в нашій студії.',
  },
  {
    imageSrc: '/street.webp',
    alt: '',
    text: 'Заняття та виступи під відкритим небом.',
  },
];

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
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
        threshold: 0.1, 
        rootMargin: '0px 0px -10% 0px', 
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const renderedEvents = useMemo(() => (
    <div className={`${EVENTS_ROW_STYLE} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {eventsData.map((event, index) => (
        <div 
          key={index} 
          className={`${EVENT_ITEM_STYLE} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <img
            src={event.imageSrc}
            alt={event.alt}
            className={IMAGE_STYLE}
          />
          <p className={TEXT_STYLE}>
            {event.text}
          </p>
        </div>
      ))}
    </div>
  ), [isVisible]);

  return (
    <div ref={sectionRef} className={CONTAINER_STYLE}>
      <div className={`${INNER_CONTAINER_STYLE} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h1 className={`${HEADING_STYLE} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          Які заходи ми організовуємо?
        </h1>

        {renderedEvents}
      </div>
    </div>
  );
};

export default Events;