import React,{FunctionComponent, useState} from "react";
import Navbar from "../../components/navbar";
import Bouton from "../../components/Bouton";
import './evaluation.css';
import Input2 from "../../components/input2";
import '../../style/dashboard.css';
import '../Evaluation/evaluation.css';
import '../../style/signin.css';
import MyInput from "../../components/input";
import {question, questionnaire} from '../../models/questionModel';
import Footer from "../../components/footerbar";
import { QuestionnaireFile } from "../../models/question";
import fs from 'fs';
import { useHistory } from "react-router";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { event } from "jquery";


const QUESTIONS: question[]=[
    {
        id:0,
        Enonce:'Quel est la capitale du cameroun?',
        Reponse:'yaounde',
        Type:'text',
        PointQuestion:5
    } ]
  interface questionItem{
        id:number,
        Enonce:string ,
        Reponse:string,
        Type:string,
        PointQuestion:number,
        choix?:Array<string>;
  }
  
  const QUESTIONNAIRE: questionnaire={
    dateEvaluation: '06-06-2023',
    Duree:'2h',
    chapitre:'Base se donnees',
    nombreDeQuestions:1,
    questions:QUESTIONS
  }
  
  


const Evaluation:FunctionComponent=()=>{
    // const history=useHistory();
    const [showForm, setShowForm]=useState(false);

// fonction et variable creer evaluation
const [currentQuestion, setCurrentQuestion] = useState(0);
  const [Questionnaires, setQuestionnaires] = useState<questionnaire>(QUESTIONNAIRE)
  const [Questions,setQuestions]=useState<question[]>(QUESTIONS);
  const [QuestionsItem,setQuestionsItem]=useState<questionItem>({
      id:0,
      Enonce:" ",
      Reponse:"",
      Type:"",
      PointQuestion:0,
      choix:[""]
  })
    const [chapitre, setChapitre] = useState('');
    const [nombreDeQuestions, setNombreDeQuestions] = useState(0);
    const [currentChoice, setCurrentChoice] = useState(0);
    const [showQuestion, setShowQuestion]=useState<boolean>(false)
    const [showInputChoice, setShowInputChoice]=useState(false)
    const [showButton, setShowButton]=useState<boolean>(true)
    const [addChoix, setChoix]=useState(false);
    const [inputChoix, setInputChoix] = useState('');
    const [showListQuestion, setShowListQuestion]=useState(false);
    const history = useHistory();
    const [selectedDate, setSelectedDate] = useState('2017-06-01T08:30');
    // const [selectedDateFin, setSelectedDateFin] = useState<Date | null>(null);
    const [dure, setDure]=useState('12:00')

  



/**enregitre les  */




const handleNextQuestion = () => {
  SaveQuestion(currentQuestion);
  setCurrentQuestion(currentQuestion + 1);
};
const handleLasttQuestion = () => {
  SaveQuestion(currentQuestion);
  setShowQuestion(false);
  setShowListQuestion(true);
  SaveQuestionnaire();
  
};
const SaveQuestionnaire=()=>{
  Questionnaires.chapitre=chapitre;
  Questionnaires.nombreDeQuestions=nombreDeQuestions;
  Questionnaires.dateEvaluation=selectedDate;
  Questionnaires.Duree=dure;
  Questionnaires.questions=Questions;
  setQuestionnaires(Questionnaires);
  console.log("Questionnaires: "+JSON.stringify(Questionnaires))
}
 const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

const handleNombreDeQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombreDeQuestions(parseInt(event.target.value));
}

const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = (event.target.value);
    setSelectedDate(newDate);
  };
  const handleTimeChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
    const newDate = (event.target.value);
    setDure(newDate);
  }
//   const handleDateFinChange = (date: Date | null) => {
//     setSelectedDateFin(date);
//   };


const saveQuestionnairesToFile = (questionnaires: questionnaire) => {
  fs.writeFile('questionnaires.json', JSON.stringify(questionnaires), (err) => {
    if (err) throw err;
    console.log('Le fichier a été enregistré avec succès.');
  });
};













// enregistrement des question


const SaveQuestion =(currentIndex:number)=>{
 QuestionsItem.id=currentIndex;
 QuestionsItem.choix=choices.splice(0,choices.length);
//  console.log(QuestionsItem);
 Questions.splice(currentIndex, 1, QuestionsItem);

  //Questions.push(QuestionsItem);
  console.log(Questions);
  setQuestionsItem({
    id:0,
    Enonce:" ",
    Reponse:"",
    Type:"",
    PointQuestion:0,
    choix:choices
})
// console.log(choices);
// if(QuestionsItem){
// console.log(QuestionsItem);}
// if(Questions.splice(currentIndex, 1, QuestionsItem)){
// setChoices( choices.splice(0,choices.length));
// }
setCurrentChoice(0);
}



