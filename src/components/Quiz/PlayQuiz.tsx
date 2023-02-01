import React, { useState, useEffect } from "react"
import { Question } from "../../types/questions";
interface PlayQuizProps {
    questions: Question[];
}

export const PlayQuiz = ({ questions }: PlayQuizProps) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [sequence, setSequence] = useState<any[]>([]);
    const [correct, setCorrect] = useState(false)
    const handleKeyDown = (event: any) => {
        event.preventDefault()
        if (event.nativeEvent.repeat) return
        let newKey = event.key.toString();
        if (newKey === " ") newKey = "SPACE";
        if (newKey === "Control") newKey = "CTRL";
        setSequence(old => [...old, newKey.toUpperCase()])
    }

    useEffect(() => {
        if (currentQuestion >= questions.length) return;
        if (JSON.stringify(sequence) === JSON.stringify(questions[currentQuestion].keys)) {
            setCorrect(true)
            setTimeout(() => {
                setSequence([])
                setCurrentQuestion(currentQuestion + 1)
                setCorrect(false)
            }, 2000)
        } else {
            setCorrect(false)
        }
    }, [sequence, currentQuestion])

    return (
        <div>
            <>
                {currentQuestion < questions.length ? (
                    <>
                        <b>Command title: </b>{questions[currentQuestion].title}
                        <div className={`mt-2 input ${correct ? "border-solid border-2 border-green-600" : "border-solid border-2 border-red-600"}`} onKeyDown={handleKeyDown} tabIndex={0}>
                            {sequence}
                        </div>

                    </>
                ) : (
                    <p>All questions answered</p>
                )}
            </>
        </div>
    )
} 
