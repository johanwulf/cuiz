import React, { useState } from "react";
import "./App.css";
import { Start } from "./components/Start/Start";
import { CreateQuiz } from "./components/Quiz/CreateQuiz";
import { View } from "./types/view";
import { Question } from "./types/questions";
import { PlayQuiz } from "./components/Quiz/PlayQuiz";

function App() {
    const [view, setView] = useState(View.START);
    const [quizName, setQuizName] = useState("");
    const [questions, setQuestions] = useState<Question[]>([])
    const changeView = (view: View) => {
        setView(view)
    }
    const setQuiz = (name: string) => {
        setQuizName(name)
    }
    return (
        <div className="App">
            <>
                {view === View.START && <Start onChange={changeView} setQuiz={setQuiz} />}
                {view === View.CREATE && <CreateQuiz onChange={changeView} quizName={quizName} questions={questions} setQuestions={(question: Question) => setQuestions((questions) => [...questions, question])} />}
                {view === View.HOME && <PlayQuiz questions={questions} />}
            </>
        </div>
    );
}

export default App;
