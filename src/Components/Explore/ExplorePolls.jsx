/*

import React, { useState } from 'react';
import './ExplorePolls.css';

function ExplorePolls() {
  const [options, setOptions] = useState([
    { id: 1, text: 'Option 1', votes: 0 },
    { id: 2, text: 'Option 2', votes: 0 },
    { id: 3, text: 'Option 3', votes: 0 },
  ]);

  const [showWinner, setShowWinner] = useState(false);

  const handleVote = (id) => {
    const updatedOptions = options.map(option => {
      if (option.id === id) {
        return { ...option, votes: option.votes + 1 };
      }
      return option;
    });
    setOptions(updatedOptions);
  };

  const getWinner = () => {
    const sortedOptions = [...options].sort((a, b) => b.votes - a.votes);
    return sortedOptions[0];
  };

  const handleShowWinner = () => {
    setShowWinner(true);
  };

  return (
    <div className="poll-container">
      <h1>Live Voting Poll</h1>
      <div className="options-container">
        {options.map(option => (
          <div key={option.id} className="option">
            <span>{option.text}</span>
            <button onClick={() => handleVote(option.id)}>Vote</button>
            <span>Votes: {option.votes}</span>
          </div>
        ))}
      </div>
      <button onClick={handleShowWinner}>Show Winner</button>
      {showWinner && (
        <div className="winner">
          <h2>Winner:</h2>
          <p>{getWinner().text}</p>
        </div>
      )}
    </div>
  );
}

export default ExplorePolls;*/
/*

import React, { useState } from 'react';
import './ExplorePolls.css';

function ExplorePolls() {
  const [options, setOptions] = useState([
    { id: 1, text: 'Option 1', votes: 0 },
    { id: 2, text: 'Option 2', votes: 0 },
    { id: 3, text: 'Option 3', votes: 0 },
  ]);

  const [showWinner, setShowWinner] = useState(false);

  const handleVote = (id) => {
    const updatedOptions = options.map(option => {
      if (option.id === id) {
        return { ...option, votes: option.votes + 1 };
      }
      return option;
    });
    setOptions(updatedOptions);
  };

  const getWinner = () => {
    const sortedOptions = [...options].sort((a, b) => b.votes - a.votes);
    return sortedOptions[0];
  };

  const handleShowWinner = () => {
    setShowWinner(true);
  };

  return (
    <div className="poll-container">
      <h1>Live Voting Poll</h1>
      <div className="options-container">
        {options.map(option => (
          <div key={option.id} className="option">
            <span>{option.text}</span>
            <button onClick={() => handleVote(option.id)}>Vote</button>
          </div>
        ))}
      </div>
      <button onClick={handleShowWinner}>Show Winner</button>
      {showWinner && (
        <div className="winner">
          <h2>Winner:</h2>
          <p>{getWinner().text}</p>
        </div>
      )}
    </div>
  );
}

export default ExplorePolls;

*/
/*
import React, { useState } from 'react';
import './ExplorePolls.css';

function ExplorePolls() {
  const [options, setOptions] = useState([
    { id: 1, text: 'Option 1', votes: 0 },
    { id: 2, text: 'Option 2', votes: 0 },
    { id: 3, text: 'Option 3', votes: 0 },
  ]);

  const [showWinner, setShowWinner] = useState(false);

  const handleVote = (id) => {
    const updatedOptions = options.map(option => {
      if (option.id === id && option.votes < 10) {
        return { ...option, votes: option.votes + 1 };
      }
      return option;
    });
    setOptions(updatedOptions);
  };

  const getWinner = () => {
    const sortedOptions = [...options].sort((a, b) => b.votes - a.votes);
    return sortedOptions[0];
  };

  const handleShowWinner = () => {
    setShowWinner(true);
  };

  return (
    <div className="poll-container">
      <h1>Live Voting Poll</h1>
      <div className="options-container">
        {options.map(option => (
          <div key={option.id} className="option">
            <span>{option.text}</span>
            <button onClick={() => handleVote(option.id)} disabled={option.votes >= 10}>
              {option.votes >= 10 ? 'Max Votes Reached' : 'Vote'}
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleShowWinner}>Show Winner</button>
      {showWinner && (
        <div className="winner">
          <h2>Winner:</h2>
          <p>{getWinner().text}</p>
        </div>
      )}
    </div>
  );
}

export default ExplorePolls;*/

