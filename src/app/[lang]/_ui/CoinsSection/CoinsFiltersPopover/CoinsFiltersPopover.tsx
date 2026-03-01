'use client';
import { useState } from 'react';
import { useCoinsFiltersQuery } from '@/features/coins/api/coinsFilters/useCoinsFiltersQuery';
//ui
import {
  Popover,
  Button,
  Divider,
} from '@mui/material';
import { ErrorMessage } from '@/shared/ui/messages/ErrorMessage';
import { CoinsFilterSection } from '@/app/[lang]/_ui/CoinsSection/CoinsFiltersPopover/CoinsFilterSection';
//icons
import CheckIcon from '@mui/icons-material/Check';
//utils
import { memo } from 'react';
//types
import type { TCoinFilters } from '@/features/coins/api/coinsFilters/getCoinsFilters';

export type TSelectedState = { [key in keyof TCoinFilters]: string[] };

type TCoinFiltersPopoverProps = {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (selected: TSelectedState) => void;
};

const toggle = <T extends string>(arr: T[], value: T) =>
  arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

const initialSelectedState = {
  chain: [],
  category: [],
  type: [],
};

export const CoinsFiltersPopover: React.FC<TCoinFiltersPopoverProps> = memo(({
  anchorEl,
  isOpen,
  onClose,
  onApply,
}) => {
  const [prevSelected, setPrevSelected] = useState<TSelectedState>(initialSelectedState);
  const [nextSelected, setNextSelected] = useState<TSelectedState>(initialSelectedState);

  const {
    data,
    isPending,
    isError
  } = useCoinsFiltersQuery();

  const handleToggle = (key: keyof TSelectedState, id: string) =>
    setNextSelected((selected) =>
      ({ ...selected, [key]: toggle(selected[key], id) })
    );

  const handleApply = () => {
    onApply(nextSelected);
    setPrevSelected(nextSelected);
    onClose();
  };

  const handleClose = () => {
    setNextSelected(prevSelected);
    onClose();
  };

  return (
    <Popover
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      slotProps={{
        paper: {
          sx: {
            boxShadow: 'none',
            backgroundImage: 'none',
            backgroundColor: 'var(--palette-background-default)',
            border: '1px solid var(--palette-primary-main)',

            '[data-dark] &': {
              backgroundColor: 'var(--palette-background-paper)',
              borderColor: 'transparent',
            },
          },
        },
      }}
    >
      <div className="max-w-[420px] p-[16px]">
        {
          isError
            ?
            <ErrorMessage/>
            :
            <>
              <div className="grid gap-[16px]">
                <CoinsFilterSection
                  title="Category"
                  options={data?.data?.category}
                  selectedOptions={nextSelected.category}
                  isPending={isPending}
                  filterKey="category"
                  optionKey="id"
                  onChange={handleToggle}
                />
                <Divider className="dark:opacity-20"/>
                <CoinsFilterSection
                  title="Chain"
                  options={data?.data?.chain}
                  selectedOptions={nextSelected.chain}
                  isPending={isPending}
                  filterKey="chain"
                  optionKey="name"
                  onChange={handleToggle}
                />
                <Divider className="dark:opacity-20"/>
                <CoinsFilterSection
                  title="Type"
                  options={data?.data?.type}
                  selectedOptions={nextSelected.type}
                  isPending={isPending}
                  filterKey="type"
                  optionKey="id"
                  onChange={handleToggle}
                />
              </div>
              <div className="mt-[24px] flex justify-end">
                <Button
                  onClick={handleApply}
                  variant="contained"
                  endIcon={<CheckIcon/>}
                  loading={isPending}
                >
                  Apply
                </Button>
              </div>
            </>
        }
      </div>
    </Popover>
  );
});

CoinsFiltersPopover.displayName = 'StickyHeadCoinsTable';
