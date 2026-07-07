import { useEffect, useRef } from 'react';

const EDGE_THRESHOLD = 20;
const SCROLL_LOCK_DURATION = 1200;

function isDesktopDevice() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function getCurrentSectionIndex(sections: HTMLElement[]) {
  const viewportTop = window.scrollY + 120;
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  sections.forEach((section, index) => {
    const distance = Math.abs(section.offsetTop - viewportTop);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

export function useEdgeSectionNavigation() {
  const isLockedRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isDesktopDevice()) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (isLockedRef.current) {
        return;
      }

      const { clientY } = event;
      const { innerHeight } = window;
      const isAtTop = clientY <= EDGE_THRESHOLD;
      const isAtBottom = clientY >= innerHeight - EDGE_THRESHOLD;

      if (!isAtTop && !isAtBottom) {
        return;
      }

      const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
      if (sections.length === 0) {
        return;
      }

      const currentIndex = getCurrentSectionIndex(sections);
      const targetIndex = isAtBottom ? currentIndex + 1 : currentIndex - 1;

      if (targetIndex < 0 || targetIndex >= sections.length) {
        return;
      }

      isLockedRef.current = true;
      sections[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });

      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      timerRef.current = window.setTimeout(() => {
        isLockedRef.current = false;
      }, SCROLL_LOCK_DURATION);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);
}