/*
  import React, { useState } from 'react';
  import './ExplorePolls.css';
  import { useNavigate } from 'react-router-dom';

  function ExplorePolls() {

    const nav = useNavigate();
    const [options, setOptions] = useState([
      { id: 1, text: 'IE', votes: 0 },
      { id: 2, text: 'DM', votes: 0 },
      { id: 3, text: 'IOT', votes: 0 },
      { id: 3, text: 'RE', votes: 0 },
    ]);

    const [showWinner, setShowWinner] = useState(false);

    const handleVote = (id) => {
      const updatedOptions = options.map(option => {
        if (option.id === id && option.votes < 10) {
          return { ...option, votes: option.votes + 1 };
        }
        return option;
      });

      if (options.every(option => option.votes >= 10)) {
        alert('Maximum votes reached for all options!');
      }

      setOptions(updatedOptions);
    };

    const getWinner = () => {
      const sortedOptions = [...options].sort((a, b) => b.votes - a.votes);
      return sortedOptions[0];
    };

    const handleShowWinner = () => {
      setShowWinner(true);
    };

    return (
      <div className="poll-container">
        <h1>Choose Elective</h1>
        <div className="options-container">
          {options.map(option => (
            <div key={option.id} className="option">
              <span>{option.text}</span>
              <button onClick={() => handleVote(option.id)} disabled={option.votes >= 10}>
                {option.votes >= 10 ? 'Max Votes Reached' : 'Vote'}
              </button>
            </div>
          ))}
        </div>
        <div>
        <button onClick={handleShowWinner}>Show Winner</button>
        </div>
        <br />
        <div>
          <button onClick={() => nav('/home')}>Submit</button>
        </div>

        {showWinner && (
          <div className="winner">
            <h2>Winner:</h2>
            <p>{getWinner().text}</p>
          </div>
          
        )}
      </div>
      
    );
  }

  export default ExplorePolls;
*/

import React, { useState } from 'react';
import './ExplorePolls.css';
import { useNavigate } from 'react-router-dom';

function ExplorePolls() {
  const nav = useNavigate();
  const [options, setOptions] = useState([
    { id: 1, text: 'Industrial Electronics', votes: 0 },
    { id: 2, text: 'Disaster Management',votes: 0 },
    { id: 3, text: 'Product Development', votes: 0 },
    { id: 4, text: 'Quality Management', votes: 0 }, // Fix id for the last option
  ]);

  const [showWinner, setShowWinner] = useState(false);

  const handleVote = (id) => {
    const updatedOptions = options.map(option => {
      if (option.id === id && option.votes < 10) {
        return { ...option, votes: option.votes + 1 };
      }
      return option;
    });

    if (options.every(option => option.votes >= 10)) {
      alert('Maximum votes reached for all options!');
    }

    setOptions(updatedOptions);
  };

  const getWinner = () => {
    const sortedOptions = [...options].sort((a, b) => b.votes - a.votes);
    return sortedOptions[0];
  };

  const handleShowWinner = () => {
    setShowWinner(true);
  };

  return (
    <div className="poll-container">
      <h1>Choose Elective</h1>
      <div className="options-container">
        {options.map(option => (
          <div key={option.id} className="option">
            <span>{option.text}</span>
            <button onClick={() => handleVote(option.id)} disabled={option.votes >= 10}>
              {option.votes >= 10 ? 'Max Votes Reached' : 'Vote'}
            </button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleShowWinner}>Show Winner</button>
      </div>
      <br />
      <div>
        <button onClick={() => nav('/home')}>Submit</button>
      </div>

      {showWinner && (
        <div className="winner">
          <h2>Winner:</h2>
          <p>{getWinner().text}</p>
        </div>
      )}
    </div>
  );
}

export default ExplorePolls;

