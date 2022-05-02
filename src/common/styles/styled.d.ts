import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    device: {
      xs: string;
      sm: string;
      lg: string;
    };
    color: {
      main: Colors;
      // background: Colors;
      // error: Colors;
      // text: Colors;
    };
  }
}

type Colors = {
  primary: string;
  secondary: string;
};
