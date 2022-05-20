import { FS_DOC } from 'common/firebase/constants';
import { Button } from 'components/button';
import { HookForm } from 'components/form';
import { Input } from 'components/input';
import { setDoc } from 'firebase/firestore';
import { OnboardingContentBox } from 'modules/onboarding/elements/onboarding-content-box';
import { OnBoardingProps } from 'modules/onboarding/types';
import { resolver } from 'modules/onboarding/validation';
import { FC } from 'react';
import { Company } from 'types/company';

export const Onboarding: FC<OnBoardingProps> = ({ setOnboarded, uid }) => {
  const companyDoc = FS_DOC.companies(uid);
  const onSubmit = async (data: Company) => {
    await setDoc(companyDoc, data);
    setOnboarded();
  };

  return (
    <OnboardingContentBox>
      <HookForm {...{ onSubmit, resolver }}>
        <Input.CompanyName />
        <Input.TaxNumber />
        <Input.City />
        <Input.Address />
        <Button {...{ text: 'Submit' }} />
      </HookForm>
    </OnboardingContentBox>
  );
};
