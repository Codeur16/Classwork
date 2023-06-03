import React,{ FunctionComponent, useEffect, useState} from "react";
import Navbar from "../components/navbar";
import BoutonLarge from '../components/bouton-large'
import '../style/dashboard.css';
import Bouton from "../components/Bouton";
import Footer from "../components/footerbar";
import { Link, match } from "react-router-dom";
// const [showSidebar, setShowSidebar] = useState(false);
interface CoursModel{
     id: number,
     title: string,
     instructions: string,
     time: string,
     status: string,
     expiration: string,
}
const Dashboard:FunctionComponent =()=>{
   


    const [Cours, setCours]=useState<CoursModel>({
        id: 0,
        title: '',
        instructions: '',
        time: '',
        status: '',
        expiration: '',
    });
    // useEffect(()=>{
         
        //     const fetchData = async () => {
        //     try{
        //         const response = await fetch('https://example.com/data.json',{
        //             method: 'GET',
        //             headers: {
        //               'Content-Type': 'application/json',
        //               'Access-Control-Allow-Origin': '*',
        //             },
        //             // body: JSON.stringify(user),
        //           });
        //         const json = await response.json();
        //         alert("ok")
        //         const Cours = json;
        //         console.log(Cours);
        //         alert(Cours);
        //     }
        //     catch{
        //         alert("error");
        //         console.log("error");
        //     }
        // }

        const fetchData = async (cours:CoursModel) => {
            try {
              const response = await fetch('http://192.168.43.196:8080/api/v1/teacher/1/classe/');
              const json = await response.json();
              alert("ok")
               cours={
                id: json.id,
                title: json.title,
                instructions: json.instructions,
                time: json.time,
                status: json.status,
                expiration: json.expiry,
              }
              console.log(cours);
              alert(cours);
            } catch (error) {
            //   alert("error");
              console.log("error");
            }
          }
          

            fetchData (Cours);
   
    

    return(
        <div className="body">
{/* NAVBAR */}
           <div> <nav style={{position:"relative" }} >
            <Navbar title="Tableau de bord" Evaluation="Evaluation"/></nav>

           <div className="menu-box" >
                <div className="menu container-fluid d-flex " >
                <div className="menu-item justify-content-center" ><Link to="/cours"><BoutonLarge name="COURS" image=" https://img.icons8.com/ios-filled/80/FFFFFF/knowledge-sharing.png" alt="img"/></Link></div>
                    <div className="menu-item justify-content-center" > <Link to="/devoir"><BoutonLarge name="DEVOIRS" image=" https://img.icons8.com/external-itim2101-fill-itim2101/70/FFFFFF/external-homework-back-to-school-itim2101-fill-itim2101.png" alt="img"/></Link></div>
                    <div className="menu-item  justify-content-center"><Link to="/evaluation"><BoutonLarge name="EVALUATIONS" image=" https://img.icons8.com/ios-filled/50/FFFFFF/test-partial-passed.png" alt="img"/></Link></div>
                    <div className="menu-item  justify-content-center"><Link to="/statistique"><BoutonLarge name="STATISTIQUE" image=" https://img.icons8.com/ios-filled/50/FFFFFF/group-of-projects.png" alt="img"/></Link></div>
                </div>
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
                    <div className="Container2Left-dash">
                                    <div className="codeCours-dash">
                                        <h5>Nombre de devoirs</h5>
                                        <p><span className="SPAN">En attente:</span>5</p>
                                        <p><span className="SPAN">Remis:</span>10</p>
                                    </div>
                                    <div className="codeCours-dash">
                                        <h5>Nombre Evaluation</h5>
                                        <p><span className="SPAN">En attente:</span>5</p>
                                        <p><span className="SPAN">Remis:</span>10</p>
                                    </div>
                                    <div className="codeCours-dash">
                                        <h5>Nombre cours</h5>
                                        <p>Cours suivie</p>
                                    </div>
                                </div>
                </div>
            </div>

           </div>
           <Footer/>
        </div>
    )
}
export default Dashboard;