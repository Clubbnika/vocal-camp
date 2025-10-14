export const SECTION_CONTAINER_STYLE = "flex flex-row w-full items-center justify-center";
export const CARD_CONTAINER_STYLE = "h-100 w-100 flex flex-col";
export const IMAGE_CARD_STYLE = "bg-white";
export const TEXT_CARD_STYLE = "bg-black";
export const HEADING_STYLE = "text-3xl text-white font-extrabold pt-4 ml-10 mb-2";
export const HEADING_STYLE_THIRD = "text-3xl text-white font-extrabold pt-4 ml-10 mb-2 mr-10 max-w-80";
export const PARAGRAPH_STYLE = "bg-white w-80 h-auto ml-10 mb-4 p-4 text-sm";
export const BUTTON_STYLE = "w-80 text-center bg-[#ff00be] pt-1 pb-1 text-black ml-10 hover:bg-white transition duration-300";
export const STORY_CONTAINER_STYLE = "flex flex-row items-center";
export const STORY_IMAGE_STYLE = "h-30 w-30 rounded-full m-3 mr-7";
export const STORY_TEXT_STYLE = "text-white";
export const MAIN_HEADING_STYLE = "text-white font-extrabold text-4xl text-center mb-8";

export const MOTION_PROPS = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.5 },
  viewport: { once: true },
};