/*variabls and data types */

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;


var fullAge =true;
console.log(fullAge);

var job;
job = 'teacher';
console.log(job);
//variable names
job = 'teacher';
var $years =3;
*/
// var firstName = 'john'
// var age = 228
// console.log(firstName + ' ' + age);


// // Type coercion
// var job, isMarried;
// job = 'teacher';
// isMarried = false;
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation
// age = 'four';
// job = 'truck driver';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is your last name?');
// console.log(lastName + ' ' + firstName);


/*Basic operators

*/
// math operators
// var year, yearJohn, yearMark;
// var year = 2018 
// var yearJohn = year -27;
// var yearMark =year -56

// var ageJohn =year - 33
// var ageMark =year - 56
// console.log(yearJohn);
// console.log(yearMark + 2);
// console.log(yearMark * 2);
// console.log(yearMark / 2);

// //Logical opeartors
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof yearJohn);
// console.log(typeof 'string')
// var x;
// console.log(x);
// /*Operator precedence*/

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// //multiple operators
// var isFullAge = now - yearJohn >= fullAge;//true
// console.log(isFullAge);
// //grouping
// var ageJohn = now - yearJohn;
// var ageMark =35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);
// //multiple asignments
// var x, y;
// x = y = ageJohn=(3+5) * 4 - 3//8 * 4 -3//32-6//28
// console.log(x);
// console.log(ageJohn,y,x);

// //more operators
// x = x*2
// x *=2
// console.log(x);
// x += 10

// var markHeight, markMass, johnHeight, johnMass;
// markHeight = 1.8;//meters
// johnHeight =1.4;//meters
// markMass =   71 ;// mass in kg
// johnMass =   60;// mass in kg

// var markBMI = markMass / (markHeight*markHeight);
// var johnBMI =johnMass / (johnHeight*johnHeight);

// var greaterBMI = markBMI < johnBMI;

// console.log("Is Mark's BMI higher than Johns? " + greaterBMI );
// console.log(markBMI, johnBMI);

//If else statements

// var firstName = 'john';
// var civilStatuts = 'm';

// if(civilStatuts === 'married'){
//     console.log(firstName + ' is married!');
// }else {
//     console.log(firstName + ' will hopefully be married soon :)');
// }

// var isMarried =true
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully be married soon :)');
// }

// var markHeight, markMass, johnHeight, johnMass;
// markHeight = 1.84544545;//meters
// johnHeight =1.4454535;//meters
// markMass =   71454545 ;// mass in kg
// johnMass =   6045454545;// mass in kg

// var markBMI = markMass / (markHeight*markHeight);
// var johnBMI =johnMass / (johnHeight*johnHeight);

// if(markBMI < johnBMI){
//     console.log('mark\'s bMI is higher than john\'s' );
// }else{
//     console.log('John has a BMI of ' + johnBMI + ' which is bigger than Marks');
// }

//var greaterBMI = markBMI < johnBMI;

//console.log("Is Mark's BMI higher than Johns? " + greaterBMI );

/************************
 * boolean logic */ 

// var firstName = 'john';
// var age = 28;

// if  (age < 16){
// console.log(firstName + ' is a boy');
// }   else if (age >=13 && age <20) {
//     console.log('Teenager')
// }else if (age>= 20 && age < 30) { 
//     console.log('young man')
// } else {
// console.log(firstName + ' is a grown man');
// }

//The ternary operator and switch statements
// var firstName = 'john';
// var age =16;
// //ternary operator
// age >= 18 ? console.log(firstName + ' drinks beer')
// : console.log(firstName + ' drinks juice');



// var drinks = age >=18 ? console.log('beer') : console.log('juice');


// if (age >= 18){
//     var drinks = 'alchohol';
// }else{
//     var drunk = 'juicy';
// }

//switch statemnt
// var job = 'instructor';
// switch (job) {
//     case 'teacher':
//         case 'instructor':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'footbaler':
//         console.log(firstName + ' teaches kids how to play football');
//         break; case 'youtuber':
//         console.log(firstName + ' teaches kids how to make youtube vids');
//         break; case 'pilot':
//         console.log(firstName + ' teaches kids how to operate a plane');
//         break;
//         default:
//             console.log(firstName + ' Does some crazy shiii');

// }


// var firstName = 'john';
// var age = 28;



// var firstName = 'John';
// var age = 13;

// switch (true){
//     case age < 12:
//         console.log(firstName + ' is a little boy');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager')
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man')
//         break;
//         default:
//             console.log('old');

        
// }

// falsy vales:undefined, null, 0, '', NaN

// var height = 32;

// height = 90;
// if (height || height === 0){
//     console.log('variable has been defined')
    
// }else{
//     console.log('variable has not been defined yet')
// }

// var height = 32;
// if (height == '32'){
//     console.log('== does type coercion');
// }


// var johnsTeam = (95 + 134 + 105)/3;
// var mikesTeam = (95 + 134 + 105)/3;
// var marysTeam = (956 + 134 + 105)/3;

// if (mikesTeam > johnsTeam && mikesTeam > marysTeam){
//     console.log('mike\'s team has average score of ' + mikesTeam + ' which is a higher score than john\'s team');

// } 
// else if (marysTeam > johnsTeam && marysTeam > mikesTeam){
//     console.log('marys team has ' + marysTeam + ' has the higest points out of john and mark');

// }   else if (johnsTeam > mikesTeam && johnsTeam >marysTeam){
//     console.log('johns\'s team has average score of ' + johnsTeam + ' which is a higher score than mark\'s team');
// }else{
//     console.log('they have the same score');
// }

//functions

// function calculateAge (birthYear){
//     return 2020-birthYear
// }
// var ageJohn = calculateAge(1990);
// var ageMary = calculateAge(1987);
// var ageMike = calculateAge(2003);
// console.log(ageJohn, ageMary, ageMike);


// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement =65-age;

//     if (retirement > 0){
//         console.log(firstName + ' retires in ' + retirement + ' years');
//     }else{
//         console.log('he is retired');
//     }
// }
// yearsUntilRetirement(1900,'johnny');
// yearsUntilRetirement(1989, 'john');
// yearsUntilRetirement(1344, 'kim');

//Function statements and expresion

//function declaration
//function whatDoYouDo (job, firstName)

//function expresion
// var whatdoyoudo = function(job, firstName){
//     switch (job){
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives'
//         case 'designer':
//             return firstName + ' designs'

//         default:
//             return 'laszy'
//     }
// }
// console.log(whatdoyoudo('teacher', 'juan'))
// console.log(whatdoyoudo('designer', 'gravvy'))
// console.log(whatdoyoudo('soccer player', 'felix'))

//arays

//Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);

// mutate array data
names[1] = 'ben';
names[3] = 'joe';
names[names.length] = 'fred';
console.log(names)

//diferent data types
var john = ['John','Smith',1890,'teacher',false,'designer'];

john.push('blue');
john.unshift('Mr.')
john.pop();
console.log(john);

var isDesigner = john.indexOf('designer') === -1 ? 'john is not a designer': 'john is a designer';
console.log(isDesigner);


