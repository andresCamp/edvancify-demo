'use client'
import { ReactNode, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface VideoSwiperProps {
  children: ReactNode;
  index: number;
}

const VideoSwiper: React.FC<VideoSwiperProps> = ({ children, index }) => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isSwiping = false;

    const handleTouchStart = (event: TouchEvent) => {
      isSwiping = true;
      touchStartRef.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isSwiping) return;

      event.preventDefault();

      const touchEnd = event.touches[0].clientY;
      const diff = touchEnd - touchStartRef.current!;
      const sensitivity = 50; // Adjust this value to control swipe sensitivity

      if (diff > sensitivity) {
        // Swiped down
        if (index > 0) {
          router.push(`/ShortsAndQuestions/${index - 1}`);
        }
      } else if (diff < -sensitivity) {
        // Swiped up
        router.push(`/ShortsAndQuestions/${index + 1}`);
      }
    };

    const handleTouchEnd = () => {
      isSwiping = false;
      touchStartRef.current = null;
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [index, router]);

  return <div ref={containerRef}>{children}</div>;
};

export default VideoSwiper;
