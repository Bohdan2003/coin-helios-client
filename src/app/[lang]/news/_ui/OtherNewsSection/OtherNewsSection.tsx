'use client';
//hooks
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
//ui
import Image from 'next/image';
import { LinkWithArrow } from '@/shared/ui/links/LinkWithArrow';
import { IconButton } from '@mui/material';
//icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
//libs
import { cn } from '@/shared/lib/cn';
//types
import type { KeenSliderOptions } from 'keen-slider';
//const
import { ROUTES } from '@/shared/routes/routes';
//classNames
import {
  bigTitleCls,
  titleCls
} from '@/shared/classNames/classNames';
//helpers
import { getNews } from '@/app/[lang]/news/_ui/OtherNewsSection/helper';

export const OtherNewsSection: React.FC<{ className?: string }> = ({
  className
}) => {
  const data = getNews();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLUListElement, KeenSliderOptions>(
    {
      loop: true,
      drag: true,
      slides: {
        perView: 4,
        spacing: 20,
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      breakpoints: {
        '(max-width: 1200px)': {
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
        '(max-width: 768px)': {
          slides: {
            perView: 2,
            spacing: 10,
          },
        },
        '(max-width: 480px)': {
          slides: {
            perView: 1,
            spacing: 10,
          },
        },
      },
    }
  );

  const handlePrevSlide = () => {
    slider.current?.moveToIdx(currentSlide - 1);
  };

  const handleNextSlide = () => {
    slider.current?.moveToIdx(currentSlide + 1);
  };

  return (<section className={cn(className)}>
    <div className="container">
      <h3 className={bigTitleCls}>Other News</h3>
      <div className="mt-[32px] relative pb-[80px]">
        <ul
          className="keen-slider"
          ref={sliderRef}
        >
          {data.map((item) => (
            <li
              className="keen-slider__slide gap-[20px] flex flex-col justify-between"
              key={item.id}
            >
              <div>
                <Image
                  className="block object-cover rounded-[16px] h-[200px] w-full"
                  src={item.img}
                  alt={item.title}
                  height={200}
                  width={385}
                />
                <h4 className={cn(titleCls, 'line-clamp-2 mt-[24px]')}>{item.title}</h4>
                <p className="mt-[8px] opacity-60 line-clamp-3">
                  {item.text}
                </p>
              </div>
              <LinkWithArrow
                href={ROUTES.NEW(item.id)}
              >Read in full</LinkWithArrow>
            </li>
          ))}
        </ul>

        <div className={cn(
          'absolute z-10 bottom-0 right-1/2 translate-x-1/2',
          'flex gap-[8px] items-center',
          'mt-[14px] sm:mt-0'
        )}>
          <IconButton
            className="opacity-60"
            onClick={handlePrevSlide}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          {
            data.map((_, i) => (
              <button
                className={cn(
                  'size-[8px] rounded-full cursor-pointer bg-blue',
                  currentSlide !== i && 'opacity-60',
                )}
                key={i}
                onClick={() => {
                  slider.current?.moveToIdx(i);
                }}
              >
              </button>
            ))
          }
          <IconButton
            className="rotate-180 opacity-60"
            onClick={handleNextSlide}
          >
            <ArrowBackIosNewIcon/>
          </IconButton>
        </div>
      </div>
    </div>
  </section>);
};