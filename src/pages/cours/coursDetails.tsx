import React,{FunctionComponent, useState} from "react";
import Navbar from "../../components/navbar";
import Bouton from "../../components/Bouton";
import { useHistory } from "react-router-dom";
import '../../style/dashboard.css';
import './cours.css';
import { Link } from "react-router-dom";
import logo from '../image/icons8-menu-48.svg';
import user from '../image/icons/icons8-utilisateur-100.png';
import MyInput from "../../components/input";
import Input2 from "../../components/input2";
import Evaluation from "../Evaluation/evaluation-accueil";
import Sidebar from "../../components/style/sidebar";



const CoursDetails:FunctionComponent=()=>{
    const [showCours, setShowCours] = useState(false);
    const history = useHistory();
    const [isActive, setIsActive] = useState<number | null>(1);
    const [showSupport, setShowSupport] = useState(true);
    const [showTD, setShowSTD] = useState(false);
    const [showEvaluation, setShowEvaluation] = useState(false);
    const [showParticipants, setShowParticipant] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [TD, setTD]=useState(true)
    const [Enseignant]=useState<string[]>(["nom1", "nom2", "nom3"]);
    const [Etudiants]=useState<string[]>(["Etudiant1", "Etudiant2"]);
    const [showSidebar, setSidebar]=useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Logique de traitement du formulaire ici
  
      // Fermer le popup après la soumission
      togglePopup();
    };

    const handleClick = (id: number) => {
        setIsActive(id);
      };
    
     return(
        <div>
          
                 <nav className="Navbar">
                    <div className="Box1">
                        <div className="img">
                        <img src={ logo} className=" logo-custom  h-50 img-fluid" alt="logo"  
                            // onMouseMove={hadleShow}
                            onClick={()=>{setSidebar(!showSidebar)}}
                            />
                            {showSidebar&&(
                                <div style={{zIndex:"5"}}> <Sidebar/></div>
                            )}
                        </div>
                        <div className="coursTitle">
                            <h3>Base de Donnees</h3>
                            <p>Informatique</p>
                        </div>
                    </div>
                    <div className="Box2">
                        <div className={ isActive===1? "Active":"Box2-item "} onClick={()=>{handleClick(1); setShowSTD(false);setShowSupport(true);setShowEvaluation(false);setShowParticipant(false)}}>Supports</div>
                        <div className={ isActive===2? "Active":"Box2-item "} onClick={()=>{handleClick(2); setShowSTD(true);setShowSupport(false);setShowEvaluation(false);setShowParticipant(false)}}>Travaux Dirige</div>
                        <div className={ isActive===3? "Active":"Box2-item "} onClick={()=>{handleClick(3); setShowSTD(false);setShowSupport(false);setShowEvaluation(true);setShowParticipant(false)}}>Evaluation</div>
                        <div className={ isActive===4? "Active":"Box2-item "} onClick={()=>{handleClick(4); setShowSTD(false);setShowSupport(false);setShowEvaluation(false);setShowParticipant(true)}}>Participants</div>
                    </div>
                    <div className="Box3">
                        <img src={user} alt="Compte" />
                    </div>

                 </nav>
                

                 {showSupport &&(
                    <div className="support">
                        <div className="Container">
                            <div className="Containaer1">
                                
                                <h2 className="">Base de Donnees</h2>
                                <p>Informatique</p>
                            </div>
                            <div className="Container2">
                                <div className="Container2Left">
                                    <div className="codeCours">
                                        <h5>Code du cours</h5>
                                        <p>Code</p>
                                    </div>
                                    <div className="Description">
                                        <h5>Description</h5>
                                        <p>voici une description</p>
                                    </div>
                                </div>
                                <div className="Container2Rigth">
                                    <div className="INPUT">
                                        <label>Faire une annoncer a votre classe </label>
                                        <div>
                                            <img src={user} alt="" />
                                            <input type="text" name="annonce" id="annonce"/>
                                        </div>

                                    </div>
                                    {/* AAfficher l'annonce */}
                                    <div className="INPUT">
                                        <p>Affichages du dernier message</p>
                                    </div>
                                    <div className="INPUT">
                                    <label>Ajouter un support de cours </label>
                                        <input type="file" name="annonce" id="annonce" />
                                    </div>
                                    <div className="INPUT">
                                        <p>Affichage des fichier support</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                 )}
                 {showTD&&(
                    <div className="support">
                        <div className="Container">
                            <div className="INPUT">
                                <div className="Box2" style={{display:"flex", justifyContent:"space-around"}}>
                                <div className={ isActive===2 && TD===true? "Active":"Box2-item "} onClick={()=>{handleClick(2); setTD(true)}} style={{width:"50%", fontSize:"110%"}}>Travaux Dirige  </div>
                                <div className={ isActive===2 && TD===false? "Active":"Box2-item "} onClick={()=>{handleClick(2); setTD(false)}} style={{width:"50%", fontSize:"110%",marginRight:"-500px"}}>Devoirs Remis</div>
                                </div>
                            </div> 
                              {/* content  */}

                              {TD===true?(<>
                              <div className="" style={{display:"flex", flexDirection:"column",justifyContent:"space-around"}}>
                                    <div className="" style={{width:"40%", marginTop:"5%"}}> <Bouton name="Ajouter un TD" onClick={togglePopup} /></div>
                                   {isOpen&&(
                                    <div className="Popup">
                                    {/* <div className="popup-content"> */}
                                      <h2>Ajouter un TD</h2>
                                      <form onSubmit={handleSubmit} style={{width:"100%", height:"110%"}}>
                                            <div className=" CentrerBox">
                                            <div style={{width:"100%"}}>
                                            <label htmlFor="cours-nom" style={{color:"#22a2e3", fontSize:"100%",fontWeight:"600"}}>Intitulè</label>
                                            <input type="text" name="nom" id="nom"  className="form-control" placeholder="Intitulè" required />
                                            </div>
                                            <div style={{width:"100%"}} >
                                                <label htmlFor="cours-description" style={{color:"#22a2e3", fontSize:"100%",fontWeight:"600"}}>Consigne:</label>
                                                <textarea name="description" id="description" className="form-control"
                                            //  rows='3'
                                            required></textarea><br/>
                                        </div>
                                        <div style={{width:"100%"}} >
                                                <label htmlFor="cours-description" style={{color:"#22a2e3", fontSize:"100%",fontWeight:"600"}}>Fichier du TD:   </label>
                                                <input type="file" name="nom" id="nom"  className="form-control" placeholder="Intitulè" required />
                                            
                                        </div>
                                            <div className="centrer" style={{width:"80%", justifyContent:"space-around",marginTop:"5%"}}>
                                                {/* <input type="submit" className="btn btn-primary" value="Valider" /> */}
                                                <div> <Bouton name="Enregistrer"/></div>
                                                <div><Bouton name="Fermer" onClick={togglePopup} /></div>
                                                {/* <input type="reset" className="btn btn-outline-info" value="Annuler" /> */}
                                            </div>
                                            </div>
                        
                    
                                        
                                        {/* <label style={{marginTop:"20%"}}><Bouton name="Enregistrer"/></label> */}
                                      </form>
                                      {/* <label><Bouton name="Fermer" onClick={togglePopup}/></label> */}
                                    {/* </div> */}
                                  </div>
                                   )}
                                   
                                    <div className="INPUTT" style={{width:"100%", height:"60px", marginTop:"5%",display:"flex", flexDirection:"row"}}>
                                        <img width="35" height="35" src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/22a2e3/external-homework-back-to-school-itim2101-lineal-itim2101.png" alt="school"/>
                                        <div className="" style={{marginLeft:"5%",width:"50%"}}><h5>Nom du document</h5></div>
                                        <div className="" style={{marginLeft:"30%",color:"rgba(0, 0, 0, 0.5)",width:"20%"}}><p >publie le 12-01-23</p></div>
                                    </div>
                              </div>
                              </>):(<>
                              <h3>Liste des Devoirs remis</h3>
                              </>)} 
                        </div>
                    </div>
                 )}
                 
                 {showEvaluation&&( 
                    <div style={{paddingTop:"10%"}}>
                    <Evaluation />
                    </div>
                 )}
                 {showParticipants&&(<>
                 <div className="participanBody">
                    <div className="partipantEnseignat">
                        <div className="d-flex"> 
                             <h3>Enseignants:</h3>
                             <img style={{marginLeft:"180%"}} width="30" height="30" src="https://img.icons8.com/ios/50/22a2e3/add-user-male.png" alt="add-user-male"/>
                        </div>
                    <div className="Line"></div>
                    <div className="listeEnseignant">
                        {Enseignant.map((q,index)=>(
                        <ul>
                            <li style={{fontSize:"60%", color:"black"}}>Nom: <span style={{ color:"#22a2e3"}}>{q}</span></li>
                        </ul>
                        ))}
                    </div>
                    </div>
                    <div className="partipantEtudiant">
                    <div className="d-flex"> 
                             <h3>Etudiants:</h3>
                             <img style={{marginLeft:"225%"}} width="30" height="30" src="https://img.icons8.com/ios/50/22a2e3/add-user-male.png" alt="add-user-male"/>
                        </div>
                    <div className="Line"></div>
                    <div className="listeEtudiant">
                        
                        <ol>
                        {Etudiants.map((q,index)=>(
                            <div className="d-flex centrer" key={index}>
                            <li style={{fontSize:"60%", color:"black",padding:"10px"}}>{q}</li>
                            <span  style={{paddingLeft:"250%",paddingTop:"10px"}}><Bouton name="supprimer"/></span>
                            </div>
                        ))}
                            </ol>
                       
                    </div>
                    </div>
                 </div>
                 </>)}
        </div>
     );
}
export default CoursDetails;