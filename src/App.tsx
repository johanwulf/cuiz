import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input/Input";
import { Decryptor } from "./components/Decryptor/Decryptor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Decryptor />
    </div>
  );
}

export default App;
