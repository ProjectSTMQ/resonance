import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { UserContext, IUser} from "./UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Listings from "./pages/Listings";
import Lobby from "./pages/Lobby";
import NoPage from "./pages/NoPage";
import "./App.css";




function App() {

  const [globalUserInfo, setGlobalUserInfo] = useState<IUser>({ username: "" , password: "", isAdmin : false});

  return (
    <>
      <UserContext.Provider value={{
        userInfo: globalUserInfo,
        setUserInfo: setGlobalUserInfo
        }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
