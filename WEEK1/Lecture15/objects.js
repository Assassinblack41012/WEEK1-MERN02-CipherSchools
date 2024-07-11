// Strings 
console.log(typeof ("Hello"));
let word = 'raining'  //String.Prototy[e]
// console.log(word.toUpperCase()); //RAINING

// let let = "hi"  - WRONG 


console.log("Hello and good evening".length);
console.log("Hello".charAt(4));


// boolean (true-1,false-0)
// True value --> any value
// False value --> 0, false,'',NaN, undefined
console.log(typeof true);
console.log(typeof false);
console.log(typeof isNaN('five'));

/* if(1){
console.log("Very True ! ")
} else{
console.log("Very Wrong ! ")
} */

if ("hello") {
console.log("very true");
} else {
console.log("very wrong");
}


console.log("hello".includes('e'));

//Null Undefined
let score1;
let result1 = null;

// console.log(typeof(score1));
// console.log(typeof(result1));

if (result1) {
console.log("very true");
} else {
console.log("very wrong");
}



OBJECT FILE

let obj = { name: " Cipher" }
//console.log(obj)

let person = {
name: "John",
email: "john@wick.com",
age: 25,
status: true,
children: {
name: "Jay"
},
hobbies : [ 'Reading' , 'Writing',true, 100 , null ]
}

let clickName = 'name';

// console.log(person.status);  //true  
// console.log(['age']); //[ 'age' ]
// console.log(person['children']);  //{ name: 'Jay' }


// console.log(person[clickName])  //John


console.log(person);
person.country = "India";
// console.log(person);
/* {
name: 'John',
email: 'john@wick.com',
age: 25,
status: true,
children: { name: 'Jay' },
country: 'India'
} 
*/

console.log(typeof person.hobbies)   //Object
console.log(typeof null)  //object 

/*  
Primitive Data Types : NUmber , String , Boolean, Undefined
Reference Data Types 
*/
