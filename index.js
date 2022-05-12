// let element1 = document.createElement("div");
// element1.className="child";
// element1.innerText = "Hello I have created child class";
// document.querySelector("div.item1").appendChild(element1);

// let element2 = document.createElement("img");
// element2.className = "image";
// element2.setAttribute("src","./images.jpg");
// document.querySelector("div.item1").appendChild(element2);


function a(){
    console.log("Fn A");
}

var b = function(){
    console.log("Fn B");
}

console.log(b);
b();

{
    const d = function(){
        console.log("This is fn d");
    }
    d();   
}

// d();

let f = () => {
    console.log("I am fn F");
}

f();

// first class func
let g = function(param)
{
    console.log(param);
    param();
}

function h(){
    console.log("i am h");
}

g(h);


let i = function(){
    return function j(){
        console.log("j funcn");
    }
}

let returnVal = i();
console.log(returnVal);
// console.log(i());

setTimeout(() => {
    console.log("I am callback");
}, 4000)


const sayHi = (nameOfFriend) => {
  console.log("Hello", nameOfFriend);
}

const greeting = (friend , callbackfunction) => {
    callbackfunction(friend);
}

greeting("Bala", sayHi);


