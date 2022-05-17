import { Button } from 'components/button';
import { ContentBox } from 'components/content-box';
import { HookForm } from 'components/form';
import { Input } from 'components/input';
import { FC } from 'react';
import styled from 'styled-components';

const OnboardingContentBox = styled(ContentBox)`
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding: 100px;
  box-sizing: border-box;
`;

export const Onboarding: FC = () => (
  <OnboardingContentBox>
    <HookForm {...{ onSubmit: (data) => console.log(data) }}>
      <Input.CompanyName />
      <Input.TaxNumber />
      <Input.City />
      <Input.Address />
      <Button {...{ text: 'Submit' }} />
    </HookForm>
  </OnboardingContentBox>
);
