'use client';
//hooks
import { useEffect } from 'react';
//utils
import { cn } from '@/utils/cn';
//styles
import './style.css';

export const GooBg: React.FC<{
  className?: string,
  bgClassName?: string,
  children: React.ReactNode,
}> = ({
  className,
  bgClassName,
  children
}) => {

  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }, []);

  return (
    <div className={cn(className, 'relative')}>
      <div className="content relative z-20">
        { children }
      </div>
      <div className="absolute z-10 top-0 right-0 bottom-0 left-0">
        <div className={cn(bgClassName, 'gradient-bg')}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo"/>
                <feBlend in="SourceGraphic" in2="goo"/>
              </filter>
            </defs>
          </svg>
          <div className="gradients">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="interactive"></div>
          </div>
          <div className="gradients">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="interactive"></div>
          </div>
        </div>
      </div>
    </div>
  );
};