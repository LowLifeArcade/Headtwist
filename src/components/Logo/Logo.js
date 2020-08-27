import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import arcade1 from './arcade1.png';


const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <form className=" mw6 center shadow-5 pa4 br2-ns ba b--black-10">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 20 }} style={{ height: 100, width: 150 }} >
        <div className="Tilt-inner pa3"><img style={{paddingTop: '1px'}} alt="logo" src={arcade1}/> </div>
      </Tilt>
      </form>
    </div>
    
  );
}

export default Logo;