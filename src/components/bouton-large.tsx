import React , {FunctionComponent} from "react";
import "./style/bouton-large.css";
interface InputProps {
    name: string;
    alt: string;
    image: string;
    
  }
const boutonLarge: FunctionComponent<InputProps>=({name, image, alt})=>{
    return(
        <div className="divv">
            <button className="BTN">
    {/* <span className="icon"> */}
        <img src={ image} className="ICON" alt={ alt} />
    {/* </span> */}
    <span className="TEXT">{ name }</span>
</button>
        </div>
    )
}
export default boutonLarge;