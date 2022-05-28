export const getMonth = () => ({
  1: { start: [6 * 60, 8 * 60], time: 8 * 60 },
  2: { start: [6 * 60, 8 * 60], time: 8 * 60 },
  3: { start: [6 * 60, 8 * 60], time: 8 * 60 },
  4: { start: [6 * 60, 8 * 60], time: 8 * 60 },
  5: { start: [6 * 60, 8 * 60], time: 8 * 60 },
  8: { start: [6 * 60, 8 * 60], time: 8 * 60 },
  9: { start: [6 * 60, 8 * 60], time: 8 * 60 },
  10: { start: [6 * 60, 8 * 60], time: 8 * 60 },
  11: { start: [6 * 60, 8 * 60], time: 8 * 60 },
  12: { start: [6 * 60, 8 * 60], time: 8 * 60 },
});

export type Month = ReturnType<typeof getMonth>;
