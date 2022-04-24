import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'
function Sidebar() {

  const user=useSelector(selectUser);


  const recentItem=(topic)=>(
    <div className='sidebar__recentItems'>
    <span className='sidebar__hash'>#</span>
    <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
      <img src='https://c4.wallpaperflare.com/wallpaper/804/993/293/naruto-hinata-hy%C5%ABga-hd-wallpaper-preview.jpg' />
      <Avatar src={user.photoUrl}  className='sidebar__avatar'>
        {user.email[0]}

      </Avatar>
      <h2>{user.displayName}</h2>
      <h4>{user.email}</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
<p>Who Viewed You</p>
<p className='sidebar__statNumber'>2,569</p>
        </div>
        <div className='sidebar__stat'>
<p>Views On Post</p>
<p className='sidebar__statNumber'>1,669</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactJs')}
        {recentItem('programming')}
        {recentItem('bigBull')}
        {recentItem('stockTrader')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar