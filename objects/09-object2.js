 const tindrUser = new Object();        //singalton object
 const tinder = {}                  //non-singalton object

 tinder.id = "123"
 tinder.name = "sam"
 tinder.isLoggerIn = false

//  console.log(tinder)


const regularUser ={
    email:"kiran@gmail.com",
    fullName : {
        username : {
            fname:"kiran",
            lname:"katti"
        }
    }
}
// console.log(regularUser.fullName.username)
// console.log(regularUser.fullName.username.fname)

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2};
// console.log(obj3);



const user = [
    {
        id : 1,
        email:"kiran@gmail.com"
    },
    {
        id : 2,
        email:"ram@gmail.com"
    },
    {
        id : 3,
        email:"sham@gmail.com"
    }
]
const u = user[0].email;
// console.log(u);
// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));


// console.log(tinder.hasOwnProperty('isLoggerIn'));