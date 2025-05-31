import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Motivation } from './components/Motivation';
import { ScientificSolution } from './components/ScientificSolution';
import { Experiment } from './components/Experiment';
import { Results } from './components/Results';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-[#e9eaec] min-h-screen text-black">
      <Header />
      <main>
        <Hero />
        <Motivation />
        <ScientificSolution />
        <Experiment />
        <Results />
      </main>
      <Footer />
    </div>
  );
}

export default App;