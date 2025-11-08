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
//modules
import { getCoinPriceHistory } from '@/modules/coins/api/coinPriceHistory/getCoinPriceHistory';
//utils
import 'chartjs-adapter-date-fns';
//helpers
import {
  getChartData,
  getChartGridColor,
  getChartTooltipOptions
} from '@/app/[lang]/coin/[coinId]/_ui/PriceHistorySection/helper';

ChartJS.register(LineElement, PointElement, LinearScale, TimeScale, Filler, Tooltip, Legend);

export const AllPriceHistoryChart: React.FC<{ id: string }> = ({
  id,
}) => {
  const { mode } = useColorScheme();
  const {
    data,
    isPending,
    isError
  } = useQuery({
    queryKey: [ 'allPriceHistory', id ],
    queryFn: () => getCoinPriceHistory({ id, period: 'max' }),
    placeholderData: previous => previous,
    // refetchInterval: 10 * 1000,
    // refetchIntervalInBackground: true,
    // refetchOnWindowFocus: true
  });

  const gridColor = getChartGridColor(mode);
  const tooltipOptions = getChartTooltipOptions(mode);

  const chartData = useMemo(() => {
    if(data) return getChartData(data);
  }, [data]);

  if(isPending) return <Skeleton variant="rectangular" height={100} />;
  if(isError) return <ErrorMessage/>;

  return (
    <>
      {
        chartData && data?.points?.length
          ?
          <div className="h-[100px]">
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
                      tooltipFormat: 'dd.MM.yy',
                      unit: 'year',
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
                    position: 'right',
                    grid: {
                      display: false,
                    },
                    border: {
                      color: gridColor,
                    },
                    ticks: {
                      color: gridColor,
                    },
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  },
                  tooltip: tooltipOptions
                }
              }}
            />
          </div>
          :
          <StatusMessage message="No data."/>
      }
    </>
  );
};