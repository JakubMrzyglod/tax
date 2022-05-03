import { auth } from 'common/firebase';
import { HookForm } from 'components/form';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { SignInWithGoogleBtn } from 'modules/auth/elements/sign-in-with-google-form/components/button';
import { FC } from 'react';

export const SignInWithGoogle: FC = () => {
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
