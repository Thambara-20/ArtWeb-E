import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './home.css';
import Welcome from './welcome/welcome';
import Catelog from './catelog/catelog';


const Home = () => {
  

  return (
    <div className='mainwrapper'>
      <Welcome/>
      <Catelog/>

    </div>
  );
};

export default Home;

