import React from 'react';
import AnimatedSection from './components/AnimatedSection';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AnimatedSection />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
