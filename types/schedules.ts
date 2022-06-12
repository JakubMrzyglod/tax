export type Schedule = {
  name: string;
};

export type Interval = {
  startDate: Date;
  type: IntervalType;
  count: number;
  startTimes: number [];
  workTime: number;
};

export enum IntervalType {
  DAILY,
  WEEKLY,
  MONTHLY,
}