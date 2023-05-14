import React from 'react';

const Adder = ({setColor}) => {
  return (
    <input
        className="adder"
        type="text"
        placeholder='Add Color Name'
        onChange={(e)=>setColor(e.target.value)}
    />
  );
}

export default Adder;
