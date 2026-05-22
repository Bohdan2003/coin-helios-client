'use client';

//hooks
import { useState, useEffect } from 'react';
import { useCoinPriceQuery } from '@/features/coins/api/coin/useCoinPriceQuery';
//ui
import { Divider, TextField } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
//types
import { SxProps, Theme } from '@mui/material/styles';
//utils
import { smallTitleCls } from '@/shared/classNames';

const textFieldSx: SxProps<Theme> = {
  '& .MuiInputBase-input': {
    fontSize: '20px',
  },
};

export const Calculator: React.FC<{
  id: string;
  symbol: string;
  dictionary: {
    title: string;
    description: string;
  };
}> = ({ id, symbol, dictionary: d }) => {
  const { data, isPending } = useCoinPriceQuery(id);
  const rate = data?.current_price ?? 0;

  const [baseAmount, setBaseAmount] = useState<number>(1);
  const [quoteAmount, setQuoteAmount] = useState<number>(0);

  useEffect(() => {
    setQuoteAmount(baseAmount * rate);
  }, [rate]);

  const handleBaseChange = (value: number) => {
    setBaseAmount(value);
    setQuoteAmount(value * rate);
  };

  const handleQuoteChange = (value: number) => {
    setBaseAmount(rate > 0 ? value / rate : 0);
    setQuoteAmount(value);
  };

  return (
    <div className="font-inter font-medium">
      <div className="pt-[16px] pb-[12px] px-[16px]">
        <h3 className={smallTitleCls}>{ d.title }</h3>
        <div className="mt-[16px] grid grid-cols-[1fr_100px] gap-[12px] items-center">
          {isPending
            ? <Skeleton variant="text" height={40} />
            : <TextField
                type="number"
                variant="standard"
                value={baseAmount}
                onChange={(e) => handleBaseChange(+e.target.value)}
                fullWidth
                sx={textFieldSx}
              />
          }
          <span className="opacity-70 text-[20px]">{ symbol }</span>
        </div>
      </div>
      <Divider/>
      <div className="py-[12px] px-[16px]">
        <div className="grid grid-cols-[1fr_100px] gap-[12px] items-center">
          {isPending
            ? <Skeleton variant="text" height={40} />
            : <TextField
                type="number"
                variant="standard"
                value={quoteAmount}
                onChange={(e) => handleQuoteChange(+e.target.value)}
                fullWidth
                sx={textFieldSx}
              />
          }
          <span className="opacity-70 text-[20px]">USD</span>
        </div>
        <p className="mt-[12px] text-[14px] opacity-50">
          { d.description } 1 { symbol } = { rate } USD
        </p>
      </div>
    </div>
  );
};
