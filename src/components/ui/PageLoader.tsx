'use client';

import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsVisible(false);
      setTimeout(() => setShouldRender(false), 700);
    };

    if (document.readyState === 'complete') {
      const timeout = setTimeout(handleLoad, 500); 
      return () => clearTimeout(timeout);
    } else {
      window.addEventListener('load', handleLoad);
      const fallback = setTimeout(handleLoad, 2500); 

      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[9999] 
        flex items-center justify-center 
        bg-black transition-opacity duration-700
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="flex items-center gap-6">
        <div className="eye">
          <div className="eye-iris-pupil">
            <div className="eye-pupil" />
          </div>
        </div>

        <div className="eye">
          <div className="eye-iris-pupil">
            <div className="eye-pupil" />
          </div>
        </div>
      </div>
    </div>
  );
}