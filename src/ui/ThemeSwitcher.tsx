//icons
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
//utils
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
//types
import { TTheme } from "@/utils/types/theme";

export const ThemeSwitcher: React.FC = async () => {
  const cookieStore = await cookies();
  const currentTheme: TTheme = cookieStore.get('theme')?.value === 'dark' ? 'dark' : 'light';

  async function switchTheme() {
    'use server';
    const cookieStore = await cookies();
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

    cookieStore.set('theme', nextTheme, {
      path: '/',
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 365, // 1 год
    });

    revalidatePath('/');
    redirect('/');
  }

  return (
    <form action={switchTheme}>
      <button
        className="cursor-pointer"
        type="submit"
      >
        {
          currentTheme === 'dark'
            ? <LightModeOutlinedIcon/>
            : <NightlightOutlinedIcon/>
        }
      </button>
    </form>
  );
}
