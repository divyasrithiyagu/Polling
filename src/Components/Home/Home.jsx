// Home.jsx

import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nav = useNavigate();
  return (
    <div className="home-container">
      <header>
        <h1>Polling App</h1>
      </header>
      <main>
        <section className="hero-section">
          <h2>Welcome to the Polling App</h2>
          <p>Participate in polls, share your opinions, and stay informed about the latest trends.</p>
          <button className="explore-button" onClick={() => nav('/explore')}>Explore Polls</button>
        </section>
        <section className="featured-polls">
          
          {/* Display featured polls here */}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Polling App. All rights reserved.</p>
      </footer>
      <br/>
      
    </div>
  );
};

export default Home;
