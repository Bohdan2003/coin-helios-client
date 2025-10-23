'use client';
//hooks
import { useState } from 'react';
//ui
import {
  Divider,
  TextField,
} from '@mui/material';
//types
import { SxProps, Theme } from '@mui/material/styles';
//utils
import { cn } from '@/shared/lib/cn';
import {
  sectionBorderCls,
  smallTitleCls
} from '@/shared/lib/classNames';

const textFieldSx: SxProps<Theme> = {
  '& .MuiInputBase-input': {
    fontSize: '20px',
  },
};

export const CalculatorSection: React.FC = () => {
  const rate = 85000;
  const baseAsset = 'Bitcoin';
  const quoteAsset = 'USD';
  const [baseAssetAmount, setBaseAssetAmount] = useState<number>(1);
  const [quoteAssetAmount, setQuoteAssetAmount] = useState<number>(rate);

  const handleBaseChange = (value: number) => {
    setBaseAssetAmount(value);
    setQuoteAssetAmount(value * rate);
  };

  const handleQuoteChange = (value: number) => {
    setBaseAssetAmount(value / rate);
    setQuoteAssetAmount(value);
  };

  return (
    <section className={cn(sectionBorderCls, 'rounded-[16px] font-inter font-medium')}>
      <div className="pt-[16px] pb-[12px] px-[16px]">
        <h3 className={smallTitleCls}>Calculator</h3>
        <div className="mt-[16px] grid grid-cols-[1fr_100px] gap-[12px] items-center">
          <TextField
            type="number"
            variant="standard"
            value={baseAssetAmount}
            onChange={(e) => handleBaseChange(+e.target.value)}
            fullWidth
            sx={textFieldSx}
          />
          <span className="opacity-70 text-[20px]">{ baseAsset }</span>
        </div>
      </div>
      <Divider/>
      <div className="py-[12px] px-[16px]">
        <div className="grid grid-cols-[1fr_100px] gap-[12px] items-center">
          <TextField
            type="number"
            variant="standard"
            value={quoteAssetAmount}
            onChange={(e) => handleQuoteChange(+e.target.value)}
            fullWidth
            sx={textFieldSx}
          />
          <span className="opacity-70 text-[20px]">{ quoteAsset }</span>
        </div>
        <p className="mt-[12px] text-[14px] opacity-50">
          Exchange rate 1 { baseAsset } = { rate } { quoteAsset }
        </p>
      </div>
    </section>
  );
}
