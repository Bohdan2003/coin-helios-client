'use client';
//hooks
import { useSearchParams } from 'next/navigation';
//ui
import { LinkTabs } from '@/shared/ui/tabs/LinkTabs';
import { AlertsList } from '@/app/[lang]/profile/_ui/AlertsList';
import { PromotionsTable } from '@/app/[lang]/profile/_ui/tables/PromotionsTable';
import { MyCoinsTable } from '@/app/[lang]/profile/_ui/tables/MyCoinsTable';
//types
import { TTab } from '@/shared/ui/tabs/BaseTabs';
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import { cn } from '@/shared/lib/cn';
import { ROUTES } from '@/shared/routes';

export const ProfileContent: React.FC<{
  className?: string;
  tabs: TTab[];
  dictionary: {
    buttons: TDictionary['buttons'];
    form: TDictionary['forms']['contact'];
    formErrors: TDictionary['forms']['errors'];
    link: TDictionary['links']['privacyPolicy'];
    th: TDictionary['tables']['th'];
    errors: TDictionary['errors'];
  };
}> = ({ className , tabs, dictionary: { th, errors, formErrors, form, buttons, link } }) => {
  const searchParams = useSearchParams();

  const getCurrentTab = () =>  {
    for (const tab of tabs) {
      if(searchParams.get('tab') === tab.value) return tab.value;
    }
    return tabs[0].value;
  };

  const currentTab = getCurrentTab();

  return (
    <div className={cn(className)}>
      <LinkTabs
        activeTab={currentTab}
        tabs={tabs}
        currentPagePath={ROUTES.PROFILE}
      />
      <div className="mt-[24px]">
        { currentTab === tabs[0].value && <PromotionsTable dictionary={{ th, errors }}/> }
        { currentTab === tabs[1].value && <MyCoinsTable dictionary={{ th, errors, formErrors, form, buttons, link }} /> }
        { currentTab === tabs[2].value && <AlertsList/> }
      </div>
    </div>
  );
};