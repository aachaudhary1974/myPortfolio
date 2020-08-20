import React, { Component } from 'react';
import Projects from './components/Projects.jsx';
// import Project from './components/Project.jsx';

export default class App extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <div className='logo' style={{}}>
          <img src='img3.JPG' style={{}} alt=''/>
        </div>
        <h1>Hello!</h1>
        <p>My name is Aftab. I'm a software engineer.</p>
        <p>I'm always looking forward to work on meaningful projects.</p>
        <hr />
        <Projects />
      </div>
    );
  }
}
