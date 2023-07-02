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


// const = constant is a variable that cant be change 

// // without consttant 
// const pi= 3.14159;
// let radius;
// let circumference; 

// radius=window.prompt("Enter Radius Of the Circle "); // string type input 
// radius=Number(radius); // Convert to Number Type 
// // pi=100;

// circumference = 2 * pi * radius;
// console.log("Circumference Of the Circle is = ", circumference);

// Math Function - Inbult mathamatical functions in js 

// let x=2.99;
// let y=5;
// let z=9;

// let max;
// let min;


// x= Math.round(x) // Rounded the number as it is 
// x= Math.floor(x);  // Rounded Down 
// x=Math.ceil(x); // Rounded Up 
// x=Math.pow(x, 3); // pow is to power of a number 
// x=Math.sqrt(x); // Squre Root Of  a number 
// max=Math.max(x,y,z);
// min=Math.min(x,y,z);

// console.log(x); 
// console.log(max);
// console.log(min);



// Hypotenus Of a trangle By prompt input 

// let sideA; 
// let sideB; 
// let sideC; 

// sideA=window.prompt("Enter Length Of Side A in cm = ", sideA); 
// sideA=Number(sideA);

// sideB=window.prompt("Enter Length Of Side B in cm = ", sideB);
// sideB=Number(sideB);

// sideC=Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

// console.log("Side C length in cm is = ", sideC);

// Hypotenus Of a trangle By Html Input 

// let sideA;
// let sideB;
// let sideC;

// document.getElementById("submitbtn").onclick = function(){
//     sideA= document.getElementById("textA").value;
//     sideA=Number(sideA);
//     sideB= document.getElementById("textB").value;
//     sideB=Number(sideB);
//     sideC=Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

//     document.getElementById("sideC"). innerHTML = "Side C =" + sideC;
//     console.log("Your Answer Is ",sideC);
// }


// // If Statements = a basic form of decision making if a condition is true, then do something 
// // if not, then dont do it 

// let age = 112; 

// if(age>=18){
//     console.log("You Are An Adult");
// }
// else if(age<0){
//     console.log("Wrong Data");
// }
// else if(age>60){
//     console.log["You Are old"]
// }
// else{
//     console.log("You Are a Child")
// }

// let online=false;
// if(online){
//     console.log("You Are Online");
// }
// else{
//     console.log("You are OFline")
// }

// document.getElementById("Mybutton").onclick = function(){

//     const visa=document.getElementById("visabtn");
//     const master=document.getElementById("masterbtn");
//     const paypal=document.getElementById("paypalbtn");


//     //For Check Box 
//     if(document.getElementById("mycheckbox").checked){
//         console.log("You Are Subscribe ")
//     }
//     else{
//         console.log("You Are NOT Subscribe ")
//     }
//     //For Radio Buttions    

//     if(visa.checked){
//         console.log("Your Payment Is VISA");
//     }
//     else if(master.checked){
//         console.log("Your Payment Is MasterCard");
//     }
//     else if(paypal.checked){
//         console.log("Your Payment Is Paypal");
//     }
//     else{
//         console.log("You Must Select Payment Method");
//     }

// }

//Switch -  Statement that exam a value for a match against many case
//          claises. More efficient than that many "Else if " Statement 


// document.getElementById("gradebtn").onclick = function(){
//     grade=document.getElementById("grade").value;
//     switch (grade){
//         case "A":
//             console.log("You Did Great");
//             break;
//         case "B":
//             console.log("You did Good ");
//             break;
//         case "C":
//             console.log("You Did Passed");
//             break;
//         case "S":
//             console.log("You did passed Bairly. ");
//             break;
//         case "F":
//             console.log("You are Fail ");
//             break;
//         default:
//             console.log(grade, "is not a Graded Letter ");
//             break;

//     }
// }

//LOgiocal Oparators = gives us the ability to check morethan 1 condition concurrently 
//                      && AND (Both Conditions Must BE true )
//                        || OR (Either condition can be true)

// let temp =50;
// let sunny = true;
// // if (temp > 0 && temp <30){
// //     console.log("Tthe weather is Good");
// // }
// // else{
// //     console.log("Weather is Not goood ")
// // }

// if (temp > 0 || temp <30 && sunny){
//     console.log("Weather is Not goood ")
   
// }
// else{
//     console.log("Tthe weather is Good");
// }

/* ! NOt Logoical Oparator - 
Tipicaly used to revised a condition's boolean value 
true --> lkase  and false --> True */


// let temp= 15;

// if(!(temp>0)){
//     console.log("It is Cold Outside")
// }
// else{
//     console.log("It is Hot Outside")
// }



/*While Loop =  Repeat Some Code, ehile some conditions is true
                potentially infinite */

// let username = "";

