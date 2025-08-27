'use client';
//hooks
import {
  useRouter,
  useSearchParams
} from 'next/navigation';
//ui
import Button from '@mui/material/Button';
import { LinkTabs } from '@/ui/tabs/LinkTabs';
import { AlertsList } from '@/app/profile/components/AlertsList';
import { PromotionsTable } from '@/app/profile/components/tables/PromotionsTable';
import { ExitButton } from '@/ui/buttons/ExtiButton';
import { AddCoinFormDialog } from '@/app/profile/components/dialogs/AddCoinFormDialog';
//icons
import AddIcon from '@mui/icons-material/Add';
//utils
import { titleCls } from '@/utils/consts/clsVariable';
import { ROUTES } from '@/utils/router';
//helpers
import { getProfileTabs } from '@/app/profile/helper';
import { MyCoinsTable } from '@/app/profile/components/tables/MyCoinsTable';

export default function Profile() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabs = getProfileTabs();

  const getCurrentTab = () =>  {
    for (const tab of tabs) {
      if(searchParams.get('tab') === tab.value) return tab.value;
    }
    return tabs[0].value;
  };

  const handleAddCoinToggle = () => {
    const params = new URLSearchParams(searchParams.toString());

    if(params.get('add-coin') === 'visible') params.set('add-coin', 'hidden');
    else params.set('add-coin', 'visible');

    router.push(`?${params.toString()}`);
  };

  const currentTab = getCurrentTab();

  return (
    <section className="mt-[60px]">
      <h2 className="hidden">Profile</h2>
      <div className="px-[20px] mx-auto max-w-[1200px]">
        <div className="flex flex-wrap justify-between sm:items-center gap-[20px] sm:gap-[40px]">
          <div className="flex items-center gap-[4px] sm:gap-[16px]">
            <span className={titleCls}>Hi Yaroslav</span>
            <ExitButton/>
          </div>
          <Button
            variant="outlined"
            startIcon={<AddIcon/>}
            onClick={handleAddCoinToggle}
          >Add coin</Button>
          <AddCoinFormDialog
            isOpen={searchParams.get('add-coin') === 'visible'}
            onClose={handleAddCoinToggle}
          />
        </div>
        <div className="mt-[32px]">
          <LinkTabs
            activeTab={currentTab}
            tabs={tabs}
            currentPagePath={ROUTES.PROFILE}
          />
          <div className="mt-[24px]">
            { currentTab === tabs[0].value && <PromotionsTable/> }
            { currentTab === tabs[1].value && <MyCoinsTable/> }
            { currentTab === tabs[2].value && <AlertsList/> }
          </div>
        </div>
      </div>
    </section>
  );
}