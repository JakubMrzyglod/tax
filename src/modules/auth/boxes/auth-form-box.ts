import styled from 'styled-components';

export const AuthFormBox = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0.1rem solid #dadce0; // TODO: move to theme
  max-width: 300px; // TODO: fix it
  width: 100%; // TODO: fix it
  padding: 2rem;
`;