// while(username == ""){
//     username = window.prompt("Enter Your Name");
// }
// console.log(username, "Hello");

//for loop - repeat some code a certan amount of time 
// for(i=1; i<=10; i+=1 ){
//     console.log(i);
// }

//break = breaks out of a loop entirely  i==13 prints 1-12
// continue = Skip an itaration of a loop  i==13 print without 13

// for(let i=1; i<=15; i+=1){
//     if(i==13){
//         // break;
//         continue;
//     }
//     console.log(i)
// }


// Nested Loop - a loop inside of another loop 

// for(i=1; i<=2; i+=1 ){
//     for(j=1; j<=2; j+=1 ){
//         console.log(i);
// }
// }

//Function = Difine Code Once, and use it many times 
//            to perform some code, call the function name 

// let ussername= "Avishka";   // Global variables 
// let age =22;

// function happyBirthday(){
//     console.log("Happy Birthday To you...");
//     console.log("Happy Birthday To you...");
//     console.log("Happy Birthday Dear" , ussername);
//     console.log("Happy Birthday To you...");
//     console.log("You Are Now", age, "Years OLD");
// }

// happyBirthday();
// happyBirthday();
// happyBirthday();


// function startProgram(){
//     let ussername= "Avishka";
//     let age =22;    
//     happyBirthday(ussername,age); //arguments
    
// }
// startProgram();


// function happyBirthday(ussername,age){ //parameters 
//     console.log("Happy Birthday To you...");
//     console.log("Happy Birthday To you...");
//     console.log("Happy Birthday Dear" , ussername);
//     console.log("Happy Birthday To you...");
//     console.log("You Are Now", age, "Years OLD");
// }

//return = returns a value back to the place where you invokeed a function 

// let area; 
// let width;
// let higeht;

// width=window.prompt("Enter Width of a Rectrangel");
// higeht=window.prompt("Enter Width of a Rectrangel");

// area=getarea(width,higeht);
// console.log("Area =", area)

// function getarea(width, higeht){
//     let result = width * higeht;
//     return result;
// } 

/** Ternary Oparator = Shortcut for and if else statemnts 
 *              take 3 operands
 *              1.  a Condition with?
 *              2. expression if true:
 *              3. expression if false
 * condition? exprIfTrue : exprIfFalse
 */

//functions with if else 

// let adult = checkAge(11);
// console.log(adult);

// function checkAge(age){
//     if(age>=18)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let adult = checkAge(32);
// console.log(adult);

// function checkAge(age){
//     return age>=18? true: false; //condition? exprIfTrue : exprIfFalse
// }

// checkWinner(false);

// function checkWinner(win){
//     win ? console.log("You Win"): console.log("You Lose");
// }


/** Variable scope = Where a variable is accessible  
 * let = variables are limited to block scope {}
 * var = varables are limited to function (){}
*/

//toLocaleString() = Returns a string with a language sensitive reprasentation of thei snumber 

//    number.tolocaleString(locale, {Options});

// locale = specific languages 
// options = objects with formating oparations 

// let mynum = 12;
// // mynum = mynum.toLocaleString("en-US"); //us English 
// // mynum = mynum.toLocaleString("hi-IN"); //Hindi

// //with options (currency)
// // mynum = mynum.toLocaleString("hi-IN", {style: "currency", currency:"USD"}); //Us English With $
// // mynum = mynum.toLocaleString("hi-IN", {style: "currency", currency:"INR"}); //Us English With $


// //with options (presentage)
// // mynum = mynum.toLocaleString(undefined, {style: "percent"});

// //with options (Unit celcius)
// mynum = mynum.toLocaleString(undefined, {style: "unit", unit: "celsius"});


// console.log(mynum)


// Array = think of it as variable that can store multiple values 

// let fruits =["apple", "orrange", "mango"];

// // fruits[1]="coconut"; // Update array 

// // fruits.push("Lemon"); // Add elements to array 
// // fruits.pop(); //remove last element 
// // fruits.unshift("Banana"); // Add elements to bigining 
// // fruits.shift(); // Remove begining element 

// let length = fruits.length; //length of an array 
// let index = fruits.indexOf("orrange"); // index of element 


// console.log(index); 
// console.log(fruits); 
// console.log(length); 



// standerd for loop to access array

// let prices = [5,10,15,20,25];

// for(i=0; i<price.length; i+=1){
//     console.log(price[i])
// }

// for up statement 

// for (let price of prices){
//     console.log(price)
// }


//sort array of strings in jS

// let arrFruits=["banana", "apple", "mango", "papaya"];

// // arrFruits= arrFruits.sort(); // sort as alphabetical  order
// // arrFruits= arrFruits.sort().reverse(); // sort as alphabetical  order  but reverse 

// for(let fruit of arrFruits){
//     console.log(fruit);
// }


