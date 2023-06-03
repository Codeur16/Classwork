 import React,{ FunctionComponent, useState} from "react";
// import Input2 from "../../components/input2";
// import '../../style/dashboard.css';
// import '../Evaluation/evaluation.css';
// import Bouton from "../../components/Bouton";
// import '../../style/signin.css';
// import MyInput from "../../components/input";
// import {question, questionnaire} from '../../models/questionModel';
// import Footer from "../../components/footerbar";
// import { QuestionnaireFile } from "../../models/question";
// import fs from 'fs';
// import { useHistory } from "react-router";

// const QUESTIONS: question[]=[
//   {
//       id:0,
//       Enonce:'',
//       Reponse:'',
//       Type:'',
//       PointQuestion:0,
//       choix:['']
//   } ]
// interface questionItem{
//       id:number,
//       Enonce:string ,
//       Reponse:string,
//       Type:string,
//       PointQuestion:number,
//       choix?:Array<string>;
// }

// const QUESTIONNAIRE: questionnaire={
//   chapitre:'',
//   nombreDeQuestions:0,
//   questions:QUESTIONS
// }




// const CreerQestion: FunctionComponent=()=>{

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [Questionnaires, setQuestionnaires] = useState<questionnaire>(QUESTIONNAIRE)
//   const [Questions,setQuestions]=useState<question[]>(QUESTIONS);
//   const [QuestionsItem,setQuestionsItem]=useState<questionItem>({
//       id:0,
//       Enonce:" ",
//       Reponse:"",
//       Type:"",
//       PointQuestion:0,
//       choix:[""]
//   })
//     const [chapitre, setChapitre] = useState('');
//     const [nombreDeQuestions, setNombreDeQuestions] = useState(0);
//     const [currentChoice, setCurrentChoice] = useState(0);
//     const [showQuestion, setShowQuestion]=useState<boolean>(false)
//     const [showInputChoice, setShowInputChoice]=useState(false)
//     const [showButton, setShowButton]=useState<boolean>(true)
//     const [addChoix, setChoix]=useState(false);
//     const [inputChoix, setInputChoix] = useState('');
//     const [showListQuestion, setShowListQuestion]=useState(false);
//     const history = useHistory();



// /**enregitre les  */




// const handleNextQuestion = () => {
//   SaveQuestion(currentQuestion);
//   setCurrentQuestion(currentQuestion + 1);
// };
// const handleLasttQuestion = () => {
//   SaveQuestion(currentQuestion);
//   setShowQuestion(false);
//   setShowListQuestion(true);
//   SaveQuestionnaire();
  
// };
// const SaveQuestionnaire=()=>{
//   Questionnaires.chapitre=chapitre;
//   Questionnaires.nombreDeQuestions=nombreDeQuestions;
//   Questionnaires.questions=Questions;
//   setQuestionnaires(Questionnaires);
//   console.log("Questionnaires: "+JSON.stringify(Questionnaires))
// }
//  const handlePreviousQuestion = () => {
//     setCurrentQuestion(currentQuestion - 1);
//   };

// const handleNombreDeQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNombreDeQuestions(parseInt(event.target.value));
// }





// const saveQuestionnairesToFile = (questionnaires: questionnaire) => {
//   fs.writeFile('questionnaires.json', JSON.stringify(questionnaires), (err) => {
//     if (err) throw err;
//     console.log('Le fichier a été enregistré avec succès.');
//   });
// };













// // enregistrement des question


// const SaveQuestion =(currentIndex:number)=>{
//  QuestionsItem.id=currentIndex;
//  QuestionsItem.choix=choices.splice(0,choices.length);
// //  console.log(QuestionsItem);
//  Questions.splice(currentIndex, 1, QuestionsItem);

//   //Questions.push(QuestionsItem);
//   console.log(Questions);
//   setQuestionsItem({
//     id:0,
//     Enonce:" ",
//     Reponse:"",
//     Type:"",
//     PointQuestion:0,
//     choix:choices
// })
// // console.log(choices);
// // if(QuestionsItem){
// // console.log(QuestionsItem);}
// // if(Questions.splice(currentIndex, 1, QuestionsItem)){
// // setChoices( choices.splice(0,choices.length));
// // }
// setCurrentChoice(0);
// }



// /* Declarationdes variables */
//   let Input;
//    let choix;
//    let numChoix=0;




