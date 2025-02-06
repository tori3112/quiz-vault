import React from 'react';
import QuizCard from './QuizCard';

function QuestionBank() {
  // Temporary mock data
  const questions = [
    { id: 1, question: "Under what circumstances would you choose to use Leaky LMS over standard LMS?", keywords: [] },
    { id: 2, question: "How is the eigenvalue spread of the input correlation matrix related to the convergence rate of the steepest descent algorithm?", keywords: [] },
    { id: 3, question: "What factors affect the convergence rate in steepest-descent method?", keywords: []},
    { id: 4, question: "Explain the core principle behind the Wiener-Kolmogorov filter.", keywords: []},
    { id: 5, question: "Explain RLS tracking abilities.", keywords: ["discard", "accumulate", "stationary"]}
  ];

  return (
    <section className="question-bank">
      <h2>Signal Processing Algorithms and Implementations</h2>
      <div className="quiz-grid">
        {questions.map(question => (
          <QuizCard key={question.id} {...question} />
        ))}
      </div>
    </section>
  );
}

export default QuestionBank;