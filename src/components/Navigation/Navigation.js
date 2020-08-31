import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
      return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}} >
      {/* this is tachyons at work. Just a string of short code giving css properties */}
      <p onClick={() => onRouteChange('signout')} className='f4 link dim black pa3 pointer'>Sign Out</p>
    </nav>
      );
    } else {
      return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}} >
        <p onClick={() => onRouteChange('signin')} className='f4 link dim black pa3 pointer'>Log In</p>
        <p onClick={() => onRouteChange('signup')} className='f4 link dim black pa3 pointer'>Sign Up</p>
      </nav>
      );
    }

}

export default Navigation;