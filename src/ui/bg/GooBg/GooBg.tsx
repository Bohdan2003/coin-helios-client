'use client';
//hooks
import {
  useEffect,
  useRef,
} from 'react';
import {
  useMediaQuery,
  useTheme
} from '@mui/material';
//utils
import { cn } from '@/utils/cn';
//styles
import './style.css';

export const GooBg: React.FC<{
  breakpointOfHidden: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string,
  children: React.ReactNode,
}> = ({
  breakpointOfHidden,
  className,
  children
}) => {
  const isHidden = useMediaQuery(useTheme().breakpoints.down(breakpointOfHidden));
  const interBubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    if (!interBubble || isHidden) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    let rafId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    function move(el: HTMLDivElement) {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      el.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      rafId = requestAnimationFrame(() => {
        move(el);
      });
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(() => move(interBubble));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isHidden]);

  return (
    <div className={cn(className, 'relative')}>
      <div className="content relative z-20">
        { children }
      </div>
      <div className="absolute z-10 top-0 right-0 bottom-0 left-0">
        <div className={cn(isHidden && 'hidden', 'gradient-bg')}>
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
            <div className="g3"></div>
            <div
              className="interactive"
              ref={interBubbleRef}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};