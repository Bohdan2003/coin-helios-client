'use client';
//ui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//types
import { TCoinsCategory } from '@/features/coins/api/types';

export type TTab = {
  value: string;
  label: string;
  icon: React.ReactElement;
}

type TTabsProps = {
  activeTab: string;
  tabs: TTab[];
  onTabChange: (tab: TCoinsCategory) => void;
}

export const BaseTabs: React.FC<TTabsProps> = ({
  activeTab,
  tabs,
  onTabChange,
}) => {
  return (
    <Tabs
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={activeTab}
      onChange={(_: React.SyntheticEvent, value: TCoinsCategory) => onTabChange(value)}
      slotProps={{
        indicator: { sx: { borderRadius: 4 } },
      }}
      sx={{
        minHeight: 0,
        '.MuiTabs-flexContainer': {
          gap: {
            xs: '8px',
            lg: '34px'
          },
        },
        '.MuiTab-root': {
          textTransform: 'none',
          minHeight: 0,
          px: '8px',
          paddingBottom: '8px',
          '&.Mui-selected': {
            color: 'text.primary',
          },
        },
        '& .MuiSvgIcon-root, & .MuiTab-iconWrapper': {
          color: 'primary.main',
        },
        '& .MuiTabs-scrollButtons': {
          display: 'flex',
        },
        '& .MuiTabs-scrollButtons.Mui-disabled': {
          opacity: 0.38,
          display: 'flex',
        },
      }}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          icon={tab.icon}
          iconPosition="start"
          value={tab.value}
          label={tab.label}
          disableRipple
        />
      ))}
    </Tabs>
  );
};
