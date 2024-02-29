import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

const API_URL = 'http://localhost:5000/api';


function Listings() {
    
    const [convoId, setConvoId] = useState('');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    async function joinConvo(convoId: string){
        
        const data = { conversationId : convoId };
        const response = await fetch(`${API_URL}/conversations/join`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            console.log('Join successful');
            //navigate('/');
        }
        else{
            console.log('Join failed');
        }
    
        return response;
    }

        
    async function createConvo(convoName : string){
        
        const data = {name : convoName, type:'custom'};
        const response = await fetch(`${API_URL}/conversations`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            console.log('Create successful');
            //navigate('/');
        }
        else{
            console.log('Create failed');
        }


        return response;
    }




    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsPending(true);
     
        let res = await joinConvo(convoId);
        let data;
        
       

        console.log(res);
        if (res.status !== 200) {
          
            res = await createConvo(convoId);
            console.log(res);
            data = await res.json();
            console.log("data create:");
            console.log(data);
            navigate("/Lobby", { state: {  convoId : data.conversationId!} });
          
        }
        else{
            data = await res.json();
            console.log("data join:");
            console.log(data);
            navigate("/Lobby", { state: {  convoId : convoId} });
        }

   
    
        setIsPending(false);
         

       
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
                            <h2>Join/Create Room</h2>
                           
                            <div className="inputbox">
                                <input
                                    type="convoId"
                                    required
                                    value={convoId}
                                    onChange={(e) => setConvoId(e.target.value)} />
                                <label>Room Code/Room Name</label>
                            </div>
                           
                            { !isPending && <button>Join</button>}
                            { isPending && <button disabled>Joining...</button>}
                       
                        </form>
                    </div>
                </div>
        </section>
    )
   
}

export default Listings;