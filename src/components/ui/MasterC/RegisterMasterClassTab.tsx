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

interface RegisterMasterClassTabProps {
  selectedDate: string | null;
  selectedTime: string | null;
  currentWeek: number;
  userName: string;
  userPhone: string;
  userTelegram: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onWeekChange: (week: number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RegisterMasterClassTab = ({
  selectedDate,
  selectedTime,
  currentWeek,
  userName,
  userPhone,
  userTelegram,
  onDateChange,
  onTimeChange,
  onWeekChange,
  onChange,
  onSubmit,
}: RegisterMasterClassTabProps) => {
  const nextWeekDates = getWeekDates(currentWeek);

  const isPrevWeekAvailable = (): boolean => {
    const today = new Date();
    const selectedWeekDate = getWeekDates(currentWeek)[0];
    return today.getTime() > selectedWeekDate.getTime();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 text-white">
      <div className="flex items-center justify-between w-full">
        <label htmlFor="date">Виберіть дату:</label>
        <div className="flex">
          <button
            onClick={() => onWeekChange(currentWeek - 1)}
            className={`${ARROW_BUTTON_STYLE} ${currentWeek <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentWeek <= 0}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => onWeekChange(currentWeek + 1)}
            className={`${ARROW_BUTTON_STYLE} ml-2`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Кнопки з датами та часами під ними */}
      <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mb-4">
        {nextWeekDates.map((date, index) => {
          const day = date.getDay();
          const formattedDate = date.toISOString().split('T')[0];
          const dayName = getDayName(date);
          const isAvailable = isDayAvailable(day);
          const isDisabled = day === 1 || day === 2;
          const daySlots = allowedSlots[day] || [];

          return (
            <div key={index} className="flex flex-col gap-1">
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
              {/* Часи під датою, якщо день доступний */}
              {!isDisabled && daySlots.length > 0 && (
                <div className="flex flex-row gap-1 w-full">
                  {daySlots.map((time, timeIndex) => (
                    <div
                      key={timeIndex}
                      className={`${DATE_BUTTON_BASE_STYLE} flex-1 bg-gray-500 text-white text-center`}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              )}
              {/* Якщо недоступний день, показати повідомлення */}
              {isDisabled && (
                <div className="text-xs text-gray-500 text-center">Недоступно</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Поля вводу */}
      <input
        type="text"
        name="user_name"
        id="user_name"
        value={userName}
        onChange={onChange}
        placeholder="Ім'я"
        className={INPUT_STYLE}
      />

      <input
        type="tel"
        name="user_phone"
        id="user_phone"
        value={userPhone}
        onChange={onChange}
        placeholder="Номер телефону"
        className={INPUT_STYLE}
      />

      <input
        type="text"
        name="user_telegram"
        id="user_telegram"
        value={userTelegram}
        onChange={onChange}
        placeholder="Ваш Телеграм"
        className={INPUT_STYLE}
      />

      <button type="submit" className={SUBMIT_BUTTON_STYLE}>
        Записатися
      </button>
    </form>
  );
};

export default RegisterMasterClassTab;

// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import {
//   INPUT_STYLE,
//   DATE_BUTTON_BASE_STYLE,
//   DATE_BUTTON_AVAILABLE_STYLE,
//   DATE_BUTTON_UNAVAILABLE_STYLE,
//   DATE_BUTTON_DISABLED_STYLE,
//   ARROW_BUTTON_STYLE,
//   SUBMIT_BUTTON_STYLE,
//   TEXT_STYLE,
// } from './styles';
// import {
//   allowedSlots,
//   getWeekDates,
//   getDayName,
//   formatDate,
//   isDayAvailable,
// } from './utils';

// interface RegisterMasterClassTabProps {
//   selectedDate: string | null;
//   selectedTime: string | null;
//   currentWeek: number;
//   userName: string;
//   userPhone: string;
//   userTelegram: string;
//   onDateChange: (date: string) => void;
//   onTimeChange: (time: string) => void;
//   onWeekChange: (week: number) => void;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onSubmit: (e: React.FormEvent) => void;
// }

// const RegisterMasterClassTab = ({
//   selectedDate,
//   selectedTime,
//   currentWeek,
//   userName,
//   userPhone,
//   userTelegram,
//   onDateChange,
//   onTimeChange,
//   onWeekChange,
//   onChange,
//   onSubmit,
// }: RegisterMasterClassTabProps) => {
//   const nextWeekDates = getWeekDates(currentWeek);

//   const isPrevWeekAvailable = (): boolean => {
//     const today = new Date();
//     const selectedWeekDate = getWeekDates(currentWeek)[0];
//     return today.getTime() > selectedWeekDate.getTime();
//   };

//   return (
//     <form onSubmit={onSubmit} className="flex flex-col gap-2 text-white">
//       <div className="flex items-center justify-between w-full">
//         <label htmlFor="date">Виберіть дату:</label>
//         <div className="flex">
//           <button
//             onClick={() => onWeekChange(currentWeek - 1)}
//             className={`${ARROW_BUTTON_STYLE} ${currentWeek <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//             disabled={currentWeek <= 0}
//           >
//             <ChevronLeft />
//           </button>
//           <button
//             onClick={() => onWeekChange(currentWeek + 1)}
//             className={`${ARROW_BUTTON_STYLE} ml-2`}
//           >
//             <ChevronRight />
//           </button>
//         </div>
//       </div>

//       {/* Кнопки з датами */}
//       <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mb-4">
//         {nextWeekDates.map((date, index) => {
//           const day = date.getDay();
//           const formattedDate = date.toISOString().split('T')[0];
//           const dayName = getDayName(date);
//           const isAvailable = isDayAvailable(day);
//           const isDisabled = day === 1 || day === 2;
//           return (
//             <button
//               key={index}
//               onClick={() => onDateChange(formattedDate)}
//               className={`${DATE_BUTTON_BASE_STYLE} ${
//                 isAvailable ? DATE_BUTTON_AVAILABLE_STYLE : DATE_BUTTON_UNAVAILABLE_STYLE
//               } ${selectedDate === formattedDate ? 'border-2 border-white' : ''} ${
//                 isDisabled ? DATE_BUTTON_DISABLED_STYLE : ''
//               }`}
//               disabled={isDisabled}
//             >
//               {dayName}, {formatDate(date)}
//             </button>
//           );
//         })}
//       </div>

//       {/* Вибір часу */}
//       {selectedDate && (
//         <div>
//           <label htmlFor="time">Доступний час на цей день:</label>
//           <div className="grid grid-cols-2 gap-2 mb-4">
//             {isDayAvailable(new Date(selectedDate).getDay()) ? (
//               allowedSlots[new Date(selectedDate).getDay()].map((time, index) => (
//                 <div
//                   key={index}
//                   className="p-2 text-center bg-gray-500 text-white"
//                 >
//                   {time}
//                 </div>
//               ))
//             ) : (
//               <div className="text-center text-gray-500">Недоступний день для запису</div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Поля вводу */}
//       <input
//         type="text"
//         name="user_name"
//         id="user_name"
//         value={userName}
//         onChange={onChange}
//         placeholder="Ім'я"
//         className={INPUT_STYLE}
//       />

//       <input
//         type="tel"
//         name="user_phone"
//         id="user_phone"
//         value={userPhone}
//         onChange={onChange}
//         placeholder="Номер телефону"
//         className={INPUT_STYLE}
//       />

//       <input
//         type="text"
//         name="user_telegram"
//         id="user_telegram"
//         value={userTelegram}
//         onChange={onChange}
//         placeholder="Ваш Телеграм"
//         className={INPUT_STYLE}
//       />

//       <button type="submit" className={SUBMIT_BUTTON_STYLE}>
//         Записатися
//       </button>
//     </form>
//   );
// };

// export default RegisterMasterClassTab;
