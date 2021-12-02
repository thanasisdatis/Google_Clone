import React from 'react';
import '../pages/Home.css';
import { Link } from 'react-router-dom';
import AppIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../components/Search.js';

function Home() {
  return (
    <div className='home'>
      <div className='home_header'>
        <div className='home_headerLeft'>
          {/*We need the 2 links which are on the left top corner of the screen*/}
          {/*We must use react-router for that reason.*/}
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home_headerRight'>
          {/*Top right corner of google page has a link*/}
          {/*Has an icon*/}
          {/*Has an avatar*/}
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppIcon></AppIcon>
          <Avatar></Avatar>
        </div>
      </div>

      <div className='home_body'>
        <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'></img>

        <div className='home_inputContainer'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
