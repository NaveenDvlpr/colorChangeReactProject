import React from 'react';

const Holder = ({color}) => {
  return (
    <div 
    className="holder"
    style={{backgroundColor: color}}
    >
      {color === '' ? 'Empty Value' : color}
    </div>
  );
}

export default Holder;
