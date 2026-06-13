import { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        API.get('events')
            .then(res => { setEvents(res.data); setLoading(false); })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <p className="status-text">Loading events...</p>;

    return (
        <div className="page-panel schedule-page">
            <section className="schedule-hero">
                <div>
                    <p className="schedule-label">EVENT SCHEDULE</p>
                    <h1>Follow Event Schedule</h1>
                    <p className="schedule-copy">Browse the latest events, see details, and register instantly with our modern event schedule layout.</p>
                </div>
                <div className="schedule-actions">
                    <button className="button-primary">Buy Tickets</button>
                    <button className="button-secondary">View Schedule</button>
                </div>
            </section>

            <section className="schedule-list">
                {events.map(event => (
                    <article key={event.id} className="schedule-card">
                        <div className="schedule-card-info">
                            <div>
                                <h3>{event.title}</h3>
                                <p className="meta-text">{event.location}</p>
                            </div>
                            <div className="schedule-date">
                                <span>{new Date(event.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                                <small>{new Date(event.date).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</small>
                            </div>
                        </div>
                        <p className="schedule-description">{event.description}</p>
                        <div className="schedule-card-footer">
                            <div className="schedule-details">
                                <span>Impression events</span>
                                <span>Starts at {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                            <Link to={`/events/${event.id}`} className="button-primary">Event Details</Link>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}
