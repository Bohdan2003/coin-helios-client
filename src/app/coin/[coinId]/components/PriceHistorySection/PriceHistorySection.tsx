'use client';
//hooks
import { useState } from 'react';
//ui
import { Button } from '@mui/material';
import { PriceHistoryPeriodChart } from '@/app/coin/[coinId]/components/PriceHistorySection/PriceHistoryPeriodChart';
import { AllPriceHistoryChart } from '@/app/coin/[coinId]/components/PriceHistorySection/AllPriceHistoryChart';
//utils
import { cn } from '@/utils/cn';
import { smallTitleCls } from '@/utils/consts/clsVariable';
//helpers
import { getCoinPriceHistoryPeriods } from '@/app/coin/[coinId]/components/PriceHistorySection/helper';

export const PriceHistorySection: React.FC<{ id: string }> = ({ id }) => {
  const periods = getCoinPriceHistoryPeriods();
  const [ selectedPeriod, setSelectedPeriod ] = useState(periods[0]);

  return (
    <section>
      <div className="flex justify-between items-center gap-[40px]">
        <h3 className={cn(smallTitleCls, 'opacity-50')}>Price history</h3>
        <nav className="p-[4px] bg-blue/3 rounded-[8px]">
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
      <div className="mt-[40px]">
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