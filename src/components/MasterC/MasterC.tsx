'use client';

import { useState, useEffect } from 'react';
import TabButton from './TabButton';
import FreeMasterClassTab from './FreeMasterClassTab';
import HowMasterClassWorksTab from './HowMasterClassWorksTab';
import RegisterMasterClassTab from './RegisterMasterClassTab';
import { getWeekDates, allowedSlots } from './utils'; 
import { SearchParamsHandler } from '@/components/SearchParamsHandler';
import emailjs from '@emailjs/browser';

const MasterC = () => {
  const initialTab = 3;
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('+380');
  const [userTelegram, setUserTelegram] = useState<string>('');
  const [section, setSection] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); 
  const [success, setSuccess] = useState<boolean>(false); 
  const [isLoading, setIsLoading] = useState(false);

  const [isAgreed, setIsAgreed] = useState(false);

    const handlePrivacyChange = (isAgreed: boolean) => {
        setIsAgreed(isAgreed);
    };

  emailjs.init('IZRqHsU2-TVjoCSN4');

  const nextWeekDates = getWeekDates(currentWeek);

  const handleSectionChange = (newSection: string | null) => {
    setSection(newSection);
    if (newSection === 'register') {
      setSelectedTab(3);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'user_name') {
      setUserName(value);
    } else if (name === 'user_phone') {
      const digits = value.replace(/\D/g, '').slice(0, 12);
      let formattedValue = '+380';
      if (digits.length > 3) {
        formattedValue += digits.slice(3);
      }
      setUserPhone(formattedValue);
    } else if (name === 'user_telegram') {
      setUserTelegram(value);
    }
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setError(null);

    const selectedDateObj = new Date(date);
    const day = selectedDateObj.getDay();

    const daySlots = allowedSlots[day] || [];
    if (daySlots.length > 0) {
      const selectedTime = daySlots[0];
      console.log(`Автоматично вибрано час для ${date}: ${selectedTime}`);
    } else {
      console.warn('Слоти для дня не знайдено');
    }
  };

  const handleWeekChange = (week: number) => {
    setCurrentWeek(week);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName.trim() || !userPhone.trim() || !userTelegram.trim() || !selectedDate) {
      setError('Будь ласка, заповніть всі поля та виберіть дату.');
      setSuccess(false);
      return;
    }

    if (userPhone.length < 13) {
      setError('Будь ласка, введіть повний номер телефону (+380 XX XXX XX XX).');
      setSuccess(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    const selectedDateObj = new Date(selectedDate);
    const day = selectedDateObj.getDay();
    const daySlots = allowedSlots[day] || [];
    const selectedTime = daySlots.length > 0 ? daySlots[0] : 'Не вказано';

    const templateParams = {
      user_name: userName,
      user_phone: userPhone,
      user_telegram: userTelegram,
      selected_date: selectedDate,
      selected_time: selectedTime,
    };

    try {
      const response = await emailjs.send(
        'service_u5fsdod',
        'template_98zijkc',
        templateParams,
        'IZRqHsU2-TVjoCSN4'
      );

      console.log('Email відправлено!', response.status, response.text);
      setSuccess(true);

      setUserName('');
      setUserPhone('+380');
      setUserTelegram('');
      setSelectedDate(null);
    } catch (error) {
      console.error('Помилка відправки email:', error);
      setError('Помилка відправки. Спробуйте ще раз або зв’яжіться з нами напряму.');
      setSuccess(false);
    } finally {
      setIsLoading(false);
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
    <div className='pb-20 pt-45'>
      <div className="max-w-[1040px] w-full flex flex-col mx-auto items-center bg-black/60 p-6 md:p-10">
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row justify-between mb-10">
            <div className="flex w-full bg-black relative">
              <TabButton
                label="Запрошуємо!"
                isActive={selectedTab === 1}
                onClick={() => setSelectedTab(1)}
              />
              <TabButton
                label="Формат?"
                isActive={selectedTab === 2}
                onClick={() => setSelectedTab(2)}
              />
              <TabButton
                label="Записатися!"
                isActive={selectedTab === 3}
                onClick={() => setSelectedTab(3)}
              />
              <div
                className={`absolute bottom-0 left-0 w-1/3 h-1 bg-[#ff00be] transition-all duration-500 ${selectedTab === 1 ? 'left-0' : selectedTab === 2 ? 'left-[33.4%]' : 'left-[66.71%]'}`}
              />
            </div>
          </div>

          <SearchParamsHandler onSectionChange={handleSectionChange}>
            {selectedTab === 1 && <FreeMasterClassTab />}
            {selectedTab === 2 && <HowMasterClassWorksTab />}
            {selectedTab === 3 && (
              <RegisterMasterClassTab
                selectedDate={selectedDate}
                currentWeek={currentWeek}
                userName={userName}
                userPhone={userPhone}
                userTelegram={userTelegram}
                isLoading={isLoading}
                onDateChange={handleDateChange}
                onWeekChange={handleWeekChange}
                onChange={handleChange}
                onSubmit={handleSubmit}
                isPrivacyAgreed={isAgreed}
            onPrivacyChange={handlePrivacyChange}
            privacyPolicyLink="https://docs.google.com/document/d/18z3c6NfLZGCvJuph00BNMBetVq7joLbfTlFVfYWqz8Y/edit?usp=sharing"
              />
            )}
          </SearchParamsHandler>

          {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
          {success && <div className="text-white mt-2 text-center">Дякуємо! Ви записані. Ми зв&apos;яжемося з вами найближчим часом.</div>}
        </div>
      </div>
    </div>
  );
};

export default MasterC;