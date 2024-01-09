import React, { useState } from 'react';
import './App.css'; // Make sure to create an App.css for styling

function App() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const isValidGmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(email.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    if (!isValidGmail(email)) {
      setMessage('Only Gmail accounts are allowed.');
      return;
    }

    // Construct the endpoint depending on the action (login or registration)
    const endpoint = isLogin ? 'login' : 'register';
    const url = `http://3.108.235.184:5000/users/${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>{isLogin ? 'Login' : 'Register'} - Rajinikanth Student Registration</h1>
      <form onSubmit={handleSubmit} className="form">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {!isLogin && <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />}
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      {message && <p className="message">{message}</p>}
      <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
        Switch to {isLogin ? 'Register' : 'Login'}
      </button>
    </div>
  );
}

export default App;
