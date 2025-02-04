import React from 'react';
import QuizCard from './QuizCard';

function QuestionBank() {
  // Temporary mock data
  const questions = [
    { id: 1, question: "What is React?", answers: [] },
    { id: 2, question: "Why use TypeScript?", answers: [] }
  ];

  return (
    <section className="question-bank">
      <h2>Question Bank</h2>
      <div className="quiz-grid">
        {questions.map(question => (
          <QuizCard key={question.id} {...question} />
        ))}
      </div>
    </section>
  );
}

export default QuestionBank;