import React,{ FormEvent, ChangeEvent, FunctionComponent, useState} from "react";
import { useHistory } from 'react-router-dom';
import logo from '../image/logo.png';
import "../../style/signin.css";
import Bouton from '../../components/Bouton';
import Footerbar from '../../components/footerbar'
import Input from "../../components/input";
import ico1 from "../image/icons/icons8-musique-internationale-50.png";
import ico2 from "../image/icons/icons8-école-64.png";
import ico3 from "../image/icons/icons8-étudiant-homme-30.png";
import { Link } from 'react-router-dom';


interface User {
    email: string;
    password: string;
  }
const Singin:FunctionComponent =()=>{
    const [user, setUser]=useState<User>({  email: '', password:''});
    const history = useHistory();


    const handleLocalStorage = {
      set: (key: string, value: string) => {
        localStorage.setItem(key, value);
      },
      get: (key: string) => {
        return localStorage.getItem(key);
      },
      remove: (key: string) => {
        localStorage.removeItem(key);
      },
    };
    handleLocalStorage.set("id","LOCALVALUE");
    console.log(handleLocalStorage.get("id"))

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(user),
          });
    
          if (!response.ok) {
            throw new Error('Failed to login');
          }
    
          // Handle successful login
          const data = await response.json();
          handleLocalStorage.set("token", data.token);
          handleLocalStorage.set("id",data.id);
          history.push('/dashboard');
        } catch (error) {
          // Handle login failure
          alert("Echec de l'enregistrement! Serveur déconnecté.");
          console.log(user);
          console.error(error);
        }
    
        setUser({email: '',  password: '' });
      };
    
      
    return(
        <div className="body">
        <div className="container-fluid center bg-white" style={{ height:"100%"}}>
            <div className="container" id="header">
                <img src={ logo } alt="logo" />
                <h3 className="title" style={{color:"#22a2e3"}}>Classwork</h3>
            </div>
            <div className='cercle2'></div>  
            <div className="cercle"></div>
            <div className="cercle0"></div>
            <div className='cercle1'></div>
                              
            <div className=" shado d-flex justify-content-center "  style={{width:"60%", height:"500px", marginLeft:"19%"}}>
                <div className="row" style={{width:"100%", height:"100%"}}>
                    <div className="row-left   text-white" >
                        <div className="cardre container center">
                            <h2 className="text-center" style={{paddingBottom:"15%"}}>Créer un Compte !</h2>
                            <p className="text-center">Afin de rejoindre vos camarade et commencer a suivre les TD et differents devoirs de classe.</p>
                                <Link to="/signin" >
                                    <button className="btt"><span>Inscription</span></button>
                                </Link>
                        </div>
                    </div>
                    <div className="row-rigth   text-black" >
                        {/* formulaire  */}
                        <form onSubmit={handleSubmit}>
                            <h2 className="inscription">Connexion</h2>
                           
                            <div className="icon"><img src={ ico1} alt="music"/><img src={ ico2} alt=" ecole"/><img src={ ico3} alt
                            =" student"/></div>
                            <p style={{paddingTop:"2%", paddingBottom:"10%"}}>Remplissez vos information</p>
                            
                                <div className="nom" >
                                {/* <Input 
                                name="name"
                                id="name"
                                    type="text" 
                                    label="Nom et Prenom" 
                                    value={(user.nom)}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        if (event && event.target) {
                                        setUser({ ...user, nom: event.target.value})
                                      }}}
                                    
                                      length={5}
                                    /> */}
                                </div>
                            
                                <div className="nom" >
                                    <Input  
                                        name="email"
                                        id="email"
                                        type="email" 
                                        label="Email" 
                                        value={(user.email)}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            if (event && event.target) {
                                            setUser({ ...user, email: event.target.value})
                                        }}}
                                        length={5}
                                    />
                                 </div>
                                     <div className="nom" >
                                         {/* <Input 
                                            name="matricule"
                                            id="matricule"
                                            type="text" 
                                            label="Matricule" 
                                            value={(user.matricule)}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                if (event && event.target) {
                                                setUser({ ...user, matricule: event.target.value})
                                            }}} 
                                            length={5}/> */}
                                     </div>
                                      <div className="nom" >
                                        <Input 
                                            name="password"
                                            id="password"
                                            type="password" 
                                            label="Mot de passe" 
                                            value={(user.password)}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                if (event && event.target) {
                                                setUser({ ...user, password: event.target.value})
                                            }}} 
                                            length={6}/>
                                     </div>
                                    {/* <div className=" nom form-group">
          
                                        <select
                                            id="role"
                                            name="role"
                                            value={user.role}
                                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                                 if (event && event.target) {
                                                setUser({ ...user, role: event.target.value})
                                            }}} 
                                            className="Select form-control" required>
                                            <option value="" >Role</option>
                                            <option value="student">Student</option>
                                            <option value="teacher">Teacher</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                </div> */}
                            <div className="nom Bouton" >
                            
                            <Link to="/dashboard"><Bouton name="Enregistrer"  /></Link>
                            
                            </div>
                        </form>
                        <div className="SE-Connecter">
                         <Link to="/signin"> <p className="ITem" style={{ fontWeight:"600", padding:"1%",textDecoration:"underline"}}> S'inscrire</p></Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
       
            <div className="footer" style={{ marginTop:'5%'}}>                    
              <Footerbar/>                  
              </div>
        </div>
    
    )
}

export default Singin;