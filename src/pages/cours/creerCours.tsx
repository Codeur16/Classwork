import React,{FunctionComponent, useState} from "react";
import Navbar from "../../components/navbar";
import Bouton from "../../components/Bouton";
import '../../style/dashboard.css';
import { useHistory } from "react-router-dom";
import './cours.css';
import { Link } from "react-router-dom";

const CreerCours:FunctionComponent=()=>{
    const [show,setShow] = useState(true)
    const [code, setCode]=useState<string>('');
    const [titreCours, setTitre]=useState<string>('');
    const [description, setDescription]=useState<string>('');
    const history=useHistory();
    const hadlecodeChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        event.preventDefault();
            if (event && event.target) {
            setCode(event.target.value)
          }
    }
    const hadleTitreChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        event.preventDefault();
            if (event && event.target) {
            setTitre(event.target.value)
          }
    }
    const hadleDescriptionChange =(event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        event.preventDefault();
            if (event && event.target) {
            setDescription(event.target.value)
          }
    }
    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        history.push('/cours');
        // Your logic for handling the form submission
      };
     return(
        <div>
            <nav><Navbar title="Creer un cours" Evaluation={"cours"}/> </nav>
            <div className="content">
                {show&&(
                <div className="notcours centrer">
                    <h3 style={{color:"#22a2e3", fontSize:"150%",fontWeight:"600",marginBottom:"0%",textDecoration:"underline" }} >Entrer les informations du cours</h3>
                    <form onSubmit={handleSubmit} style={{width:"100%"}}>
                        <div className="input-group Centrer-Box">
                            <div style={{width:"80%"}}>
                            <label htmlFor="cours-nom" style={{color:"#22a2e3", fontSize:"100%",fontWeight:"600"}}>Intitulè du Cours</label>
                            <input type="text" name="nom" id="nom" value={titreCours} onChange={hadleTitreChange} className="form-control" placeholder="Intitulè" required />
                            </div>
                            <div style={{width:"80%"}} >
                                <label htmlFor="cours-description" style={{color:"#22a2e3", fontSize:"100%",fontWeight:"600"}}>Description du cours:   </label>
                                <textarea name="description" id="description"value={description} onChange={hadleDescriptionChange} className="form-control"
                            //  rows='3'
                              required></textarea><br/>
                           </div>
                            <div className="centrer" style={{width:"80%", justifyContent:"space-around",marginBottom:"2%"}}>
                                {/* <input type="submit" className="btn btn-primary" value="Valider" /> */}
                                <div> <Bouton name="Enregistrer"/></div>
                                <div><Bouton name="Fermer" onClick={()=>{setTitre(''); setDescription('');history.push('/cours')}} /></div>
                                {/* <input type="reset" className="btn btn-outline-info" value="Annuler" /> */}
                            </div>
                            </div>
                        
                    </form>
                    <span className="centrer" style={{marginTop:"5%"}}><Bouton name="Rejoindre un cours" onClick={()=>{setShow(false)}}/></span>
                </div>
                )}
                 {!show&&(
                <div className="notcours centrer">
                    <h3 style={{color:"#22a2e3", fontSize:"150%",fontWeight:"600",marginBottom:"3%",textDecoration:"underline" }} >Entrer le code du cours</h3>
                    <form onSubmit={handleSubmit} style={{width:"100%"}}>
                        <div className="input-group Centrer-Box">
                            <div style={{width:"80%"}}>
                            <label htmlFor="cours-nom" style={{color:"#22a2e3", fontSize:"100%",fontWeight:"600"}}>Code du cours</label>
                            <input type="text" name="nom" id="nom" value={code} className="form-control" onChange={hadlecodeChange} placeholder="code" required />
                            </div>
                            
                            <div className="centrer" style={{width:"80%", justifyContent:"space-around",marginBottom:"2%"}}>
                                {/* <input type="submit" className="btn btn-primary" value="Valider" /> */}
                                <div> <Bouton name="Rejoindre" onClick={()=>{}}/></div>
                                <div><Bouton name="Fermer" onClick={()=>{setTitre(''); setDescription('');history.push('/cours')}}/></div>
                                {/* <input type="reset" className="btn btn-outline-info" value="Annuler" /> */}
                            </div>
                            </div>
                        
                    </form>
                    <span className="centrer" style={{marginTop:"5%"}}><Bouton name="Rejoindre un cours"/></span>
                </div>
                )}
            </div>
        </div>
     );
}
export default CreerCours;