import React,{FunctionComponent} from "react";
import Navbar from "../../components/navbar";
import Bouton from "../../components/Bouton";
import '../../style/dashboard.css';
import './cours.css';

const Evaluation:FunctionComponent=()=>{
     return(
        <div>
            <nav><Navbar title="COURS" Evaluation={"cours"}/> </nav>
            <div className="content">
                <div className="notcours centrer">
                <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/training.png" alt="training"/>
                <span className="centrer"><Bouton name="Rejoindre un cours"/></span>
                <a href="/" className="centrer">Creer un cours</a>
                </div>
            </div>
        </div>
     );
}
export default Evaluation;