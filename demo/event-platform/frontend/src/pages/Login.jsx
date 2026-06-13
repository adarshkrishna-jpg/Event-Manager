import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('login', { username, password });
            localStorage.setItem('token', res.data.access);
            localStorage.setItem('username', username);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.detail || 'Invalid Credentials');
        }
    };

    return (
        <div className="page-panel page-form">
            <div className="page-header">
                <h2>Login</h2>
            </div>
            {error && <p className="status-error">{error}</p>}
            <form onSubmit={handleSubmit} className="form-grid">
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit" className="button-primary">Login</button>
            </form>
        </div>
    );
}
