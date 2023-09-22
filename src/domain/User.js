//import crypto from 'crypto';
export class User {
  constructor(id, email, name, password, age) {
    //Verify params

    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
    this.age = age;
  }

  getId = () => this.id;
  getEmail = () => this.email;
  getName = () => this.name;

  getPassword = () => this.password;
  getAge = () => this.age;
}
