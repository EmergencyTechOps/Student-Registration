import React, { useState } from 'react';

function App() {
  // State hooks for form inputs and message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.endsWith('@gmail.com')) {
      setMessage('Please use a Gmail account.');
      return;
    }
    // Implement registration or login logic here
    setMessage('Form submitted. Check the console for details.');
    console.log({ email, password });
  };

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <h2>Rajinikanth Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: '5px 0' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: '5px 0' }}
          />
        </div>
        <button type="submit" style={{ margin: '5px 0' }}>
          Register
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
