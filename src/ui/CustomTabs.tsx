'use client';
//ui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

type TTab = {
  key: string;
  label: string;
  icon: React.ReactElement;
}

type TTabsProps = {
  tabs: TTab[];
  tab: string;
  onTabChange: (tab: string) => void;
}

export const CustomTabs: React.FC<TTabsProps> = ({
  tabs,
  tab,
  onTabChange,
}) => {
  return (
    <Tabs
      value={tab}
      onChange={(_: React.SyntheticEvent, value: string) => onTabChange(value)}
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
        }
      }}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.key}
          icon={tab.icon}
          iconPosition="start"
          value={tab.key}
          label={tab.label}
          disableRipple
        />
      ))}
    </Tabs>
  );
};
