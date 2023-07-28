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
  const startXRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (event: TouchEvent | MouseEvent) => {
      if ('touches' in event) {
        startXRef.current = event.touches[0].clientY;
      } else {
        startXRef.current = event.clientY;
      }
    };

    const handleTouchEnd = (event: TouchEvent | MouseEvent) => {
      if (startXRef.current === null) return;

      let endX = 0;
      if ('changedTouches' in event) {
        endX = event.changedTouches[0].clientY;
      } else {
        endX = event.clientY;
      }

      const diff = endX - startXRef.current;
      const sensitivity = 100; // Adjust this value to control swipe sensitivity

      if (diff > sensitivity) {
        // Swiped down
        if (index >= 1) {
          router.push(`/library/video/short${index - 1}`);
        }
      } else if (index < 4 && diff < -sensitivity) {
        // Swiped up
        router.push(`/library/video/short${index + 1}`);
      }

      startXRef.current = null;
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('mousedown', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('mouseup', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('mousedown', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('mouseup', handleTouchEnd);
    };
  }, [index, router]);

  return <div ref={containerRef}>{children}</div>;
};

export default VideoSwiper;

// import { ReactNode, useEffect, useRef } from 'react';
// import { useRouter } from 'next/navigation';

// interface VideoSwiperProps {
//   children: ReactNode;
//   index: number;
// }

// const VideoSwiper: React.FC<VideoSwiperProps> = ({ children, index }) => {
//   const router = useRouter();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const startXRef = useRef(0);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleTouchStart = (event: TouchEvent | MouseEvent) => {
//       if ('touches' in event) {
//         startXRef.current = event.touches[0].clientY;
//       } else {
//         startXRef.current = event.clientY;
//       }
//     };

//     const handleTouchEnd = (event: TouchEvent | MouseEvent) => {
//       let endX = 0;
//       if ('changedTouches' in event) {
//         endX = event.changedTouches[0].clientY;
//       } else {
//         endX = event.clientY;
//       }

//       const diff = endX - startXRef.current;
//       const sensitivity = 50; // Adjust this value to control swipe sensitivity

//       if (diff > sensitivity) {
//         // Swiped down
//         if (index > 1) {
//           router.push(`/ShortsAndQuestions/${index - 1}`);
//         }
//       } else if (diff < -sensitivity) {
//         // Swiped up
//         router.push(`/ShortsAndQuestions/${index + 1}`);
//       }
//     };

//     container.addEventListener('touchstart', handleTouchStart);
//     container.addEventListener('mousedown', handleTouchStart);
//     container.addEventListener('touchend', handleTouchEnd);
//     container.addEventListener('mouseup', handleTouchEnd);

//     return () => {
//       container.removeEventListener('touchstart', handleTouchStart);
//       container.removeEventListener('mousedown', handleTouchStart);
//       container.removeEventListener('touchend', handleTouchEnd);
//       container.removeEventListener('mouseup', handleTouchEnd);
//     };
//   }, [index, router]);

//   return <div ref={containerRef}>{children}</div>;
// };

// export default VideoSwiper;


// 'use client'

// import { ReactNode } from 'react';
// import { useRouter } from 'next/navigation';
// import { useSwipeable } from 'react-swipeable';

// interface VideoSwiperProps {
//   children: ReactNode;
//   index: number;
// }

// const VideoSwiper: React.FC<VideoSwiperProps> = ({ children, index }) => {
//   const router = useRouter();

//   const handlers = useSwipeable({
//     onSwipedUp: () => {
//       router.push(`/library/video/short${index + 1}`);
//     },
//     onSwipedDown: () => {
//       if (index > 0) {
//         router.push(`/library/video/short${index - 1}`);
//       }
//     },
//     trackMouse: true
//   });

//   return <div {...handlers}>{children}</div>;
// };

// export default VideoSwiper;


// import { ReactNode } from 'react';
// import { useRouter } from 'next/router';
// import { useSwipeable } from 'react-swipeable';

// interface VideoSwiperProps {
//   children: ReactNode;
// }

// const VideoSwiper: React.FC<VideoSwiperProps> = ({ children }) => {
//   const router = useRouter();
  
//   const id = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;

//   const handlers = useSwipeable({
//     onSwipedUp: () => {
//       if (id) router.push(`/ShortsAndQuestions/${parseInt(id) + 1}`);
//     },
//     onSwipedDown: () => {
//       if (id) router.push(`/ShortsAndQuestions/${parseInt(id) - 1}`);
//     },
//     trackMouse: true
//   });

//   return <div {...handlers}>{children}</div>;
// };

// export default VideoSwiper;
