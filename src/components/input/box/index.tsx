import { InputBoxProps } from 'components/input/box/types';
import { FC } from 'react';
import styled from 'styled-components';

type InputTextProps = {
  error?: string;
};

export const InputText = styled.input<InputTextProps>`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 0.625rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border: 0.1rem solid #dadce0;
  border-radius: ${({ theme }) => theme.borderRadius};
  border-color: ${({ error }) => (error ? '#d92550' : '#dadce0')};
  &:focus {
    outline: none;
    border-color: ${({ error, theme }) =>
      error ? '#d92550' : theme.color.main.primary};
    box-shadow: 0 3px 9px rgb(50 50 9 / 0%), 3px 4px 8px rgb(94 114 128 / 10%);
  }
  &::placeholder {
    color: #d1d2d333;
  }
`;

type InputErrorProps = {
  error?: string;
};

export const InputError = styled.div.attrs<InputErrorProps>(({ error }) => ({
  children: error,
}))<InputErrorProps>`
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #d92550;
  min-height: 1.5rem;
`;

type InputLabelProps = {
  label: string;
};
export const InputLabel = styled.div.attrs<InputLabelProps>(({ label }) => ({
  children: label,
}))<InputLabelProps>`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const InputBox: FC<InputBoxProps> = ({ label }) => {
  return (
    <>
      <InputLabel {...{ label }} />
      <InputText />
      <InputError />
    </>
  );
};
