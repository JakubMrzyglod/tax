import { InputBox } from 'components/input/box';
import { InputBoxProps } from 'components/input/box/types';

const InputBoxWrapper = (props: InputBoxProps) => () => <InputBox {...props} />;

export const Input = {
  Email: InputBoxWrapper({ label: 'Email', name: 'email' }),
  Password: InputBoxWrapper({ label: 'Password', name: 'password' }),
  CompanyName: InputBoxWrapper({ label: 'Company Name', name: 'name' }),
  TaxNumber: InputBoxWrapper({ label: 'Tax number', name: 'taxNumber' }),
  Address: InputBoxWrapper({ label: 'Address', name: 'address' }),
  City: InputBoxWrapper({ label: 'City', name: 'city' }),
};
