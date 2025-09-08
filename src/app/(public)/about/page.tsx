'use client'
import { MovingRows } from "@/components/ui/MovingRows";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-transparent to-[#ff00be]/65 w-full flex flex-col mt-[35px] mx-auto pb-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-row w-full items-center justify-center mt-20"
        >
          <div className="bg-white h-100 w-100 flex flex-col mr-5">
            <img
              src="/35.jpg"
              alt="Photo of the vocal teacher"
              className="h-85 object-cover mr-5 pt-5 pl-5"
            />
          </div>

          <div className="bg-black h-100 w-100 flex flex-col">
            <h1 className="text-3xl text-white font-extrabold pt-4 ml-10 mb-2">Для кого підходить наш курс групових занять?</h1>
            <p className="bg-white w-80 h-auto ml-10 mb-4 p-4 text-sm">
              - Для тих, хто хоче по декілька годин на тиждень весело проводити час в компанії цікавих людей; <br />
              - Для тих, кому подобається співати; <br />
              - Для тих, хто мріє побудувати вокальну кар’єру; <br />
              - Для тих, хто завжди мріяв співати, але вважав, що для цього потрібні особливі здібності (спойлер: це не так, потрібен лише хороший викладач, велике бажання та багато практики).
            </p>
          </div>
        </motion.div>
        <div className="flex flex-row w-full items-center justify-center">
          {/* <div className="bg-gradient-to-b to-transparent from-[#ff00be]/65 h-30 w-100 mr-5 flex flex-col"></div> */}
          {/* <div className="bg-gradient-to-b to-transparent from-[#ff00be]/65 h-30 w-100 flex flex-col"></div> */}
        </div>
      </div>

      <div className="bg-gradient-to-b h-full from-[#ff00be]/65 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-row w-full items-center justify-center pb-5"
        >
          <div className="bg-black mr-5 h-100 w-100 flex flex-col">
            <h1 className="text-3xl text-white font-extrabold pt-4 ml-10 mb-2">Про курс</h1>
            <p className="bg-white w-80 h-auto ml-10 mr-4 mb-4 p-4 text-sm">
              На заняттях ми робимо вправи, які не тільки допоможуть вам заспівати, а і розслабитись та почати почувати себе комфортно.
              Наш викладач даватиме вам цікаві інтерактивні завдання, які виявлять ваш потенціал та подарують цікавість до процесу.
              У нас супер неформальна та дружня атмосфера, ми всі спілкуємося на ти. Більшість учнів стають нашими друзями на довгий час і це ще більше робить нашу академію комфортним місцем для людей, які до нас приходять :)
            </p>
            <button className="w-80 text-center bg-[#ff00be] pt-1 pb-1 text-black ml-10 hover:bg-white transition duration-300">
              Переглянути прайс
            </button>
          </div>

          <div>
            <div className="bg-white h-100 w-100 flex flex-col">
              <img
                src="/8.jpg"
                alt="Photo of the vocal teacher"
                className="h-78 object-cover mt-5 w-90 ml-5"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-row w-full items-center justify-center pb-20"
        >
          <div className="bg-white h-100 w-100 flex flex-col mr-5">
            <img
              src="/nikaind.jpg"
              alt="Photo of the girl with microphone"
              className="h-78 object-cover mt-5 w-90 ml-5 mr-5"
            />
          </div>

          <div className="bg-black h-100 w-100 flex flex-col">
            <h1 className="text-3xl text-white font-extrabold pt-4 ml-10 mr-10 mb-2">Індивідуальні заняття</h1>
            <p className="bg-white w-80 h-auto ml-10 mb-4 p-4 text-sm">
              - Для тих, хто хоче по декілька годин на тиждень весело проводити час в компанії цікавих людей; <br />
              - Для тих, кому подобається співати; <br />
              - Для тих, хто мріє побудувати вокальну кар’єру; <br />
              - Для тих, хто завжди мріяв співати, але вважав, що для цього потрібні особливі здібності (спойлер: це не так, потрібен лише хороший викладач, велике бажання та багато практики).
            </p>
          </div>
        </motion.div>
      </div>

      <MovingRows />

      <div className="h-full bg-gradient-to-b from-transparent to-black/70 pb-10">
        <div className="max-w-[1040px] p-10 mx-auto mt-25 bg-black/65">
          <h1 className="text-white font-extrabold text-4xl text-center mb-8">Чому ми впевнені в тому, що займатися вокалом та досягати успіху у цій сфері може кожен?</h1>

          <div className="flex flex-row items-center">
            <img
              src="/ed.jpg"
              alt=""
              className="h-30 w-30 rounded-full m-3 mr-7"
            />

            <p className=" text-white">Ед Ширан зараз збирає стадіони, б’є рекорди стрімінгів та «рве» YouTube, але на початку кар’єри британець грав на вулиці. Романтики в цьому було небагато — Ед буквально був бездомним, і протягом майже трьох років жив за рахунок таких виступів.</p>
          </div>

          <div className="flex flex-row items-center">
            <img
              src="/billie.jpg"
              alt=""
              className="h-30 w-30 rounded-full m-3 mr-7"
            />

            <p className=" text-white">Біллі Айліш стала відомою в 13 років, записавши свій перший хіт, буквально сидячи на ліжку в батьківському домі — і її єдиним партнером у світі музики залишається її брат.</p>
          </div>
          <div className="flex flex-row items-center">
            <img
              src="/eminem.jpg"
              alt=""
              className="h-30 w-30 rounded-full m-3 mr-7"
            />
            <p className=" text-white">Емінем. Відомий усьому світу репер народився у бідній родині, мав проблеми з однолітками, приймав участь у постійних бійках, після однієї з них навіть перебував у комі, працював різноробочим, кухарем та офіціантом.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;