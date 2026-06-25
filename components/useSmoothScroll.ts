import { useEffect, useRef } from 'react';

export function useSmoothScroll<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let targetScrollTop = container.scrollTop;
    let currentScrollTop = container.scrollTop;
    let isMoving = false;
    let animationFrameId: number | null = null;

    const handleWheel = (e: WheelEvent) => {
      // Don't intercept if container cannot be scrolled
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll <= 0) return;

      // Check if scroll is vertical. If deltaX is large, it's a horizontal scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Trackpad detection: trackpads send very frequent events with fractional deltas.
      // Traditional mouse wheels usually send integer values (like 100, 120, etc.) or larger distinct ticks.
      // If we detect a trackpad, we let the browser handle it natively to keep native acceleration, physics, and gestures.
      const isTrackpad = e.deltaY % 1 !== 0 || Math.abs(e.deltaY) < 15;
      if (isTrackpad) {
        // Synchronize our state so that if the user switches to a mouse wheel, it starts from the correct position
        targetScrollTop = container.scrollTop;
        currentScrollTop = container.scrollTop;
        return;
      }

      e.preventDefault();

      // Gentle travel scaling factor
      targetScrollTop += e.deltaY * 0.75;
      targetScrollTop = Math.max(0, Math.min(targetScrollTop, maxScroll));

      if (!isMoving) {
        isMoving = true;
        animate();
      }
    };

    const animate = () => {
      if (!container) return;

      const ease = 0.18; // Faster, snappier ease factor to tone down the effect
      currentScrollTop = currentScrollTop + (targetScrollTop - currentScrollTop) * ease;

      const maxScroll = container.scrollHeight - container.clientHeight;
      currentScrollTop = Math.max(0, Math.min(currentScrollTop, maxScroll));

      if (Math.abs(targetScrollTop - currentScrollTop) < 0.25) {
        currentScrollTop = targetScrollTop;
        container.scrollTop = currentScrollTop;
        isMoving = false;
        animationFrameId = null;
        return;
      }

      container.scrollTop = currentScrollTop;
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      // If the scroll is triggered by manual scroll bar drag, keyboard scroll, or browser restoration,
      // synchronize targetScrollTop and currentScrollTop
      if (!isMoving) {
        targetScrollTop = container.scrollTop;
        currentScrollTop = container.scrollTop;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return containerRef;
}
