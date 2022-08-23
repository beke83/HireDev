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
    //Fetch the success endpoint
    fetch('http://localhost:5000/auth/login/success', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: "application/json",
      }
    }).then((response) => {
      if (response.status === 200) {
        //console.log(response);
        return response.json();
      }
    }).then((resObject) => {
      //console.log(resObject);
      setUser(resObject.user);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

 

  // console.log(user);

  return (
    <Router>
      <div className='container'>
        {user && <Sidebar />}
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
