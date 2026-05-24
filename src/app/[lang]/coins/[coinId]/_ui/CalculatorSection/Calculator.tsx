'use client';

//hooks
import { useState, useEffect, useRef } from 'react';
import Decimal from 'decimal.js';
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
  name: string;
  symbol: string;
  dictionary: {
    title: string;
    description: string;
  };
}> = ({ id, name, symbol, dictionary: d }) => {
  const { data, isPending } = useCoinPriceQuery(id);

  const [rate, setRate] = useState<number>(0);
  const rateInitialized = useRef(false);

  const [baseAmount, setBaseAmount] = useState<number>(1);
  const [quoteAmount, setQuoteAmount] = useState<number>(0);

  useEffect(() => {
    if (!rateInitialized.current && data?.current_price) {
      rateInitialized.current = true;
      const price = data.current_price;
      setRate(price);
      setQuoteAmount(price);
    }
  }, [data?.current_price]);

  const handleBaseChange = (value: number) => {
    setBaseAmount(value);
    setQuoteAmount(new Decimal(value).mul(rate).toDecimalPlaces(2).toNumber());
  };

  const handleQuoteChange = (value: number) => {
    setBaseAmount(rate > 0 ? new Decimal(value).div(rate).toDecimalPlaces(8).toNumber() : 0);
    setQuoteAmount(value);
  };

  return (
    <div className="font-inter font-medium">
      <div className="pt-[16px] pb-[12px] px-[16px]">
        <h3 className={smallTitleCls}>{ d.title }</h3>
        <div className="mt-[16px] grid grid-cols-[1fr_minmax(120px,auto)] gap-[12px] items-center">
          {isPending
            ? <Skeleton height={40} />
            : <TextField
                type="number"
                variant="standard"
                value={baseAmount}
                onChange={(e) => handleBaseChange(+e.target.value)}
                sx={textFieldSx}
              />
          }
          <span className="opacity-70 text-[20px]">{ name }</span>
        </div>
      </div>
      <Divider/>
      <div className="py-[12px] px-[16px]">
        <div className="grid grid-cols-[1fr_minmax(120px,auto)] gap-[12px] items-center">
          {isPending
            ? <Skeleton height={40} />
            : <TextField
                type="number"
                variant="standard"
                value={quoteAmount}
                onChange={(e) => handleQuoteChange(+e.target.value)}
                sx={textFieldSx}
              />
          }
          <span className="opacity-70 text-[20px]">USD</span>
        </div>
        <div className="mt-[12px]">
          {isPending
            ? <Skeleton height={28} />
            : 
            <p className="text-[14px] opacity-50">
              { d.description } 1 { symbol } = { rate } USD
            </p>
          }
        </div>
      </div>
    </div>
  );
};
