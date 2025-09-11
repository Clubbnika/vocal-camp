'use client';
import { useState } from 'react';
import TabButton from './TabButton';
import FreeMasterClassTab from './FreeMasterClassTab';
import HowMasterClassWorksTab from './HowMasterClassWorksTab';
import RegisterMasterClassTab from './RegisterMasterClassTab';
import { getWeekDates } from './utils';
import { SearchParamsHandler } from '@/components/SearchParamsHandler'; // Імпорт нового компонента

const MasterC = () => {
  const initialTab = 3;
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [userTelegram, setUserTelegram] = useState<string>('');
  const [section, setSection] = useState<string | null>(null); // Локальний стан для section

  const nextWeekDates = getWeekDates(currentWeek);

  // Обробник для колбека з SearchParamsHandler
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
      setUserPhone(value);
    } else if (name === 'user_telegram') {
      setUserTelegram(value);
    }
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  };

  const handleWeekChange = (week: number) => {
    setCurrentWeek(week);
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

  const isPrevWeekAvailable = (): boolean => {
    const today = new Date();
    const selectedWeekDate = getWeekDates(currentWeek)[0];
    return today.getTime() > selectedWeekDate.getTime();
  };

  return (
    <div className="mb-25 max-w-[1040px] w-full flex mt-45 flex-col mx-auto items-center bg-black/60 p-10">
      <div className="flex flex-col w-full">
        <div className="flex justify-between mb-10">
          <div className="flex w-full bg-black relative">
            <TabButton
              label="Запрошуємо!"
              isActive={selectedTab === 1}
              onClick={() => setSelectedTab(1)}
            />
            <TabButton
              label="Як проходить майстер-клас?"
              isActive={selectedTab === 2}
              onClick={() => setSelectedTab(2)}
            />
            <TabButton
              label="Записатися!"
              isActive={selectedTab === 3}
              onClick={() => setSelectedTab(3)}
            />
            <div
              className={`absolute bottom-0 left-0 w-1/3 h-1 bg-[#ff00be] transition-all duration-500 ${
                selectedTab === 1 ? 'left-0' : selectedTab === 2 ? 'left-[33.4%]' : 'left-[66.71%]'
              }`}
            />
          </div>
        </div>

        {/* Обгорніть SearchParamsHandler у Suspense тут, якщо MasterC рендериться в серверному компоненті. Але краще в page.tsx */}
        <SearchParamsHandler onSectionChange={handleSectionChange}>
          {selectedTab === 1 && <FreeMasterClassTab />}
          {selectedTab === 2 && <HowMasterClassWorksTab />}
          {selectedTab === 3 && (
            <RegisterMasterClassTab
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              currentWeek={currentWeek}
              userName={userName}
              userPhone={userPhone}
              userTelegram={userTelegram}
              onDateChange={handleDateChange}
              onTimeChange={handleTimeChange}
              onWeekChange={handleWeekChange}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          )}
        </SearchParamsHandler>
      </div>
    </div>
  );
};

export default MasterC;