'use client';

// ui
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

type TTab = {
  value: string;
  label: string;
  icon: React.ReactElement;
};

export const LinkTabs: React.FC<{
  activeTab: string;
  tabs: TTab[];
  currentPagePath: string;
}> = ({ activeTab, tabs, currentPagePath }) => {
  return (
    <Tabs
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={activeTab}
      slotProps={{
        indicator: { sx: { borderRadius: 4 } },
      }}
      sx={{
        minHeight: 0,
        '.MuiTabs-flexContainer': {
          gap: { xs: '8px', lg: '34px' },
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
      {tabs.map(tab => (
        <Tab
          key={tab.value}
          component={LocalizedLink}
          href={`${currentPagePath}?tab=${tab.value}`}
          icon={tab.icon}
          value={tab.value}
          iconPosition="start"
          label={tab.label}
          disableRipple
        />
      ))}
    </Tabs>
  );
};
