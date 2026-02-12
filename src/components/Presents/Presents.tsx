'use client';
import { useState, useEffect, useRef } from 'react';

const Presents = () => {
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

  return (
    <div ref={sectionRef} className="w-full h-full">
      <div 
        className={`
          max-w-[1040px] w-full pt-[60px] pb-45 mx-auto px-4 sm:px-6 lg:px-8
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}
      >
        <div 
          className={`
            flex md:flex-row flex-col gap-10 mx-auto w-full justify-center
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
        >
          <div 
            className={`
              bg-black p-6 flex flex-col justify-start max-w-md
              transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: '150ms' }}
          >
            <h1 className="text-3xl text-white font-extrabold mb-5">
              Подарункові сертифікати
            </h1>
            <div className="bg-white p-4 mb-6 text-base">
              Ви можете зробити чудовий подарунок для близької людини - допомогти
              відкрити її творчі здібності та втілити в життя її мрію.
              Придбайте подарунковий сертифікат на заняття з вокальної майстерності.
              <p>
                Для замовлення сертифікату зв&apos;яжіться з нами будь ласка через{' '}
                <a
                  href="https://www.instagram.com/voice.camp.studio/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff00be] hover:underline font-medium transition underline"
                >
                  Instagram.
                </a>
              </p>
            </div>
          </div>

          <div 
            className={`
              bg-white p-5 flex flex-col items-center justify-center max-w-md
              transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: '300ms' }}
          >
            <img
              src="/present.webp"
              alt="Подарунковий сертифікат Вокал Кемп"
              className="max-h-85 object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presents;