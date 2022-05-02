import { Button } from 'components/button';
import { Input } from 'components/input';
import { FC } from 'react';
import styled from 'styled-components';

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

const SignInWithGoogleBtn = styled(Button).attrs({
  children: 'Sign In With Google',
})`
  margin-bottom: 1.5rem;
`;

const LoginButton: FC = () => <Button {...{ text: 'Login' }} />;

export const App: FC = () => (
  <AuthBox>
    <AuthFormBox>
      <SignInWithGoogleBtn />
      <Input.email />
      <Input.password />
      <LoginButton />
    </AuthFormBox>
  </AuthBox>
);
