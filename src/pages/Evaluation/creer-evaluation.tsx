import React,{ FunctionComponent, useState} from "react";
import Input2 from "../../components/input2";
import '../../style/dashboard.css';
import '../Evaluation/evaluation.css';
import Bouton from "../../components/Bouton";
import '../../style/signin.css';
import MyInput from "../../components/input";
import {question} from '../../models/questionModel';

const QUESTIONS: question[]=[
  {
      id:0,
      Enonce:'',
      Reponse:'',
      Type:'',
      PointQuestion:0,
      choix:['']
  } ]
interface questionItem{
      id:number,
      Enonce:string,
      Reponse:string,
      Type:string,
      PointQuestion:number,
      choix?:Array<string>;
}



const CreerQestion: FunctionComponent=()=>{

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [Questions,setQuestions]=useState(QUESTIONS);
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



/**enregitre les  */




const handleNextQuestion = () => {
  SaveQuestion(currentQuestion);
  setCurrentQuestion(currentQuestion + 1);
};
 const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

const handleNombreDeQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombreDeQuestions(parseInt(event.target.value));
}

const SaveQuestion =(currentIndex:number)=>{
 QuestionsItem.id=currentIndex;
 QuestionsItem.choix=choices;
 console.log(QuestionsItem);
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
console.log(choices);
if(QuestionsItem){
console.log(QuestionsItem);}
}
/* Declarationdes variables */
  let Input;
   let choix;
   let ListeQuestion;
   let numChoix=0;



   const RenderQuestionItem=()=>{
    if( QuestionsItem.Type ==="text"){
        // Question.pointsQuestion=quiz.pointsQuestion;
     return  ( Input=(
            <div>
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
            <div>
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
               <div>
                 <ol>
                {choices.map((val, index)=>(
                  
                    <li key={index}>{val}</li>
                    )) } 
                    </ol>
                </div>
                {showInputChoice&&(<div>
                  <Input2 
                  label={"Option [ "+currentChoice+" ] :"} 
                  id="choix" 
                  name="choix" 
                  type="text" 
                  value={inputChoix}
                  onChange={handleInputChoice}
                 />
                 <Bouton name="Enregistrer l'option" onClick={()=>{setShowInputChoice(true); setShowInputChoice(false);handleAddChoice();  }} />
                </div>)}





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
    <label>Question {currentQuestion+1}:</label>
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


    return(
        <div className="boxQuiz centrerBox">
            
            <div>
                    <h1 className="centrer" style={{marginTop:"4%"}}>Creer une evaluation</h1>
                    <label className="centrer" > Entrer les information de l'evaluation</label>
                <form  onSubmit={handleSubmit} className="centrerBox">
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

{showButton&&( 
                <>  <Input2
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

                  
                        <div style={{width:"50%",marginLeft:"25%"}} className="centrer">
                        <Bouton name="SUIVANT" onClick={()=>{setShowButton(false); console.log('chapitre:'+chapitre,'NombreQuestions: '+nombreDeQuestions); setShowQuestion(true)}}/>
                        </div></>)}

                         {/* Affichage des question */}
                        {showQuestion&&(
                          <>
                           <div >
                              {currentQuestion > 0 && (
                                <label  style={{width:"40%",marginLeft:"20%",marginTop:"5%",position:"relative"}} className="centrerBox"> <Bouton name="precedent" onClick={()=>{handlePreviousQuestion();}} /></label>
                              )}
                              {currentQuestion < nombreDeQuestions? (
                                <label style={{width:"40%",marginLeft:"40%",marginBottom:"5%",position:"relative"}} className="centrer"><Bouton name="Suivant" onClick={()=>{handleNextQuestion(); }} /></label>
                              ) : (
                                <p style={{width:"40%",marginLeft:"40%",position:"relative"}} className="centrer"><Bouton name="terminer" /></p>
                              )}
                              {nombreDeQuestions>0&&( <div  style={{position:"absolute",width:"100%"}} >{ListeQuestions()}</div>)}
                              {/* <QuestionListe n={nombreDeQuestions} renderType={myRenderType} /> */}
                            {/* {renderForm(questions[currentQuestion])} */}
                            </div>
                          
                          
                           
                        </>
                        )}
                </form>

   
    
    </div> 
    </div>
    )
}
export default CreerQestion;














//  {/* <div>
//                 <h1>Questions</h1>
//                 <div>
//                 <label>Question:</label>
                
               
//                 <select
//                      id="type"
//                     name="type"
//                      value={Question.type}
//                      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
//                                                  if (event && event.target) {
//                                                 setQuestion({ ...Question, type: event.target.value})
//                      }}} 
//                      className="Select form-control" required>
//                      <option value="" >Type de question</option>
//                      <option value="text">Text</option>
//                      <option value="select">Select</option>
//                 </select>


//                   {showButton&&(  <div style={{width:"50%",marginLeft:"25%", marginTop:"2%"}} className="centrer">
//                         <Bouton name="SUIVANT" onClick={()=>{setShowInput(true); console.log(Question); setShowButton(false)}}/>
//                         </div>)}


//                 {showInput&&(
                    
//                     <div>
//                         {Input}
//                     </div>
//                 )}
                
//             </div>
//             </div> */}