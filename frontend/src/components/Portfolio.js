import React from 'react';
import './styles/Portfolio.css';
import bg2 from './static/bg2.jpg';
import bg1 from './static/bg1.jpg';
import bg4 from './static/bg4.jpg';
const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>My Work</h2>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <img src={bg2} alt="Project 1" />
          <div className="portfolio-overlay">
            <h3>Project 1</h3>
            <p>Short description of the project.</p>
          </div>
        </div>
        <div className="portfolio-item">
          <img src={bg1} alt="Project 2" />
          <div className="portfolio-overlay">
            <h3>Project 2</h3>
            <p>Short description of the project.</p>
          </div>
        </div>
        <div className="portfolio-item">
          <img src={bg4} alt="Project 3" />
          <div className="portfolio-overlay">
            <h3>Project 3</h3>
            <p>Short description of the project.</p>
          </div>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Portfolio;
