export const SECTION_CONTAINER_STYLE = "flex flex-col md:flex-row w-full items-center justify-center gap-5";
export const CARD_CONTAINER_STYLE = "h-100 w-100 flex flex-col";
export const IMAGE_CARD_STYLE = "bg-white";
export const TEXT_CARD_STYLE = "bg-black";
export const HEADING_STYLE = "text-3xl font-extrabold pt-4 ml-10 mb-2";
export const HEADING_STYLE_THIRD = "text-3xl font-extrabold pt-4 ml-10 mb-2 mr-10 max-w-80";
export const PARAGRAPH_STYLE = "bg-white w-80 h-auto ml-10 mb-4 p-4 text-black text-sm";
export const PARAGRAPH_STYLE_INVERTED = "bg-black w-80 h-auto ml-10 mb-4 p-4 text-white text-sm";
export const BUTTON_STYLE = "w-80 cursor-pointer text-center bg-[#ff00be] pt-1 pb-1 text-white ml-10 hover:bg-[#ff00be]/70 transition duration-300";
export const STORY_CONTAINER_STYLE = "flex flex-col md:flex-row items-center";
export const STORY_IMAGE_STYLE = "h-50 w-50 md:h-30 md:w-30 rounded-full m-3 md:mr-7";
export const STORY_TEXT_STYLE = "text-white mb-7 md:mb-0";
export const MAIN_HEADING_STYLE = "text-white font-extrabold text-4xl text-center mb-8";

export const MOTION_PROPS = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.5 },
  viewport: { once: true },
};