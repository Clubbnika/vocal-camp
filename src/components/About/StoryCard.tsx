import {
  STORY_CONTAINER_STYLE,
  STORY_TEXT_STYLE,
  STORY_IMAGE_STYLE,
}
  from '@/components/About/styles'

interface StoryCardProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
}

const StoryCard = ({ imageSrc, imageAlt, text }: StoryCardProps) => (
  <div className={STORY_CONTAINER_STYLE}>
    <img src={imageSrc} alt={imageAlt} className={STORY_IMAGE_STYLE} />
    <p className={STORY_TEXT_STYLE}>{text}</p>
  </div>
);

export default StoryCard;