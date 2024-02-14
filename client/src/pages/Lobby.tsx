import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Lobby() {

    const [convoId, setConvoId] = useState('');
    const [username, setUsername] = useState('');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsPending(true);
        
       
        navigate("/chat", { state: { username: username , convoId : convoId} });
        

       
    };

    return (
        <section className="login-page">
            <h1>placeholder</h1>
            <div className="form-container">
                    <div className="homelink">
                        <Link to="/">Back to Home</Link>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <h2>Join Room</h2>
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
                                    type="convoId"
                                    required
                                    value={convoId}
                                    onChange={(e) => setConvoId(e.target.value)} />
                                <label>Room Code</label>
                            </div>
                           
                            { !isPending && <button>Join</button>}
                            { isPending && <button disabled>Joining...</button>}
                       
                        </form>
                    </div>
                </div>
        </section>
    )
}

export default Lobby;