import React from 'react';

interface RadioOptionProps {
  name: string;
//   value: string;
  label: string;
  onClick: () => void;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioOption(props: RadioOptionProps) {
  return (
    <div onClick={props.onClick} style={{marginLeft:"10px", fontSize:"25px"}}>
      <input type="radio" name={props.name}  />
      <label>{props.label}</label>
    </div>
  );
}

export default RadioOption;
