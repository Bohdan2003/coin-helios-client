'use client';
//hooks
import {
  useMemo, useState
} from 'react';
import { useColorScheme } from '@mui/material';
import { usePriceHistoryPeriodQuery } from '@/features/coins/api/coinPriceHistory/useCoinPriceHistoryQuery';
//ui
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Skeleton from '@mui/material/Skeleton';
import { StatusMessage } from '@/shared/ui/messages/StatusMessage';
import { Button } from '@mui/material';
//icons
import CircularProgress from '@mui/material/CircularProgress';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import { smallTitleCls } from '@/shared/classNames';
import { cn } from '@/shared/lib/cn';
import 'chartjs-adapter-date-fns';
//helpers
import {
  getChartData,
  getChartGridColor,
  getChartTooltipOptions,
  getCoinPriceHistoryPeriods
} from '@/app/[lang]/coins/[coinId]/_ui/PriceHistorySection/helper';

ChartJS.register(LineElement, PointElement, LinearScale, TimeScale, Filler, Tooltip, Legend);

export const PeriodPriceHistoryChart: React.FC<{
  id: string;
  dictionary: {
    priceHistory: TDictionary['coin']['priceHistory'];
    errors: TDictionary['errors']
  }
}> = ({ id, dictionary: d }) => {
  const periods = getCoinPriceHistoryPeriods();
  const [ selectedPeriod, setSelectedPeriod ] = useState(periods[0]);
  const { mode } = useColorScheme();
  const {
    data,
    isPending,
    isFetching,
    isError
  } = usePriceHistoryPeriodQuery({ id, period: selectedPeriod });
  const isNotFirstFetching = !isPending && isFetching;

  const gridColor = getChartGridColor(mode);
  const tooltipOptions = getChartTooltipOptions(mode, d.errors.noData);

  const chartData = useMemo(() => {
    if(data) return getChartData(data);
  }, [data]);

  if(isPending) return <Skeleton variant="rectangular" height={500} />;
  if(isError) return <StatusMessage message={ d.errors.error } />;

  return (
    <div>
      <div className="flex justify-center sm:justify-between items-center gap-[40px]">
        <h3 className={cn(smallTitleCls, 'opacity-50 hidden sm:block')}>{ d.priceHistory.title }</h3>
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
                    { d.priceHistory.periods[period] }
                  </Button>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <div className="mt-[20px] md:mt-[40px]">
        <div className="relative">
          {
            isNotFirstFetching &&
            <div className="absolute z-20 left-1/2 -translate-1/2 top-1/2">
              <CircularProgress/>
            </div>
          }
          <div className={cn(isNotFirstFetching && 'opacity-50 pointer-events-none')}>
            {
              chartData && data?.points?.length
                ?
                <div className="h-[500px]">
                  <Line
                    data={chartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      interaction: {
                        mode: 'index',
                        intersect: false,
                      },
                      scales: {
                        x: {
                          type: 'time',
                          time: {
                            tooltipFormat: 'HH:mm dd.MM.yy',
                            unit: selectedPeriod === '24h' ? 'hour' : 'day',
                          },
                          grid: {
                            color: gridColor,
                          },
                          border: {
                            color: gridColor,
                          },
                          ticks: {
                            color: gridColor,
                            maxTicksLimit: 8,
                          },
                        },
                        y: {
                          beginAtZero: false,
                          position: 'right',
                          grid: {
                            color: gridColor,
                          },
                          border: {
                            color: gridColor,
                          },
                          ticks: {
                            color: gridColor,
                            callback: (value) => Number(value).toLocaleString(),
                          },
                        },
                      },
                      plugins: {
                        legend: {
                          display: false
                        },
                        tooltip: tooltipOptions
                      },
                    }}
                  />
                </div>
                :
                <StatusMessage message={ d.errors.noData }/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};