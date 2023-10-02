import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './Home.css';
import Welcome from './welcome/Welcome';
import Catelog from './catelog/catelog';
import SubNav from './subnav/Subnavbar';


const Home = ({isDarkMode}) => {
  

  return (
    <div className='mainwrapper'>
      <Welcome isDarkMode = {isDarkMode}/>
      <SubNav isDarkMode = {isDarkMode}/>
    

    </div>
  );
};

export default Home;

