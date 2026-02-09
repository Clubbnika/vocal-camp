export const allowedSlots: Record<number, string[]> = {
  3: ['16:00'],
  4: ['16:00'],
  5: ['19:10'],
  6: ['15:00'],
  0: ['15:30'],
};

export const getWeekDates = (weekOffset: number): Date[] => {
  const today = new Date();
  const day = today.getDay();
  const diff = (day === 0 ? 7 : 1) - day;
  const nextMonday = new Date(today.setDate(today.getDate() + diff + weekOffset * 7));
  const weekDates: Date[] = [];

  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(nextMonday);
    currentDay.setDate(nextMonday.getDate() + i);
    weekDates.push(currentDay);
  }

  return weekDates;
};

export const getDayName = (date: Date): string => {
  const days: string[] = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'];
  return days[date.getDay()];
};

export const formatDate = (date: Date): string => {
  const months: string[] = [
    'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
    'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень',
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  return `${day} ${month}`;
};

export const isDayAvailable = (day: number): boolean => {
  return allowedSlots[day] !== undefined;
};