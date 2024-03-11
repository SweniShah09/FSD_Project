import React from 'react'
import '../style/topbar.css'
import { FaFacebookSquare } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'
export default function Topbar() {
  const user = true; 
  return (
    <div className="top">
    <div className="topLeft">
    <FaFacebookSquare className='topIcon'/>
    <SlSocialTwitter className='topIcon'/>
    <FaPinterest className='topIcon'/>
    <FaInstagramSquare className='topIcon'/>
    </div>
    <div className="topCenter">
    <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

    </div>
    </div>
  )
}
