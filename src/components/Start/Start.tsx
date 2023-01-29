import React, { useState } from "react";

enum View {
    START,
    HOME,
}


interface StartProps {
    onChange: (view: View) => void;
}

export const Start = ({ onChange }: StartProps) => {
    const [quizName, setQuizName] = useState("");
    const [error, setError] = useState(false);
    const handleNextClick = () => {
        if (quizName.length <= 0) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000)
            return;
        }
        onChange(View.HOME)
    }
    return (
        <div className="flex flex-col">
            <h1 className="text-8xl">Cuiz</h1>
            <h2 className="text-4xl mt-4">[kwɪz]</h2>
            <p className="text-xl mt-4">A quizzer for your command line aliases</p>
            <p className="text-l">Please start by giving your quiz a name</p>
            <input className={`input mt-4 ${error ? "border-solid border-2 border-red-600" : ""}`} placeholder={`${error ? "The quiz name needs to be atleast one letter" : "Enter your quiz name"}`} onChange={(event) => {
                setQuizName(event.target.value);
                setError(false);
            }} type="text" />
            <button className="btn mt-2" onClick={handleNextClick}>Next</button>
        </div>
    )
}
