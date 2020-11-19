import '@emotion/react';
import { Theme as DefaultTheme } from '../theme/theme';

declare module '@emotion/react' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  export interface Theme extends DefaultTheme {}
}
