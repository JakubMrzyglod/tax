import { Interval, IntervalType } from '../../types/schedules';

export const getInterval = (): Interval => ({
  count: Infinity,
  startDate: new Date(),
  type: IntervalType.WEEKLY,
  workTime: 540,
  startTimes: [360],
});
