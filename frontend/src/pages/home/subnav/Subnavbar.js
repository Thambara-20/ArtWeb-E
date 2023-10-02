import React, { useState } from 'react';

import './Subnavbar.css';
import Catelog from '../catelog/catelog';

const SubNav = () => {
  const [activeTab, setActiveTab] = useState('all'); // Set the default active tab to 'all'

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div  className='subnav-wrapper'>
      <h1 className="a-title">Catelogue</h1>
      <nav className="subnavbar">
        <ul className="subnavbar-nav">
        <li
            className={`subnav-item ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => handleTabChange('all')}
          >
            All
          </li>
          <li
            className={`subnav-item ${activeTab === 'potraits' ? 'active' : ''}`}
            onClick={() => handleTabChange('potraits')}
          >
            Potraits
          </li>
       
          <li
            className={`subnav-item ${activeTab === 'landscapes' ? 'active' : ''}`}
            onClick={() => handleTabChange('landscapes')}
          >
            Landscapes
          </li>
          <li 
            className={`subnav-item ${activeTab === 'abstracts' ? 'active' : ''}`}
            onClick={() => handleTabChange('abstracts')}
          >
            Abstracts
          </li>
        </ul>
       
      </nav>

      {activeTab === 'all' && 
         <Catelog darkMode />
            }
      {activeTab === 'potraits' && <Catelog darkMode />}
      {activeTab === 'landscapes' && <Catelog darkMode />}
      {activeTab === 'abstracts' && <Catelog darkMode />}

    </div>
  );
};

export default SubNav;
