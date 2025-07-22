import { cn } from "@/utils/cn";

export const FormattedPercent: React.FC<{value: number}> = ({ value }) => {
  const isPositive = value > 0;
  const text = `${isPositive ? '+' : ''}${value}%`;

  return (
    <span
      className={cn(isPositive ? 'text-green' : 'text-orange')}
    >{text}</span>
  );
};
