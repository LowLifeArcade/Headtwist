import React from 'react';

const Level = ({name, entries}) => {
  return (
    <div>
       <div className='black f3'>
      {`${name}, you are at level `}
    </div>
    <div className='light-blue f1'>
    {entries}
    </div>
    </div>
   
  );
}

export default Level;