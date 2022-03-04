import React from 'react'
import "./topbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Logo_Design from './Logo_Design.png'


export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <FontAwesomeIcon 
          className="topIcon"
          icon={faFacebook} />
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
          <img 
            className="topImg"
            src={require("./Logo_Design.png")} alt=""/>
          <img 
            className="topImg"
            src={Logo_Design} alt=""/>
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
        
    </div>
  )
}