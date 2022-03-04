import React from 'react'
import "./header.css"
import Elone from './elon.jpg'

export default function Header() {
  return (
        <div className="header">
            <div className='headerTitles'>
                <spn className='headerTitleSm'>React & Node</spn>
                <span className="headerTitleLg">Blog</span>
            </div>

            <img className='headerImg' src={Elone} alt='' />
        </div>
  )
}