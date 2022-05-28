import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const isString = string().required('Is Required');

const schema = object({
  name: isString,
  taxId: isString,
  address: isString,
  city: isString,
});

export const resolver = yupResolver(schema);
