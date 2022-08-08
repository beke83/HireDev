import React from 'react';
import './favorite.css';

export default function Favorite() {

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
      <div className="dashboard-title">
       Favorites
      </div>
      <div className="dev-container">
        <div className="dev-card">
          <div>
            <img src="https://images.pexels.com/photos/11595339/pexels-photo-11595339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className='dev-card-image'
              alt="card-image" />
            <div className="fav-icon">
                <div style={whiteSquare}>
                  <div className='icon-heart'>
                    <i className='bi bi-heart'></i>
                  </div>
                </div>
            </div>
            <div className="dev-avatar">
              <div className='' style={circleStyle}>
               <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
               alt="avatar"
               className='dev-avatar-image' />
              </div>
            </div>
          </div>
          <div className="dev-card-info">
            <div className="dev-card-details">
            <span className="dev-card-username">John Doe</span>
            <span className="dev-card-price">#30,000</span>
            </div>
            <div className="dev-card-hire">Hire</div>
          </div>
        </div>
        <div className="dev-card">
          <div>
            <img src="https://images.pexels.com/photos/6424589/pexels-photo-6424589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className='dev-card-image'
              alt="card-image" />
            <div className="fav-icon">
                <div style={graySquare}>
                  <div className='icon-heart'>
                    <i className='bi bi-heart'></i>
                  </div>
                </div>
            </div>
            <div className="dev-avatar">
              <div className='' style={circleStyle}>
               <img src="https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
               alt="avatar"
               className='dev-avatar-image' />
              </div>
            </div>
          </div>
          <div className="dev-card-info">
            <div className="dev-card-details">
            <span className="dev-card-username">John Doe</span>
            <span className="dev-card-price">#30,000</span>
            </div>
            <div className="dev-card-hire">Hire</div>
          </div>
        </div>
      </div>
    </div>
  )
}
