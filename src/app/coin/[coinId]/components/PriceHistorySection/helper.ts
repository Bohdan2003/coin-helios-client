//types
import { TCoinPriceHistoryPeriod } from '@/modules/coins/CoinsApi';
import { TCoinPriceHistoryData } from '@/modules/coins/CoinsApi';
//utils
import { NumberFormatter } from '@/utils/NumberFormatter';

type TThemeMode = 'light' | 'dark' | 'system' | undefined;

export const getCoinPriceHistoryPeriods = (): TCoinPriceHistoryPeriod[] => ([
  '24h',
  '7d',
  '1m',
  '3m',
  '1y',
  'max'
]);

export const getChartData = (
  data: TCoinPriceHistoryData
) => {
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
      label: (context: { raw: number }) => {
        return 'Price: ' + NumberFormatter.getReadablePrice(+context.raw);
      },
    }
  });
};