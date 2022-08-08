import React, { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';

export default function Home({ developers, setDevelopers, liked, setLiked, favorite, setFavorite }) {
  const baseURL = 'https://api.terawork.com/service-categories/sellers-services/computer-software-development';

  useEffect(() => {
    //get list of developers
    axios.get(baseURL)
      .then((response) => {
        setDevelopers(response.data.data.service_search_results.hits);
      })
    //console.log(developers);
  }, []);

  //function to handle SetFavorite
  const handleFavorite = (_id) => {
    //setDevelopers(developers.filter(dev => dev._id === _id));
    setFavorite(developers.filter(dev => dev._id === _id));
    console.log(favorite);
    setLiked(true);
  }

  const whiteSquare = {
    position: "absolute",
    width: "35px",
    height: "35px",
    borderRadius: "10px",
    backgroundColor: "white",
    cursor: "pointer",
  };

  const graySquare = {
    position: "absolute",
    width: "35px",
    height: "35px",
    borderRadius: "10px",
    backgroundColor: " #BBBBBB",
    cursor: "pointer",
  };

  const circleStyle = {
    border: "2px solid #ffffff",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
  };

  return (
    <div className='dashboard-container'>
      <div className="dashboard">
        <div className="dashboard-title">
          Hire Top Developers
        </div>
        <div className="dev-container">
          {developers.map((developer) => (
            <div className="dev-card" key={developer.id}>
              <div>
                <img src={developer._source.service_photo}
                  className='dev-card-image'
                  alt="card-image" />
                <div className="fav-icon">
                  <div style={whiteSquare}>
                    <div className='icon-heart' onClick={() => handleFavorite(developer._id)}>
                      <i className={!liked ? 'bi bi-heart' : 'bi bi-heart-fill'}></i>
                    </div>
                  </div>
                </div>
                <div className="dev-avatar">
                  <div className='' style={circleStyle}>
                    <img src={developer._source.avatar}
                      alt="avatar"
                      className='dev-avatar-image' />
                  </div>
                </div>
              </div>
              <div className="dev-card-info">
                <div className="dev-card-details">
                  <span className="dev-card-username">{developer._source.display_name}</span>
                  <span className="dev-card-price">₦ {developer._source.starting_from}</span>
                </div>
                <div className="dev-card-hire">Hire</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
