import { Instagram, Send, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="mt-4"></div>
      <div className="w-full bg-black h-full flex flex-col mb-4 overflow-x-hidden">
        <div className="flex flex-col md:flex-row gap-4 pt-4 mx-auto max-w-[1040px] w-full px-4">
          <div className="flex-1 flex flex-col text-white gap-2">
            <h1 className="text-[#ff00be] text-lg">Контакти</h1>
            <a href="#" className="text-[12px]">vocalcampacademy@gmail.com</a>
            <a href="#" className="text-[12px]">+ 380 50 625 82 62</a>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <a className="text-[#ff00be] text-lg" href="#">Локація</a>
            <a href="#" className="text-[12px] text-white">Місто Київ <br /> вулиця Бульварно-Кудрявська 26 <br /> (метро Університет або Золоті Ворота)</a>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <h1 className="text-[#ff00be] text-lg">Соцмережі</h1>
            <div className="flex flex-row gap-2">
              <Instagram className="text-white" href="#" />
              <Youtube className="text-white" href="#" />
              <Send className="text-white" href="#" />
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <a className="text-[#ff00be] text-lg" href="#">Публічний договір оферти</a>
          </div>
        </div>

        <div className="border-b border-white/15 mt-4"></div>
        <img
          src="/logotext.png"
          alt="Vocal Camp logo"
          className="h-12 w-auto mx-auto mt-4"
        />
      </div>
    </>
  );
};

export default Footer;
