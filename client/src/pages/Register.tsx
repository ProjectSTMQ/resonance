import { Link } from 'react-router-dom';

function Register() {
    return (
        <>
        <section className="register-page">
            <section className="background">
                <div className="form-container">
                    <div className="homelink">
                        <Link to="/">Back to Home</Link>
                    </div>
                    <div className="form">
                        <form>
                            <h2>Register</h2>
                            <div className="inputbox">
                                <input type="username" required />
                                <label>Username</label>
                            </div>
                            <div className="inputbox">
                                <input type="password" required />
                                <label>Password</label>
                            </div>
                            <div className="inputbox">
                                <input type="password" required />
                                <label>Confirm Password</label>
                            </div>
                            {/* <div className="forget">
                                <label>
                                    <input type="checkbox" />
                                    Remember Me
                                </label>
                                <a href="#">Forgot Password</a>
                            </div> */}
                            <button>Register</button>
                            <div className="login">
                                <p>
                                    Already have an account? <Link to="/login">Log In</Link>
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

export default Register;