import React,{FunctionComponent, useState} from "react";
import Navbar from "../../components/navbar";
import Bouton from "../../components/Bouton";
import './evaluation.css'
// import { useHistory } from "react-router";
import CreerQestion from "./creer-evaluation";
// import '../../pages/'






const Evaluation:FunctionComponent=()=>{
    // const history=useHistory();
    const [showForm, setShowForm]=useState(false);
     return(
        <div>
            <nav>
                <Navbar title="Evaluation" Evaluation="Evaluation"/>
                
            </nav>
            {!showForm&&(<div className="Accueil">
                <div className="centrer"><img  width="100" height="100" src="https://img.icons8.com/ios/100/22a2e3/box-important--v1.png" alt="box-important--v1"/></div>
                <h3 className="centrer">vous n'avez pas d'evaluation en cours !</h3>
                <div className="creer-E centrer" title="creer une evaluation"><Bouton name="Creer une evaluation" onClick={()=>{ setShowForm(true);}}/></div>
            </div>)}

            

        { showForm &&(<div className="formQuestion">

            <CreerQestion />
        </div>)}
        </div>
     );
}
export default Evaluation;






































// import React,{ChangeEvent, FunctionComponent, useState} from "react";
// import Input2 from "../../components/input2";
// import '../../style/dashboard.css';
// import '../Evaluation/evaluation.css';
// import Bouton from "../../components/Bouton";
// import '../../style/signin.css';
// import { QUESTION, Questionnaire } from "../../models/question";
// import { question, questionnaire} from "../../models/questionModel";
// import MyInput from "../../components/input";


// const CreerQestion: FunctionComponent=()=>{
//     const [chapitre, setChapitre] = useState('');
//     const [nombreDeQuestions, setNombreDeQuestions] = useState(0);
//     //const [nombreDeQuestions, setnombreDeQuestions] = useState(0);
//     const [questions, setQuestions] = useState<question[]>(QUESTION);
//     const [Questionnaires, setQuestionnaires]=useState<questionnaire[]>([]);
//     // const [type, setType] = useState('');
//     const [showQuestion, setShowQuestion]=useState<boolean>(false)
//     // const [showInput, setShowInput]=useState<boolean>(false)
//     // const [showButton, setShowButton]=useState<boolean>(true)

// // // Fonction pour ajouter une question
// // const ajouterQuestion = () => {
// //     // Copie du tableau des questions actuelles
// //     const nouvellesQuestions = [...questions];
// //     // Ajout d'une nouvelle question vide
// //     nouvellesQuestions.push(new question());
// //     // Mise à jour du state
// //     setQuestions(nouvellesQuestions);
// //   };

// //    // Fonction pour mettre à jour une question
// //    const mettreAJourQuestion = (index: number, nouvelleQuestion: question) => {
// //     // Copie du tableau des questions actuelles
// //     const nouvellesQuestions = [...questions];
// //     // Remplacement de la question à l'index spécifié
// //     nouvellesQuestions[index] = nouvelleQuestion;
// //     // Mise à jour du state
// //     setQuestions(nouvellesQuestions);
// //   };

    

// /**enregitre les  */




// const handleNombreDeQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNombreDeQuestions(parseInt(event.target.value));
//   };



//   const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>, id: number, field: keyof question) => {
//     const updatedQuestions = questions.map((q) => {
//       if (q.id === id) {
//         return { ...q, [field]: event.target.value };
//       } else {
//         return q;
//       }
//     });
//     setQuestions(updatedQuestions);
//   };
//   const handleQuestionSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, id: number, field: keyof question) => {
//     const updatedQuestions = questions.map((q) => {
//       if (q.id === id) {
//         return { ...q, [field]: event.target.value };
//       } else {
//         return q;
//       }
//     });
//     setQuestions(updatedQuestions);
//   };

//   const handleChoixChange = (event: React.ChangeEvent<HTMLInputElement>, id: number, choixIndex: number) => {
//     const updatedQuestions = questions.map((q) => {
//       if (q.id === id) {
//         const choix = Array.isArray(q.choix) ? [...q.choix] : [];
//         choix[choixIndex] = event.target.value;
//         return { ...q, choix };
//       } else {
//         return q;
//       }
//     });
//     setQuestions(updatedQuestions);
//   };


//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const newQuestionId = questions.length + 1;
//     const newQuestion: question = new question(newQuestionId);
//     setQuestions([...questions, newQuestion]);
//     setNombreDeQuestions(nombreDeQuestions - 1);
//     console.log(questions);
//   };

