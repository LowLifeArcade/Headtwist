import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js'
// import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Level from './components/Level/Level.js'
import Signin from './components/Signin/Signin.js'
import Signup from './components/Signup/Signup.js'


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
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
      this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }})
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/')
  //   .then(response => response.json())
  //   .then(console.log)
    
  // }

  calculateFaceLocation = (data) => {
    const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('button pressed')
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(response => {
        if (response) {
        fetch('http://localhose:3000/image', {
          method: 'put',
          headers: {'Content-Typle': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count}))
          })
        
        
      } 
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
      .catch(err => console.logc(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route } = this.state;
    return (
      <div className="App">
        <Particles  className='particles'
          params={particlesOptions} />
                  
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home' 
        ? <div>
        {/* <Logo /> */}
        <Level />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={imageUrl} /> 
    </div>
        
       
        : (
          route === 'signin' 
          ?  <Signin onRouteChange={this.onRouteChange}/>
          :  <Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        ) 


        }
      </div>
    );
  }
}

export default App;
