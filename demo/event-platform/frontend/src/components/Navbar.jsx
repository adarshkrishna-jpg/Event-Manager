import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="brand-link">EventPlatform</Link>
                {token && <Link to="/my-registrations" className="nav-link">My Registrations</Link>}
            </div>
            <div className="navbar-right">
                {token ? (
                    <button className="button-secondary" onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="button-primary">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
