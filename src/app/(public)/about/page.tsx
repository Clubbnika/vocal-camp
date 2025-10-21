'use client';
import { MovingRows } from "@/components/ui/About/MovingRows";
import SectionCard from "@/components/ui/About/SectionCard";
import StoryCard from "@/components/ui/About/StoryCard";
import { sections, stories } from "@/components/ui/About/data";
import {
  SECTION_CONTAINER_STYLE,
  MAIN_HEADING_STYLE,
  MOTION_PROPS,
} from "@/components/ui/About/styles";

const About = () => {
  return (
    <div className="w-full pt-20">
      <div className="bg-gradient-to-b from-transparent to-[#ff00be]/65 w-full flex flex-col mx-auto pb-5">
        <SectionCard {...sections[0]} />
        <div className={SECTION_CONTAINER_STYLE} />
      </div>

      <div className="bg-gradient-to-b h-full from-[#ff00be]/65 to-transparent">
        <SectionCard {...sections[1]} />
        <SectionCard {...sections[2]} />
      </div>

      <MovingRows />

      <div className="h-full bg-gradient-to-b from-transparent to-black/70 pb-10">
        <div className="max-w-[1040px] p-10 mx-auto mt-25 bg-black/65">
          <h1 className={MAIN_HEADING_STYLE}>
            Чому ми впевнені в тому, що займатися вокалом та досягати успіху у цій сфері може кожен?
          </h1>
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;