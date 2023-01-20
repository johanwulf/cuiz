import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Input } from "./components/Input/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-8xl">Cuiz</h1>
      <h2 className="text-4xl mt-4">[kwɪz]</h2>
      <p className="text-xl mt-4">A quizzer for your command line aliases</p>
      <Input />
    </div>
  );
}

export default App;
