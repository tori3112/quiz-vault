import React from 'react';

interface QuizCardProps {
  id: number;
  question: string;
  answers: string[];
}

function QuizCard({ question }: QuizCardProps) {
  return (
    <article className="quiz-card">
      <h3>{question}</h3>
      {/* Answers will go here */}
    </article>
  );
}

export default QuizCard;