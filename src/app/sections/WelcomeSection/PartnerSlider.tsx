'use client';
//hooks
import { useState } from 'react';
//components
import { useKeenSlider } from 'keen-slider/react';
//utils
import { cn } from "@/utils/cn";
//types
import type {
  KeenSliderInstance,
  KeenSliderOptions
} from 'keen-slider';
//styles
import 'keen-slider/keen-slider.min.css';
//helpers
import { getSlidesData } from "@/app/sections/WelcomeSection/helper";

type TSlide = {
  id: string;
  img: string;
  title: string;
}

const autoPlayInterval = 3000;

export const PartnerSlider: React.FC = () => {
  const slides: TSlide[] = getSlidesData();
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
        origin: "center",
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
        className="keen-slider max-w-[790px] h-[338px] rounded-[24px]"
        ref={sliderRef}
      >
        {slides.map((slide) => (
          <div
            className="keen-slider__slide rounded-[24px] p-[32px] size-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.img})` }}
            key={slide.id}
          >
            <p className="max-w-[428px] text-[24px] text-black">
              {slide.title}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute z-10 -left-[20px] top-1/2 -translate-1/2 grid gap-[8px]">
        {
          slides.map((_, i) => (
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
