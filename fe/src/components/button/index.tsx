import styled from 'styled-components';

type ButtonProps = {
  text: string;
};

export const Button = styled.button.attrs<ButtonProps>(({ text }) => ({
  children: text,
}))<ButtonProps>`
  font-size: 1rem;
  transition: all 0.15s ease;
  letter-spacing: 0.05em;
  will-change: transform;
  color: #fff;
  background-color: ${({ theme }) => theme.color.main.primary};
  font-weight: 600;
  line-height: 1.5;
  display: inline-block;
  padding: 0.625rem 1.25rem;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  }
`;
