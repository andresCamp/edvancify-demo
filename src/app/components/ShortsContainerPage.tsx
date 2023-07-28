import { useRouter } from 'next/router';
import { useSwipeable } from 'react-swipeable';
import { shortsData } from '../library/video/data';
import ShortPage from '../library/video/page';

interface Short {
  id: string;
  youtubeLink: string;
  questions: Array<{
    questionText: string;
    correctAnswer: string;
    options: string[];
  }>;
}

const ShortsContainerPage = () => {
  const router = useRouter();
  const { shortId } = router.query;
  const handlers = useSwipeable({
    onSwipedUp: () => {
      const nextId = nextShortId(shortId as string);
      router.push(`/${nextId}`);
    },
    onSwipedDown: () => {
      const previousId = previousShortId(shortId as string);
      router.push(`/${previousId}`);
    },
    
    trackMouse: true,
  });

  const nextShortId = (currentId: string): string => {
    const currentIndex = shortsData.findIndex(short => short.id === currentId);
    if (currentIndex === -1 || currentIndex === shortsData.length - 1) {
      // return the first id if the current one is not found or it's the last one
      return shortsData[0].id;
    } else {
      // return the next id
      return shortsData[currentIndex + 1].id;
    }
  };
  
  const previousShortId = (currentId: string): string => {
    const currentIndex = shortsData.findIndex(short => short.id === currentId);
    if (currentIndex === -1 || currentIndex === 0) {
      // return the last id if the current one is not found or it's the first one
      return shortsData[shortsData.length - 1].id;
    } else {
      // return the previous id
      return shortsData[currentIndex - 1].id;
    }
  };
  
  return (
    <div {...handlers}>
      <ShortPage />
    </div>
  );
};

export default ShortsContainerPage;
