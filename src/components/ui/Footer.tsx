import { Instagram, Send, Youtube, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="mt-4"></div>
      <div className="w-full bg-black h-full flex flex-col pt-8 mb-4 overflow-x-hidden">
        <div className="flex flex-col md:flex-row gap-2 md:gap-30 pt-4 mx-auto max-w-[1040px] w-full px-4 py-8">

          <div className="flex-1 flex flex-col gap-2 text-[12px]">
            <img
              src="/logotext.webp"
              alt="Vocal Camp logo"
              className="h-7 w-54 ml-[-4px]"
            />
            <p className="text-[#ff00be]">Вокал саме для тебе.</p>
            <a 
              href="https://www.instagram.com/stories/highlights/18056388058395076/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#ff00be] transition flex flex-row text-[12px] gap-2 mt-3"
            >
              Відгуки
            </a>
            <a 
              href="https://medium.com/@ukrmediainfo.xxx/vocal-camp-%D0%B7%D0%BC%D1%96%D0%BD%D1%96%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D1%94-%D0%B6%D0%B8%D1%82%D1%82%D1%8F-%D1%82%D0%B0-%D0%B2%D1%96%D0%B4%D0%BA%D1%80%D0%B8%D0%B9%D1%82%D0%B5-%D1%81%D0%B2%D1%96%D0%B9-%D0%B2%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D0%BF%D0%BE%D1%82%D0%B5%D0%BD%D1%86%D1%96%D0%B0%D0%BB-%D1%83-%D0%B2%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%96%D0%B9-%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%97-%D0%B4%D0%BB%D1%8F-120ede56113e" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#ff00be] transition flex flex-row text-[12px] gap-2"
            >
              Історія академії
            </a>
              <a 
                href="https://docs.google.com/document/d/1-8y011j20Rcexd-UFLGJpaFbvtPhvf_-HHiclcO3FvE/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#ff00be] transition flex flex-row text-[12px] gap-2"
              >
              Публічний договір оферти
              </a>
              <a 
                href="https://docs.google.com/document/d/18z3c6NfLZGCvJuph00BNMBetVq7joLbfTlFVfYWqz8Y/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#ff00be] transition flex flex-row text-[12px] gap-2"
              >
                Політика конфіденційності
              </a>
</div>

          <div className="flex-1 flex flex-col gap-2">
            {/* <h1 className="text-[#ff00be] text-lg flex items-center gap-2">
              Про академію
            </h1> */}
            <h1 className="text-[#ff00be] text-lg flex items-center gap-2">
              Локація
            </h1>
            <a 
              href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%91%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%BD%D0%BE-%D0%9A%D1%83%D0%B4%D1%80%D1%8F%D0%B2%D1%81%D0%BA%D0%B0%D1%8F,+26,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4509507,30.4966386,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ce603eea0cd9:0x1beb866382ed7f9a!8m2!3d50.4509507!4d30.4966386!16s%2Fg%2F1v5_7yvq?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[12px] text-white/60 hover:text-[#ff00be] transition leading-tight"
            >
              Місто Київ <br />
              вулиця Бульварно-Кудрявська 26 <br />
              (метро Університет або Золоті Ворота)
            </a>
          </div>

          <div className="flex-1 flex flex-col text-white/60 gap-2">
            <h1 className="text-[#ff00be] text-lg">Контакти</h1>
            <a href="mailto:vocalcampacademy@gmail.com" className="text-[12px] hover:text-[#ff00be] transition">
              vocalcampacademy@gmail.com
            </a>
            <a href="tel:+380506258262" className="text-[12px] hover:text-[#ff00be] transition">
              +380 50 625 82 62
            </a>
            <div className="flex flex-row gap-2">
              <a 
                href="https://www.instagram.com/vocal_camp/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#ff00be] transition border-2 border-white/20 p-2 rounded-full"
              >
                <Instagram size={18} /> 
              </a>
              <a 
                href="https://www.instagram.com/voice.camp.studio/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#ff00be] transition border-2 border-white/20 p-2 rounded-full"
              >
                <Instagram size={18} /> 
              </a>
              <a 
                href="https://www.youtube.com/channel/UCuER665J5QsFU7uupEG1fBw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#ff00be] transition border-2 border-white/20 p-2 rounded-full"
              >
                <Youtube size={18} /> 
              </a>
              <a 
                href="https://t.me/nicaaok" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#ff00be] transition border-2 border-white/20 p-2 rounded-full"
              >
                <Send size={18} /> 
              </a>
            </div>
          </div>









        </div>



              <div className="border-b border-white/10 mt-4"></div>
        <p className="text-white/60 text-[12px] text-center py-4">
        © 2023 Vocal Camp. Усі права захищені.
        </p>
      </div>
    </>
  );
};

export default Footer;