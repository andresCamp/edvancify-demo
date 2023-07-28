// 'use client'
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { shortsData } from '../video/data';
// import Question from '../../components/Question';

// interface Short {
//   id: string;
//   youtubeLink: string;
//   questions: Array<{
//     questionText: string;
//     correctAnswer: string;
//     options: string[];
//   }>;
// }

// const QuestionsPage = () => {
//   const router = useRouter();
//   const { shortId } = router.query;

//   const short: Short | undefined = shortsData.find(
//     (short: Short) => short.id === shortId
//   );

//   if (!short) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       {short.questions.map((question, index) => (
//         <Question key={index} question={question} />
//       ))}
//       <Link href={`/${short.id}`}>Go back to Video</Link>
//     </div>
//   );
// };

// export default QuestionsPage;
