import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Home() {
    return (
        // <div>
        //     <h1>Home</h1>
        //     <Link to="/login">Go to Login</Link>
        // </div>
        <div className="home-page">
            <div className="background">
                <div className="navbar">
                    <img src={logo} className="logo" />
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
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