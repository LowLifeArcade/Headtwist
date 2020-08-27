import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 white'>
      {"What if I told you that everything you know is a lie?"}
      </p>
      <div className= 'center'>
        <div className='pa4 br3 shadow-5'>
        <form className="form mw7 center pa4 br2-ns ba b--black-10">
        <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
        <button 
        className= 'pd2 br3 w-40 grow f4 link ph3 pv2 dib white bg-blue'
        onClick={onButtonSubmit}
        >Who?</button>
        </form>
        </div>
      </div>
    </div>
    
  );
}

export default ImageLinkForm;