// // questions 

//    const RenderQuestionItem=()=>{
//     if( QuestionsItem.Type ==="text"){
//         // Question.pointsQuestion=quiz.pointsQuestion;
//      return  ( Input=(
//             <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",marginLeft:"0%"}} className="centrer boxQuiz">
//                 <Input2 
//                 label="Enonce de la question" 
//                 id="question" 
//                 name="question" 
//                 type="text" 
//                 value={QuestionsItem.Enonce}
//                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 
//                     if (event && event.target) {
//                     // const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//                     setQuestionsItem({ ...QuestionsItem, Enonce: event.target.value })
//                     }
//                 }}  />
//                  <Input2 
//                 label="Reponse" 
//                 id="Reponse" 
//                 name="Reponse" 
//                 type="text" 
//                 value={QuestionsItem.Reponse}
//                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 
//                     if (event && event.target) {
//                     // const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//                     setQuestionsItem({ ...QuestionsItem, Reponse: event.target.value })
//                     }
//                 }}  />
//                  <Input2 
//                 label="Points de la question(optionnel)" 
//                 id="Point" 
//                 name="Point" 
//                 type="Number" 
//                 value={QuestionsItem.PointQuestion}
//                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                     if (event && event.target) {
//                      const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//                     setQuestionsItem({ ...QuestionsItem, PointQuestion:value })
//                     }
//                 }}  />
//                  {/* <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
//                         <Bouton  name="SUIVANT" onClick={()=>{console.log(QuestionsItem)}}/>
//                         </div> */}
//             </div>
//         ));
//     }
//     else if(QuestionsItem.Type ==="select") {
//        return ( Input=(
//         <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",marginLeft:"0%"}} className="centrer boxQuiz">
//                 <Input2 
//                 label="Enonce de la question" 
//                 id="question" 
//                 name="question" 
//                 type="text" 
//                 value={QuestionsItem.Enonce}
//                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                     if (event && event.target) {
//                     // const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//                     setQuestionsItem({ ...QuestionsItem, Enonce: event.target.value })
//                     }
//                 }}  />
                
//                  <Input2 
//                 label="Points de la question(optionnel)" 
//                 id="Point" 
//                 name="Point" 
//                 type="Number" 
//                 value={QuestionsItem.PointQuestion}
//                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                     if (event && event.target) {
//                      const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//                     setQuestionsItem({ ...QuestionsItem, PointQuestion:value })
//                     }
//                 }}  />
//                  <Input2 
//                 label="Reponse" 
//                 id="Reponse" 
//                 name="Reponse" 
//                 type="text" 
//                 value={QuestionsItem.Reponse}
//                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                     if (event && event.target) {
//                     // const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
//                     setQuestionsItem({ ...QuestionsItem, Reponse: event.target.value })
//                     }
//                 }}  />
//                <div className="setChoice">
//                  <ol className="setChoice">
//                 {choices.map((val, index)=>(
                  
//                     <li key={index}>{val}</li>
//                     )) } 
//                     </ol>
               
//                 {showInputChoice&&(<div className="setChoice">
//                   <Input2 
//                   label={"Option["+currentChoice+"]:"} 
//                   id="choix" 
//                   name="choix" 
//                   type="text" 
//                   value={inputChoix}
//                   onChange={handleInputChoice}
//                  />
//                  <Bouton name="Enregistrer" onClick={()=>{setShowInputChoice(true); setShowInputChoice(false);handleAddChoice();  }} />
//                 </div>)}
//               </div>




//                 <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
//                         <Bouton name="Ajouer une Option" onClick={()=>{setShowInputChoice(true);setChoix(true); setCurrentChoice(currentChoice+1)}}/>
//                         </div>
//                  {/* <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
//                         <Bouton name="SUIVANT" onClick={()=>{console.log(QuestionsItem)}}/>
//                         </div> */}
//             </div>
//         ))
//     }
//     else{
//       return (Input=(<p></p>))
//     }
//   }


//   /* Fonction pour afficher le formulaire du type */
//   //  const RenderType=(index:number)=>{
//   //  return(


