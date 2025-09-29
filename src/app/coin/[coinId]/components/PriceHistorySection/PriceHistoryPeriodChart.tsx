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
import { ErrorMessage } from '@/ui/messages/ErrorMessage';
import { StatusMessage } from '@/ui/messages/StatusMessage';
//modules
import { getCoinPriseHistory } from '@/modules/coins/CoinsApi';
//types
import { TCoinPriceHistoryPeriod } from '@/modules/coins/CoinsApi';
//utils
import 'chartjs-adapter-date-fns';
//helpers
import {
  getChartData,
  getChartGridColor,
  getChartTooltipOptions
} from '@/app/coin/[coinId]/components/PriceHistorySection/helper';

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
    isError
  } = useQuery({
    queryKey: [ 'priceHistoryPeriod', id, period ],
    queryFn: () => getCoinPriseHistory({ id, period }),
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
                      tooltipFormat: 'HH:mm dd.MM',
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