import React from 'react';

interface TextOptionProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextOption(props: TextOptionProps) {
  return (
    <div>
      <input type="text" name={props.name} value={props.value} onChange={props.onChange} />
    </div>
  );
}

export default TextOption;
