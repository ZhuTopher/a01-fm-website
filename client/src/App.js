import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api');
        const data = await response.json();
        setMessage(data.message);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Error connecting to the server');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Full Stack App</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>Message from server: {message}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
