import { div } from "framer-motion/client";
import { Instagram, Send, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <>
        <div className="mt-1"></div>
      <div className="w-full bg-black h-full flex flex-col mb-10">

        <div className="flex flex-row gap-50 pt-5 mx-auto">

          <div className="flex flex-col text-white gap-3">
            <h1 className="text-[#ff00be] text-lg">Контакти</h1>
            <a href="#" className="text-[12px]">vocalcampacademy@gmail.com</a>
            <a href="#" className="text-[12px]">+ 380 50 625 82 62</a>
          </div>

          <div className="flex flex-col gap-3">
            <a className='text-[#ff00be] text-lg' href="#">Локація</a>
            <a href="#" className="text-[12px] text-white">Місто Київ <br />
              вулиця Бульварно-Кудрявська 26 <br />
              (метро Університет або Золоті Ворота)</a>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[#ff00be] text-lg">Соцмережі</h1>
            <div className="flex flex-row gap-3">
              <Instagram className="text-white" href="#" />
              <Youtube className="text-white" href="#" />
              <Send className="text-white" href="#" />
            </div>
          </div>

          <div className="flex flex-col underline">
            <a className='text-[#ff00be] text-lg' href="#">Публічний договір оферти</a>
          </div>

        </div>

        <div className="border-b-1 border-white/15 mt-5"></div>
        <img
          src="/logotext.png"
          alt="Vocal Camp logo"
          className="h-30 w-81 mx-auto"
        />
      </div>
    </>
  );
}

export default Footer;