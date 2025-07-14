import React from "react";
import "../styles/result.css";
import questionsData from "../data/questions.json";
import correctAnswers from "../data/answers.json";

const Result = ({ userAnswers }) => {
  const score = questionsData.reduce((acc, q) => {
    return acc + (userAnswers[q.id] === correctAnswers[q.id] ? 1 : 0);
  }, 0);

  return (
    <div className="result-container">
      <h2>Result</h2>
      <p>
        Your Score: {score} / {questionsData.length}
      </p>
      {questionsData.map((q) => {
        const userAnswer = userAnswers[q.id];
        const correct = correctAnswers[q.id];
        const isCorrect = userAnswer === correct;

        return (
          <div
            key={q.id}
            className={`result-block ${isCorrect ? "correct" : "incorrect"}`}
          >
            <p>
              <strong>Q:</strong> {q.question}
            </p>
            <p>
              <strong>Your Answer:</strong> {userAnswer}
            </p>
            {!isCorrect && (
              <p>
                <strong>Correct Answer:</strong> {correct}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Result;
