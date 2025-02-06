import React, { useState } from 'react';
import { CheckCircle2 } from "lucide-react";
import './QuizCard.css';  // We'll create this next

interface QuizCardProps {
  question?: string;
  keywords?: string[];
  onAnswer?: (score: number) => void;
}

const defaultProps: Required<QuizCardProps> = {
  question: "What is React?",
  keywords: ["library", "javascript", "ui", "components"],
  onAnswer: () => {},
};

const QuizCard = ({
  question = defaultProps.question,
  keywords = defaultProps.keywords,
  onAnswer = defaultProps.onAnswer,
}: QuizCardProps) => {
  const [answer, setAnswer] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);

  const checkAnswer = () => {
    if (!keywords) return;
    const lowerAnswer = answer.toLowerCase();
    const matches = keywords.filter(keyword =>
      lowerAnswer.includes(keyword.toLowerCase())
    );
    const newScore = (matches.length / keywords.length) * 100;
    setScore(newScore);
    setChecked(true);
    onAnswer(newScore);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !checked) {
      checkAnswer();
    }
  };

  return (
    <div className="quiz-card">
      <div className="quiz-header">
        <h3>{question}</h3>
      </div>
      
      <div className="quiz-content">
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your answer here..."
          disabled={checked}
          className="quiz-input"
        />
        
        {checked && (
          <div className="score-display">
            <CheckCircle2 
              className={score >= 50 ? 'icon-success' : 'icon-failure'} 
            />
            <span>Score: {Math.round(score)}%</span>
          </div>
        )}
      </div>
      
      <div className="quiz-footer">
        <button
          onClick={checkAnswer}
          disabled={checked}
          className="check-button"
        >
          Check Answer
        </button>
      </div>
    </div>
  );
};

export default QuizCard;