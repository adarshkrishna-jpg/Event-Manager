import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('register', { username, email, password });
            setMsg('Registration successful! Redirecting to login...');
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setMsg('Error creating account. Make sure fields are correct.');
        }
    };

    return (
        <div className="page-panel page-form">
            <div className="page-header">
                <h2>Create Account</h2>
            </div>
            {msg && <p className="status-text">{msg}</p>}
            <form onSubmit={handleSubmit} className="form-grid">
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit" className="button-primary">Register</button>
            </form>
        </div>
    );
}
