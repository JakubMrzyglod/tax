import { InputBox } from 'components/input/box';
import { InputBoxProps } from 'components/input/box/types';

const InputBoxWrapper = (props: InputBoxProps) => () => <InputBox {...props} />;

export const Input = {
  Email: InputBoxWrapper({ label: 'Email', name: 'email' }),
  Password: InputBoxWrapper({ label: 'Password', name: 'password' }),
};
