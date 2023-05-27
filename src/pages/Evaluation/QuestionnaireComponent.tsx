import React, { useState } from 'react';
// import { questionnaire, question } from '../../models/questionModel';
// import {Questionnaire, QUESTION} from '../../models/question';




//   const ajouterChoix = (index: number) => {
//     const nouvelleQuestion = [...questions];
//     nouvelleQuestion[index].choix = ['', '', '', ''];
//     nouvelleQuestion[index].Type = 'select';
//     setQuestions(nouvelleQuestion);
//   };

 


//   const enregistrerQuestionnaire = () => {
//     const nouveauQuestionnaire: questionnaire = {
//       chapitre,
//       nombreDeQuestions,
//       questions,
//     };
//     Questionnaire.push(nouveauQuestionnaire);
//   };

//   // const envoyerQuestionnaire = () => {
//   //   fetch('/url-de-la-requête', {
//   //     method: 'POST',
//   //     body: JSON.stringify(Questionnaire),
//   //   })
//   //     .then(response => response.json())
//   //     .then(data => console.log(data))
//   //     .catch(error => console.error(error));
//   // };

//   const renderQuestion = (question: question, index: number) => {
//     return (
//       <div key={index}>
//         <label>
//           Enoncé de la question :
//           <input type="text" name="Enonce" value={question.Enonce.toString()} onChange={(event) => handleChange(event, index)} />
//         </label>
//         <br />
//         <label>
//           Réponse de la question :
//           <input type="text" name="Reponse" value={question.Reponse.toString()} onChange={(event) => handleChange(event, index)} />
//         </label>
//         <br />
//         <label>
//           Type de la question :
//           <select name="Type" value={question.Type.toString()} onChange={(event) => handleChange(event, index)}>
//             <option value="text">Texte</option>
//             <option value="select">Sélection</option>
//           </select>
//         </label>
//         {question.Type === 'select' && (
//           <>
//             <br />
//             {question.choix?.map((choix, choixIndex) => (
//               <div key={choixIndex}>
//                 <label>
//                   Choix {choixIndex + 1} :
//                   <input type="text" value={choix.toString()} onChange={(event) => handleChange(event, index, choixIndex)} />
//                 </label>
//               </div>
//             ))}
//             <button type="button" onClick={() => ajouterChoix(index)}>
//               Ajouter un choix
//             </button>
//           </>
//         )}
//       </div>
//     );
//   };

//   const renderQuestions = () => {
//     return questions.map((question, index) => renderQuestion(question, index));
//   };

//   return (
//     <div>
//       <label>
//         Chapitre du questionnaire :
//         <input type="text" value={chapitre} onChange={(event) => setChapitre(event.target.value)} />
//       </label>
//       <br />
//       <label>
//         Nombre de questions :
//         <input type="number" value={nombreDeQuestions} onChange={(event) => setNombreDeQuestions(parseInt(event.target.value))} />
//       </label>
//       <br />
//       {renderQuestions()}
//       <button type="button" onClick={ajouterQuestion}>
//         Ajouter une question
//       </button>
//       <br />
//       <button type="button" onClick={enregistrerQuestionnaire}>
//         Enregistrer le questionnaire
//       </button>
//       <button type="button" 
//       // onClick={envoyerQuestionnaire}
//       >
//         Envoyer le questionnaire
//       </button>
//     </div>
//   );
// };

// export default CreerQuestionnaire;
































// // import React, { useState } from 'react';
// // import { questionnaire, question } from '../../models/questionModel';
// // import QuestionComponent from './QuestionComponent';

// // const QuestionnaireComponent = () => {
// //     // State pour stocker les valeurs du formulaire
// //     const [chapitre, setChapitre] = useState('');
// //     const [nombreDeQuestions, setNombreDeQuestions] = useState(0);
// //     const [questions, setQuestions] = useState<question[]>([]);
  
// //     // Fonction pour ajouter une question
// //     const ajouterQuestion = () => {
// //       // Copie du tableau des questions actuelles
// //       const nouvellesQuestions = [...questions];
// //       // Ajout d'une nouvelle question vide
// //       nouvellesQuestions.push(new question());
// //       // Mise à jour du state
// //       setQuestions(nouvellesQuestions);
// //     };
  
// //     // Fonction pour supprimer une question
// //     const supprimerQuestion = (index: number) => {
// //       // Copie du tableau des questions actuelles
// //       const nouvellesQuestions = [...questions];
// //       // Suppression de la question à l'index spécifié
// //       nouvellesQuestions.splice(index, 1);
// //       // Mise à jour du state
// //       setQuestions(nouvellesQuestions);
// //     };
  
// //     // Fonction pour mettre à jour une question
// //     const mettreAJourQuestion = (index: number, nouvelleQuestion: question) => {
// //       // Copie du tableau des questions actuelles
// //       const nouvellesQuestions = [...questions];
// //       // Remplacement de la question à l'index spécifié
// //       nouvellesQuestions[index] = nouvelleQuestion;
// //       // Mise à jour du state
// //       setQuestions(nouvellesQuestions);
// //     };
  
// //     // Fonction pour enregistrer le questionnaire
// //     const enregistrerQuestionnaire = () => {
// //       // Création d'un nouveau questionnaire à partir des valeurs du formulaire
// //       const nouveauQuestionnaire = new questionnaire(chapitre, nombreDeQuestions, questions);
  
// //       // TODO: Enregistrer le questionnaire dans le fichier de l'instance Questionnaire
  
// //       // Réinitialisation du formulaire
// //       setChapitre('');
// //       setNombreDeQuestions(0);
// //       setQuestions([]);
// //     };
  
// //     // Affichage du formulaire de création de questionnaire
// //     return (
// //       <div>
// //         <label>
// //           Chapitre:
// //           <input type="text" value={chapitre} onChange={(e) => setChapitre(e.target.value)} />
// //         </label>
// //         <br />
// //         <label>
// //           Nombre de questions:
// //           <input type="number" value={nombreDeQuestions} onChange={(e) => setNombreDeQuestions(parseInt(e.target.value))} />
// //         </label>
// //         <br />
// //         <button onClick={ajouterQuestion}>Ajouter une question</button>
// //         {questions.map((q, i) => (
// //           <QuestionComponent key={i} question={q} onSupprimer={() => supprimerQuestion(i)} onMettreAJour={(nouvelleQuestion) => mettreAJourQuestion(i, nouvelleQuestion)} />
// //         ))}
// //         <br />
// //         <button onClick={enregistrerQuestionnaire}>Enregistrer le questionnaire</button>
// //       </div>
// //     );
// //   };
  
// //   export default QuestionnaireComponent;