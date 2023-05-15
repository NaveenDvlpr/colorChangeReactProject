import React from 'react';
import colorNames from 'colornames';

const Adder = ({setColor, setHexValue}) => {
  return (
    <input
        autoFocus
        className="adder"
        type="text"
        placeholder='Add Color Name'
        onChange={(e)=>{
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
    />
  );
}

export default Adder;
