import React,{FunctionComponent, useRef} from "react";
import Navbar from "../../components/navbar";
import './compte.css';
import Bouton from "../../components/Bouton";
import Sidebar from "../../components/style/sidebar";
import Footer from "../../components/footerbar";

const Compte:FunctionComponent=()=>{


  const nameRef = useRef<HTMLInputElement>(null);
  const matriculeRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  const motpasseRef = useRef<HTMLInputElement>(null);

  const enableFields = () => {
    nameRef.current?.removeAttribute('disabled');
    matriculeRef.current?.removeAttribute('disabled');
    mailRef.current?.removeAttribute('disabled');
    roleRef.current?.removeAttribute('disabled');
    motpasseRef.current?.removeAttribute('disabled');
  };
    const val = false;
     return(
        <div>
            <nav style={{position:"absolute"}}><Navbar title="Compte" Evaluation={"Compte"}
             add={val} notif={!val} compte={val}
            /> </nav>
            <div className="content">
            <body className="BODY">
     <div className="Profile">
        <div className="Img">
            <img src="" alt=""/>
        </div>
        <div className="Nom">
            <p className="nom">USER NAME</p>
            <p className="role">eleve</p>
        </div>
        
     </div>
      <div className="monformulaire">
      
        <form action="#" className="content">
          <h1>Vos informations</h1>
          <div>
            <label htmlFor="name">Nom et prénom</label>
            <input
              type="text"
              name="nom"
              id="name"
              placeholder="eba ngolong jeanne"
              value="eba ngolong jeanne"
              disabled
              ref={nameRef}
            />
          </div>
          <div>
            <label htmlFor="matricule">Matricule</label>
            <input
              type="text"
              name="matricule"
              id="matricule"
              placeholder="20U2960"
              value="20U2960"
              disabled
              ref={matriculeRef}
            />
          </div>
          <div>
            <label htmlFor="mail">E-mail</label>
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="jeanne@gmail.com"
              value="jeanne@gmail.com"
              disabled
              ref={mailRef}
            />
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              id="role"
              placeholder="eleve"
              value="eleve"
              disabled
              ref={roleRef}
            />
          </div>
          <div>
            <label htmlFor="motpasse">mot de passe</label>
            <input
              type="password"
              name="motpasse"
              id="motpasse"
              placeholder="******"
              value="******"
              disabled
              ref={motpasseRef}
            />
          </div>
          <div className="buttons">
            <Bouton name="Enregistrer" />
            <Bouton name="Modifier" onClick={enableFields} />
            {/* <button type="submit">Enregistrer</button>
            <button onClick={enableFields}>Modifier</button> */}
          </div>
        </form>
      </div>
    </body>
            </div>
            <Footer />
        </div>
     );
}
export default Compte;