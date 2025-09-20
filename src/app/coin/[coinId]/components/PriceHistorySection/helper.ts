//types
import { ChartOptions } from 'chart.js';
import { TCoinPriceHistoryPeriod } from '@/modules/coins/CoinsApi';
import { TCoinPriceHistoryData } from '@/modules/coins/CoinsApi';

export const getCoinPriceHistoryPeriods = (): TCoinPriceHistoryPeriod[] => ([
  '24h',
  '7d',
  '1m',
  '3m',
  '1y',
  'max'
]);

export const getCoinPriceHistoryChartOptions = (period: TCoinPriceHistoryPeriod, mode: "light" | "dark" | "system" | undefined ): ChartOptions<'line'> => {
  const gridColor = mode === 'light' ? '#D1D6DD' : '#474A56';

  return {
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
        ticks: {
          maxTicksLimit: 8,
        },
      },
      y: {
        beginAtZero: false,
        position: 'right',
        grid: {
          color: gridColor,
        },
        ticks: {
          callback: (value) => Number(value).toLocaleString(),
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };
};

export const getCoinPriceHistoryChartData = (data: TCoinPriceHistoryData) => {
  const labels = data?.points?.map(p => new Date(p.timestamp));
  const prices = data?.points?.map(p => p.price);

  return {
    labels,
    datasets: [
      {
        label: 'Price',
        data: prices,
        fill: true,
        tension: 0.3,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        pointRadius: 0,
      },
    ],
  };
};