//    const ListeQuestions=()=>{
//    return (<div key={currentQuestion}>
//     <label className="question-text">Question {currentQuestion+1}:</label>
//     {/* <h5>Selectionner le type de reponse pour cette question:</h5> */}
                        
                       
//                         <select
//                             id="type"
//                            name="type"
//                             value={QuestionsItem.Type}
//                             onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
//                                                         if (event && event.target) {
//                                                        setQuestionsItem({ ...QuestionsItem, Type: event.target.value})
//                             }}} 
//                             className="Select form-control" required>
//                             <option value="" >Selectionner le type de reponse: </option>
//                             <option value="text">Text</option>
//                             <option value="select">Select</option>
//                        </select>
//                         {RenderQuestionItem()}
       
//                          {/* <div style={{width:"50%",marginLeft:"25%", marginTop:"2%"}} className="centrer">
//                                <Bouton name="SUIVANT" onClick={()=>{ RenderQuestionItem(); console.log(QuestionsItem.Type);}}/>
//                                </div> */}
//    </div>)}
//    //)
//    //);
//   //}

// // verification des entree
// const checkInput =()=>{
//   if(chapitre===''){
//     // alert("entrer le titre de l'evaluation!!");
//   }
//   else{
//     setShowButton(false);
//     setShowQuestion(true);
//     console.log('chapitre:'+chapitre,'NombreQuestions: '+nombreDeQuestions); 
//   }
// }


//   /**Formulaire pour en registrer les choix des question de type select */

//   const handleInputChoice = (event:React.ChangeEvent<HTMLInputElement>) => {
//     setInputChoix(event.target.value);
//   }

//   const [choices, setChoices] = useState<string[]>([]);
  
//   const handleAddChoice = () => {
//     const newChoice = inputChoix; // Remplacez 'Nouveau choix' par la valeur souhaitée
//     setChoices(prevChoices => [...prevChoices, newChoice]);
//     setInputChoix('');
//   };

  
//   const renderChoix=()=>{
//    if(addChoix){
//     numChoix+=1;
//       choix=(
//         <div>
//           <p>Option {numChoix}</p>

//         </div>
//       )
// setChoix(false);
//    }
//   }



// /** fonction pour soumettre le formulaire */
//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
//       event.preventDefault();
//       console.log(Questions);
//     }



// // creation de plusieurs question
//     /*Formulaire pour  afficher les questions a enregistrer */
//     const handleSubmitQuestion=(event: React.FormEvent<HTMLFormElement>)=>{
//       event.preventDefault();
//       console.log(QuestionsItem);
//       setQuestionsItem({
//       id:0,
//       Enonce:" ",
//       Reponse:"",
//       Type:"",
//       PointQuestion:0,
//       choix:[""]
//       });
//     }
  
// // const renderForm=(nombreDeQuestions: number) =>{
// //   const forms = [];

// //   for (let i = 0; i <= nombreDeQuestions; i++) {
// //     if(renderType){
// //     forms.push(renderType(i));
// //     }
// //   }

// //   return forms
// // }

// // const questionListe=(props: { n: number }) =>{
// //   return React.createElement('div', null, renderForm(props.n));
// // }

// const renderForm = (nombreDeQuestions: number, renderType: any) => {
//   //const forms = [];

//   //for (let i = 0; i < nombreDeQuestions; i++) {
//    // if (renderType) {
//       //forms.push(renderType(i));
//     //}
//   //}

//   return renderType;
// };

// let QuestionListe = (props: { n: number; renderType: any }) => {
//   return React.createElement('div', null, ...renderForm(props.n, props.renderType));
// };


// // const myRenderType = (i: number) => RenderType(i);
// {/* <form key={i}>Formulaire {i}</form>; */}

// // Créer un composant pour afficher une question

// const QuestionItem = (props: { question: question }) => {
//   return (
//     <div key={props.question.id}>
//       if ({props.question.Type==='text'}) {
//         <div>
//         <h4>Question {props.question.id}:</h4>
//         <h5>{props.question.Enonce}</h5>
//         <p>{props.question.Reponse}</p>
//         <p>Type : {props.question.Type}</p>
//         <p>Points : {props.question.PointQuestion}</p>
//         </div>
//       }
//       else if({props.question.Type==='select'}){
//         <div>
//         <h4>Question {props.question.id}:</h4>
//         <h5>{props.question.Enonce}</h5>
//         <p>{props.question.Reponse}</p>
//         <p>Type : {props.question.Type}</p>
//         <p>Points : {props.question.PointQuestion}</p>
//         <label>Options de reponse:</label>
//         {props.question.choix?.map( (choice,i) => <div key={i}>
         
