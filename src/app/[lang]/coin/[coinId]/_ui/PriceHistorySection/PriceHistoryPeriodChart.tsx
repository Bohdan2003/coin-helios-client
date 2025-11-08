//hooks
import {
  useMemo
} from 'react';
import { useColorScheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
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
import { ErrorMessage } from '@/shared/ui/messages/ErrorMessage';
import { StatusMessage } from '@/shared/ui/messages/StatusMessage';
//icons
import CircularProgress from '@mui/material/CircularProgress';
//modules
import { getCoinPriceHistory } from '@/modules/coins/api/coinPriceHistory/getCoinPriceHistory';
//types
import { TCoinPriceHistoryPeriod } from '@/modules/coins/api/coinPriceHistory/getCoinPriceHistory';
import { cn } from '@/shared/lib/cn';
//utils
import 'chartjs-adapter-date-fns';
//helpers
import {
  getChartData,
  getChartGridColor,
  getChartTooltipOptions
} from '@/app/[lang]/coin/[coinId]/_ui/PriceHistorySection/helper';

type TPriceHistoryPeriodChartProps = {
  id: string;
  period: TCoinPriceHistoryPeriod;
}

ChartJS.register(LineElement, PointElement, LinearScale, TimeScale, Filler, Tooltip, Legend);

export const PriceHistoryPeriodChart: React.FC<TPriceHistoryPeriodChartProps> = ({
  id,
  period
}) => {
  const { mode } = useColorScheme();
  const {
    data,
    isPending,
    isFetching,
    isError
  } = useQuery({
    queryKey: [ 'priceHistoryPeriod', id, period ],
    queryFn: () => getCoinPriceHistory({ id, period }),
    placeholderData: previous => previous,
    // refetchInterval: 60 * 1000,
    // refetchIntervalInBackground: true,
    // refetchOnWindowFocus: true
  });

  const gridColor = getChartGridColor(mode);
  const tooltipOptions = getChartTooltipOptions(mode);

  const chartData = useMemo(() => {
    if(data) return getChartData(data);
  }, [data]);

  if(isPending) return <Skeleton variant="rectangular" height={500} />;
  if(isError) return <ErrorMessage/>;

  return (
    <>
      {
        chartData && data?.points?.length
          ?
          <div className="h-[500px] relative">
            {
              !isPending &&
              isFetching &&
              <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2">
                <CircularProgress/>
              </div>
            }
            <Line
              className={cn(!isPending && isFetching && 'opacity-50 pointer-events-none')}
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
                      unit: period === '24h' ? 'hour' : 'day',
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
          <StatusMessage message="No data."/>
      }
    </>
  );
};