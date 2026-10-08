import React, {
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
  paused?: boolean;
}

interface CardTransform {
  translateY: number;
  scale: number;
  rotation: number;
  blur: number;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 72,
  itemScale = 0.025,
  itemStackDistance = 28,
  stackPosition = '18%',
  scaleEndPosition = '8%',
  baseScale = 0.9,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
  paused = false,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, CardTransform>());
  const stackCompletedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string, containerHeight: number) => {
    return value.includes('%')
      ? (parseFloat(value) / 100) * containerHeight
      : parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => ({
    scrollTop: useWindowScroll ? window.scrollY : scrollerRef.current?.scrollTop ?? 0,
    containerHeight: useWindowScroll
      ? window.innerHeight
      : scrollerRef.current?.clientHeight ?? window.innerHeight,
  }), [useWindowScroll]);

  const getElementOffset = useCallback((element: HTMLElement) => {
    let top = 0;
    let current: HTMLElement | null = element;

    while (current) {
      top += current.offsetTop;
      current = current.offsetParent as HTMLElement | null;
    }

    return top;
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElement = scrollerRef.current?.querySelector<HTMLElement>('.scroll-stack-end');
    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    cardsRef.current.forEach((card, index) => {
      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * index;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinEnd = endElementTop - containerHeight / 2;
      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + index * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount * index * scaleProgress;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        cardsRef.current.forEach((otherCard, otherIndex) => {
          const otherStart = getElementOffset(otherCard) - stackPositionPx - itemStackDistance * otherIndex;
          if (scrollTop >= otherStart) topCardIndex = otherIndex;
        });
        if (index < topCardIndex) blur = (topCardIndex - index) * blurAmount;
      }

      const pinStart = triggerStart;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      const translateY = isPinned
        ? scrollTop - cardTop + stackPositionPx + itemStackDistance * index
        : scrollTop > pinEnd
          ? pinEnd - cardTop + stackPositionPx + itemStackDistance * index
          : 0;

      const nextTransform: CardTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };
      const previous = lastTransformsRef.current.get(index);
      const hasChanged = !previous
        || Math.abs(previous.translateY - nextTransform.translateY) > 0.1
        || Math.abs(previous.scale - nextTransform.scale) > 0.001
        || Math.abs(previous.rotation - nextTransform.rotation) > 0.1
        || Math.abs(previous.blur - nextTransform.blur) > 0.1;

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${nextTransform.translateY}px, 0) scale(${nextTransform.scale}) rotate(${nextTransform.rotation}deg)`;
        card.style.filter = nextTransform.blur > 0 ? `blur(${nextTransform.blur}px)` : '';
        lastTransformsRef.current.set(index, nextTransform);
      }

      if (index === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView !== stackCompletedRef.current) {
          stackCompletedRef.current = isInView;
          if (isInView) onStackComplete?.();
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    baseScale,
    blurAmount,
    calculateProgress,
    getElementOffset,
    getScrollData,
    itemScale,
    itemStackDistance,
    onStackComplete,
    parsePercentage,
    rotationAmount,
    scaleEndPosition,
    stackPosition,
  ]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll<HTMLDivElement>('.scroll-stack-card'));
    cardsRef.current = cards;
    cards.forEach((card, index) => {
      if (index < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
    });

    const content = scroller.querySelector<HTMLElement>('.scroll-stack-inner');
    const lenis = useWindowScroll
      ? new Lenis({ duration: 1.2, smoothWheel: true, lerp: 0.1, syncTouch: true, syncTouchLerp: 0.075 })
      : content
        ? new Lenis({ wrapper: scroller, content, duration: 1.2, smoothWheel: true, lerp: 0.1, syncTouch: true, syncTouchLerp: 0.075 })
        : null;

    if (lenis) {
      lenis.on('scroll', updateCardTransforms);
      lenisRef.current = lenis;
      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);
    }

    const handleScroll = () => updateCardTransforms();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      lenis?.destroy();
      lenisRef.current = null;
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      stackCompletedRef.current = false;
      isUpdatingRef.current = false;
    };
  }, [itemDistance, updateCardTransforms, useWindowScroll]);

  useEffect(() => {
    if (paused) lenisRef.current?.stop();
    else lenisRef.current?.start();
  }, [paused]);

  return (
    <div
      className={`scroll-stack-scroller${useWindowScroll ? ' scroll-stack-window' : ''} ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" aria-hidden="true" />
      </div>
    </div>
  );
};

export default ScrollStack;