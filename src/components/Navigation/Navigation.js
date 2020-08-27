import React from 'react';

const Navigation = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}} >
      {/* this is tachyons at work. Just a string of short code giving css properties */}
      <p className='f4 link dim white pa3 pointer'>Sign Out</p>
    </nav>
  );
}

export default Navigation;