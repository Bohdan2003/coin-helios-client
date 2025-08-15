'use client';
//hooks
import { useSearchParams } from 'next/navigation';
//ui
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { LinkTabs } from '@/ui/tabs/LinkTabs';
import { AlertsList } from '@/app/profile/ui/AlertsList';
import { PromotionsTable } from '@/app/profile/ui/PromotionsTable';
//icons
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddIcon from '@mui/icons-material/Add';
//utils
import { titleCls } from '@/utils/consts/clsVariable';
import { ROUTES } from '@/utils/router';
//helpers
import { getProfileTabs } from '@/app/profile/helper';
import { MyCoinsTable } from '@/app/profile/ui/MyCoinsTable';

export default function Profile() {
  const searchParams = useSearchParams();
  const tabs = getProfileTabs();

  const getCurrentTab = () =>  {
    for (const tab of tabs) {
      if(searchParams.get('tab') === tab.value) return tab.value;
    }
    return tabs[0].value;
  };

  const currentTab = getCurrentTab();

  return (
    <section className="mt-[60px]">
      <h2 className="hidden">Profile</h2>
      <div className="px-[20px] mx-auto max-w-[1200px]">
        <div className="flex justify-between items-center gap-[40px]">
          <div className="flex items-center gap-[16px]">
            <span className={titleCls}>Hi Yaroslav</span>
            <IconButton
              onClick={() => { console.log('exit'); }}
            >
              <ExitToAppIcon color="primary"/>
            </IconButton>
          </div>

          <Button
            variant="outlined"
            startIcon={<AddIcon/>}
          >Add coin</Button>
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