import React,{FunctionComponent} from "react";
import Navbar from "../../components/navbar";


const Devoirs:FunctionComponent=()=>{
     return(
        <div>
            <nav><Navbar title="Devoirs" Evaluation={"Devoirs"}/> </nav>
            <div className="content">
                <div className="notcours centrer">
                
                </div>
            </div>
        </div>
     );
}
export default Devoirs;