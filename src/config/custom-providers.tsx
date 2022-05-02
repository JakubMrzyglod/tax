import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { styledTheme as theme } from 'common/styles/theme.styled';
import { GlobalStyle } from 'common/styles/global';

type CustomProvidersProps = {
  children: ReactNode;
};

export const CustomProviders: FC<CustomProvidersProps> = ({ children }) => (
  <ThemeProvider {...{ theme }}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
