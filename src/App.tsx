import React from 'react';
import './App.css';
import Header from './components/Header';
import QuestionBank from './components/QuestionBank';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <QuestionBank />
      </main>
      <Footer />
    </div>
  );
}

export default App;