/* Declarationdes variables */
  let Input;
   let choix;
   let numChoix=0;




// questions 

   const RenderQuestionItem=()=>{
    if( QuestionsItem.Type ==="text"){
        // Question.pointsQuestion=quiz.pointsQuestion;
     return  ( Input=(
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",marginLeft:"0%"}} className="centrer boxQuiz">
                <Input2 
                label="Enonce de la question" 
                id="question" 
                name="question" 
                type="text" 
                value={QuestionsItem.Enonce}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 
                    if (event && event.target) {
                    // const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
                    setQuestionsItem({ ...QuestionsItem, Enonce: event.target.value })
                    }
                }}  />
                 <Input2 
                label="Reponse" 
                id="Reponse" 
                name="Reponse" 
                type="text" 
                value={QuestionsItem.Reponse}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 
                    if (event && event.target) {
                    // const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
                    setQuestionsItem({ ...QuestionsItem, Reponse: event.target.value })
                    }
                }}  />
                 <Input2 
                label="Points de la question(optionnel)" 
                id="Point" 
                name="Point" 
                type="Number" 
                value={QuestionsItem.PointQuestion}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event && event.target) {
                     const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
                    setQuestionsItem({ ...QuestionsItem, PointQuestion:value })
                    }
                }}  />
                 {/* <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
                        <Bouton  name="SUIVANT" onClick={()=>{console.log(QuestionsItem)}}/>
                        </div> */}
            </div>
        ));
    }
    else if(QuestionsItem.Type ==="select") {
       return ( Input=(
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",marginLeft:"0%"}} className="centrer boxQuiz">
                <Input2 
                label="Enonce de la question" 
                id="question" 
                name="question" 
                type="text" 
                value={QuestionsItem.Enonce}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event && event.target) {
                    // const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
                    setQuestionsItem({ ...QuestionsItem, Enonce: event.target.value })
                    }
                }}  />
                
                 <Input2 
                label="Points de la question(optionnel)" 
                id="Point" 
                name="Point" 
                type="Number" 
                value={QuestionsItem.PointQuestion}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event && event.target) {
                     const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
                    setQuestionsItem({ ...QuestionsItem, PointQuestion:value })
                    }
                }}  />
                 <Input2 
                label="Reponse" 
                id="Reponse" 
                name="Reponse" 
                type="text" 
                value={QuestionsItem.Reponse}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event && event.target) {
                    // const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
                    setQuestionsItem({ ...QuestionsItem, Reponse: event.target.value })
                    }
                }}  />
               <div className="setChoice">
                 <ol className="setChoice">
                {choices.map((val, index)=>(
                  
                    <li key={index}>{val}</li>
                    )) } 
                    </ol>
               
                {showInputChoice&&(<div className="setChoice">
                  <Input2 
                  label={"Option["+currentChoice+"]:"} 
                  id="choix" 
                  name="choix" 
                  type="text" 
                  value={inputChoix}
                  onChange={handleInputChoice}
                 />
                 <Bouton name="Enregistrer" onClick={()=>{setShowInputChoice(true); setShowInputChoice(false);handleAddChoice();  }} />
                </div>)}
              </div>




                <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
                        <Bouton name="Ajouer une Option" onClick={()=>{setShowInputChoice(true);setChoix(true); setCurrentChoice(currentChoice+1)}}/>
                        </div>
                 {/* <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
                        <Bouton name="SUIVANT" onClick={()=>{console.log(QuestionsItem)}}/>
                        </div> */}
            </div>
        ))
    }
    else{
      return (Input=(<p></p>))
    }
  }


  /* Fonction pour afficher le formulaire du type */
  //  const RenderType=(index:number)=>{
  //  return(


   const ListeQuestions=()=>{
   return (<div key={currentQuestion}>
    <label className="question-text">Question {currentQuestion+1}:</label>
    {/* <h5>Selectionner le type de reponse pour cette question:</h5> */}
                        
                       
                        <select
                            id="type"
                           name="type"
                            value={QuestionsItem.Type}
                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                                        if (event && event.target) {
                                                       setQuestionsItem({ ...QuestionsItem, Type: event.target.value})
                            }}} 
                            className="Select form-control" required>
                            <option value="" >Selectionner le type de reponse: </option>
                            <option value="text">Text</option>
                            <option value="select">Select</option>
                       </select>
                        {RenderQuestionItem()}
       
                         {/* <div style={{width:"50%",marginLeft:"25%", marginTop:"2%"}} className="centrer">
                               <Bouton name="SUIVANT" onClick={()=>{ RenderQuestionItem(); console.log(QuestionsItem.Type);}}/>
                               </div> */}
   </div>)}
   //)
   //);
  //}

