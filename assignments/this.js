/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In the global scope, 'this' is binded to the Window object.
* 2. In implicit binding, the object before the . is 'this'. 
* 3. With New Binding, 'this' is bound the the newly created object.
* 4. With Explicit binding, you can set the value of 'this' with call(), bind() and apply().
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let myFunction = function() {
    console.log(this);
}
myFunction();


// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} myname is ${name}`)
    }
}
myObj.sayHello('Melvin');


// Principle 3

// code example for New Binding
function hogwartsFriends() {
    this.firstName = 'Ron';
    this.lastName = 'Weasley';
    console.log(this);
}

const bestfriend = new hogwartsFriends();


// Principle 4

// code example for Explicit Binding
function myCar() {
    this.carModel = "Hyundai";
    this.yearModel = 2017;
    this.carMake = "Santa Fe";
    console.log(this);
}

const carColor = {
  color: "Red",
  seats: 4,
};

myCar.apply(carColor);

