import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Review from "./components/Review";
import Result from "./components/Result";
import "./styles/app.css";

const App = () => {
  const [step, setStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <div className="app-wrapper">
      {step === 0 && (
        <Quiz onNext={handleNext} setUserAnswers={setUserAnswers} />
      )}
      {step === 1 && (
        <Review
          onNext={handleNext}
          onBack={handleBack}
          userAnswers={userAnswers}
        />
      )}
      {step === 2 && (
        <Result userAnswers={userAnswers} onRestart={() => setStep(0)} />
      )}
    </div>
  );
};

export default App;
