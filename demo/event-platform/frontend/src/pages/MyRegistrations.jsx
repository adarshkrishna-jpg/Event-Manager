import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';

export default function MyRegistrations() {
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        API.get('my-registrations')
            .then(res => { setRegistrations(res.data); setLoading(false); })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <p className="status-text">Loading registrations...</p>;

    return (
        <div className="page-panel schedule-page">
            <section className="schedule-hero">
                <div>
                    <p className="schedule-label">My Registrations</p>
                    <h1>Upcoming Events You’ve Registered For</h1>
                    <p className="schedule-copy">Check your registered events and view details directly from the personalized event schedule.</p>
                </div>
            </section>

            <section className="schedule-list">
                {registrations.length === 0 ? (
                    <p className="status-text">You haven't registered for any events yet.</p>
                ) : (
                    registrations.map(reg => (
                        <article key={reg.id} className="schedule-card">
                            <div className="schedule-card-info">
                                <div>
                                    <h3>{reg.event.title}</h3>
                                    <p className="meta-text">{reg.event.location}</p>
                                </div>
                                <div className="schedule-date">
                                    <span>{new Date(reg.event.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                                    <small>{new Date(reg.event.date).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</small>
                                </div>
                            </div>
                            <p className="schedule-description">{reg.event.description}</p>
                            <div className="schedule-card-footer">
                                <div className="schedule-details">
                                    <span>Registered on {new Date(reg.registered_at).toLocaleDateString()}</span>
                                </div>
                                <Link to={`/events/${reg.event.id}`} className="button-primary">View Event</Link>
                            </div>
                        </article>
                    ))
                )}
            </section>
        </div>
    );
}