//     // const hadleincrement=()=>{
//     //     if(numQuestion>0){
//     //         return true;
//     //     }
//     // }
// //    let hadleInputQuestion
// //     var num=1;
// //     for(num=1; num=numQuestion ; num++){
// //         hadleInputQuestion= (
// //             <div>
// //                 <label>Question:</label>
                
               
// //                 <select
// //                      id="type"
// //                     name="type"
// //                      value={Question.type}
// //                      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
// //                                                  if (event && event.target) {
// //                                                 setQuestion({ ...Question, type: event.target.value})
// //                      }}} 
// //                      className="Select form-control" required>
// //                      <option value="" >Type de question</option>
// //                      <option value="text">Text</option>
// //                      <option value="select">Select</option>
// //                 </select>
// //                 <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
// //                         <Bouton name="SUIVANT" onClick={()=>{console.log(Question);  }}/>
// //                         </div>
                
// //             </div>
// //         )
// //     }
   

//     // let Input;
//     // if(Question.type==="text"){
//     //     // Question.pointsQuestion=quiz.pointsQuestion;
//     //     Input=(
//     //         <div>
//     //             <Input2 
//     //             label="Enonce de la question" 
//     //             id="question" 
//     //             name="question" 
//     //             type="text" 
//     //             value={Question.question}
//     //             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//     //                 if (event && event.target) {
//     //                 // const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//     //                 setQuestion({ ...Question, question: event.target.value })
//     //                 }
//     //             }}  />
//     //              <Input2 
//     //             label="Reponse" 
//     //             id="Reponse" 
//     //             name="Reponse" 
//     //             type="text" 
//     //             value={Question.reponse}
//     //             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//     //                 if (event && event.target) {
//     //                 // const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//     //                 setQuestion({ ...Question, reponse: event.target.value })
//     //                 }
//     //             }}  />
//     //              <Input2 
//     //             label="Points de la question(optionnel)" 
//     //             id="Point" 
//     //             name="Point" 
//     //             type="Number" 
//     //             value={Question.pointsQuestion??''}
//     //             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//     //                 if (event && event.target) {
//     //                  const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//     //                 setQuestion({ ...Question, pointsQuestion:value })
//     //                 }
//     //             }}  />
//     //              <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
//     //                     <Bouton name="SUIVANT" onClick={()=>{console.log(Question)}}/>
//     //                     </div>
//     //         </div>
//     //     )
//     // }else if(Question.type==="select") {
//     //     Input=(
//     //         <div>
//     //             <Input2 
//     //             label="Enonce de la question" 
//     //             id="question" 
//     //             name="question" 
//     //             type="text" 
//     //             value={Question.question}
//     //             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//     //                 if (event && event.target) {
//     //                 // const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//     //                 setQuestion({ ...Question, question: event.target.value })
//     //                 }
//     //             }}  />
//     //              <Input2 
//     //             label="Reponse" 
//     //             id="Reponse" 
//     //             name="Reponse" 
//     //             type="text" 
//     //             value={Question.reponse}
//     //             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//     //                 if (event && event.target) {
//     //                 // const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//     //                 setQuestion({ ...Question, reponse: event.target.value })
//     //                 }
//     //             }}  />
//     //              <Input2 
//     //             label="Points de la question(optionnel)" 
//     //             id="Point" 
//     //             name="Point" 
//     //             type="Number" 
//     //             value={Question.pointsQuestion??''}
//     //             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//     //                 if (event && event.target) {
//     //                  const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//     //                 setQuestion({ ...Question, pointsQuestion:value })
//     //                 }
//     //             }}  />
                
//     //              <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
//     //                     <Bouton name="SUIVANT" onClick={()=>{console.log(Question)}}/>
//     //                     </div>
//     //         </div>
//     //     )
//     // }
   
//     return(
//         <div className="boxQuiz centrerBox">
            
//             <div>
//                     <h1 className="centrer" style={{marginTop:"4%"}}>Creer une evaluation</h1>
//                     <label className="centrer" > Entrer les information de l'evaluation</label>
//                 <form  onSubmit={handleSubmit} className="centrerBox">
//                     < MyInput
//                         label="Titre de l'evaluation:" 
//                         id="titre" 
//                         name="titre" 
//                         type="text" 
//                         value={chapitre.toString()}
//                         onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                             if (event && event.target) {
//                             setChapitre(event.target.value.toString())
//                         }}} />

