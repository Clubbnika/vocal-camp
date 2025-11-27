import { Instagram, Send, Youtube, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="mt-4"></div>
      <div className="w-full bg-black h-full flex flex-col mb-4 overflow-x-hidden">
        <div className="flex flex-col md:flex-row gap-4 pt-4 mx-auto max-w-[1040px] w-full px-4">
          <div className="flex-1 flex flex-col text-white gap-2">
            <h1 className="text-[#ff00be] text-lg">Контакти</h1>
            <a href="mailto:vocalcampacademy@gmail.com" className="text-[12px] hover:text-[#ff00be] transition">
              vocalcampacademy@gmail.com
            </a>
            <a href="tel:+380506258262" className="text-[12px] hover:text-[#ff00be] transition">
              +380 50 625 82 62
            </a>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <a className="text-[#ff00be] text-lg flex items-center gap-2" href="https://maps.app.goo.gl/YourLinkIfYouHave" target="_blank" rel="noopener noreferrer">
              <MapPin className="h-5 w-5" />
              Локація
            </a>
            <a 
              href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%91%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%BD%D0%BE-%D0%9A%D1%83%D0%B4%D1%80%D1%8F%D0%B2%D1%81%D0%BA%D0%B0%D1%8F,+26,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4509507,30.4966386,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ce603eea0cd9:0x1beb866382ed7f9a!8m2!3d50.4509507!4d30.4966386!16s%2Fg%2F1v5_7yvq?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[12px] underline text-white hover:text-[#ff00be] transition leading-tight"
            >
              Місто Київ <br />
              вулиця Бульварно-Кудрявська 26 <br />
              (метро Університет або Золоті Ворота)
            </a>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <h1 className="text-[#ff00be] text-lg">Соцмережі</h1>
            <div className="flex flex-row gap-4">
              <a 
                href="https://www.instagram.com/vocal_camp/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff00be] transition"
              >
                <Instagram size={28} />
              </a>
              <a 
                href="https://www.instagram.com/voice.camp.studio/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff00be] transition"
              >
                <Instagram size={28} />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCuER665J5QsFU7uupEG1fBw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff00be] transition"
              >
                <Youtube size={28} />
              </a>
              <a 
                href="https://t.me/nicaaok" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff00be] transition"
              >
                <Send size={28} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <a 
              href="https://docs.google.com/document/d/1-8y011j20Rcexd-UFLGJpaFbvtPhvf_-HHiclcO3FvE/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ff00be] text-lg underline"
            >
              Публічний договір оферти
            </a>
          </div>
        </div>

        <div className="border-b border-white/15 mt-4"></div>
        <img
          src="/logotext.webp"
          alt="Vocal Camp logo"
          className="h-12 w w-auto mx-auto mt-4"
        />
      </div>
    </>
  );
};

export default Footer;