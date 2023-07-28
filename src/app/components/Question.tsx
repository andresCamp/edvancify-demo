'use client'
import React, { useState, useEffect } from 'react';

interface QuestionProps {
  question: {
    questionText: string;
    correctAnswer: string;
    options: string[];
  };
}



const Question: React.FC<QuestionProps> = ({ question = {
    questionText: "",
    correctAnswer: "",
    options: [],
  } }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    // Shuffle the options array using Fisher-Yates shuffle algorithm
    const shuffledArray = question.options.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setShuffledOptions(shuffledArray);
  }, [question.options]);

  const checkAnswer = () => {
    if (selectedAnswer !== null) {
      setShowFeedback(true);
    }
  };

  return (
    <div className='flex flex-col items-start animate-fadeIn'>
      <p className='font-bold'>{question.questionText}</p>
      {shuffledOptions.map((option, index) => (
        <label key={index}>
          <input
            type='radio'
            className='form-radio font-sans'
            checked={selectedAnswer === option}
            onChange={() => {
              setShowFeedback(false);
              setSelectedAnswer(option);
            }}
            value={option}
            name='answer'
          />
          {option}
        </label>
      ))}
      <button className='my-4 bg-blue-500 text-white py-2 px-4 rounded-lg' onClick={checkAnswer}>
        Check Answer
      </button>

      {showFeedback && (
        <p className={selectedAnswer === question.correctAnswer ? 'text-green-500' : 'text-red-500'}>
          {selectedAnswer === question.correctAnswer ? 'Correct answer!' : 'Wrong answer! Try again.'}
        </p>
      )}
    </div>
  );
};

export default Question;






// import React, { useState, useEffect } from 'react';

// interface QuestionProps {
//   question: {
//     questionText: string;
//     correctAnswer: string;
//     options: string[];
//   };
// }

// const Question: React.FC<QuestionProps> = ({ question }) => {
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

//   useEffect(() => {
//     // Shuffle the options array using Fisher-Yates shuffle algorithm
//     const shuffledArray = question.options.slice();
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//     }
//     setShuffledOptions(shuffledArray);
//   }, [question.options]);

//   const checkAnswer = () => {
//     if (selectedAnswer === question.correctAnswer) {
//       alert('Correct answer!');
//     } else {
//       alert('Wrong answer! Try again.');
//     }
//   };

//   return (
//     <div className='flex flex-col items-center'>
//       <p className='font-bold'>{question.questionText}</p>
//       {shuffledOptions.map((option, index) => (
//         <label key={index}>
//           <input
//             type='radio'
//             className='form-radio font-sans'
//             checked={selectedAnswer === option}
//             onChange={() => setSelectedAnswer(option)}
//             value={option}
//             name='answer'
//           />
//           {option}
//         </label>
//       ))}
//       <button className='bg-blue-500 text-white py-2 px-4 rounded-lg' onClick={checkAnswer}>
//         Check Answer
//       </button>
//     </div>
//   );
// };

// export default Question;

// 'use client'
// import React, { useState } from 'react';

// interface QuestionProps {
//   question: {
//     questionText: string;
//     correctAnswer: string;
//     options: string[];
//   };
// }

// const Question: React.FC<QuestionProps> = ({ question }) => {
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

//   const checkAnswer = () => {
//     if (selectedAnswer === question.correctAnswer) {
//       alert('Correct answer!');
//     } else {
//       alert('Wrong answer! Try again.');
//     }
//   };

//   return (
//     <div className='flex flex-col items-center'>
//       <p className='font-bold'>{question.questionText}</p>
//       {question.options.map((option, index) => (
//         <label key={index}>
//         <input
//           type="radio"
//           className="form-radio font-sans"
//           checked={selectedAnswer === option}
//           onChange={() => setSelectedAnswer(option)}
//           value={option}
//           name="answer"
//         />
//         {option}
//       </label>
//       ))}
//       <button className=' bg-blue-500 text-white py-2 px-4 rounded-lg' onClick={checkAnswer}>Check Answer</button>
//     </div>
//   );
// };

// export default Question;