//                     <MyInput
//                         label="Nombre de questions:" 
//                         id="totalQuestions" 
//                         name="totalQuestions" 
//                         type="number" 
//                         value={nombreDeQuestions}
//                         onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                             if (event && event.target) {
//                             const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//                             setNombreDeQuestions(value)
//                             }
//                         }}  />

//                     {/* <Input2
//                         label="Points par questions:" 
//                         id="pointsQuestion" 
//                         name="pointsQuestion" 
//                         type="number" 
//                         value={nombreDeQuestions}
//                         onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                             if (event && event.target) {
//                             const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//                             setNombreDeQuestions(value )
//                             }
//                         }}  /> */}
//                       {showQuestion&& (  <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
//                         <Bouton name="SUIVANT" onClick={()=>{console.log('chapitre:'+chapitre,'NombreQuestions: '+nombreDeQuestions); setShowQuestion(true)}}/>
//                         </div>)}


//                 </form>



//       {!showQuestion&&(
//         <div>
//         <h2>Create Questions</h2>
//         {nombreDeQuestions > 0 ? (
//           <form onSubmit={handleSubmit}>
//             {[...Array(nombreDeQuestions)].map((_, i) => (
//               <div key={i}>
//                 <label>
//                   Enoncé de la question {i + 1}:
//                   <input type="text" onChange={(e) => handleQuestionChange(e, i + 1, 'Enonce')} />
//                 </label>
//                 <br />
//                 <label>
//                   Réponse de la question {i + 1}:
//                   <input type="text" onChange={(e) => handleQuestionChange(e, i + 1, 'Reponse')} />
//                 </label>
//                 <br />
//                 <label> Type de la question {i + 1} : 
//                         {/* <select 
//                         onChange={(e) => handleQuestionSelectChange(e, i + 1, 'Type')}> 
//                         <option value="QCM">- - Sélectionnez un type --</option> 
//                         <option value="QCM">QCM</option> 
//                         <option value="Ouverte">Ouverte</option> 
//                         </select>  */}
//                 </label>
//                 <input type="text" onChange={(e) => handleQuestionChange(e, i + 1, 'Type')} />
//                 {questions[i]?.Type === 'QCM' && (
//                   <>
//                     <br />
//                     {[...Array(4)].map((_, j) => (
//                       <div key={j}>
//                         <label>
//                           Choix {j + 1}:
//                           <input type="text" onChange={(e) => handleChoixChange(e, i + 1, j)} />
//                         </label>
//                       </div>
//                     ))}
//                   </>
//                 )}
//                 <hr />
//               </div>
//             ))}
//             <button type="submit">Create</button>
//           </form>
//         ) : (
//           <p>All questions created:</p>
//         )}
//         <ul>
//           {questions.map((q) => (
//             <li key={q.id}>
//               {q.Enonce} - {q.Reponse} - {q.Type}
//               {q.choix && (
//                 <ul>
//                   {q.choix.map((c, i) => (
//                     <li key={i}>{c}</li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//         {/* <label>
//           Number of questions to create:
//           <input type="number" value={nombreDeQuestions} onChange={handleNombreDeQuestionChange} />
//         </label> */}
//       </div>
//        )}
           
   
    
//     </div> 
//     </div>
//     )
// }
// export default CreerQestion;














// //  {/* <div>
// //                 <h1>Questions</h1>
// //                 <div>
// //                 <label>Question:</label>
                
               
// //                 <select
// //                      id="type"
// //                     name="type"
// //                      value={Question.type}
// //                      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
// //                                                  if (event && event.target) {
// //                                                 setQuestion({ ...Question, type: event.target.value})
// //                      }}} 
// //                      className="Select form-control" required>
// //                      <option value="" >Type de question</option>
// //                      <option value="text">Text</option>
// //                      <option value="select">Select</option>
// //                 </select>


// //                   {showButton&&(  <div style={{width:"50%",marginLeft:"25%", marginTop:"2%"}} className="centrer">
// //                         <Bouton name="SUIVANT" onClick={()=>{setShowInput(true); console.log(Question); setShowButton(false)}}/>
// //                         </div>)}


// //                 {showInput&&(
                    
// //                     <div>
// //                         {Input}
// //                     </div>
// //                 )}
                
// //             </div>
// //             </div> */}