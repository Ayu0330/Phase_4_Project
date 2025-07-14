import React, { useState } from "react";
import questions from "../data/questions.json";
import "../styles/quiz.css";

const Quiz = ({ onNext, setUserAnswers }) => {
  const [answers, setAnswers] = useState({});

  const handleChange = (qid, value) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  };

  const handleSubmit = () => {
    setUserAnswers(answers);
    onNext();
  };

  return (
    <div className="quiz-container">
      <h2>Quiz</h2>
      {questions.map((q) => (
        <div className="question-card" key={q.id}>
          <p>{q.question}</p>
          {q.options.map((opt) => (
            <label key={opt}>
              <input
                type="radio"
                name={q.id}
                value={opt}
                onChange={() => handleChange(q.id, opt)}
                checked={answers[q.id] === opt}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Review Answers</button>
    </div>
  );
};

export default Quiz;
