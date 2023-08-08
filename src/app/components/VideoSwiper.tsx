'use client'
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Change this to 'next/router', not 'next/navigation'
import { shortsData } from '../library/video/data';

interface VideoSwiperProps {
  children: ReactNode;
  index: number;
}

const VideoSwiper: React.FC<VideoSwiperProps> = ({ children, index }) => {
  const router = useRouter();
  const shorts = shortsData

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowDown':
          // Move up a video
          if (index < shorts.length)
          router.push(`/library/video/short${index + 1}`);
          break;
        case 'ArrowUp':
          // Move down a video
          if (index > 1) {
            router.push(`/library/video/short${index - 1}`);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index, router]);

  return <div>{children}</div>;
};

export default VideoSwiper;
