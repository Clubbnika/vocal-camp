'use client';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Production = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('+380'); // ЗМІНА: Автоматично '+380'
  const [userTelegram, setUserTelegram] = useState('');
  const [userService, setUserService] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  emailjs.init('IZRqHsU2-TVjoCSN4');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'user_name') setUserName(value);
    else if (name === 'user_phone') {
      // ЗМІНА: Форматування як у MasterC, з '+380' автоматично
      const digits = value.replace(/\D/g, '').slice(0, 12);
      let formattedValue = '+380';
      if (digits.length > 3) {
        formattedValue += digits.slice(3);
      }
      setUserPhone(formattedValue);
    }
    else if (name === 'user_telegram') setUserTelegram(value);
    else if (name === 'user_service') setUserService(value);
    else if (name === 'user_message') setUserMessage(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName.trim() || !userPhone.trim() || !userTelegram.trim() || !userService.trim()) {
      setError('Будь ласка, заповніть всі поля.');
      setSuccess(false);
      return;
    }

    if (userPhone.length < 13) {
      setError('Будь ласка, введіть повний номер телефону (+380 XX XXX XX XX).');
      setSuccess(false);
      return;
    }

    const templateParams = {
      user_name: userName,
      user_phone: userPhone,
      user_telegram: userTelegram,
      user_service: userService,
      user_message: userMessage || '',
    };

    try {
      const response = await emailjs.send(
        'service_u5fsdod',
        'template_4oz21sn',
        templateParams,
        'IZRqHsU2-TVjoCSN4'
      );

      console.log('Email відправлено!', response.status, response.text);
      setSuccess(true);
      setError(null);

      setUserName('');
      setUserPhone('+380'); // ЗМІНА: Скидання на '+380'
      setUserTelegram('');
      setUserService('');
      setUserMessage('');
    } catch (error) {
      console.error('Помилка відправки email:', error);
      setError('Помилка відправки. Спробуйте ще раз або зв’яжіться з нами напряму.');
      setSuccess(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="w-full h-full bg-gradient-to-b from-transparent to-black overflow-x-hidden" style={{ marginTop: '1rem' }}>
      <div className="max-w-[1040px] w-full flex flex-col pt-6 pb-6 mx-auto">
        <h1 className="text-white inline-block font-extrabold text-4xl text-center mb-4 pt-4">Production</h1>
        <p className="text-white pb-4 p-4">
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
              required
            />
            <input
              type="tel"
              name="user_phone"
              id="user_phone"
              value={userPhone}
              onChange={handleChange}
              placeholder="+380 XX XXX XX XX"
              className="outline-none border border-white/10 p-2 mb-4 bg-black w-full"
              required
            />
            <input
              type="text"
              name="user_telegram"
              id="user_telegram"
              value={userTelegram}
              onChange={handleChange}
              placeholder="Телеграм"
              className="outline-none border border-white/10 p-2 mb-4 bg-black w-full"
              required
            />
            <label htmlFor="user_service" className="text-[#ff00be] font-bold pb-2">Вкажіть послугу, яка вас цікавить:</label>
            <select
              name="user_service"
              id="user_service"
              value={userService}
              onChange={handleChange}
              className="outline-none border border-white/10 p-2 mb-4 bg-black w-full pr-8"
              required
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
            <textarea
              name="user_message"
              id="user_message"
              value={userMessage}
              onChange={handleChange}
              placeholder="Додаткова інформація (опціонально)"
              className="outline-none border border-white/10 p-2 mb-4 bg-black w-full h-24 resize-none"
            />
            <button type="submit" className="bg-[#ff00be] text-white p-3 w-full cursor-pointer">Відправити</button> {/* ЗМІНА: + cursor-pointer */}
            {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
            {success && <div className="text-white mt-2 text-center">Дякуємо! Ми зв&apos;яжемося з вами найближчим часом.</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Production;