import React, { useState, useEffect } from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Favorite from './pages/favorite/Favorite';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Login from './pages/auth/Login';

function App() {
  const [developers, setDevelopers] = useState([]);
  const [favorite, setFavorite] = useState([{}]);
  const [liked, setLiked] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    //fetching func
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
      }).then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      }).then(resObject => {
        setUser(resObject.user);
        console.log(user);
      }).catch(error => {
        console.log(error);
      })
    };
    getUser();
  }, []);

  return (
    <Router>
      <div className='container'>
        {user && <Sidebar />}
        {/* <Sidebar /> */}
        <Routes>
          <Route exact path='/' element={<Home developers={developers} setDevelopers={setDevelopers} liked={liked} setLiked={setLiked} />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path='/favorites' element={<Favorite favorite={favorite} setFavorite={setFavorite} />} />
        </Routes>
      </div>
      {/* {user && <Footer />} */}
    </Router>
  );
}

export default App;
