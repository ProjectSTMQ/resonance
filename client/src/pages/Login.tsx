import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import api from '../ApiCalls';



function Login() {
    const navigate = useNavigate();
    const {setUserInfo} = useContext(UserContext);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsPending(true);

        const data = { username, password};
        const res = await api.login(data);
        setIsPending(false);
        if (res.status === 200) {
            console.log('Login successful');
            sessionStorage.setItem('username', username);
            setUserInfo({
                username: username,
                password: password,
                isAdmin: false
            });
            navigate('/');
        } else {
            console.log('Login failed');
        }
    };

    return (
        <>
        <section className="login-page">
            <section className="background">
                <div className="form-container">
                    <div className="homelink">
                        <Link to="/">Back to Home</Link>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <h2>Login</h2>
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
                            {/* <div className="forget">
                                <label>
                                    <input type="checkbox" />
                                    Remember Me
                                </label>
                                <a href="#">Forgot Password</a>
                            </div> */}
                            { !isPending && <button>Log In</button>}
                            { isPending && <button disabled>Logging In...</button>}
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