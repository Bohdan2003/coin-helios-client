'use client';
//ui
import Image from 'next/image';
//assets
import lightBgUrl from '@/assets/images/home/light-bg.png';
import darkBgUrl from '@/assets/images/home/dark-bg.png';
//utils
import { cn } from '@/utils/cn';

export const WelcomeImage: React.FC<{ className?: string }> = ({ className }) => {

  return (
    <>
      <Image
        className={cn(className, 'block dark:hidden size-full')}
        src={lightBgUrl}
        alt="bg"
        height="894"
        width="1648"
      />
      <Image
        className={cn(className, 'hidden dark:block size-full')}
        src={darkBgUrl}
        alt="bg"
        height="894"
        width="1648"
      />
    </>
  );
};