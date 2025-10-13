'use client';
import { useState } from 'react';

const Production = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userTelegram, setUserTelegram] = useState('');
  const [userService, setUserService] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'user_name') setUserName(value);
    else if (name === 'user_phone') setUserPhone(value);
    else if (name === 'user_telegram') setUserTelegram(value);
    else if (name === 'user_service') setUserService(value);
    else if (name === 'user_message') setUserMessage(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      userName,
      userPhone,
      userTelegram,
      userService,
      userMessage,
    });
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-transparent to-black overflow-x-hidden" style={{ marginTop: '1rem' }}>
      <div className="max-w-[1040px] w-full flex flex-col pt-6 pb-6 mx-auto">
        <h1 className="text-white inline-block font-extrabold text-4xl text-center mb-4 pt-4">Production</h1>
        <p className="text-white pb-4">
          Наша команда професіоналів допоможе вам пройти весь шлях від написання першої пісні до її просування,
          ми пропонуємо повний цикл послуг, який допоможе вам досягти успіху в музичній індустрії.
          Довірте нам свої музичні ідеї, і ми допоможемо вам втілити їх у життя.
        </p>
        <div className="flex flex-col lg:flex-row justify-between mx-auto text-white gap-4 p-4">
          <p className="w-full lg:w-auto">
            <span className="font-bold text-[#ff00be]">Написання пісень на замовлення: <br /></span>
            Наші досвідчені автори та композитори допоможуть вам створити пісню, яка ідеально підходить саме вам і вашому стилю. <br /><br />
            <span className="font-bold text-[#ff00be]">Аранжування на будь-який смак: <br /></span>
            Від класичних до експериментальних стилів – ми знайдемо ідеальне звучання для вашої музики. <br /><br />
            <span className="font-bold text-[#ff00be]">Запис і саунд-продюсування: <br /></span>
            Зведемо ваш трек до ідеального звучання, яке зачарує слухачів. <br /><br />
            <span className="font-bold text-[#ff00be]">Комплексна маркетингова стратегія: <br /></span>
            Створимо ефективну кампанію та дамо вам практичні поради щодо просування вашої музики. <br /><br />
            <span className="font-bold text-[#ff00be]">Просування та дистриб’юція: <br /></span>
            Публікація вашого треку на стримінгові сервіси. Розкрутка на музичних платформах.
          </p>
          <form onSubmit={handleSubmit} className="h-full w-full lg:w-auto flex flex-col bg-black/65 text-white p-4">
            <p className="pb-3 text-[#ff00be] font-bold">
              Якщо бажаєте дізнатися деталі, заповніть будь ласка анкету та ми надішлемо вам додаткову інформацію :)
            </p>
            <input
              type="text"
              name="user_name"
              id="user_name"
              value={userName}
              onChange={handleChange}
              placeholder="Ім'я"
              className="outline-none border border-white/10 p-2 mb-4 bg-black w-full"
            />
            <input
              type="tel"
              name="user_phone"
              id="user_phone"
              value={userPhone}
              onChange={handleChange}
              placeholder="Номер телефону"
              className="outline-none border border-white/10 p-2 mb-4 bg-black w-full"
            />
            <input
              type="text"
              name="user_telegram"
              id="user_telegram"
              value={userTelegram}
              onChange={handleChange}
              placeholder="Телеграм"
              className="outline-none border border-white/10 p-2 mb-4 bg-black w-full"
            />
            <label htmlFor="user_service" className="text-[#ff00be] font-bold pb-2">Вкажіть послугу, яка вас цікавить:</label>
            <select
              name="user_service"
              id="user_service"
              value={userService}
              onChange={handleChange}
              className="outline-none border border-white/10 p-2 mb-4 bg-black w-full pr-8"
            >
              <option value="" disabled>Оберіть опцію</option>
              <option value="song_writing">Написання пісні під ключ</option>
              <option value="arrangement">Написання аранжування для вашої пісні</option>
              <option value="distribution">Дистриб’юція</option>
              <option value="promotion">Просування вашої пісні</option>
              <option value="recording">Запис та зведення</option>
              <option value="multiple_services">Декілька з перечислених послуг</option>
              <option value="other">Інше</option>
            </select>
            <button type="submit" className="bg-[#ff00be] text-white p-3 w-full">Відправити</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Production;