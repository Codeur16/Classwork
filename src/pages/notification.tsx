import React,{ FunctionComponent} from "react";
import Navbar from "../components/navbar";
import BoutonLarge from '../components/bouton-large'
import '../style/notification.css';
import Bouton from "../components/Bouton";
import Footer from "../components/footerbar";
import { Link } from "react-router-dom";
import notif from './image/icons/icons8-rappels-de-rendez-vous-100.png';
// const [showSidebar, setShowSidebar] = useState(false);
const Notification:FunctionComponent =()=>{

    return(
        <div >
            <nav style={{position:"relative", zIndex:"2" }} ><Navbar title="Notification" add={false} Evaluation={"Notification"} notif={false} /></nav>
{/* NAVBAR */}
        <div className="BODY-notif"> 

           {/* <div className="notification" > */}
              {/* liste non ordonnee de notification */}
              <ul className="UL">
                {/* <li className="UL-li">
                    <h3>Nouvelle evaluation</h3>
                    <span>Evaluation</span>
                    <p>Description de la notification!</p>
                </li> */}
                 <li className="cours-item" style={{width:"80%", height:"auto"}}>                  
                    <h5 className="title-cours"><img width="20" height="20" src={notif} alt=""/>Titre de la notification <span>(Evaluation)</span> </h5>
                    <p className="Descriptions">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description de la notification!Avec CSS, on peut appliquer plusieurs arrière-plans à des éléments. Ceux-ci seront empilés les uns sur les autres (le premier de la liste étant le plus « haut » dans la pile et le dernier étant le plus « bas ». Seul le dernier arrière-plan peut décrire une couleur.
                        Pour cela, il suffit d'utiliser une liste de valeur avec background :
                        maClasse background: background1, background2, ..., backgroundN;
                        Copy to Clipboard Cela fonctionne aussi bien avec la propriété raccourcie background qu'avec les propriétés détaillées, exception faite de background-color. On peut donc utiliser une liste de valeurs, chacune pour un arrière-plan différent, pour les propriétés suivantes : background, background-attachment, background-clip, background-image, background-origin, background-position, background-repeat, background-size.
                    </p>
                </li>
                <li className="cours-item" style={{width:"80%", height:"auto"}}>                  
                    <h5 className="title-cours"><img width="20" height="20" src={notif} alt=""/>Nouvelle evaluation <span>(Evaluation)</span> </h5>
                    <p className="Descriptions">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description de la notification!Avec CSS, on peut appliquer plusieurs arrière-plans à des éléments.
                        </p>
                </li>
              </ul>
           {/* </div> */}
        </div>
           {/* <Footer/> */}
        </div>
    )
}
export default Notification;