import React, { useState } from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and registration

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.endsWith('@gmail.com')) {
            setMessage('Only Gmail accounts are allowed.');
            return;
        }

        const user = { email, username, password };
        const url = `http://3.108.235.184:5000/users/${isLogin ? 'login' : 'register'}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Rajinikanth Student {isLogin ? 'Login' : 'Registration'}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                )}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            {message && <p>{message}</p>}
            <button onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </div>
    );
}

export default App;
