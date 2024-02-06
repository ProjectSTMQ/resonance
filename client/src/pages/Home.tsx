import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const API_URL = 'http://localhost:5000';

function Home() {
    const navigate = useNavigate();

    function handleLogout() {
        fetch(`${API_URL}/auth/logout`, {
            method: "POST",
            // headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                console.log('Logout successful');
                navigate('/');
            } else {
                console.log('Logout failed');
            }
        });
    }


    return (
        <div className="home-page">
            <div className="background">
                <div className="navbar">
                    <img src={logo} className="logo" />

                    {/* Logged out */}
                    {!document.cookie.includes('sessionId') && (
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    )}
                    {/* Logged in */}
                    {document.cookie.includes('sessionId') && (
                        <ul>
                            <ul>
                                <li onClick={handleLogout}><a href="#">Logout</a></li>
                            </ul>
                        </ul>
                    )}
                </div>
                <div className="content">
                    <h1>Welcome to the Home Page</h1>
                    <p>
                        This is a simple home page placeholder.
                    </p>
                    <div>
                        <Link to="/home">
                            <button><span></span>Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;