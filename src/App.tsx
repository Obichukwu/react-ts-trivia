import React, {useState} from 'react';
import QuestionCard from "./components/QuestionCard"

const TOTAL_QUESTIONS = 10

const App =() => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [questionNumber, setQuestionNumber] = useState(0)
  const [userAnswers, setUsersAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () =>{

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <hi>React Trivia</h1>
      <button className="start" onClick={startTrivia}>
        Start Quiz
      </button>
      <p className="score">
      </p>
      <p className="score">
        Loading Questions...
      </p>
      <QuestionCard 
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        

        />
      <button className="start" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
