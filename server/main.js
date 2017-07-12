import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';


Meteor.startup(() => {

  // class Person {
  //   constructor(name = 'None', age = 'zero') {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   //default greeting
  //   greeting() {
  //     return `Hi my name is ${this.name}`;
  //   }
  //   getPersonDescription() {
  //     return `Hi my name is ${this.name} and my age is ${this.age}`;
  //   }
  // }
  //
  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //   //custumize greeting
  //   greeting() {
  //     if (this.title) {
  //       return `Hi! I'm ${this.name} and I work as a ${this.title}`;
  //     } else {
  //       return super.greeting();
  //     }
  //   }
  //
  //   hasJob() {
  //     return !!this.title;
  //   }
  // }
  //
  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'assambly') {
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //   greeting() {
  //     if(this.preferredLanguage) {
  //       return `Hi my name is ${this.name}, my age is ${this.age} my programming
  //       preferred language is ${this.preferredLanguage}`;
  //     } else {
  //       return super.greeting();
  //     }
  //   }
  // }
  //
  //
  //   let me = new Programmer('Rodrigo')
  //     console.log(me.greeting());
  //
  //   let otherPerson = new Programmer('Andrew', 25)
  //     console.log(otherPerson.greeting());
  //
  //   let newProgrammer = new Programmer('Guillermo', 99, 'JavaScript Bitch!')
  //     console.log(newProgrammer.greeting());
});
