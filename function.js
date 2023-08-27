function myFunct(theObject) {
    theObject.make ="toyota";
}

const mycar ={
    make:"Honda",
    modal:"Accord",
    year:1998,
};

const x=mycar.make;
myFunct(mycar);
const y = mycar.make;
console.log(y);

// When you pass an array as a parameter, if the 
// function changes any of the array's values, that change 
// is visible outside
//  the function, as shown in the following example:

function myfunct(theArr) {
    theArr[1]=30, 20;
}

const arr=[45];
myfunct(arr);
console.log(arr[1]);