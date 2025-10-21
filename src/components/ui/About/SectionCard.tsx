import {
  MOTION_PROPS,
  SECTION_CONTAINER_STYLE,
  CARD_CONTAINER_STYLE,
  IMAGE_CARD_STYLE,
  TEXT_CARD_STYLE,
  HEADING_STYLE,
  PARAGRAPH_STYLE,
  PARAGRAPH_STYLE_INVERTED,
  BUTTON_STYLE,
} from '@/components/ui/About/styles'
import { motion } from "framer-motion";
import { useState } from 'react';
import PriceModal from './PriceModal';

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
  inverted?: boolean;
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
  inverted = false,
}: SectionCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const imageBgClass = inverted ? 'bg-black' : 'bg-white';
  const textBgClass = inverted ? 'bg-white' : 'bg-black';
  const headingTextClass = inverted ? 'text-black' : 'text-white';
  const paragraphStyle = inverted ? PARAGRAPH_STYLE_INVERTED : PARAGRAPH_STYLE;

  const buttonClasses = `${BUTTON_STYLE}`;

  return (
    <motion.div {...MOTION_PROPS} className={`${SECTION_CONTAINER_STYLE} ${marginTop || ''} ${paddingBottom || ''}`}>
      {imageFirst ? (
        <>
          <div className={`${CARD_CONTAINER_STYLE} ${imageBgClass} ${extraClass || ''}`}>
            <img src={imageSrc} alt={imageAlt} className={imageClass} />
          </div>
          <div className={`${CARD_CONTAINER_STYLE} ${textBgClass}`}>
            <h1 className={`${headingStyle || HEADING_STYLE} ${headingTextClass} mb-2 ml-10 pt-4`}>{heading}</h1>
            <p className={`${paragraphStyle} ml-10 mb-4`} dangerouslySetInnerHTML={{ __html: text }} />
            {hasButton && (
              <button
                onClick={openModal}
                id="openModalBtn"
                className={`${buttonClasses} ml-10`}
              >
                {buttonText}
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <div className={`${CARD_CONTAINER_STYLE} ${textBgClass} mr-5`}>
            <h1 className={`${headingStyle || HEADING_STYLE} ${headingTextClass} mr-4 pt-4 mb-2`}>{heading}</h1>
            <p className={`${paragraphStyle} mr-4 mb-4`} dangerouslySetInnerHTML={{ __html: text }} />
            {hasButton && (
              <button
                onClick={openModal} 
                className={`${buttonClasses} mr-4`}
              >
                {buttonText}
              </button>
            )}
          </div>
          <div className={`${CARD_CONTAINER_STYLE} ${imageBgClass}`}>
            <img src={imageSrc} alt={imageAlt} className={imageClass} />
          </div>
        </>
      )}

      {isModalOpen && <PriceModal onClose={closeModal} />}
    </motion.div>
  );
};

export default SectionCard;