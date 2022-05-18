import { useUserContext } from 'common/contexts/user';
import { FS_DOC } from 'common/firebase/constants';
import { Button } from 'components/button';
import { ContentBox } from 'components/content-box';
import { HookForm } from 'components/form';
import { Input } from 'components/input';
import { setDoc } from 'firebase/firestore';
import { resolver } from 'modules/onboarding/validation';
import { FC } from 'react';
import styled from 'styled-components';
import { Company } from 'types/company';

const OnboardingContentBox = styled(ContentBox)`
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding: 100px;
  box-sizing: border-box;
`;

export const Onboarding: FC = () => {
  const { uid } = useUserContext();
  const companyDoc = FS_DOC.companies(uid);
  const onSubmit = (data: Company) => setDoc(companyDoc, data);

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
