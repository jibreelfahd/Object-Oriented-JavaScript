// @desc: creating a class of users with actions each user can perform

// @desc: Using the object literals
/* 
const users = {
  userOne: {
    email: "jibreelfahd@gmail.com",
    name: "Fahd",
    status: "user",
    login() {
      console.log(this.email, "has loggged in");
    },
    logout() {
      console.log(this.email, "has loggged out");
    },
  },
  userTwo: {
    email: "jamsycool@gmail.com",
    name: "Umar",
    status: "user",
    login() {
      console.log(this.email, "has loggged in");
    },
    logout() {
      console.log(this.email, "has loggged out");
    },
  },
  userThree: {
    email: "jibreelsadiyya@gmail.com",
    name: "Sadiyya",
    status: "user",
    login() {
      console.log(this.email, "has loggged in");
    },
    logout() {
      console.log(this.email, "has loggged out");
    },
  },
  userThree: {
    email: "jibreelfareedah@gmail.com",
    name: "Fareedah",
    status: "user",
    login() {
      console.log(this.email, "has loggged in");
    },
    logout() {
      console.log(this.email, "has loggged out");
    },
  },
};

console.log(users.userOne);
console.log(users.userTwo);
users.userOne.login();
users.userThree.logout() 
*/

// @desc: Using ES6 class syntax
/* 
class Users {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  login() {
    this.score++;
    console.log(this.email, "has logged in", this.score);
  }
  logout() {
    this.score--;
    console.log(this.email, "has logged out", this.score);
  }
}

class Admin extends Users {
  constructor(email, name, role) {
    super(email, name);
    this.role = role;
  }

  login() {
    this.score += 2;
    console.log(this.email, "has logged into the app");
  }

  deleteUser(user) {
    users = users.filter((persons) => {
      return persons.email != user.email;
    });
  }
}

const userOne = new Users("jibreelfahd@gmail.com", "Fahd");
const userTwo = new Users("jibreefareedah@gmail.com", "Fareedah");
const admin = new Admin("zangetsu@gmail.com", "zangetsu", "super admin");

let users = [admin, userOne, userTwo];

admin.deleteUser(userOne);
admin.login();
console.log(admin);
console.log(users);
 */

// @desc: creating objects from the old syntax using the constructor function and prototyping
const Users = function (email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
};

Users.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in successfully", "online:", this.online);
};
Users.prototype.logout = function () {
  this.online = false;
  console.log(
    this.email,
    "has logged out successfully",
    "online:",
    this.online
  );
};

const Admin = function (...args) {
  Users.apply(this, args);
  this.role = "super admin";
};

Admin.prototype = Object.create(Users.prototype);

const userOne = new Users("jibreelfahd@gmail.com", "Fahd");
const userTwo = new Users("jibreefareedah@gmail.com", "Fareedah");
const admin = new Admin("zangetsu@gmail.com", "zangetsu", "super admin");

console.log(userOne);
console.log(admin);
userTwo.login();
admin.login();
