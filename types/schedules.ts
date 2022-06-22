export type Schedule = {
  name: string;
};

export type Workweeks = {
  [week: number]: Workday[];
};

export type Interval = {
  week: number;
  year: number;
  count: number;
  start: number[];
  workTime: number;
};

export type Workday = {
  start: number[];
  workTime: number;
  intervalId?: number;
};
