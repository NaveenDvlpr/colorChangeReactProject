import React from 'react';

const Holder = ({color, hexValue}) => {
  return (
    <div 
    className="holder"
    style={{backgroundColor: color}}
    >
      <p>{color === '' ? 'Empty Value' : color}</p>
      <p>{hexValue}</p>
    </div>
  );
}

export default Holder;
