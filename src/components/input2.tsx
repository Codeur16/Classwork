// import React, { FunctionComponent } from "react";

import "./style/input2.css";

import React, { ChangeEvent} from "react";

interface MyInputProps {
    label: string;
    type:string;
    value:string | number;
    name:string;
    id:string;
    length?:number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input2(props: MyInputProps) {
  return (
   <div 
    className="Input centerBlock"> 
 
<label htmlFor="lab" className="uselab lab">{props.label}</label><br/>
<input 
className="inputt"
id={props.id}
name={props.name}
type={props.type} 
value={props.value}
onChange={props.onChange}
required
minLength={props.length}
placeholder={props.name}></input>



    </div>
  );
}
 export default Input2;