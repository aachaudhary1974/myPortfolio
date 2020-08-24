import React, { Component } from 'react';
import PROJECTS from '../data/projects';
import '../App.css';

class Projects extends Component {
  render() {
    return (
      <div class="projects">
        <h3 style={{}}>Highlighted Projects</h3>
        <div>
          {PROJECTS.map((PROJECT) => {
            return (
              <div style={{ display: 'inline-block', padding:5 }}>
                <h3>{PROJECT.title}</h3>
                <img
                  src={PROJECT.image}
                  alt='title'
                  style={{ width: 200, height: 120 }}
                />
                <p>{PROJECT.description}</p>
                <a href={PROJECT.link}>CODE</a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
