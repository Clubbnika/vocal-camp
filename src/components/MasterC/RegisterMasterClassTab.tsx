'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  INPUT_STYLE,
  DATE_BUTTON_BASE_STYLE,
  DATE_BUTTON_AVAILABLE_STYLE,
  DATE_BUTTON_UNAVAILABLE_STYLE,
  DATE_BUTTON_DISABLED_STYLE,
  ARROW_BUTTON_STYLE,
  SUBMIT_BUTTON_STYLE,
  TEXT_STYLE,
  DATE_BUTTON_AVAILABLE_STYLE_CLICKED,
} from './styles';
import {
  allowedSlots,
  getWeekDates,
  getDayName,
  formatDate,
  isDayAvailable,
} from './utils';
import PrivacyCheckbox from '../ui/PrivacyCheckBox'; 

interface RegisterMasterClassTabProps {
  selectedDate: string | null;
  currentWeek: number;
  userName: string;
  userPhone: string;
  userTelegram: string;
  isLoading: boolean;
  onDateChange: (date: string) => void;
  onWeekChange: (week: number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  isPrivacyAgreed: boolean;
  onPrivacyChange: (isAgreed: boolean) => void;
  privacyPolicyLink: string;
}


const RegisterMasterClassTab = ({
  selectedDate,
  currentWeek,
  userName,
  userPhone,
  userTelegram,
  isLoading,
  onDateChange,
  onWeekChange,
  onChange,
  onSubmit,
  isPrivacyAgreed,
  onPrivacyChange,
  privacyPolicyLink,
}: RegisterMasterClassTabProps) => {
  const nextWeekDates = getWeekDates(currentWeek);

  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  const isPrevWeekAvailable = (): boolean => {
    const today = new Date();
    const selectedWeekDate = getWeekDates(currentWeek)[0];
    return today.getTime() > selectedWeekDate.getTime();
  };
  
  const handleSubmitWrapper = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!isPrivacyAgreed) {
          setWarningMessage('Будь ласка, погодьтеся з Політикою конфіденційності.');

          setTimeout(() => {
              setWarningMessage(null);
          }, 3000);
          return;
      }

      await onSubmit(e);
  };


  return (
    <form onSubmit={handleSubmitWrapper} className="flex flex-col gap-2 text-white">
      <div className="flex items-center justify-between w-full text-sm">
        <label htmlFor="date">Оберіть дату:</label>
        <div className="flex">
          <button
            onClick={() => onWeekChange(currentWeek - 1)}
            className={`${ARROW_BUTTON_STYLE} ${currentWeek <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentWeek <= 0}
          >
            <ChevronLeft size={18}/>
          </button>
          <button
            onClick={() => onWeekChange(currentWeek + 1)}
            className={`${ARROW_BUTTON_STYLE} ml-2`}
            disabled={isLoading}
          >
            <ChevronRight size={18}/>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mb-4 md:text-sm text-xs">
        {nextWeekDates.map((date, index) => {
          const day = date.getDay();
          const formattedDate = date.toISOString().split('T')[0];
          const dayName = getDayName(date);
          const isAvailable = isDayAvailable(day);
          const isDisabled = day === 1 || day === 2;
          const daySlots = allowedSlots[day] || [];

          return (
            <div key={index} className="flex flex-col ">
              <button
                onClick={() => onDateChange(formattedDate)}
                className={`${DATE_BUTTON_BASE_STYLE} ${
                  isAvailable ? DATE_BUTTON_AVAILABLE_STYLE : DATE_BUTTON_UNAVAILABLE_STYLE
                } ${selectedDate === formattedDate ? DATE_BUTTON_AVAILABLE_STYLE_CLICKED : ''} ${
                  isDisabled ? DATE_BUTTON_DISABLED_STYLE : ''
                }`}
                disabled={isDisabled}
              >
                {dayName}, {formatDate(date)}
              </button>
              {!isDisabled && daySlots.length > 0 && (
                <div className="flex flex-row w-full">
                  {daySlots.map((time, timeIndex) => (
                    <div
                      key={timeIndex}
                      onClick={() => onDateChange(formattedDate)}
                      className={`${DATE_BUTTON_BASE_STYLE} flex-1 bg-[#ff00be]/60 text-white text-center cursor-pointer hover:bg-[#ff00be]/80 transition-colors`}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              )}
              {isDisabled && (
                <div className="text-xs text-gray-500 text-center">Недоступно</div>
              )}
            </div>
          );
        })}
      </div>

      <input
        type="text"
        name="user_name"
        id="user_name"
        value={userName}
        onChange={onChange}
        placeholder="Ім'я"
        className={INPUT_STYLE}
        required
      />

      <input
        type="tel"
        name="user_phone"
        id="user_phone"
        value={userPhone}
        onChange={onChange}
        placeholder="+380 XX XXX XX XX"
        className={INPUT_STYLE}
        required
      />

      <input
        type="text"
        name="user_telegram"
        id="user_telegram"
        value={userTelegram}
        onChange={onChange}
        placeholder="Ваш Телеграм"
        className={INPUT_STYLE}
        required
      />
    
      <PrivacyCheckbox 
          isChecked={isPrivacyAgreed}
          onCheckChange={onPrivacyChange}
          privacyLink={privacyPolicyLink} 
      />

      {warningMessage && (
          <div className="bg-red-600 text-white text-sm font-semibold text-center p-2 rounded-md transition-opacity">
              {warningMessage}
          </div>
      )}
      
      <button 
        type="submit" 
        disabled={isLoading} 
        className={`${SUBMIT_BUTTON_STYLE} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Записуємо...' : 'Записатися'}
      </button>
    </form>
  );
};

export default RegisterMasterClassTab;