import { Link } from 'react-router-dom';
import { useState } from 'react';

const API_URL = 'http://localhost:5000';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsPending(true);
        
        // TODO: should also check on the backend, just this is not sufficient
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const data = { username, password};

        fetch(`${API_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then((res) => {
            setIsPending(false);
            if (res.status === 201) {
                console.log('Registration successful');
            } else {
                console.log('Registration failed');
            }
        });
    };

    return (
        <>
        <section className="register-page">
            <section className="background">
                <div className="form-container">
                    <div className="homelink">
                        <Link to="/">Back to Home</Link>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <h2>Register</h2>
                            <div className="inputbox">
                                <input
                                    type="username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                                <label>Username</label>
                            </div>
                            <div className="inputbox">
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <label>Password</label>
                            </div>
                            <div className="inputbox">
                                <input
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                                <label>Confirm Password</label>
                            </div>
                            {/* <div className="forget">
                                <label>
                                    <input type="checkbox" />
                                    Remember Me
                                </label>
                                <a href="#">Forgot Password</a>
                            </div> */}
                            { !isPending && <button>Register</button>}
                            { isPending && <button disabled>Registering...</button>}
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