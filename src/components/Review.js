import React from 'react';
import questions from '../data/questions.json';
import '../styles/review.css';

const Review = ({ userAnswers, onNext, onBack }) => {
  return (
    <div className="review-container">
      <h2>Review</h2>
      {questions.map((q) => (
        <div key={q.id} className="review-card">
          <p><strong>Q:</strong> {q.question}</p>
          <p><strong>Selected:</strong> {userAnswers[q.id]}</p>
        </div>
      ))}
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Submit Test</button>
    </div>
  );
};

export default Review;
