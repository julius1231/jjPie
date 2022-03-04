import React from 'react'
import "./sidebar.css"
import hi from './elon.jpg'


export default function Sidebar() {
  return (
    <div className="sidebar">
        Sidebar
        <img className='sidebarImg' src={hi} alt=''/>
    </div>
  )
}