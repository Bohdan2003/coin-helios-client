//types
import { TCoinPriceHistoryPeriod } from '@/features/coins/api/coinPriceHistory/getCoinPriceHistory';
import { TCoinPriceHistory} from '@/features/coins/api/coinPriceHistory/getCoinPriceHistory';
import {
  TooltipItem,
  ChartData
} from 'chart.js';
//utils
import { NumberFormatter } from '@/shared/lib/NumberFormatter';

type TThemeMode = 'light' | 'dark' | 'system' | undefined;

export const getCoinPriceHistoryPeriods = (): TCoinPriceHistoryPeriod[] => ([
  '24h',
  '7d',
  '1m',
  '3m',
  '1y',
  'max'
]);

type point = { x: number | Date; y: number };

export const getChartData = (
  data: TCoinPriceHistory
): ChartData<'line', point[], number> => {
  const points: point[] = (data?.points ?? []).map(p => ({
    x: new Date(p.timestamp),
    y: p.price,
  }));

  return {
    datasets: [
      {
        label: 'Price',
        data: points,
        fill: true,
        tension: 0.3,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59,130,246,0.1)',
        pointRadius: 0,
      },
    ],
  };
};

export const getChartGridColor = (mode: TThemeMode) =>
  mode === 'light' ? '#9a9ea5' : '#6d6d73';

export const getChartTooltipOptions = (mode: TThemeMode) => {
  const tooltipBgColor = mode === 'light' ? '#FFFFFF' : '#1F1D2B';
  const tooltipTextColor = mode === 'light' ? '#14151A' : '#FFFFFF';

  return ({
    backgroundColor: tooltipBgColor,
    titleColor: tooltipTextColor,
    bodyColor: tooltipTextColor,
    borderColor: '#1E74FE',
    borderWidth: 1,
    displayColors: false,
    callbacks: {
      label: (ctx: TooltipItem<'line'>) =>
        'Price: ' + NumberFormatter.getReadablePrice(ctx.parsed.y as number),
    },
  });
};