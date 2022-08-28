import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModeContext from './components/context/mode/modeContext';
import NavBar from './components/navbar/NavBar';
import HomePage from "./components/homepage/HomePage";
import UsersList from './components/users/userInfo/usersList/UsersList';
import UserPage from './components/users/userPage/UserPage';
import PostsList from './components/posts/postsList/PostsList';
import AlbumsList from './components/albums/albumsList/AlbumsList';

function App() {
  const [mode, setMode] = useState("light");
  const [userId, setUserId] = useState("");

  function changeMode() {
    if(mode === "light") {
      setMode("night");
    }else {
      setMode("light");
    }
  }

  function getUserId(userId) {
    setUserId(userId);
  }

  return (
    <BrowserRouter>
      <ModeContext.Provider value={mode}>
        <NavBar fnCnangeMode={changeMode} userId={userId} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/users' element={<UsersList fnGetUserId={getUserId} />} />
          <Route path='/userpage/:id' element={<UserPage />} />
          <Route path='/post/:id' element={<PostsList />} />
          <Route path='/album/:id' element={<AlbumsList />} />
        </Routes>
      </ModeContext.Provider>
    </BrowserRouter>
  )
}

export default App;
