import React,{FunctionComponent} from "react";
import Navbar from "../../components/navbar";
import "./statistiques.css"
const Statistique:FunctionComponent=()=>{
    let val=false;
     return(
        <div>
            <nav style={{position:"relative",zIndex:"1"}}><Navbar title="Statistique" Evaluation={"Statistique"} 
            // add={val} notif={!val} compte={val}
            /> </nav>
            <div className="centrerBox" style={{paddingTop:"-20px"}} >
                <div className=" centrer">
                    <body style={{marginTop:"-5%",marginLeft:"-25%"}}>
                            <div className="profileimage">
                                <div className="centrer profile">
                                    <img src="img/Account.png" className="imageprofile" alt="image" />
                                </div>
                                <div className="nameperson"><span>eba ngolong jeanne</span></div>
                                <div className="roleperson">Eleve</div>

                            </div>
                            <div className="stats">
                                <div className="coursuivie">
                                    <span className="colorspan">Cours Suivie :</span><br/>
                                    <div className="displayspan"><span className="sizenumber colorsousspan1">7</span>
                                    </div>

                                </div>
                                <div className="devoirendu">
                                    <span className="colorspan">Devoirs Rendu :</span><br/>
                                    <div className="displayspan"><span className="colorsousspan2"><span className="sizenumber">21/</span>27</span></div>

                                </div>
                                <div className="evaluation">
                                    <span className="colorspan">Evaluations Effectuees :</span><br/>

                                    <div className="displayspan"><span className="colorsousspan3"><span className="sizenumber">2/</span>11</span></div>


                                </div>

                            </div>

                            <div className="resultat">
                                <div className="resultat1">
                                <span className="colorspan">cours où je m'en sors le mieux :</span><br/>
                                <div className="displayspan2"><span className="bleue">Mathematique</span><br/></div>
                                <div className="displayspan2"><span>rang :<span className="bleue">3eme</span></span><br/></div>
                                <div className="displayspan2"><span>Notes :<span className="colorsousspan2">45/60</span></span></div>

                                </div>
                                <div className="resultat2">
                                <span className="colorspan">cours où je m'en sors le moins :</span><br/>
                                <div className="displayspan2"><span className="bleue">chimie</span><br/></div>
                                <div className="displayspan2"><span>rang :<span className="bleue">37eme</span></span><br/></div>
                                <div className="displayspan2"><span>Notes :<span className="colorsousspan3">25/60</span></span></div>
                                </div>
                                <div className="resultat3">
                                <span className="colorspan">Derniere evaluation :</span><br/>
                                <div className="displayspan2"><span className="bleue">Mathematique Test2</span><br/></div>
                                <div className="displayspan2"><span>Notes :<span className="colorsousspan2">45/60</span></span></div>
                                <div className="displayspan2"><span>Progression :<span className="colorsousspan2">+7</span></span><br/></div>

                                </div>
                            </div>

                    </body>

                </div>
            </div>
        </div>
     );
}
export default Statistique;