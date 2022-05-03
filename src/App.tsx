import { Button } from 'components/button';
import { Input } from 'components/input';
import { FC } from 'react';
import styled from 'styled-components';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from 'common/firebase';
import { HookForm } from 'components/form';

const AuthBox = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AuthFormBox = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0.1rem solid #dadce0;
  max-width: 300px; // TODO: fix it
  width: 100%; // TODO: fix it
  padding: 2rem;
`;

const SignInWithGoogle: FC = () => {
  const onSubmit = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const text = 'Sign in with Google';

  return (
    <HookForm {...{ onSubmit }}>
      <SignInWithGoogleBtn {...{ text }} />
    </HookForm>
  );
};

const SignInWithGoogleBtn = styled(Button)`
  margin-bottom: 5rem;
`;

type SignInWithPasswordFormBody = {
  email: string;
  password: string;
};

const SignInWithPassword: FC = () => {
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

export const App: FC = () => (
  <AuthBox>
    <AuthFormBox>
      <SignInWithGoogle />
      <SignInWithPassword />
    </AuthFormBox>
  </AuthBox>
);
