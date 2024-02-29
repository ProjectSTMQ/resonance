import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const API_URL = 'http://localhost:5000/api';

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
                    <h1>Welcome to Resonance</h1>
                    {/* Logged out */}
                    {!document.cookie.includes('sessionId') && (
                        <>
                            <p>
                                Please login or register to continue.
                            </p>
                        </>
                    )}
                    {/* Logged in */}
                    {document.cookie.includes('sessionId') && (
                    <>
                        <p>
                            Check out the lobby listings to get started!
                        </p>
                        <div>
                            <Link to="/listings">
                                <button><span></span>Listings</button>
                            </Link>
                        </div>
                    </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;