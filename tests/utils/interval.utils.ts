import { Interval } from '../../types/schedules';
import { getWeek, getYear } from 'date-fns';

export const getInterval = (): Interval => ({
  count: Infinity,
  week: getWeek(new Date()),
  year: getYear(new Date()),
  workTime: 540,
  start: [360],
});
