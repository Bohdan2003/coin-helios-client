'use client';
//hooks
import { useState } from 'react';
//ui
import { Button } from '@mui/material';
import { PriceHistoryPeriodChart } from '@/app/[lang]/coin/[coinId]/_ui/PriceHistorySection/PriceHistoryPeriodChart';
import { AllPriceHistoryChart } from '@/app/[lang]/coin/[coinId]/_ui/PriceHistorySection/AllPriceHistoryChart';
//utils
import { cn } from '@/shared/lib/cn';
import { smallTitleCls } from '@/shared/classNames/classNames';
//helpers
import { getCoinPriceHistoryPeriods } from '@/app/[lang]/coin/[coinId]/_ui/PriceHistorySection/helper';

export const PriceHistorySection: React.FC<{ id: string, className?: string }> = ({
  id,
  className
}) => {
  const periods = getCoinPriceHistoryPeriods();
  const [ selectedPeriod, setSelectedPeriod ] = useState(periods[0]);

  return (
    <section className={cn(className)}>
      <div className="flex justify-center sm:justify-between items-center gap-[40px]">
        <h3 className={cn(smallTitleCls, 'opacity-50 hidden sm:block')}>Price history</h3>
        <nav>
          <ul className="flex gap-[2px]">
            {
              periods.map((period, index) => (
                <li key={index}>
                  <Button
                    color="secondary"
                    variant={selectedPeriod === period ? 'contained' : 'text'}
                    size="small"
                    onClick={() => { setSelectedPeriod(period); }}
                  >
                    { period }
                  </Button>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <div className="mt-[20px] md:mt-[40px]">
        <PriceHistoryPeriodChart
          period={selectedPeriod}
          id={id}
        />
      </div>
      <div className="mt-[40px]">
        <AllPriceHistoryChart id={id}/>
      </div>
    </section>
  );
};