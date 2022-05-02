import styled from 'styled-components';

const AuthBox = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AuthFormBox = styled.div`
  border-radius: 2px;
  border: 1px solid #dadce0;
  max-width: 300px; // TODO: fix it
  width: 100%; // TODO: fix it
`;

export const App = () => (
  <AuthBox>
    <AuthFormBox>APP</AuthFormBox>
  </AuthBox>
);
