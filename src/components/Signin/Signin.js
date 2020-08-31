import React from 'react';

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value});
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home')
      }
    })
  }

  render() {
    const { onRouteChange } = this.props
    return (
      <article className="mw6 center bg-light-green br3 pa3 pa4-ns mv4 ba shadow-5 b--black-20">
      <main className="pa4 black-80">
      <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Log in</legend>
          <div className="mt3">
            <label 
            className="db fw6 lh-copy f6" 
            htmlFor="email">Email</label>
            <input 
            className="pa1 input-reset ba bg-washed-green hover-bg-transparent hover-transparent w-100 b--black-20" 
            type="email" 
            name="email"  
            id="email" 
            onChange={this.onEmailChange} 
            />
          </div>
          <div className="mv3">
            <label 
            className="db fw6 lh-copy f6" 
            htmlFor="password">Password</label>
            <input 
            className="b pa1 input-reset ba bg-washed-green hover-bg-transparent hover-white w-100 b--black-20" 
            type="password" 
            name="password"  
            id="password" 
            onChange={this.onPasswordChange} 
            />
          </div>
          <label 
          className="pa0 ma0 lh-copy f6 pointer"><input className="bg-transparent" type="checkbox" /> Remember me</label>
        </fieldset>
        <div className="">
          <input 
            onClick={this.onSubmitSignIn}
            className="b ph3 pv2 input-reset ba b--black bg grow pointer f6 dib" type="submit" value="Log in" />
        </div>
        <div className="lh-copy mt3">
          <p onClick={() => onRouteChange('signup')} className="f6 link dim black db pointer">Not registered?</p>
        </div>
      </div>
    </main>
    </article>
    
    );
  }
}

export default Signin;