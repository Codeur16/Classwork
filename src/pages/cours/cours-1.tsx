import React,{FunctionComponent, useState} from "react";
import Navbar from "../../components/navbar";
import Bouton from "../../components/Bouton";
import { useHistory } from "react-router-dom";
import '../../style/dashboard.css';
import './cours.css';
import { Link } from "react-router-dom";
import Footer from "../../components/footerbar";

const Cours:FunctionComponent=()=>{
    const [showCours, setShowCours] = useState(false);
    const history = useHistory();
     return(
        <div style={{position:"relative"}}>
          
                 <nav style={{position:"relative"}}><Navbar title="COURS" Evaluation={"cours"}/> </nav>
                 {showCours ?(
                    <div>
                    <div className="content">
                        <div className="notcours centrer">
                            <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/training.png" alt="training"/>
                            <Link to='/RejoindreCours' className="centrer"><Bouton name="Rejoindre un cours" onClick={()=>{history.push('/creerCours')}} /></Link>
                            <Link to='/CreerCours' className="centrer">Creer un cours</Link>
                        </div>
                    </div>
                    </div>
                ):(
                    <div>
                        <div className="Notcours centrer" style={{marginTop:"2%"}}>
                            <Link to='/CreerCours' style={{marginLeft:"70%",width:"20%",textDecoration:"none", position:"relative"}} className="centrer"><Bouton name="Creer un cours" onClick={()=>{history.push('/creerCours')}} /></Link>
                            
                        </div>
                <div className="ListeCours" style={{height:"100%"}}>
                       <div className="" style={{width:"20%" , height:"100%"}}>
                            {/* <img className="card-img-top" src="img_avatar1.png" alt="Card image" /> */}
                            {/* <div className="card-img-overlay">
                                <h4 className="" style={{fontSize:"150%",fontWeight:"600"}}>Base de Donnees</h4>
                                <p className="card-text">Information</p>
                                <div style={{marginTop:"45%"}}><Bouton name="Suivre" onClick={()=>{history.push('/coursDetails')}}/></div>
                            </div> */}
                             <ul className="cours-list">    
                               
                                 <li className="cours-item">
                                    
                                        <h5 className="title-cours">INF3055 <span>(SGBD)</span> </h5>
                                        <p className="description">Cours de gestion de base de donnees</p>
                                        <div style={{position:"relative",marginTop:"-6%", width:"20%", height:"10%", marginLeft:"73%"}}><Bouton name="Suivre" onClick={()=>{history.push('/coursDetails')}}/></div>
                                        
                                 </li>
                                 <li className="cours-item">
                                    
                                    <h5 className="title-cours">INF30550000 <span>(SGBD)</span> </h5>
                                    <p className="description">Cours de gestion de base de donnees</p>
                                    <div style={{position:"relative",marginTop:"-6%", width:"20%", height:"10%", marginLeft:"73%"}}><Bouton name="Suivre" onClick={()=>{history.push('/coursDetails')}}/></div>
                                    
                             </li>
                             <li className="cours-item">
                                    
                                    <h5 className="title-cours">INF3055 <span>(SGBD)</span> </h5>
                                    <p className="description">Cours de gestion de base de donnees</p>
                                    <div style={{marginTop:"-6%", width:"20%", height:"10%", marginLeft:"73%"}}><Bouton name="Suivre" onClick={()=>{history.push('/coursDetails')}}/></div>
                                    
                             </li>
                        </ul>
                           
                            </div>

                        
                         
                </div>
                
                </div>)
                }
                {/* <Footer/> */}
        </div>
     );
}
export default Cours;