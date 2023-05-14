import Holder from "./Holder";
import Adder from "./Adder";
import { useState } from "react";

function App() {

  const [color, setColor] = useState('');

  return (
    <div className="App">
       <Holder 
          color={color}
       />
       <Adder 
          setColor={setColor}
       />
    </div>
  );
}

export default App;
