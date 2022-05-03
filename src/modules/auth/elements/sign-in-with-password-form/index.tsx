import { auth } from 'common/firebase';
import { Button } from 'components/button';
import { HookForm } from 'components/form';
import { Input } from 'components/input';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SignInWithPasswordFormBody } from 'modules/auth/types';
import { FC } from 'react';

export const SignInWithPassword: FC = () => {
  const onSubmit = ({ email, password }: SignInWithPasswordFormBody) =>
    signInWithEmailAndPassword(auth, email, password); // TODO: add combine accounts handler
  const text = 'Login';

  return (
    <HookForm {...{ onSubmit }}>
      <Input.Email />
      <Input.Password />
      <Button {...{ text }} />
    </HookForm>
  );
};
