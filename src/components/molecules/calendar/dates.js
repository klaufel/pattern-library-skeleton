export const MONTHS_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const WEEKDAYS_NAMES = [
  { name: 'Sun', weekend: true },
  { name: 'Mon' },
  { name: 'Tue' },
  { name: 'Wed' },
  { name: 'Thu' },
  { name: 'Fri' },
  { name: 'Sat', weekend: true },
];

export const WEEKDAYS_NUMBERS = WEEKDAYS_NAMES.length;

export const getZeroPad = number => {
  return number <= 9 ? `0${number}` : String(number);
};

export const getDateFormat = (year, month, day) => {
  return `${getZeroPad(day)}/${getZeroPad(month)}/${year}`;
};

export const getDateSplit = date => {
  const dateTransform = date.split('/');
  return {
    year: Number(dateTransform[2]),
    month: Number(dateTransform[1]),
    day: Number(dateTransform[0]),
  };
};

export const getCalendarDate = date => {
  if (date) {
    const splitDate = getDateSplit(date);
    return {
      year: splitDate.year,
      month: splitDate.month,
      day: splitDate.day,
    };
  }
  const newDate = new Date();
  return {
    year: newDate.getFullYear(),
    month: newDate.getMonth() + 1,
    day: null,
  };
};

export const getMonthName = month => {
  return MONTHS_NAMES[month - 1];
};

export const getNextMonth = (year, month) => {
  const nextMonth = month >= 12 ? 1 : month + 1;
  const nextYear = month >= 12 ? year + 1 : year;
  return { year: nextYear, month: nextMonth };
};

export const getPrevMonth = (year, month) => {
  const prevMonth = month <= 1 ? 12 : month - 1;
  const prevYear = month <= 1 ? year - 1 : year;
  return { year: prevYear, month: prevMonth };
};

export const getMonthDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

export const getMonthDayWeek = (year, month, day) => {
  return new Date(year, month - 1, day).getDay() + 1;
};

export const getCalendarGrid = (prevMonth, currentMonth) => {
  return Math.ceil((prevMonth + currentMonth) / WEEKDAYS_NUMBERS) * WEEKDAYS_NUMBERS;
};

export const getMonthDates = (days, year, month, monthType = 'current', diff = 0) => {
  return [...new Array(days)].map((val, day) => {
    const currentDay = day + 1 + diff;
    return {
      day: currentDay,
      date: getDateFormat(year, month, currentDay),
      month: monthType,
    };
  });
};

export const getCalendarDays = (year, month) => {
  const currentMonthDays = getMonthDays(year, month);
  const prevMonth = getPrevMonth(year, month);
  const nextMonth = getNextMonth(year, month);
  const prevMonthDays = getMonthDays(prevMonth.year, prevMonth.month);
  const daysFromPrevMonth = getMonthDayWeek(year, month, 1) - 1;
  const calendarGrid = getCalendarGrid(daysFromPrevMonth, currentMonthDays);
  const daysFromNextMonth = calendarGrid - (daysFromPrevMonth + currentMonthDays);

  const currentMonthDates = getMonthDates(currentMonthDays, year, month, 'current');

  const prevMonthDates = getMonthDates(
    daysFromPrevMonth,
    prevMonth.year,
    prevMonth.month,
    'prev',
    prevMonthDays - daysFromPrevMonth
  );

  const nextMonthDates = getMonthDates(daysFromNextMonth, nextMonth.year, nextMonth.month, 'next');

  return [...prevMonthDates, ...currentMonthDates, ...nextMonthDates];
};
