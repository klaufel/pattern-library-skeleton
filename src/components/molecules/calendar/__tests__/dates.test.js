import {
  getZeroPad,
  getDateSplit,
  getCalendarDate,
  getDateFormat,
  getMonthName,
  getNextMonth,
  getPrevMonth,
  getMonthDays,
  getMonthDayWeek,
  getCalendarGrid,
  getMonthDates,
  getCalendarDays,
  MONTHS_NAMES,
} from '../dates';
import { calendarDays202001, calendarDays199410 } from '../__mocks__/calendarDays.mock';
import { monthDatesCurrent, monthDatesPrev, monthDatesNext } from '../__mocks__/monthDates.mock';

describe('Calendar dates', () => {
  test('getZeroPad', () => {
    expect(getZeroPad(1)).toBe('01');
    expect(getZeroPad(0)).toBe('00');
    expect(getZeroPad(9)).toBe('09');
    expect(getZeroPad(10)).toBe('10');
    expect(getZeroPad(30)).toBe('30');
  });

  test('getDateSplit', () => {
    expect(getDateSplit('1/8/2020')).toEqual({
      year: 2020,
      month: 8,
      day: 1,
    });
    expect(getDateSplit('12/11/2020')).toEqual({
      year: 2020,
      month: 11,
      day: 12,
    });
  });

  test('getCalendarDate', () => {
    expect(getCalendarDate()).toEqual({
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: null,
    });
    expect(getCalendarDate('12/11/1991')).toEqual({
      year: 1991,
      month: 11,
      day: 12,
    });
  });

  test('getDateFormat', () => {
    expect(getDateFormat(2020, 1, 1)).toBe('01/01/2020');
    expect(getDateFormat(2020, 9, 9)).toBe('09/09/2020');
    expect(getDateFormat(1970, 12, 20)).toBe('20/12/1970');
    expect(getDateFormat(1432, 1, 14)).toBe('14/01/1432');
  });

  test('getMonthName', () => {
    MONTHS_NAMES.map((month, index) => {
      expect(getMonthName(index + 1)).toBe(month);
    });
  });

  test('getNextMonth', () => {
    expect(getNextMonth(2020, 8)).toEqual({ year: 2020, month: 9 });
    expect(getNextMonth(2020, 12)).toEqual({ year: 2021, month: 1 });
    expect(getNextMonth(2020, 1)).toEqual({ year: 2020, month: 2 });
  });

  test('getPrevMonth', () => {
    expect(getPrevMonth(2020, 8)).toEqual({ year: 2020, month: 7 });
    expect(getPrevMonth(2020, 1)).toEqual({ year: 2019, month: 12 });
    expect(getPrevMonth(2020, 12)).toEqual({ year: 2020, month: 11 });
  });

  test('getMonthDays', () => {
    expect(getMonthDays(2020, 1)).toBe(31);
    expect(getMonthDays(2020, 2)).toBe(29);
    expect(getMonthDays(2020, 3)).toBe(31);
    expect(getMonthDays(2020, 4)).toBe(30);
    expect(getMonthDays(2019, 5)).toBe(31);
    expect(getMonthDays(2019, 2)).toBe(28);
    expect(getMonthDays(2019, 6)).toBe(30);
    expect(getMonthDays(2019, 7)).toBe(31);
  });

  test('getMonthDayWeek', () => {
    expect(getMonthDayWeek(2020, 1, 1)).toBe(4);
    expect(getMonthDayWeek(2020, 1, 2)).toBe(5);
    expect(getMonthDayWeek(2020, 1, 3)).toBe(6);
    expect(getMonthDayWeek(2020, 1, 4)).toBe(7);
    expect(getMonthDayWeek(2020, 1, 5)).toBe(1);
    expect(getMonthDayWeek(2020, 1, 6)).toBe(2);
    expect(getMonthDayWeek(2020, 1, 7)).toBe(3);
  });

  test('getCalendarGrid', () => {
    expect(getCalendarGrid(2, 30)).toBe(35);
    expect(getCalendarGrid(6, 31)).toBe(42);
    expect(getCalendarGrid(4, 28)).toBe(35);
  });

  test('getMonthDates', () => {
    expect(getMonthDates(31, 1994, 10, 'current')).toEqual(monthDatesCurrent);
    expect(getMonthDates(6, 1994, 9, 'prev', 24)).toEqual(monthDatesPrev);
    expect(getMonthDates(5, 1994, 11, 'next')).toEqual(monthDatesNext);
  });

  test('getCalendarDays', () => {
    expect(getCalendarDays(2020, 1)).toEqual(calendarDays202001);
    expect(getCalendarDays(1994, 10)).toEqual(calendarDays199410);
  });
});
