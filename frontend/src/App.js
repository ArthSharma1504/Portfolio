// App.js
import React from 'react';
import './App.css';
import ContactForm, { AnimatedSection } from './ContactForm'; // Importing both components

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      
      <main>
        <AnimatedSection /> {/* This will show the animated welcome message */}
        <ContactForm />     {/* This will show the contact form */}
      </main>
    </div>
  );
}

export default App;
