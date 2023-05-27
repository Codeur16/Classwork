import React  from "react";
import "./style/bouton.css";

interface InputProps {
    name: string;
    onClick?: () => void;
    
  }
function Bouton(props:InputProps){
    return(
        <button type="submit" className="btn-donate" onClick={props.onClick}>
            {props.name}
        </button>
    )
}
export default Bouton;