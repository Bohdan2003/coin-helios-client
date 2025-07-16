//components
import { ThemeProvider } from '@mui/material/styles';
import { ScopedCssBaseline } from "@mui/material";
//ui
import { Logo } from "@/ui/Logo";
//themes
import { darkTheme } from "@/lib/theme";
import { LanguageSwitcher } from "@/ui/LanguageSwitcher";
import { ThemeSwitcher } from "@/ui/ThemeSwitcher";

export const Footer = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <ScopedCssBaseline>
      <footer className="bg-purple py-[20px]">
        <div className="container">
          <div className="flex gap-[86px]">
            <div className="grid gap-[16px] grow">
              <Logo/>
              <p className="max-w-[520px]">
                Content on our website, related platforms, forums,
                apps, social media, and blogs ("Site") is sourced
                from third parties and provided for informational
                purposes only. We do not guarantee its relevance.
                This information is not financial or legal advice.
              </p>
            </div>
            <div className="flex gap-[76px] items-start">
              <nav>
                <ul className="grid gap-[16px]">
                  <li>Coins</li>
                  <li>News</li>
                  <li>Become a Partner</li>
                  <li>FAQ</li>
                </ul>
              </nav>
              <nav>
                <ul className="grid gap-[16px]">
                  <li>Profile</li>
                  <li>Saved</li>
                  <li>Add currency</li>
                </ul>
              </nav>
              <div className="flex items-center justify-center md:gap-[20px] xl:gap-[60px]">
                <LanguageSwitcher/>
                <ThemeSwitcher/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ScopedCssBaseline>
    </ThemeProvider>
  )
}