import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center'>
      <div className='absolute mt2'>
      <img id="inputimage" alt='' src={imageUrl} width='400px' height='auto'></img>
      </div>
    </div>
  );
}

export default FaceRecognition;