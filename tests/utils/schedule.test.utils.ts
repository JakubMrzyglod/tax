import { random } from 'faker';

export const getGroup = () => ({
  name: random.word(),
});

export type Group = ReturnType<typeof getGroup>;
