import React,{ FunctionComponent} from "react";
import Navbar from "../components/navbar";
import BoutonLarge from '../components/bouton-large'
import '../style/dashboard.css';
import Bouton from "../components/Bouton";
import Footer from "../components/footerbar";
import { Link } from "react-router-dom";
// const [showSidebar, setShowSidebar] = useState(false);
const dashboard:FunctionComponent =()=>{
    //const user

    // const handleButtonClick = () => {
    //   setShowSidebar(!showSidebar);
    // };
    // .Image{
    
    //     width: 20%;
    //     position: relative;
    //     top: 58px;
    //     left: 10px;
    //     color: aliceblue;
    //     margin-top:-10px;
    //     z-index: 1;
    //   }
    return(
        <div className="body">
{/* NAVBAR */}
           <div> <nav style={{position:"relative", zIndex:"2" }} ><Navbar title="Tableau de bord" Evaluation="Evaluation"/></nav></div>

           <div className="menu-box" >
                <div className="menu container-fluid d-flex " >
                <div className="menu-item justify-content-center" ><Link to="/cours"><BoutonLarge name="COURS" image=" https://img.icons8.com/ios-filled/80/FFFFFF/knowledge-sharing.png" alt="img"/></Link></div>
                    <div className="menu-item justify-content-center" > <Link to="/devoir"><BoutonLarge name="DEVOIRS" image=" https://img.icons8.com/external-itim2101-fill-itim2101/70/FFFFFF/external-homework-back-to-school-itim2101-fill-itim2101.png" alt="img"/></Link></div>
                    <div className="menu-item  justify-content-center"><Link to="/evaluation"><BoutonLarge name="EVALUATIONS" image=" https://img.icons8.com/ios-filled/50/FFFFFF/test-partial-passed.png" alt="img"/></Link></div>
                    <div className="menu-item  justify-content-center"><Link to="/statistique"><BoutonLarge name="STATISTIQUE" image=" https://img.icons8.com/ios-filled/50/FFFFFF/group-of-projects.png" alt="img"/></Link></div>
                </div>
           </div>
        <div className="Body d-flex">
            <div className="Body-left">
                    <section id="cours" className="cours">
                    <div className="cours-title">
                        <img src="https://img.icons8.com/ios-filled/50/22a2e3/filled-circle.png" className="circle" alt="circle"/>
                        <h3>Cours</h3>
                    </div>
                    <div className="line"></div>
                    <div className="cours-box centerBlock">
                        <ul className="cours-list">
                            <li className="cours-item">
                                <h5 className="title-cours">INF3055 <span>(SGBD)</span> </h5>
                                <p className="description">Cours de gestion de base de donnees</p>
                            </li>
                            <li className="cours-item">
                                <h5 className="title-cours">INF3075 <span>(Reseaux & Systeme)</span> </h5>
                                <p className="description">Cours de approfondi sur les Systeme et Reseaux</p>
                            </li>
                        </ul>
                        <div className=" centrer bouton">
                            <Bouton name="Voir plus" />
                        </div>
                    </div>
                </section>
                 {/* sections devoirs */}
                 <section id="cours" className="cours">
                    <div className="cours-title">
                        <img src="https://img.icons8.com/ios-filled/50/22a2e3/filled-circle.png" className="circle" alt="circle"/>
                        <h3>Devoirs</h3>
                    </div>
                    <div className="line"></div>
                    <div className="cours-box centerBlock">
                        <ul className="cours-list">
                            <li className="cours-item">
                                <h5 className="title-cours">INF3055 <span>(SGBD)</span> </h5>
                                <p className="description">Cours de gestion de base de donnees</p>
                            </li>
                            <li className="cours-item">
                                <h5 className="title-cours">INF3075 <span>(Reseaux & Systeme)</span> </h5>
                                <p className="description">Cours de approfondi sur les Systeme et Reseaux</p>
                            </li>
                        </ul>
                        <Bouton name="Voir plus"/>
                    </div>
                </section>
                 {/* sections Evaluations */}
                 <section id="cours" className="cours">
                    <div className="cours-title">
                        <img src="https://img.icons8.com/ios-filled/50/22a2e3/filled-circle.png" className="circle" alt="circle"/>
                        <h3>Evaluation</h3>
                    </div>
                    <div className="line"></div>
                    <div className="cours-box centerBlock">
                        <ul className="cours-list">
                            <li className="cours-item">
                                <h5 className="title-cours">INF3055 <span>(SGBD)</span> </h5>
                                <p className="description">Cours de gestion de base de donnees</p>
                            </li>
                            <li className="cours-item">
                                <h5 className="title-cours">INF3075 <span>(Reseaux & Systeme)</span> </h5>
                                <p className="description">Cours de approfondi sur les Systeme et Reseaux</p>
                            </li>
                        </ul>
                        <Bouton name="Voir plus"/>
                    </div>
                    <div>
      {/* <button onClick={handleButtonClick} onMouseEnter={handleButtonClick}>
        Cliquez ou survolez-moi pour afficher la barre latérale
      </button>
      {showSidebar && (
        <div style={{ position: 'absolute', left: 0, top: 0, width: '200px', height: '100vh', backgroundColor: '#ccc' }}>
          Contenu de la barre latérale
        </div>
      )} */}
    </div>
                </section>
            </div>
            <div className="Body-rigth">
                <div className="content">
                    <h1>Statistiques</h1>
            <p>
Attention, une balise est un élément block par défaut, si vous voulez centrer un autre élément comme une baliseil faudra lui rajouter la propriété CSS display: block.
Dans les exemples plus bas, les propriétés CSS comme width etc ne seront pas répétées, elles seront sous entendues.

 

Display : inline-block
Cette fois-ci, pas besoin de margin: auto :


CSS
text-align: center; sert habituellement à centrer du texte, des éléments inline en somme. Inline-block est aussi affecté par cette cette propriété.


Trouvez le meilleur développeur web sur Codeur.com

Vos premiers devis en 15 minutes

Gratuit et sans obligation

Déjà plus de 75 000 clients

Trouver un freelance
 
!</p> </div>
            </div>

           </div>
           <Footer/>
        </div>
    )
}
export default dashboard;