import { address, company, random } from 'faker';

export const getCompany = () => ({
  taxId: random.word(),
  name: company.companyName(),
  city: `${address.zipCode()} ${address.city()}`,
  address: address.streetAddress(),
});

export type Company = ReturnType<typeof getCompany>;
