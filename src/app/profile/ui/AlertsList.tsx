//helpers
import { getAlertsData } from '@/app/profile/ui/helper';

export const AlertsList = () => {
  const items = getAlertsData();

  return (
    <ul className="grid md:grid-cols-2 gap-x-[20px] gap-y-[24px]">
      {
        items.map(item => (
          <li
            className="p-[18px] sm:p-[24px] rounded-[16px] border-1 border-blue"
            key={item.id}
          >
            <p className="font-medium">{item.title}</p>
            <p className="mt-[12px] opacity-70">{item.text}</p>
            <time className="mt-[24px] block text-[12px] opacity-60">{item.data}</time>
          </li>
        ))
      }
    </ul>
  );
};