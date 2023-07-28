'use client'

import { ReactNode, use } from 'react';
import { useRouter } from 'next/navigation';
// import { useSwipeable } from 'react-swipeable';
import  { useGesture}  from 'react-use-gesture';

// Other imports...

interface VideoSwiperProps {
  children: ReactNode;
  index: number;
}

const VideoSwiper: React.FC<VideoSwiperProps> = ({ children, index }) => {
  const router = useRouter();

  const bind = useGesture({
    onDrag: ({ swipe }) => {
        if (swipe[1] > 0) { // Swipe Up
          router.push(`/library/video/short${index + 1}`);
        } else if (swipe[1] < 0 && index > 0) { // Swipe Down
          router.push(`/library/video/short${index - 1}`);
        }
      }
    });

  return <div {...bind()}>{children}</div>;
};


export default VideoSwiper;

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
