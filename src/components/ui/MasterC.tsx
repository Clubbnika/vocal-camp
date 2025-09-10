'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const MasterC = () => {
  const [selectedTab, setSelectedTab] = useState(1); // Початково вибирається перша вкладка
  const [selectedDate, setSelectedDate] = useState<string | null>(null); // Вибір дати
  const [selectedTime, setSelectedTime] = useState<string | null>(null); // Вибір часу
  const [currentWeek, setCurrentWeek] = useState<number>(0); // Номер поточного тижня
  const [userName, setUserName] = useState<string>(''); // Ім'я користувача
  const [userPhone, setUserPhone] = useState<string>(''); // Номер телефону
  const [userTelegram, setUserTelegram] = useState<string>(''); // Телеграм користувача

  // Дозволені дні та час для запису
  const allowedSlots: Record<number, string[]> = {
    3: ['16:00'], // Середа 16:00
    4: ['16:00'], // Четвер 16:00
    5: ['19:10'], // П'ятниця 19:10
    6: ['15:00'], // Субота 15:00
    0: ['15:30'], // Неділя 15:30
  };

  // Функція для отримання наступного понеділка (початок тижня)
  const getWeekDates = (weekOffset: number): Date[] => {
    const today = new Date();
    const day = today.getDay();
    const diff = (day === 0 ? 7 : 1) - day; // Якщо неділя, то diff = 1, якщо понеділок, то diff = 0
    const nextMonday = new Date(today.setDate(today.getDate() + diff + weekOffset * 7));
    const weekDates: Date[] = [];

    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(nextMonday);
      currentDay.setDate(nextMonday.getDate() + i);
      weekDates.push(currentDay);
    }

    return weekDates;
  };

  const nextWeekDates = getWeekDates(currentWeek);

  // Функція для отримання назви дня тижня
  const getDayName = (date: Date): string => {
    const days: string[] = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'];
    return days[date.getDay()];
  };

  // Форматування дати у вигляді "11 вересня"
  const formatDate = (date: Date): string => {
    const months: string[] = [
      'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
      'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    return `${day} ${month}`;
  };

  // Функція для перевірки, чи доступний день
  const isDayAvailable = (day: number): boolean => {
    return allowedSlots[day] !== undefined; // Перевіряємо чи є дозволений слот для цього дня
  };

  // Обробка зміни значень у формах (для імені, телефону, телеграму)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'user_name') {
      setUserName(value);
    } else if (name === 'user_phone') {
      setUserPhone(value);
    } else if (name === 'user_telegram') {
      setUserTelegram(value);
    }
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(null); // Скидаємо вибір часу при зміні дати
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      userName,
      userPhone,
      userTelegram,
      selectedDate,
      selectedTime,
    });
  };

  // Функція для перевірки, чи можна повернутись на попередній тиждень
  const isPrevWeekAvailable = (): boolean => {
    const today = new Date();
    const selectedWeekDate = getWeekDates(currentWeek)[0];
    return today.getTime() > selectedWeekDate.getTime(); // Перевірка, чи можна повернутись назад
  };

  return (
    <div className="mb-25 max-w-[1040px] w-full flex mt-45 flex-col mx-auto items-center bg-black/60 p-10">
      <div className="flex flex-col">
        <div className="flex justify-between mb-10 w-full">
          <div className="flex w-full bg-black relative">
            <button
              onClick={() => setSelectedTab(1)}
              className={`text-white text-lg font-semibold px-5 py-2 flex-1 ${selectedTab === 1 ? 'bg-[#ff00be]/50' : 'bg-transparent'}`}
            >
              Запрошуємо на безкоштовний майстер-клас!
            </button>

            <button
              onClick={() => setSelectedTab(2)}
              className={`text-white text-lg font-semibold px-5 py-2 flex-1 ${selectedTab === 2 ? 'bg-[#ff00be]/50' : 'bg-transparent'}`}
            >
              Як проходить майстер-клас?
            </button>

            <button
              onClick={() => setSelectedTab(3)}
              className={`text-white text-lg font-semibold px-5 py-2 flex-1 ${selectedTab === 3 ? 'bg-[#ff00be]/50' : 'bg-transparent'}`}
            >
              Записатися на майстер-клас!
            </button>

            <div
              className={`absolute bottom-0 left-0 w-1/3 h-1 bg-[#ff00be] transition-all duration-500 ${selectedTab === 1 ? 'left-0' : selectedTab === 2 ? 'left-[33.4%]' : 'left-[66.71%]'}`}
            ></div>
          </div>
        </div>

        <div className="text-white text-lg">
          {selectedTab === 1 && (
            <div>
              <p className="text-white/70 text-lg" style={{ textShadow: '0 0px 10px rgba(0, 0, 0, 1)' }}>
                Запрошуємо тебе на безкоштовний пробний майстер-клас з вокалу. Наш формат - це не просто “музичні заняття з репетитором”, а можливість відкрити свою душу та здібності, які далеко заховані за буденними справами та проблемами. <br />
                Тут ти зможеш на власному досвіді відчути всю свою унікальність та дізнатися, що робить тебе кращим за інших,
                адже у нас немає ніяких рамок для творчості та у нас кожен може стати героєм своєї історії. Ти зможеш спробувати унікальні методи та техніки, розроблені нашим викладачем, який є автором власної
                методики через яку пройшли вже більше 1000 учнів. <br />
                Після заняття ти отримаєш результати, які тебе здивують, і
                захочеш залишитися з нами ще надовго. <br />
                А ще майстер-клас з вокалу - це чудова можливість провести вечір з цікавими
                людьми або зі своєю парою, розважитися та відволіктися від буденних справ :)
              </p>
            </div>
          )}

          {selectedTab === 2 && (
            <div>
              <p className="text-white/70 text-lg" style={{ textShadow: '0 0px 10px rgba(0, 0, 0, 1)' }}>
                Дві години натхнення, звуку й відкриттів — саме так можна описати наш формат! <br />
                На майстер-класах ми працюємо в невеликих групах (від 1 до 5 учасників), і в цьому є особлива магія. Адже саме в групі поступово зникає страх бути почутим — і починає звучати справжній голос. <br />
                ▸ Починаємо зі знайомства — щоб було затишно. <br />
                ▸ Далі – вправи, що допомагають розслабитися й розкритися. <br />
                ▸ Потім – практичні завдання на напрацювання вокальних навичок. <br />
                ▸ На завершення кожен учасник обирає улюблену пісню, яку ми розбираємо разом із викладачем.
                І, звісно, співаємо в мікрофон. <br />
                <br />
                <span className="font-bold">Чому це працює? <br /></span>
                Бо ми віримо в вокальну соціалізацію. Можна співати шикарно
                наодинці з викладачем, але так і не наважитись вийти на сцену. А ми створюємо простір, де стає не страшно
                бути собою, коли співаєш.
              </p>
            </div>
          )}

          {selectedTab === 3 && (
            <div>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2 text-white">
                <div className="flex items-center justify-between w-full">
                  <label htmlFor="date">Виберіть дату:</label>
                  <div className="flex">
                    <button
                      onClick={() => setCurrentWeek(currentWeek - 1)}
                      className={`hover:bg-[#ff00be] text-white p-1 rounded-full ${currentWeek <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={currentWeek <= 0}
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={() => setCurrentWeek(currentWeek + 1)}
                      className="hover:bg-[#ff00be] text-white p-1 rounded-full ml-2"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-4">
                  {nextWeekDates.map((date, index) => {
                    const day = date.getDay();
                    const formattedDate = date.toISOString().split('T')[0];
                    const dayName = getDayName(date);
                    const isAvailable = isDayAvailable(day);
                    const isDisabled = day === 1 || day === 2; // Понеділок та вівторок мають бути недоступні
                    return (
                      <button
                        key={index}
                        onClick={() => handleDateChange(formattedDate)}
                        className={`p-2 text-center ${isAvailable ? 'bg-[#ff00be] text-white' : 'bg-gray-500 text-gray-200'} ${selectedDate === formattedDate ? 'border-2 border-white' : ''} ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={isDisabled} // Додаємо дизейбл для понеділка та вівторка
                      >
                        {dayName}, {formatDate(date)}
                      </button>
                    );
                  })}
                </div>

                {/* Доступний час для вибраної дати */}
                {selectedDate && (
                  <div>
                    <label htmlFor="time">Доступний час на цей день:</label>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {isDayAvailable(new Date(selectedDate).getDay()) ? (
                        allowedSlots[new Date(selectedDate).getDay()].map((time, index) => (
                          <div
                            key={index}
                            className='p-2 text-center bg-gray-500 text-white'
                          >
                            {time}
                          </div>
                        ))
                      ) : (
                        <div className="text-center text-gray-500">Недоступний день для запису</div>
                      )}
                    </div>
                  </div>
                )}

                {/* Форма */}
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={userName}
                  onChange={handleChange}
                  placeholder="Ім'я"
                  className="p-2 border-1 border-white/10 bg-black"
                />

                <input
                  type="tel"
                  name="user_phone"
                  id="user_phone"
                  value={userPhone}
                  onChange={handleChange}
                  placeholder="Номер телефону"
                  className="p-2 border-1 border-white/10 bg-black"
                />

                <input
                  type="text"
                  name="user_telegram"
                  id="user_telegram"
                  value={userTelegram}
                  onChange={handleChange}
                  placeholder="Ваш Телеграм"
                  className="p-2 border-1 border-white/10 bg-black"
                />

                <button type="submit" className="hover:bg-[#ff00be] bg-white text-black py-2 px-6 mt-4">
                  Записатися
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default MasterC;