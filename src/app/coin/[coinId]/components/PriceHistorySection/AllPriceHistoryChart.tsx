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
import { ErrorMessage } from '@/ui/ErrorMessage';
//modules
import { getCoinPriseHistory } from '@/modules/coins/CoinsApi';
//utils
import 'chartjs-adapter-date-fns';
//helpers
import { getCoinPriceHistoryChartData } from '@/app/coin/[coinId]/components/PriceHistorySection/helper';

ChartJS.register(LineElement, PointElement, LinearScale, TimeScale, Filler, Tooltip, Legend);

export const AllPriceHistoryChart: React.FC<{ id: string }> = ({
  id,
}) => {
  const { mode } = useColorScheme();
  const gridColor = mode === 'light' ? '#D1D6DD' : '#474A56';
  const {
    data,
    isPending,
    isError
  } = useQuery({
    queryKey: [ 'allPriceHistory', id ],
    queryFn: () => getCoinPriseHistory({ id, period: 'max' }),
    placeholderData: previous => previous,
  });
  const chartData = useMemo(() => {
    if(data) return getCoinPriceHistoryChartData(data);
  }, [data]);

  if(isPending) return <Skeleton variant="rectangular" height={200} />;
  if(isError) return <ErrorMessage/>;

  return (
    <>
      {
        chartData && data?.points?.length
          ?
          <div className="h-[200px]">
            <Line data={chartData} options={{
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
                    unit: 'year',
                  },
                  grid: {
                    color: gridColor,
                  },
                  ticks: {
                    maxTicksLimit: 8,
                  },
                },
              },
              plugins: {
                legend: { display: false },
              },
            }} />
          </div>
          :
          <div className="h-[200px] text-center text-sm text-muted">No data</div>
      }
    </>
  );
};