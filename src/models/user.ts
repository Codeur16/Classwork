
export default class User{
    name:String;
    matricule: String;
    email: String;
    role:String;
    password:String;

    constructor(
        name:String="",
        matricule:String="",
        email:String="",
        role:String="",
        password:String="",
    ){
        this.name = name;
        this.matricule = matricule;
        this.email = email; 		// not required for now.
        this.role = role;
        this.password = password;  // not required for now.

    }
     
}