'use client';
//hooks
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
//lib
import { cn } from '@/shared/lib/cn';
//types
import type {
  KeenSliderInstance,
  KeenSliderOptions
} from 'keen-slider';
//classNames
import { titleCls } from '@/shared/classNames';
//helpers
import { getSlidesData } from '@/app/[lang]/_ui/WelcomeSection/helper';

type TSlide = {
  id: string;
  img: string;
  title: string;
}
//TODO: fix bag with pagination(flickering after manual drag)
const autoPlayInterval = 3000;

export const PartnerSlider: React.FC = () => {
  const data: TSlide[] = getSlidesData();
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoplay = (slider: KeenSliderInstance) => {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    const clear = () => clearTimeout(timeout);
    const next = () => {
      clear();
      if (mouseOver) return;
      timeout = setTimeout(() => slider.next(), autoPlayInterval);
    };

    slider.on('created', () => {
      slider.container.addEventListener('mouseover', () => {
        mouseOver = true;
        clear();
      });
      slider.container.addEventListener('mouseout', () => {
        mouseOver = false;
        next();
      });
      next();
    });
    slider.on('dragStarted', clear);
    slider.on('animationEnded', next);
    slider.on('updated', next);
  };

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement, KeenSliderOptions>(
    {
      loop: true,
      drag: true,
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 10,
      },
      vertical: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [autoplay]
  );

  return (
    <div className="relative">
      <div
        className="keen-slider md:max-w-[790px] h-[280px] md:h-[338px] rounded-[24px]"
        ref={sliderRef}
      >
        {data.map((item) => (
          <div
            className="keen-slider__slide rounded-[24px] p-[14px] sm:p-[32px] size-full bg-cover bg-center"
            style={{ backgroundImage: `url(${item.img})` }}
            key={item.id}
          >
            <p className={cn(titleCls, 'max-w-[428px] text-black')}>
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className={cn(
        'sm:absolute z-10 -left-[14px] md:-left-[20px] top-1/2 sm:-translate-1/2',
        'flex justify-center sm:grid gap-[8px]',
        'mt-[14px] sm:mt-0'
      )}>
        {
          data.map((_, i) => (
            <button
              className={cn(
                'size-[8px] rounded-full cursor-pointer',
                currentSlide === i ? 'bg-blue' : 'bg-[#D9D9D9]',
              )}
              key={i}
              onClick={() => {
                slider.current?.moveToIdx(i);
              }}
            >
            </button>
          ))
        }
      </div>
    </div>
  );
};
