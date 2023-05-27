import React,{ FunctionComponent, useState} from "react";
import logo from "../pages/image/icons8-menu-48.svg";
import user from '../pages/image/icons/icons8-utilisateur-100.png';
import add from '../pages/image/icons/icons8-dupliquer-96.png';
import alert from '../pages/image/icons/icons8-rappels-de-rendez-vous-100.png';
import { Link } from "react-router-dom";
import "./style/navbar.css"
import Sidebar from "./style/sidebar";

interface props{
    title:string;
    Evaluation:string;
}
const Navbar: FunctionComponent<props>=({title, Evaluation})=>{
    const [show, setShow]=useState(false);
    const hadleShow=()=>{
        setShow(!show);
    }

    return(
        <div className="body" style={{position:"absolute"}} >
{/* NAVBAR */}

            <nav className="navbar navbar-expand-lg  fixed- center-contenu " style={{position:"fixed", backgroundColor:"white"}}>
                <div className="center-contenu  container-fluid d-flex w-100" style={{position:"fixed"}}>
                    <div className="d-flex" style={{width:"30%", textAlign: "left"}}>
                        <div className=" logo-box flex-grow-1 container w-5 h-5" style={{ textAlign: "left"}} onClick={hadleShow}>
                        
                            <img src={ logo} className=" logo-custom  h-50 img-fluid" alt="logo" onClick={hadleShow} 
                            // onMouseMove={hadleShow}
                            />
                            {show &&( <Sidebar/>)}
                        </div>
                        <div className="pt-3 col-md-0 mx-auto container">
                            <h3 className=" dflex-grow-1 text-custom">Classwork</h3>  
                        </div>
                    </div>
                    <div className="center-contenu d-flex box-title"  >
                        <h3 className="  dflex-grow-1 text-custom"> {title}</h3>
                    </div>
                    <div className="img-box center-contenu " style={{width:"30%",textAlign:"right"}}>
                        <div><Link to={"/"+Evaluation}><img title={"Ajouter "+Evaluation} src={ add} alt="notif" className="icon1 "  /></Link></div>
                       <div> <Link to="/notification"><img title="notification" src={ alert} alt="notif" className="icon2" /></Link></div>
                       <div> <Link to="/compte"><img title="compte" src={ user} alt="notif" className="icon3" /></Link></div>
                    </div>
                </div>
            </nav>


        </div>
    )
}
export default Navbar;