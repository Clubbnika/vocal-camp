"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Team = () => {
  const teamMembers = [
    { name: "МАКСИМ БОНДАР", image: "/max.jpg" },
    { name: "НІКА ОХТЕНЬ", image: "/nikaaa.jpg" },
    { name: "КОСТЯ ЦАРЕНКОВ", image: "/kost.png" },
    { name: "НАСТЯ ЧЕРНЕЦЬ", image: "/nasti.jpg" },
    { name: "ІРА НЕХАЄНКО", image: "/ira.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : teamMembers.length - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < teamMembers.length - 3 ? prev + 1 : 0));
  };

  return (
    <div className="w-full h-full">
      <div className="max-w-[1040px] w-full flex flex-col pt-[60px] pb-[140px] mx-auto">
        <h1 className="text-white inline-block font-extrabold text-4xl text-center mb-8 z-1">
          Наша команда
        </h1>
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full hover:bg-[#ff00be] transition duration-300 z-10"
          >
           <ChevronLeft />
          </button>
          <div className="flex flex-row justify-center items-center">
            {teamMembers
              .slice(currentIndex, currentIndex + 3)
              .map((member, index) => (
                <div key={index} className="mx-2">
                  <div
                    className="relative"
                    style={{
                      filter: "drop-shadow(0 0 50px rgba(255, 0, 190, 0.7)) drop-shadow(0 0 20px rgba(255, 0, 190, 0.5))",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-[280px] w-[280px] rounded-full object-cover"
                    />
                  </div>
                  <p className="w-[280px] text-white pt-3 text-center font-bold">
                    {member.name}
                  </p>
                </div>
              ))}
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-[#ff00be] transition duration-300 z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;