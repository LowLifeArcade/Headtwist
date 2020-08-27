import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Level from './components/Level/Level.js'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import './App.css'
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'ad79e8d4068048828070e931b738bb87'
 });

const particlesOptions= 

  {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 1500
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.02
        },
        "move": {
            "direction": "right",
            "speed": .01
        },
        "size": {
            "value": 1.5
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
            }
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
}

  // particles: { 
  //   number: {
  //     value: 100,
  //     density: {
  //       enable: true,
  //       value_area: 900 
  //     }
// }}}}

  // polygon: {
   
      // }
      // line_linked: {
      //   shadow: {
      //     enable: true,
      //     color: "#3CA9D1",
      //     blur: 5
        // }
      // }


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log('response')
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );

  // app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40", })
  //     .then(generalModel => {
  //       return generalModel.predict("@@sampleTrain");
  //     })
  //     .then(response => {
  //       var concepts = response['outputs'][0]['data']['concepts']
  //       console.log(concepts)
  //     });
  }

  render() {
    return (
      <div className="App">
        <Particles  className='particles'
          params={particlesOptions} />
                  
        <Navigation />
        <Logo />
        <Level />
        <ImageLinkForm 
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
         />
        <FaceRecognition /> 
      </div>
    );
  }
}

export default App;
