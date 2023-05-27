import React,{ FunctionComponent} from "react";
import './style/selectbar.css';

interface Props {
    label: string;
    //onChange: (event: any) => void;
   // value: string;
    //options: Array<string>;
}
const selectBar: FunctionComponent<Props> =({label})=>{
    return(
        <div className="box">
            <select placeholder={label} >
                <option>Role</option>
                <option value='etudiant'>Etudiant</option>
                <option value='enseignant'>Enseignant</option>
                <option value='admin'>Administrateur</option>
            </select>
        </div>
    )
}
export default selectBar;