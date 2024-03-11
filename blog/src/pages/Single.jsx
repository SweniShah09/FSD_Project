import React from 'react'
import '../style/single.css'
import SinglePost from '../component/SinglePost'
import Sidebar from '../component/Sidebar'

export default function Single() {
  return (
    <div className='single'>
       <SinglePost/>
      <Sidebar/>
    </div>
  )
}
