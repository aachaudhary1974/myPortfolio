import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// class Animal{
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   speak(){
//     console.log('my name is', this.name, 'and I am', this.age, 'years old' );
//   }
// }
// const animal1 = new Animal('simba', 3);
// animal1.speak();
// class Lion extends Animal{
//   constructor(name, age, furColor, speed){
//     super(name, age);
//     this.furColor = furColor;
//     this.speed = speed;
//   }
//   roar(){
//     console.log(
//       'color is', 
//       this.furColor, 
//       'and speed is', 
//       this.speed
//       );
//   }
// }
// const lion1 = new Lion('Mofasa', 20, 'golden', 25);
// lion1.speak();
// lion1.roar();
// console.log(lion1);