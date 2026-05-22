'use client';

import { LinkAsButton } from '@/shared/ui/links/LinkAsButton';
import AddIcon from '@mui/icons-material/Add';
import { useSearchParams } from 'next/navigation';

type TAddCoinButtonProps = {
  label: string;
}

export const AddCoinButton: React.FC<TAddCoinButtonProps> = ({ label }) => {
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  params.set('addCoin', 'visible');

  return (
    <LinkAsButton
      href={`/profile?${params.toString()}`}
      variant="outlined"
      startIcon={<AddIcon />}
    >
      {label}
    </LinkAsButton>
  );
};
