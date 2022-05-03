import { AuthBox } from 'modules/auth/boxes/auth-box';
import { AuthFormBox } from 'modules/auth/boxes/auth-form-box';
import { SignInWithGoogle } from 'modules/auth/elements/sign-in-with-google-form';
import { SignInWithPassword } from 'modules/auth/elements/sign-in-with-password-form';

export const Auth = () => (
  <AuthBox>
    <AuthFormBox>
      <SignInWithGoogle />
      <SignInWithPassword />
    </AuthFormBox>
  </AuthBox>
);
