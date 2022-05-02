import { InputBox } from 'components/input/box';
import { InputBoxProps } from 'components/input/box/types';

const InputBoxWrapper = (props: InputBoxProps) => () => <InputBox {...props} />;

export const Input = {
  email: InputBoxWrapper({ label: 'Email', name: 'email' }),
  password: InputBoxWrapper({ label: 'Password', name: 'password' }),
};
