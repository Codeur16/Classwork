import {questionnaire, question} from "./questionModel";


const QUESTION: question[]=[
  {
      id:0,
      Enonce:'',
      Reponse:'',
      Type:'',
      PointQuestion:0
  },

]

const QuestionnaireFile: questionnaire[]=[
  {
    dateEvaluation: '',
    Duree: '',
    chapitre:'Géographie',
  nombreDeQuestions:3,
  questions:QUESTION
}
];

export {QuestionnaireFile, QUESTION};



















// const Listequestions = {
//     chapitre: 'Javascript',
//     totalquestions: 4,
//     pointsquestion: 5,
//     questions: [
      
//       {
//         question: 'Which function is used to serialize an object into a JSON string in Javascript?',
//         option: ['stringify()', 'parse()', 'convert()', 'None of the above'],
//         type: 'select',
//         reponse: 'stringify()',
//         pointsquestion:1,
//       },
//       {
//         question: 'Which of the following keywords is used to define a variable in Javascript?',
//         option: ['var', 'let', 'var and let', 'None of the above'],
//         type: 'select',
//         reponse: 'var and let',
//         pointsquestion:1,
//       },
//       {
//         question:
//           'Which of the following methods can be used to display data in some form using Javascript?',
//         option: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
//         type: 'select',
//         reponse: 'All of the above',
//         pointsquestion:1,
//       },
//       {
//         question: 'How can a datatype be declared to be a constant type?',
//         option: ['const', 'var', 'let', 'constant'],
//         type: 'select',
//         reponse: 'const',
//         pointsquestion:1,
//       },
     
//     ],
//   }


  