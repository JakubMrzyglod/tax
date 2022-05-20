import styled from 'styled-components';

type AppBarItemProps = {
  text: string;
};

export const AppBarItem = styled.div.attrs<AppBarItemProps>(({ text }) => ({ children: text }))<AppBarItemProps>`
  padding: 0 10px;
  color: black;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: blue;
  }
`;
