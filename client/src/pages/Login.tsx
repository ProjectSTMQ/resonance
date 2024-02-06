import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
        <section className="login-page">
            <section className="background">
                <div className="form-container">
                    <div className="homelink">
                        <Link to="/">Back to Home</Link>
                    </div>
                    <div className="form">
                        <form>
                            <h2>Login</h2>
                            <div className="inputbox">
                                <input type="username" required />
                                <label>Username</label>
                            </div>
                            <div className="inputbox">
                                <input type="password" required />
                                <label>Password</label>
                            </div>
                            {/* <div className="forget">
                                <label>
                                    <input type="checkbox" />
                                    Remember Me
                                </label>
                                <a href="#">Forgot Password</a>
                            </div> */}
                            <button>Log In</button>
                            <div className="register">
                                <p>
                                    Don't have an account? <Link to="/register">Register</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </section>
        </>
    );
}

export default Login;