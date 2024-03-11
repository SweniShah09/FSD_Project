import React from 'react'
import '../style/homepage.css'
import Header from '../component/Header'
import Posts from '../component/Posts'
import Sidebar from '../component/Sidebar'
import Single from './Single'
import { useLocation } from 'react-router-dom'
export default function HomePage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <Header/>
    <div className='home'>
      <Posts/>
      <Sidebar/>
    </div>
   
    </>
  )
}
