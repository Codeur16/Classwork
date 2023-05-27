// import React, { FunctionComponent } from "react";
// 
import "./style/input.css";

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

function MyInput(props: MyInputProps) {
  return (
   <div className="input"> 
    <input
    id={props.id}
    name={props.name}
    type={props.type} 
    value={props.value}
    onChange={props.onChange}
    required
    minLength={props.length}
    />
    <label htmlFor="name">{ props.label}</label>
    </div>
  );
}
 export default MyInput;