// verification des entree
const checkInput =()=>{
  if(chapitre===''){
    // alert("entrer le titre de l'evaluation!!");
  }
  else{
    setShowButton(false);
    setShowQuestion(true);
    console.log('chapitre:'+chapitre,'NombreQuestions: '+nombreDeQuestions); 
  }
}


  /**Formulaire pour en registrer les choix des question de type select */

  const handleInputChoice = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputChoix(event.target.value);
  }

  const [choices, setChoices] = useState<string[]>([]);
  
  const handleAddChoice = () => {
    const newChoice = inputChoix; // Remplacez 'Nouveau choix' par la valeur souhaitée
    setChoices(prevChoices => [...prevChoices, newChoice]);
    setInputChoix('');
  };

  
  const renderChoix=()=>{
   if(addChoix){
    numChoix+=1;
      choix=(
        <div>
          <p>Option {numChoix}</p>

        </div>
      )
setChoix(false);
   }
  }



/** fonction pour soumettre le formulaire */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
      console.log(Questions);
    }



// creation de plusieurs question
    /*Formulaire pour  afficher les questions a enregistrer */
    const handleSubmitQuestion=(event: React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      console.log(QuestionsItem);
      setQuestionsItem({
      id:0,
      Enonce:" ",
      Reponse:"",
      Type:"",
      PointQuestion:0,
      choix:[""]
      });
    }
  
// const renderForm=(nombreDeQuestions: number) =>{
//   const forms = [];

//   for (let i = 0; i <= nombreDeQuestions; i++) {
//     if(renderType){
//     forms.push(renderType(i));
//     }
//   }

//   return forms
// }

// const questionListe=(props: { n: number }) =>{
//   return React.createElement('div', null, renderForm(props.n));
// }

const renderForm = (nombreDeQuestions: number, renderType: any) => {
  //const forms = [];

  //for (let i = 0; i < nombreDeQuestions; i++) {
   // if (renderType) {
      //forms.push(renderType(i));
    //}
  //}

  return renderType;
};

let QuestionListe = (props: { n: number; renderType: any }) => {
  return React.createElement('div', null, ...renderForm(props.n, props.renderType));
};


// const myRenderType = (i: number) => RenderType(i);
{/* <form key={i}>Formulaire {i}</form>; */}

// Créer un composant pour afficher une question

const QuestionItem = (props: { question: question }) => {
  return (
    <div key={props.question.id}>
      if ({props.question.Type==='text'}) {
        <div>
        <h4>Question {props.question.id}:</h4>
        <h5>{props.question.Enonce}</h5>
        <p>{props.question.Reponse}</p>
        <p>Type : {props.question.Type}</p>
        <p>Points : {props.question.PointQuestion}</p>
        </div>
      }
      else if({props.question.Type==='select'}){
        <div>
        <h4>Question {props.question.id}:</h4>
        <h5>{props.question.Enonce}</h5>
        <p>{props.question.Reponse}</p>
        <p>Type : {props.question.Type}</p>
        <p>Points : {props.question.PointQuestion}</p>
        <label>Options de reponse:</label>
        {props.question.choix?.map( (choice,i) => <div key={i}>
         
          <ul>
            <li>{i+")"}{choice}</li>
          </ul>
        </div>)
        }
        </div>
      }
      
    </div>
  );
};

const AfficherEvaluation=()=>{
    if(Questionnaires.chapitre!=''){
        return(
            <div>
                <section>
                        <h4><span>Titre:</span>{Questionnaires.chapitre}</h4>
                        <p>Date:{Questionnaires.dateEvaluation}</p>
                </section>
                <section>
                        <p><span>Cours:</span>Nom du cours</p>
                        <p>Duree:{Questionnaires.Duree}</p>
                </section>
            </div>
        )
    }
}

// // requette de 
// const handleSubmitEvaluation = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(user),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to login');
//       }

//       // Handle successful login
//       const data = await response.json();
//       handleLocalStorage.set("token", data.token);
//       history.push('/dashboard');
//     } catch (error) {
//       // Handle login failure
//       alert("Echec de l'enregistrement! Serveur déconnecté.");
//       console.log(user);
//       console.error(error);
//     }

