'use client';
import { ChevronUp } from "lucide-react";

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <button
      onClick={scrollToTop} 
      className="text-white bg-[#ff00be]/50 rounded-full fixed bottom-10 right-10 p-3 shadow-lg hover:bg-[#ff00be] transition-colors duration-300"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default TopButton;
