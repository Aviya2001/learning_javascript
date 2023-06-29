// //output in console 
// console.log("My Name is Avishka");
// console.log("My School Is Ananda Collage");

// //Alert pop up 
// window.alert("I love pizza");

// //this is a comment 

/*  Variables 
        - A variable is a container for storing data
        - a variable behaves as if it was the value that it contains
        - Two Steps 
            1. Declaration (var, let, const)
            2. Assignment (= assignment operator)
*/

// let firstname="Avishka";  //string data type 
// let age;    // number data type 
// let student= false; //boolean
// age=22;

// let newage = age+3


// console.log("Hello" ,firstname);
// console.log("You are",age,"years old");
// console.log (student);
// console.log ("after 3 years your age is =",newage);


// document.getElementById("p1").innerHTML = 'Hello ' + firstname;
// document.getElementById("p2").innerHTML = 'You Are '+age+ ' Years Old';
// document.getElementById("p3").innerHTML = "After 3 Years, Your Age is = " +newage;

/* Arithmetic Expressions 
    - Arithmetic Expression is a combination of 
        - operands (values, variables, etc..)
        - oparators (+ - * / %)
        - That can be avaluated to a value 
        - ex y=x+5
*/

//Oparators 
// let students=20;

// // students=students+1; add   students +=1;
// // students=students-1;  substract  students -=1;
// // students=students*2; multiply students *=1;
// // students=students /2; divide   students /=1;

// // let extrastudents = students%3; remainer 

// console.log(students);
// console.log(extrastudents);

/* Oparattor Precedence 
    1. Paranthesis ()
    2. Exponents
    3. Multiplication & division 
    4. Addition & subtraction 
*/

// let result = 1 + 2 * (3 +4);
// let result2 = (1 + 2) * (3 +4);
// console.log(result);
// console.log(result2);

/* USER INPUTS */

// Easy Way with Windows Prompt 
// let username = window.prompt("What Is Your Name?");
// console.log(username);

//Hard way Html textBox 

// let username;
// document.getElementById("Mybutton").onclick =function(){
//     username= document.getElementById("Mytext").value;
//     console.log(username);
//     document.getElementById("Mylable").innerHTML = "Hello " +username;
// }

/* Type Convertion = Change data type of a value to another (String, Numbers, Booleans) */
// issue 

// let age =window.prompt("How Old Are You");
// age=Number(age);
// age += 1; 
// console.log("your age is ",age); // its on string data type input = 31 but output 311

// let x;
// let y;
// let z;

// x=Number("3.1");
// y=String(3.45
// );
// console.log(x, typeof x);
// console.log(y, typeof y);



