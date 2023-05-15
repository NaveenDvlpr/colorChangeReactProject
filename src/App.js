import Holder from "./Holder";
import Adder from "./Adder";
import { useState } from "react";

function App() {

  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  return (
    <div className="App">
       <Holder 
          color={color}
          hexValue={hexValue}
       />
       <Adder 
          setColor={setColor}
          setHexValue={setHexValue}
       />
    </div>
  );
}

export default App;
