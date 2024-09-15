import React, { useState, useEffect } from 'react';
import './App.css';
import { questions, Question } from './questions';

const App: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(Math.floor(Math.random() * questions.length));
  const currentQuestion = questions[questionIndex];

  const [selectedOptions, setSelectedOptions] = useState<number[]>(Array(currentQuestion.optionSets.length).fill(-1));
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [allCorrect, setAllCorrect] = useState<boolean>(false);

  const handleOptionChange = (setIndex: number, selection: number) => {
    if (allCorrect) return;

    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[setIndex] = selection;
    setSelectedOptions(newSelectedOptions);
  };

  useEffect(() => {
    const correctSelections = selectedOptions.filter((sel, idx) => sel === currentQuestion.optionSets[idx].correct).length;
    setCorrectCount(correctSelections);

    if (correctSelections === currentQuestion.optionSets.length) {
      setAllCorrect(true);
    }
  }, [selectedOptions, currentQuestion.optionSets]);

  const getBackgroundColour = (): string => {
    const totalSets = currentQuestion.optionSets.length;

    if (correctCount === 1) {
      return 'linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%)'; 
    } else if (correctCount === 2 && totalSets > 2) {
      return 'linear-gradient(180deg, #e5b018 0%, #EE6B2D 100%)'; 
    } else if (correctCount === 3 && totalSets > 3) {
      return 'linear-gradient(180deg, #ebee32 0%, #e5b018 100%)'; 
    } else if (correctCount === totalSets) {
      return 'linear-gradient(180deg, #76E0C2 0%, #59CADA 100%)';
    } else {
      return 'linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%)'; 
    }
  };

  const getNextQuestion = () => {
    const newIndex = Math.floor(Math.random() * questions.length);
    setQuestionIndex(newIndex);
    setSelectedOptions(Array(questions[newIndex].optionSets.length).fill(-1));
    setCorrectCount(0);
    setAllCorrect(false);
  };

  return (
    <div className="game-container" style={{ background: getBackgroundColour() }}>
      <h2>{currentQuestion.questionText}</h2>
      <div className="options-container">
        {currentQuestion.optionSets.map((set, setIndex) => (
          <div key={setIndex} className="option-set">
            {set.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  id={`option-${setIndex}-${optionIndex}`}
                  name={`option-${setIndex}`}
                  value={optionIndex}
                  checked={selectedOptions[setIndex] === optionIndex}
                  onChange={() => handleOptionChange(setIndex, optionIndex)}
                  disabled={allCorrect}
                />
                <label htmlFor={`option-${setIndex}-${optionIndex}`} className="option-label">
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>

      {allCorrect ? (
        <p className="answer-message">The answer is correct</p>
      ) : (
        <p className="answer-message">The answer is incorrect</p>
      )}

      <button onClick={getNextQuestion} className="next-question-button">Next Question</button>
    </div>
  );
};

export default App;
