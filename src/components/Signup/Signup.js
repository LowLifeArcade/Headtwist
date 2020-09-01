import React from 'react';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }


  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
    
    .then(response => response.json())
    .then(user => {
      if (user) {
        this.props.loadUser(user)
        this.props.onRouteChange('home')
      }
    })
  }
  render() {
    return (
      <article className="mw6 center bg-light-green br3 pa3 pa4-ns mv4 ba shadow-5 b--black-20">
      <main className="pa4 black-80">
      <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Sign up</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input 
              className="pa1 input-reset ba bg-washed-green hover-bg-white hover-black w-100 b--black-20" 
              type="text" 
              name="name"  
              id="name" 
              onChange= {this.onNameChange}
            />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
            <input 
              className="pa1 input-reset ba bg-washed-green hover-bg-white hover-black w-100 b--black-20" 
              type="email" 
              name="email"  
              id="email" 
              onChange= {this.onEmailChange}
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input 
              className="b pa1 input-reset ba bg-washed-green hover-bg-white hover-black w-100 b--black-20" 
              type="password" 
              name="password"  
              id="password" 
              onChange= {this.onPasswordChange}
            />
          </div>
        </fieldset>
        <div className="white">
          <input 
            onClick= {this.onSubmitSignIn}
            className="b white ph3 pv2 input-reset ba b--black bg-dark-green grow pointer f6 dib" type="submit" value="Sign up!" />
        </div>
      </div>
    </main>
    </article>
    )
  }
}

export default Signup