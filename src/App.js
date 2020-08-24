import React, { Component } from 'react';
import Projects from './components/Projects';
import Title from './components/Title';
// import './App.css';
import img3 from '../public/img3.JPG';
export default class App extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <div className='logo' style={{}}>
          <img src={img3} style={{borderRadius:400}} alt='logo'/>
        </div>
        <h1>Hello!</h1>
        <p>My name is Aftab.</p> 
        <p><Title/></p>
        <p>I'm always looking forward to work on meaningful projects.</p>
        <hr />
        <Projects /> 
      </div>
    );
  }
}
