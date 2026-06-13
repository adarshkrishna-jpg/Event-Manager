import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function EventDetail() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        API.get(`events/${id}`)
            .then(res => setEvent(res.data))
            .catch(err => {
                setError(err.response?.data?.detail || 'Failed to load event details');
            });
    }, [id]);

    const handleRegister = async () => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
            return;
        }
        try {
            await API.post(`events/${id}/register`);
            setMsg('Successfully registered for this event!');
        } catch (err) {
            setMsg(err.response?.data?.error || 'Registration failed.');
        }
    };

    if (error) return <p className="status-text error-text">{error}</p>;
    if (!event) return <p className="status-text">Loading...</p>;

    return (
        <div className="page-panel">
            <div className="page-header">
                <h2>{event.title}</h2>
            </div>
            <div className="event-detail">
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
                <p>{event.description}</p>
                <button onClick={handleRegister} className="button-primary">Register for Event</button>
                {msg && <p className="status-message">{msg}</p>}
            </div>
        </div>
    );
}
