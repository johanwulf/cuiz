import React, { useState } from "react";
import { View } from "../../types/view";
import { Quiz, Question } from "../../types/questions";
interface CreateQuizProps {
    onChange: (view: View) => void;
    quizName: string;
    questions: Question[];
    setQuestions: (question: Question) => void;
}

export const CreateQuiz = ({ onChange, quizName, questions, setQuestions }: CreateQuizProps) => {
    const [key, setKey] = useState("");
    const [command, setCommand] = useState("")
    const [sequence, setSequence] = useState<any[]>([]);

    if (!localStorage.getItem("cuiz")) {
        localStorage.setItem("cuiz", JSON.stringify([]))
    }
    const handleKeyDown = (event: any) => {
        event.preventDefault()
        if (event.nativeEvent.repeat) return
        let newKey = event.key.toString();
        if (newKey === " ") newKey = "SPACE";
        if (newKey === "Control") newKey = "CTRL";
        setKey(newKey)
        sequence.push(newKey.toUpperCase());
        sequence.push(" ")
        setSequence(sequence)
    }
    const handleReset = () => {
        setKey("")
        setSequence([])
    }
    const handleSave = () => {
        const question: Question = {
            title: command,
            keys: sequence.filter(element => element !== " ")
        }
        setQuestions(question)
        setCommand("")
        handleReset()
        console.log(questions)
    }
    const handleStartQuiz = () => {
        localStorage.setItem("cuiz", JSON.stringify(questions))
        onChange(View.HOME)
    }
    return (
        <div>
            <h1 className="text-2xl">Creating quiz with the name {quizName}</h1>
            <div className="flex flex-col">
                <input placeholder="Command name" className="input mt-2" value={command} onChange={(event) => setCommand(event.target.value)} />
                <div className="mt-2 input " onKeyDown={handleKeyDown} tabIndex={0}>
                    {sequence}
                </div>
                <button className="btn mt-1" onClick={handleReset}>Reset</button>
                <button className={`btn mt-1 ${sequence.length === 0 || key === "" || command === "" ? "btn-disabled" : ""}`} onClick={handleSave}>Save command</button>
                <button onClick={handleStartQuiz} className={`btn mt-4 ${questions.length === 0 ? "btn-disabled" : ""}`}>Start quiz</button>
            </div>
        </div >
    )
} 
