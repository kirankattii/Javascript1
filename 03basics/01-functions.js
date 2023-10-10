function myName(){
    console.log("kiran");
}
// myName()

function addNum(num1, num2){
    // console.log(num1+num2);;
}
addNum()      //NaN
addNum(10,80)  //90
addNum(3,"5")  //35
addNum(3,null)  //3


function add(num1,num2){
    let num=num1+num2;

    return num;
}
const result = add(5,6);
// console.log(result)


function loginUser(username){
    if(!username){
        console.log("please enter username");
        return
    }

    return `${username} just logged in`
}
//  const str = console.log(loginUser("kirankatti"))
console.log(loginUser())   //undefined
