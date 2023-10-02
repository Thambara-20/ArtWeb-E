import React from 'react';
import icon from '../assets/icons/loading.gif';

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100vh',width:'100%' }}>
      <img src={icon} alt="" style={{ width: 100 }} />
    </div>
  );
};

export default Loading;
