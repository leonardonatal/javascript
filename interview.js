// Unlike regular functions, 
// arrow functions do not have their own this. 
// The value of this inside an arrow function remains the same throughout the lifecycle of the function 
// and is always bound to the value of this in the closest non-arrow parent function.

let me = { 
 name: "Leonardo Natal", 
 thisInArrow:() => { 
 console.log("My name is " + this.name); // no 'this' binding here 
 }, 
 thisInRegular(){ 
 console.log("My name is " + this.name); // 'this' binding works here 
 } 
};
me.thisInArrow(); 
me.thisInRegular();

// Deep equal 

let a = [];
let b  = [];

// false because it is not primitive type so it is a different reference

console.log(a == b);


// Those are two different array instances. Javascript compares non-primitive values like arrays, objects, functions etc by reference, 
// so if they're not literally the same instance in memory, they won't be comparable.

console.log(a === b);


// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property 
// as its own property (as opposed to inheriting it).

a.push('a');
console.log(a.hasOwnProperty(0));
console.log(a.hasOwnProperty('forEach'));



// a function created inside the constructor is unique for every object instance, 
// unlike when it is created using the prototype makes it the same function for every object instance.

var Person = function () {
    var self = this;
    self.firstName = null;
    self.lastName = null;
    self.fullName = function () {
        return self.firstName + self.lastName;
    };
};

Person.prototype.fullName2 = function () {
    return this.firstName + this.lastName;
};

var x = new Person();
var y = new Person();

console.log(x.fullName == y.fullName); // returns false.
console.log(x.fullName2 == y.fullName2); // returns true.
