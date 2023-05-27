import React, { useState } from 'react';
// import quiz from '../models/question';
// // import RadioOption from './RadioOption';
// // import { string } from 'joi';
// import './style/quizForm.css';

// const Quiz = () => {
//   const [activeQuestion, setActiveQuestion] = useState(0);
//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number|null>(null);
//   const [selectedAnswer, setSelectedAnswer] = useState<boolean|null>(null);
//   const [showResult, setShowResult] = useState(false);
//   const [result, setResult] = useState({
//     score: 0,
//     reponses: 0,
//     wrongAnswers: 0,
//   });

//   const addLeadingZero = (number: number) => (number > 9 ? number : `0${number}`);

//   const onClickNext = () => {
//     console.log(selectedAnswer);
//     setSelectedAnswerIndex(null)
//     setResult((prev) =>
//       selectedAnswer
//         ? {
//             ...prev,
//             score: prev.score + 5,
//             reponses: prev.reponses + 1,
//           }
//         : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
//     )
//     if (activeQuestion !== questions.length - 1) {
//       setActiveQuestion((prev) => prev + 1)
//     } else {
//       setActiveQuestion(0)
//       setShowResult(true)
//     }
//   }
 
//   const { questions } = quiz;
//   const { question, option, reponse, type } = questions[activeQuestion];

//   const onAnswerSelected = (answer: string, index: number) => {
//     setSelectedAnswerIndex(index);
//     console.log(reponse)
//     if (answer === reponse) {
//       setSelectedAnswer(true);
//       console.log('right');
//     } else {
//       setSelectedAnswer(false);
//       console.log('wrong');
//     }
//   };
//   const onAnswerInput = (answer: string) => {
//     setSelectedAnswerIndex(activeQuestion);
//     console.log(reponse, reponse)
//     if (answer === reponse) {
//       setSelectedAnswer(true);
//       console.log(answer,'right');
//     } else {
//       setSelectedAnswer(false);
//       console.log(answer,'wrong');
//     }
//   };
  

//   let Buton;
//   if(type==='select'){
//     Buton=(
//       <div className="flex-right">
//           <button onClick={onClickNext}  >
//             {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//     )
//   }
//   function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
//     event.preventDefault();
//     onClickNext();
    
    

//   }
// // type text form
// let inputElement = null;

// if (type === 'text') {
//   inputElement = (
//     // <div>
//     <div>
//     <li >
//       <input
//       defaultValue=''
//       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
         
//             onAnswerInput(event.target.value);
        
//         }}
//         type="text"
        
//       />
//     </li>
//     <button type='submit' onClick={handleClick}  >
//            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//          </button>
//     </div>
//     // {/* <div className="flex-right">
//     //    
//     //   </div>
//     // </div> */}
//   )
// }

//   return (
//     <div className='bodys'>
//     <div className="quiz-container">
      
     

//       {!showResult ? (
//         <div>
//           .... {/* quiz question logic */}
//           <div>
//         <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
//         <span className="total-question">/{addLeadingZero(questions.length)}</span>
//       </div>
//       <h2>{question}</h2>
      
//       <ul>
//         {inputElement}
//         {option?.map((answer, index) => (
//           //  type === 'text' ? (
//           //   <li key={index}>
//           //     <input

//           //           // value=''
//           //           onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//           //             if (event && event.target) {
//           //             setInput({ Entry: event.target.value})
//           //         }}}
//           //           type="text"
//           //           onClick={() => onAnswerSelected(Input.Entry, index)}
                    
//           //         />
//           //   </li>
//           // ) : (
//             <li
//               onClick={() => onAnswerSelected(answer, index)}
//               key={answer}
//               className={selectedAnswerIndex === index ? 'selected-answer' : ''}
//             >
//               {answer}
//             </li>
//           )
          
          
//         )}
//         {Buton}
//         {/* <div className="flex-right">
//           <button onClick={onClickNext}  >
//             {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//           </button>
//         </div> */}
//       </ul>
     
//         </div>
//       ) : (
//         <div className="result">
//           <h3>Result</h3>
//           <p>
//             Total Question: <span>{questions.length}</span>
//           </p>
//           <p>
//             Total Score:<span> {result.score}</span>
//           </p>
//           <p>
//             Correct Answers:<span> {result.reponses}</span>
//           </p>
//           <p>
//             Wrong Answers:<span> {result.wrongAnswers}</span>
//           </p>
//         </div>
//       )}
//     </div>
//   </div>
//   );
// };

// export default Quiz;














































// // import React, { useState, useEffect } from 'react';

// // interface QuizQuestion {
// //   question: string;
// //   type: 'text' | 'select';
// //   option?: string[];
// //   reponse: string;
// // }

// // interface Quiz {
// //   topic: string;
// //   level: string;
// //   totalQuestions: number;
// //   perQuestionScore: number;
// //   questions: QuizQuestion[];
// // }

   

// // const QuizF = () => {
// //   const [quiz, setQuiz] = useState(defaultQuiz);
// //   const [numQuestions, setNumQuestions] = useState(0);

// //   // useEffect(() => {
// //   //   if (numQuestions > 0) {
// //   //     fetch(backend-url/questions?num=${numQuestions})
// //   //       .then((response) => response.json())
// //   //       .then((data) => setQuiz(data));
// //   //   }
// //   // }, [numQuestions]);

// //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();
// //     setQuiz(defaultQuiz);
// //   };

// //   const handleNumQuestionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     setNumQuestions(parseInt(event.target.value, 10));
// //   };

// //   const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
// //     const newQuestions = [...quiz.questions];
// //     newQuestions[index].question = event.target.value;
// //     setQuiz({ ...quiz, questions: newQuestions });
// //   };

// //   const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>, index: number) => {
// //     const newQuestions = [...quiz.questions];
// //     newQuestions[index].type = event.target.value as 'text' | 'select';
// //     setQuiz({ ...quiz, questions: newQuestions });
// //   };

// //   const handleoptionChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
// //     const newQuestions = [...quiz.questions];
// //     const option = event.target.value.split(',');
// //     newQuestions[index].option = option.map((choice) => choice.trim());
// //     setQuiz({ ...quiz, questions: newQuestions });
// //   };

// //   const handlereponseChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
// //     const newQuestions = [...quiz.questions];
// //     newQuestions[index].reponse = event.target.value;
// //     setQuiz({ ...quiz, questions: newQuestions });
// //   };

// //   const renderQuestion = (question: QuizQuestion, index: number) => {
// //     return (
// //       <div key={index}>
// //         <label>
// //           Question {index + 1}:
// //           <input type="text" value={question.question} onChange={(event) => handleQuestionChange(event, index)} />
// //         </label>
// //         <br />
// //         <label>
// //           Type:
// //           <select value={question.type} onChange={(event) => handleTypeChange(event, index)}>
// //             <option value="text">Text</option>
// //             <option value="select">Select</option> 
// //           </select>
// //         </label>
// //         {question.type === 'select' && (
// //           <>
// //             <br />
// //             <label>
// //               option (comma-separated):
// //               <input type="text" value={question.option?.join(', ')} onChange={(event) => handleoptionChange(event, index)} />
// //             </label>
// //           </>
// //         )}
// //         <br />
// //         <label>
// //           Correct Answer:
// //           <input type="text" value={question.reponse} onChange={(event) => handlereponseChange(event, index)} />
// //         </label>
// //         <hr />
// //       </div>
// //     );
// //   };
// // }
// // export default QuizF;