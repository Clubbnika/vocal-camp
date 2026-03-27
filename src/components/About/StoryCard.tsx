import {
  STORY_CONTAINER_STYLE,
  STORY_TEXT_STYLE,
}
  from '@/components/About/styles'
import Image from 'next/image';

interface StoryCardProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
}

const StoryCard = ({ imageSrc, imageAlt, text }: StoryCardProps) => (
  <div className={STORY_CONTAINER_STYLE}>
    <Image
      src={imageSrc}
      alt={imageAlt}
      className={"h-50 w-50 md:h-30 md:w-30 rounded-full m-3 md:mr-7" }
      width={250}
      height={250}
    />
        <p className={STORY_TEXT_STYLE}>{text}</p>
  </div>
);

export default StoryCard;