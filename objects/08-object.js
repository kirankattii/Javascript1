//object literals


const mySym = Symbol("key1")
const jsUser = {
    name: "kiran",
    "full name" :"Kiran katti",
    [mySym]: "myKey1",
    age:20,
    email:"kirankatti@gail.com"
}
console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);


jsUser.email = "kirangoogle@gmail.com";
// Object.freeze(jsUser);                // can't alter object
jsUser.email = "ramgoogle@gmail.com";
// console.log(jsUser);
jsUser.greeting = function(){
    console.log("hello js User");
}
jsUser.greetingTwo = function(){
    console.log(`hello js User ,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
