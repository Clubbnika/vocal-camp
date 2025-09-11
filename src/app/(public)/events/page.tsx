'use client';
import { useState, useMemo } from 'react';

const CONTAINER_STYLE = 'w-full h-full bg-gradient-to-b to-transparent from-black/70';
const INNER_CONTAINER_STYLE = 'max-w-[1040px] w-full flex flex-col pt-35 pb-35 mx-auto';
const HEADING_STYLE = 'text-white inline-block font-extrabold text-4xl text-center mb-8 pt-5';
const ROW_STYLE = 'flex flex-row justify-center';
const IMAGE_STYLE = 'h-70 w-70 mt-3 ml-3 border-6 border-white';
const TEXT_STYLE = 'w-70 text-black bg-white p-5 text-center';
const TEXT_MARGIN_RIGHT = 'mr-13';

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
  const renderedImages = useMemo(() => (
    <div className={ROW_STYLE}>
      {eventsData.map((event, index) => (
        <img
          key={index}
          src={event.imageSrc}
          alt={event.alt}
          className={`${IMAGE_STYLE} ${index < eventsData.length - 1 ? 'mr-10' : 'mr-3'}`}
        />
      ))}
    </div>
  ), []);

  const renderedTexts = useMemo(() => (
    <div className={ROW_STYLE}>
      {eventsData.map((event, index) => (
        <p
          key={index}
          className={`${TEXT_STYLE} ${index < eventsData.length - 1 ? TEXT_MARGIN_RIGHT : ''}`}
        >
          {event.text}
        </p>
      ))}
    </div>
  ), []);

  return (
    <div className={CONTAINER_STYLE}>
      <div className={INNER_CONTAINER_STYLE}>
        <h1 className={HEADING_STYLE}>
          Які заходи ми організовуємо?
        </h1>

        {renderedImages}
        {renderedTexts}
      </div>
    </div>
  );
};

export default Events;