//     setUser({email: '',  password: '' });
//   };

//   const handleLocalStorage = {
//     set: (key: string, value: string) => {
//       localStorage.setItem(key, value);
//     },
//     get: (key: string) => {
//       return localStorage.getItem(key);
//     },
//     remove: (key: string) => {
//       localStorage.removeItem(key);
//     },
//   };

















// const [showListeEvaluation, setShowListeEvaluation]=useState(fal)




     return(
        <div>
          
            {/* <nav>
                <Navbar title="Evaluation" Evaluation="Evaluation"/>
                
            </nav> */}
            {!showForm&&(
              <div className="Accueil">
                
            {/* {Questions.map((q) => (
                    <div key={q.id}>
                        <h4 className="question-text-1">Question {q.id+1}:</h4>
                        <p><span className="question-text">Enonce:</span> {q.Enonce}</p>
                        <p><span className="question-text">Reponse:</span>{q.Reponse}</p>
                        <p><span className="question-text">Type de Reponse:</span>{q.Type}</p>
                        <p><span className="question-text">Point:</span>{q.PointQuestion}</p>
                        {q.Type === 'select' && (
                        <div >
                        <span className="question-text">Options:</span>
                            <ol style={{marginLeft:"8%"}}>
                            {q.choix?.map((c, index) => (
                                <li key={index}>{c}</li>
                                ))}
                            </ol>
                            </div>
                        )}
                    </div>
                    ))} */}
               
               {Questionnaires.chapitre!='' ?(

          <div>


                  <ol >
                  {/* className="centrerBox INPUTT" style={{width:"40%", height:"auto"}} */}
                  {/* //> */}

                                      <li className="centrer INPUTT" style={{width:"50%", height:"60px", marginLeft:"3%",display:"flex", flexDirection:"row"}} onClick={()=>{setShowForm(!showForm); setShowListQuestion(true)}}>
                                          <img width="35" height="35" src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/22a2e3/external-homework-back-to-school-itim2101-lineal-itim2101.png" alt="school"/>
                                          <div className="" style={{marginLeft:"5%",width:"50%"}}><h5>{Questionnaires.chapitre}</h5></div>
                                          <div className="" style={{marginLeft:"20%",color:"rgba(0, 0, 0, 0.5)",width:"40%"}}><p >Date:{Questionnaires.dateEvaluation}</p></div>
                                      </li>


                      {/* <section className="box1">
                          <p style={{color:"#22a2e3", fontSize:"100%"}}><span style={{color:"black", fontSize:"70%"}}>Titre:</span>{Questionnaires.chapitre}</p>
                          <p style={{marginLeft:"30%",color:"red",fontSize:"60%"}}>Date:{Questionnaires.dateEvaluation}</p>
                  </section>
                  {/* <section className="box2">
                          <p><span style={{color:"#22a2e3"}}>Cours:</span>Nom du cours</p>
                          <p>Duree:{Questionnaires.Duree}</p>
                          <div className="centrerBox" style={{marginLeft:"40%",width:"40px", position:"relative",marginBottom:"1%"}}><Bouton name="Commencer" /></div>
                  </section> */} 
                  </ol>
                <div className="creer-E centrer" title="creer une evaluation"><Bouton name="Creer une evaluation" onClick={()=>{ setShowForm(true);}}/></div>
                </div>
               ):(
                <div>
                    <div className="centrer"><img  width="100" height="100" src="https://img.icons8.com/ios/100/22a2e3/box-important--v1.png" alt="box-important--v1"/></div>
                    <h3 className="centrer">vous n'avez pas d'evaluation en cours !</h3>
                <div className="creer-E centrer" title="creer une evaluation"><Bouton name="Creer une evaluation" onClick={()=>{ setShowForm(true);}}/></div>
            </div>
               )}
        
 </div>
)}          
                
            
       

            

        { showForm &&(<div className="formQuestion">
            
            
            
            
             {/* <CreerQestion /> */}
            

             <div >



{/* lISTE QUESTIONS */}




<div className="boxQuiz centrerBox">
{showListQuestion &&(
 <div style={{marginLeft:"5%"}}>
  {/* {Questions.map((QUESTION)=>())} */}
  <h1 className="question-text-1 centrer" style={{marginTop:"7%"}}>Titre de l'evaluation: {chapitre}</h1>
 {Questions.map((q) => (
   <div key={q.id}>
    <h4 className="question-text-1">Question {q.id+1}:</h4>
     <p><span className="question-text">Enonce:</span> {q.Enonce}</p>
     <p><span className="question-text">Reponse:</span>{q.Reponse}</p>
     <p><span className="question-text">Type de Reponse:</span>{q.Type}</p>
     <p><span className="question-text">Point:</span>{q.PointQuestion}</p>
     {q.Type === 'select' && (
      <div >
       <span className="question-text">Options:</span>
        <ol style={{marginLeft:"8%"}}>
          {q.choix?.map((c, index) => (
            <li key={index}>{c}</li>
            ))}
        </ol>
        </div>
      )}
   </div>
 ))}
 <Bouton name="Valider" onClick={()=>{setShowForm(false);setShowListQuestion(false); history.push("#") }} /> <Bouton name="Annuler" onClick={()=>{setShowListQuestion(false); setShowButton(true)}}/>
</div>
)}






{/* LISTE Evaluation*/}






{/* // FORMULAIRE DES QUESTIONS               */}
<div style={{marginTop:"-3%",position:"absolute"}} onClick={()=>{history.push('#');setShowForm(false);}}>
                <Bouton name="back" onClick={()=>{history.push('#')}} />
    </div>
    <form  onSubmit={handleSubmit} className="centrerBox">
    
    {showButton&&(    
      <>
       <h1 className="centrer" style={{marginTop:"4%"}}>Creer une evaluation</h1>
        <label className="centrer" > Entrer les information de l'evaluation</label>
    < Input2 
            label="Titre de l'evaluation:" 
            id="titre" 
            name="titre" 
            type="text" 
            value={chapitre.toString()}
            
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event && event.target) {
                setChapitre(event.target.value.toString())
            }}} />


      <Input2
            label="Nombre de questions:" 
            id="totalQuestions" 
            name="totalQuestions" 
            type="number" 
            value={nombreDeQuestions}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event && event.target) {
                const value = parseInt(event.target.value, 10); // Conversion de la chaîne en nombre
                setNombreDeQuestions(value)
                }
            }}  />
            
     <div className="  inputTime"> 
                <label className="question-text" >Date de l'evaluation:</label>
                <input 
                    type="datetime-local" 
                    id="meeting-time"
                    name="meeting-time" 
                    value={selectedDate}
                    min="2022-06-07T00:00" 
                    max="2024-06-14T00:00" 
                    onChange={handleDateChange}
                />
                <label className="question-text" >Duree de l'evaluation:</label>
                <input 
                    id="appt-time" 
                    type="time" 
                    name="appt-time" 
                    value={dure} 
                    onChange={handleTimeChange}
                />
                {/* {/* <label >Date de fin:</label> */}
                
        </div>    

      
            <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
            <Bouton name="SUIVANT" onClick={()=>{  checkInput()}}/>
            </div></>)}

             {/* Affichage des question */}
            {showQuestion&&(
              <>
              <h1 className="question-text-1 centrer" style={{marginTop:"7%"}}>{chapitre}</h1>
               <div style={{marginLeft:"0%",marginTop:"5%"}}>
                 <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}> {currentQuestion > 0 && (
                    <label  className="boutonItem centrerBox"> <Bouton name="precedent" onClick={()=>{handlePreviousQuestion();}} /></label>
                  )}
                  <div >{currentQuestion < nombreDeQuestions-1? (
                    <label className="boutonItem centrer"><Bouton name="Suivant" onClick={()=>{handleNextQuestion(); }} /></label>
                  ) : (
                    <p  className="boutonItem centrer"><Bouton name="terminer" onClick={()=>{handleLasttQuestion();setShowListQuestion(true)}}/></p>
                  )}</div>
                  </div>
                  <div style={{marginLeft:"0%", marginTop:"5%"}}>
                  {nombreDeQuestions>0&&( <div  style={{position:"absolute",width:"87.5%"}} >{ListeQuestions()}</div>)}
                  </div>
                  {/* <QuestionListe n={nombreDeQuestions} renderType={myRenderType} /> */}
                {/* {renderForm(questions[currentQuestion])} */}
               
                <div style={{width:"100%", height:"400px"}}></div>
                </div>
              
              
               
            </>
            )}
    </form>



</div> 
<div style={{width:"100%", height:"100px"}}></div>

</div>
























            <div style={{width:"100%", height:"200px"}}></div>
        </div>)}
        <div style={{width:"100%", height:"400px"}}></div>
        <Footer/>
        </div>
     );
}
export default Evaluation;