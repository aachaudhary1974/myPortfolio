import React, { Component } from 'react';
import PROJECTS from '../data/projects';

class Projects extends Component {
  render() {
    return (
      <div>
        <h3 style={{}}>Highlighted Projects</h3>
        <div>
          {PROJECTS.map((PROJECT) => {
            return (
              <div style={{display:"inline-block"}}>
                <h3>{PROJECT.title}</h3>
                <img
                  src={PROJECT.image}
                  alt='title'
                  style={{ width: 200, height: 120}}
                />
                <p>{PROJECT.description}</p>
                <a href={PROJECT.link}>{PROJECT.link}</a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
