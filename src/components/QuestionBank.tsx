import React from 'react';
import QuizCard from './QuizCard';

function QuestionBank() {
  // Temporary mock data
  const questions = [
    { id: 1, question: "Under what circumstances would you choose to use Leaky LMS over standard LMS?", answers: [] },
    { id: 2, question: "How is the eigenvalue spread of the input correlation matrix related to the convergence rate of the steepest descent algorithm?", answers: [] },
    { id: 3, question: "What factors affect the convergence rate in steepest-descent method?", answers: []},
    { id: 4, question: "Explain the core principle behind the Wiener-Kolmogorov filter.", answers: []},
    { id: 5, question: "Explain RLS tracking abilities.", answers: []}
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