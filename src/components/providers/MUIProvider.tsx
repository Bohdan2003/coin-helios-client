//components
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, InitColorSchemeScript } from '@mui/material';
//themes
import { theme } from '@/lib/theme';
//utils
import { ReactNode, FC } from 'react';

export const MUIProvider: FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <>
      <InitColorSchemeScript attribute="data" defaultMode="light"/>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme} >
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
};