//           <ul>
//             <li>{i+")"}{choice}</li>
//           </ul>
//         </div>)
//         }
//         </div>
//       }
      
//     </div>
//   );
// };

//     return(
//         <div >



//             {/* lISTE QUESTIONS */}




//             <div className="boxQuiz centrerBox">
//             {showListQuestion &&(
//              <div style={{marginLeft:"5%"}}>
//               {/* {Questions.map((QUESTION)=>())} */}
//               <h1 className="question-text-1 centrer" style={{marginTop:"7%"}}>Titre de l'evaluation: {chapitre}</h1>
//              {Questions.map((q) => (
//                <div key={q.id}>
//                 <h4 className="question-text-1">Question {q.id+1}:</h4>
//                  <p><span className="question-text">Enonce:</span> {q.Enonce}</p>
//                  <p><span className="question-text">Reponse:</span>{q.Reponse}</p>
//                  <p><span className="question-text">Type de Reponse:</span>{q.Type}</p>
//                  <p><span className="question-text">Point:</span>{q.PointQuestion}</p>
//                  {q.Type === 'select' && (
//                   <div >
//                    <span className="question-text">Options:</span>
//                     <ol style={{marginLeft:"8%"}}>
//                       {q.choix?.map((c, index) => (
//                         <li key={index}>{c}</li>
//                         ))}
//                     </ol>
//                     </div>
//                   )}
//                </div>
//              ))}
//              <Bouton name="Valider" onClick={()=>{setShowListQuestion(false); history.push("/Evaluation") }} /> <Bouton name="Annuler" onClick={()=>{setShowListQuestion(false); setShowButton(true)}}/>
//            </div>
//             )}






//             {/* LISTE Evaluation*/}

            




//      {/* // FORMULAIRE DES QUESTIONS               */}
//                 <form  onSubmit={handleSubmit} className="centrerBox">
//                 {showButton&&(    
//                   <>
//                    <h1 className="centrer" style={{marginTop:"4%"}}>Creer une evaluation</h1>
//                     <label className="centrer" > Entrer les information de l'evaluation</label>
//                 < Input2 
//                         label="Titre de l'evaluation:" 
//                         id="titre" 
//                         name="titre" 
//                         type="text" 
//                         value={chapitre.toString()}
                        
//                         onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                             if (event && event.target) {
//                             setChapitre(event.target.value.toString())
//                         }}} />

 
//                   <Input2
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

                  
//                         <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
//                         <Bouton name="SUIVANT" onClick={()=>{  checkInput()}}/>
//                         </div></>)}

//                          {/* Affichage des question */}
//                         {showQuestion&&(
//                           <>
//                           <h1 className="question-text-1 centrer" style={{marginTop:"7%"}}>{chapitre}</h1>
//                            <div style={{marginLeft:"0%",marginTop:"5%"}}>
//                              <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}> {currentQuestion > 0 && (
//                                 <label  className="boutonItem centrerBox"> <Bouton name="precedent" onClick={()=>{handlePreviousQuestion();}} /></label>
//                               )}
//                               <div >{currentQuestion < nombreDeQuestions-1? (
//                                 <label className="boutonItem centrer"><Bouton name="Suivant" onClick={()=>{handleNextQuestion(); }} /></label>
//                               ) : (
//                                 <p  className="boutonItem centrer"><Bouton name="terminer" onClick={()=>{handleLasttQuestion();setShowListQuestion(true)}}/></p>
//                               )}</div>
//                               </div>
//                               <div style={{marginLeft:"0%", marginTop:"5%"}}>
//                               {nombreDeQuestions>0&&( <div  style={{position:"absolute",width:"87.5%"}} >{ListeQuestions()}</div>)}
//                               </div>
//                               {/* <QuestionListe n={nombreDeQuestions} renderType={myRenderType} /> */}
//                             {/* {renderForm(questions[currentQuestion])} */}
                           
//                             <div style={{width:"100%", height:"400px"}}></div>
//                             </div>
                          
                          
                           
//                         </>
//                         )}
//                 </form>

   
    
//     </div> 
//     <div style={{width:"100%", height:"100px"}}></div>
  
//     </div>
//     )
// }
// export default CreerQestion;
