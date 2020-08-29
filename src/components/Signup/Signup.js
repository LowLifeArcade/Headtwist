import React from 'react';

const Signup = ({onRouteChange}) => {
  return (
    <article className="mw6 center bg-clear br3 pa3 pa4-ns mv4 ba shadow-5 b--black-20">
    <main className="pa4 black-80">
    <div className="measure">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f1 fw6 ph0 mh0">Sign up</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
          <input className="pa1 input-reset ba bg-transparent hover-bg-transparent hover-white w-100 b--black-20" type="text" name="name"  id="name" />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
          <input className="pa1 input-reset ba bg-transparent hover-bg-transparent hover-white w-100 b--black-20" type="email" name="email"  id="email" />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input className="b pa1 input-reset ba bg-transparent hover-bg-transparent hover-white w-100 b--black-20" type="password" name="password"  id="password" />
        </div>
      </fieldset>
      <div className="">
        <input 
          onClick={() => onRouteChange('home')}
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />
      </div>
    </div>
  </main>
  </article>
  
  );
}

export default Signup;