import React, {Component} from "react";

const TITLES = [
  'a software developer',
  'a technology lover',
  'a passionate UI/UX designer' 
];

export default class Title extends Component{

  state = {titleIndex: 0};

  componentDidMount(){
    console.log('Title component has mounted');
    this.animateTitles();
  }
    animateTitles =() =>{
      setInterval(()=> {
        const titleIndex = (this.state.titleIndex + 1)% TITLES.length;
        this.setState({titleIndex});
      }, 4000);
      
  }
  render(){
    const title = TITLES[this.state.titleIndex];
    return(
    <p>I'm {title}</p>
    )
  }
}




