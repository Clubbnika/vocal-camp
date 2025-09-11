import {
  MOTION_PROPS,
  SECTION_CONTAINER_STYLE,
  CARD_CONTAINER_STYLE,
  IMAGE_CARD_STYLE,
  TEXT_CARD_STYLE,
  HEADING_STYLE,
  PARAGRAPH_STYLE,
  BUTTON_STYLE,
} from '@/components/ui/About/styles'
import { motion } from "framer-motion";

interface SectionCardProps {
  heading: string;
  imageSrc: string;
  imageAlt: string;
  imageClass: string;
  text: string;
  imageFirst?: boolean;
  extraClass?: string;
  hasButton?: boolean;
  buttonText?: string;
  marginTop?: string;
  paddingBottom?: string;
  headingStyle?: string;
}

const SectionCard = ({
  heading,
  imageSrc,
  imageAlt,
  imageClass,
  text,
  imageFirst = true,
  extraClass,
  hasButton,
  buttonText,
  marginTop,
  paddingBottom,
  headingStyle,
}: SectionCardProps) => {
  return (
    <motion.div {...MOTION_PROPS} className={`${SECTION_CONTAINER_STYLE} ${marginTop || ''} ${paddingBottom || ''}`}>
      {imageFirst ? (
        <>
          <div className={`${CARD_CONTAINER_STYLE} ${IMAGE_CARD_STYLE} ${extraClass || ''}`}>
            <img src={imageSrc} alt={imageAlt} className={imageClass} />
          </div>
          <div className={`${CARD_CONTAINER_STYLE} ${TEXT_CARD_STYLE}`}>
            <h1 className={headingStyle || HEADING_STYLE}>{heading}</h1>
            <p className={PARAGRAPH_STYLE} dangerouslySetInnerHTML={{ __html: text }} />
            {hasButton && <button className={BUTTON_STYLE}>{buttonText}</button>}
          </div>
        </>
      ) : (
        <>
          <div className={`${CARD_CONTAINER_STYLE} ${TEXT_CARD_STYLE} mr-5`}>
            <h1 className={`${headingStyle || HEADING_STYLE} mr-4`}>{heading}</h1>
            <p className={`${PARAGRAPH_STYLE} mr-4`} dangerouslySetInnerHTML={{ __html: text }} />
            {hasButton && <button className={`${BUTTON_STYLE} mr-4`}>{buttonText}</button>}
          </div>
          <div className={`${CARD_CONTAINER_STYLE} ${IMAGE_CARD_STYLE}`}>
            <img src={imageSrc} alt={imageAlt} className={imageClass} />
          </div>
        </>
      )}
    </motion.div>
  );
};

export default SectionCard;