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
//types
import { TCoinPriceHistoryPeriod } from '@/modules/coins/CoinsApi';
//utils
import 'chartjs-adapter-date-fns';
//helpers
import {
  getCoinPriceHistoryChartData,
  getCoinPriceHistoryChartOptions,
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
  });
  const chartData = useMemo(() => {
    if(data) return getCoinPriceHistoryChartData(data);
  }, [data]);
  const options = getCoinPriceHistoryChartOptions(period, mode);

  if(isPending) return <Skeleton variant="rectangular" height={500} />;
  if(isError) return <ErrorMessage/>;

  return (
    <>
      {
        chartData && data?.points?.length
          ?
          <div className="h-[500px]">
            <Line data={chartData} options={options} />
          </div>
          :
          <div className="text-center text-sm text-muted">No data</div>
      }
    </>
  );
};