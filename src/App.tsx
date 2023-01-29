import React, { useState } from "react";
import "./App.css";
import { Start } from "./components/Start/Start";

enum View {
    START,
    HOME,
}

function App() {
    const [view, setView] = useState(View.START);
    const [quizName, setQuizName] = useState("");

    const changeView = (view: View) => {
        setView(view)
    }
    console.log(view)
    return (
        <div className="App">
            {view === View.START && <Start onChange={changeView} />}
        </div>
    );
}

export default App;
