//hooks
import { useColorScheme } from '@mui/material';
import { useMemo } from 'react';
//ui
import TableCell from '@mui/material/TableCell';
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
import { StatusMessage } from '@/ui/messages/StatusMessage';
import { PercentChange } from '@/ui/PercentChange';
//types
import { TCoinChartPoint } from '@/modules/coins/CoinsApi';
//utils
import { cn } from '@/utils/cn';
import 'chartjs-adapter-date-fns';

type TChartCellProps = {
  percent: number;
  chartPoints: TCoinChartPoint[];
}

ChartJS.register(LineElement, PointElement, LinearScale, TimeScale, Filler, Tooltip, Legend);

export const ChartCell: React.FC<TChartCellProps> = ({
  percent,
  chartPoints
}) =>  {
  const { mode } = useColorScheme();
  const chartData = useMemo(() => {
    const labels = chartPoints?.map(p => new Date(p.timestamp));
    const prices = chartPoints?.map(p => p.price);

    return {
      labels,
      datasets: [
        {
          label: 'Price',
          data: prices,
          fill: true,
          tension: 0.3,
          borderColor:  percent >= 0
            ? '#65C668'
            : '#FD6D51',
          backgroundColor: percent >= 0
            ? 'rgba(101,198,104,0.1)'
            : 'rgba(253, 114, 87, 0.1)',
          pointRadius: 0,
          pointHoverRadius: 0,
          pointHitRadius: 0,
        },
      ],
    };
  }, [chartPoints, percent]);

  return (
    <TableCell>
      <div className="relative h-[65px] w-[100px]">
        <span className={cn(
          'absolute top-[25px] left-0 p-[4px] rounded-[4px]',
          mode === 'dark' ? 'bg-black/70' : 'bg-white/70',
        )}>
          <PercentChange percent={percent}/>
        </span>
        {
          chartData && chartPoints?.length
            ?
            <Line
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    type: 'time',
                    display: false,
                  },
                  y: {
                    display: false,
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  },
                  tooltip: {
                    enabled: false,
                  },
                  decimation: {
                    enabled: false,
                  }
                }
              }}
            />
            :
            <StatusMessage
              className="absolute top-[25px] right-0 p-[4px]"
              message="No data."
            />
        }
      </div>
    </TableCell>
  );
};
