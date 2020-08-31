import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f4 black'>
      {"Find people in your picture."}
      </p>
      <div className= 'center'>
        <div className='mw6 center bg-light-green br3 pa3 pa4-ns mv4 ba shadow-5 b--black-20'>
          <div 
          className="mw7 center pa4 br2-ns ba b--black-10"
          >
            <input className='f4 center' type='text' onChange={onInputChange} 
            />

            <button 
            className= 'b ph3 pv2 br1 input-reset ba b--dark-green bg grow pointer f6 dib'
            onClick={onButtonSubmit}
            >Compute</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default ImageLinkForm;