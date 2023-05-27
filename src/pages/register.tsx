import React, { FunctionComponent , useState } from "react";		//import our user model and useState to create our user component.
import "../style/style-register.css";

const initialUserState = {
  name: "",
  email: "",
  role: "",
  password: ""
};

const Register:FunctionComponent=()=>{
  const [user, setUser] = useState(initialUserState);

  // const handleSubmit = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   console.log(user);
  //   setUser(initialUserState);
  // };
/* ENVOI DES DONNEES DU FORMULAIRE */
const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  console.log(user);
  try {
    const response = await fetch("http://example.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log(data);
    setUser(initialUserState);
    alert("Utilisateur enregistré avec succès !");
  } catch (error) {
    console.error(error);
    alert("Une erreur s'est produite lors de l'enregistrement de l'utilisateur.");
  }
};


  // const userReact = <pre>{JSON.stringify(user, null, 2)}</pre>;
  return (
    <div className="container">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            name="Name"
            id="Name"
            className="form-control"
            value={user.name}
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            } required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            } required
          />
        </div>
        <div className="form-group">
          <label htmlFor="select-options">Role:</label>
          <select
            id="role"
            className="form-control"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          >
            <option value="">--Choisir une option--</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            } required
          />
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={()=>{ alert(JSON.stringify(user)); console.log(JSON.stringify(user))}}>
          S'inscrire
        </button>
      </form>
    </div>
  );
}

 export default Register;










 // import React, { FunctionComponent,useState, useEffect} from "react";
// import StudentForm from "../components/Student-form";
// import student from "../models/student";
// import {STUDENTS} from "../models/listeStudent";
// import { RouteComponentProps } from "react-router";

// type Params = { id: string};

// const Form: FunctionComponent<RouteComponentProps<Params>> = ({match}) =>{
//     const [students, setStudents]=useState<student|null>(null);

// useEffect(()=>{
//     STUDENTS.forEach(stud=>{
//         if(match.params.id === stud.id.toString()){
//             setStudents(stud);
//         }
//     })
// })
//     return(
//         <div>
//             { students ? (
//                 <div className="center">
//                     <div className="row">
//                     <div className="card-image">
//                         <h2>Modification de `{students.name}`</h2>
//                         <img src={students.picture.toString()} alt={students.name.toString()} style={{width: '250px', margin: '0 auto'}}/>
//                     </div>
//                     </div>
//                 <div className="container-fluid">
//                 <StudentForm  student={students}/>
//                 </div>
//                 </div>
//                 ):(
//                     <h4 className="center">Aucun students</h4>
//                 )
//             }
//         </div>
//     );

// }