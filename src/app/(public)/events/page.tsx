'use client';
import { useState, useMemo } from 'react';

const CONTAINER_STYLE = 'w-full h-full bg-gradient-to-b to-transparent from-black/70';
const INNER_CONTAINER_STYLE = 'max-w-[1040px] w-full flex-col flex pt-35 pb-35 mx-auto';
const HEADING_STYLE = 'text-white inline-block font-extrabold text-4xl text-center mb-8 pt-5';
const EVENTS_ROW_STYLE = 'flex flex-col md:flex-row justify-center gap-4 md:gap-10 mb-8';
const EVENT_ITEM_STYLE = 'flex flex-col items-center min-w-50';
const IMAGE_STYLE = 'h-70 min-w-70 max-w-70  border-6 border-white';
const TEXT_STYLE = 'min-w-70 max-w-70 text-black bg-white min-h-20 p-5 text-center text-sm';

const eventsData = [
  {
    imageSrc: '/jekis.png',
    alt: '',
    text: 'Виступи в закладах.',
  },
  {
    imageSrc: '/kv.jpg',
    alt: '',
    text: 'Тематичні квартирники в нашій студії.',
  },
  {
    imageSrc: '/street.png',
    alt: '',
    text: 'Заняття та виступи під відкритим небом.',
  },
];

const Events = () => {
  const renderedEvents = useMemo(() => (
    <div className={EVENTS_ROW_STYLE}>
      {eventsData.map((event, index) => (
        <div key={index} className={EVENT_ITEM_STYLE}>
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
  ), []);

  return (
    <div className={CONTAINER_STYLE}>
      <div className={INNER_CONTAINER_STYLE}>
        <h1 className={HEADING_STYLE}>
          Які заходи ми організовуємо?
        </h1>

        {renderedEvents}
      </div>
    </div>
  );
};

export default Events;