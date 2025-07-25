//components
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
//themes
import { lightTheme, darkTheme } from "@/lib/theme";
//utils
import { ReactNode, FC } from 'react';
import { cookies } from 'next/headers'

export const MUIProvider: FC<{ children: ReactNode }> = async ({children}) => {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value;

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={ theme === 'dark' ? darkTheme : lightTheme }>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
