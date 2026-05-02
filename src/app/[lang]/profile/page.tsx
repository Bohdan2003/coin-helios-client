//ui
import { ProfileContent } from '@/app/[lang]/profile/_ui/ProfileContent';
import { LinkAsButton } from '@/shared/ui/links/LinkAsButton';
import { ExitButton } from '@/features/auth/ui/LogoutButton';
import { AddCoinFormDialog } from '@/app/[lang]/profile/_ui/dialogs/AddCoinFormDialog/AddCoinFormDialog';
import { Greeting } from '@/app/[lang]/profile/_ui/Greeting';
//icons
import AddIcon from '@mui/icons-material/Add';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { ROUTES } from '@/shared/routes';
import { getDictionary } from '@/shared/i18n/dictionaries';
import { getProfileTabs } from '@/app/[lang]/profile/helper';

export default async function Profile({
  params,
}: {
  params: Promise<{ lang: TLocale }>
}) {
  const { lang } = await params;
  const d = await getDictionary(lang);
  const tabs = await getProfileTabs(lang);

  return (
    <section className="mt-[60px]">
      <h2 className="hidden">Profile</h2>
      <div className="px-[20px] mx-auto max-w-[1200px]">
        <div className="flex flex-wrap justify-between sm:items-center gap-[20px] sm:gap-[40px]">
          <div className="flex items-center gap-[4px] sm:gap-[16px]">
            <Greeting dictionary={d.profile.greeting}/>
            <ExitButton
              dictionary={{
                title: d.dialogs.exit.title,
                buttons: d.buttons,
                error: d.errors.error,
              }}
            />
          </div>
          <LinkAsButton
            href={ROUTES.ADD_COIN}
            variant="outlined"
            startIcon={<AddIcon/>}
          >
            { d.links.addCoin }
          </LinkAsButton>
          <AddCoinFormDialog
            dictionary={{
              buttons: d.buttons,
              link: d.links.privacyPolicy,
              form: d.forms.addCoin,
              errors: d.forms.errors,
            }}
          />
        </div>
        <ProfileContent
          className="mt-[32px]"
          tabs={tabs}
          dictionary={{
            th: d.tables.th,
            errors: d.errors,
            formErrors: d.forms.errors,
            buttons: d.buttons,
            link: d.links.privacyPolicy,
            form: d.forms.contact
          }}
        />
      </div>
    </section>
  );
}