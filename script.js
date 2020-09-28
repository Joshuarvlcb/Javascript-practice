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
//     var retirement = 65-age;

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
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names);

// // mutate array data
// names[1] = 'ben';
// names[3] = 'joe';
// names[names.length] = 'fred';
// console.log(names)

// //diferent data types
// ll

// john.push('blue');
// john.unshift('Mr.')
// john.pop();
// console.log(john);

// var isDesigner = john.indexOf('designer') === -1 ? 'john is not a designer': 'john is a designer';
// console.log(isDesigner);


//chalenge 2

// function tipCalculator (bill){
// var tips ;

// if (bill < 50){
//     tips = .20
// }else if (bill >=50 && bill < 200){
//     tips= .15
// }else {
//     tips = .10
// }
// return bill*tips
// }
// console.log(tipCalculator(21));

// var bills =[124,48,220]

// var tips = [tipCalculator(124),tipCalculator(48),tipCalculator(220)]
// var tipsAndBills = [tips[0] + bills[0],tips[1] + bills[1],tips[2] + bills[2]];

// console.log(tips);
// console.log(tipsAndBills);








// tax calculator

// var stateTaxes = ['california','nevada','arizona']

// function federalTaxCalculator (taxes){
//     var taxPercent;
//     if (taxes< 40000){
//         taxPercent =.12
//     }
//     else if (taxes >= 39000 && taxes < 84000){
//         taxPercent =.22

//     }else if (taxes>=84000 && taxes <160000){
//         taxPercent =.24

//     }else if (taxes >= 160000 && taxes < 204000){
//         taxPercent = .32

//     }else{
//         taxPercent = .37
//     }
//     return taxes*taxPercent
// }
// var incomeTax = [70000,35000,550000,]

// var tax = [federalTaxCalculator(incomeTax[0])
// ,federalTaxCalculator(incomeTax[1])
// ,federalTaxCalculator(incomeTax[2])];
// console.log(tax);

// var taxPlusIncome = [
//     tax[0] + incomeTax[0],
//     tax[1] + incomeTax[1],
//     tax[2] + incomeTax[2]];

// console.log(taxPlusIncome)

//objects and properties

//objects can group 2 variables togerther that dont have a particulor order similar to arrays

// var john = {
//     firstName: 'john',
//     lastName: 'smith',
//     birthYear: 1990,
//     family:['jane','mark','emily','bob'],
//     job:'teacher',
//     isMarried:false
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'lastName'
// console.log(john[x]);

// john.job = 'soccer player';
// john['isMarried'] = true;
// console.log(john);

// var jane = new Object();
// jane.name = 'jane';
// jane.birthday = 2003;
// jane.profession = 'Tennis Player';
// jane['lastName'] = 'Smithy';
// console.log(jane);

//object methods can even attach functions

// var john = {
//     firstName: "john",
//     lastName: "smith",
//     birthYear: 1990,
//     family: ["jane", "mark", "emily", "bob"],
//     job: "teacher",
//     year: 2030,
//     isMarried: false,
//     calcAge: function(){
//         this.age = 2020 - this.birthYear
//     }
// };

// john.calcAge()
// console.log(john);


// var john = {
//     firstName: 'john',
//     lastName: 'Mcfarland',
//     height:1.2, //meters
//     mass:80, //kilograms
//     bmiCalc: function(){
//        this.bmi = this.mass/(this.height * this.height)
//     }
// };

// john.bmiCalc();
// console.log(john);

// var mark = {
//     firstName: 'Mark',
//     lastName: 'Tate',
//     height: 1.2, //meters
//     mass: 80, //kilograms
//     bmiCalc: function(){
//         this.bmi = this.mass/(this.height * this.height)
//     }
// };
// mark.bmiCalc();
// console.log(mark,mark.bmiCalc,john.bmiCalc);

// if (mark.bmi > john.bmi){
//     console.log( mark.firstName + ' ' + mark.lastName + ' has the highest BMI');
// }else if (mark.bmi < john.bmi){
//     console.log(john.firstName + ' ' + john.lastName + " has the highest BMI");
// }else{
//     console.log( 'same bmi');
// }



// var markHeight, markMass, johnHeight, johnMass;
// markHeight = 1.8;//meters
// johnHeight =1.4;//meters
// markMass =   71 ;// mass in kg
// johnMass =   60;// mass in kg

// var markBMI = markMass / (markHeight*markHeight);
// var johnBMI =johnMass / (johnHeight*johnHeight);

// loops and iteration
// lllll

// i = 0, 0 < 10 true, log i to console, i++
//i = 1,1 , 10 true, log i to the console, i++
// ...
// i = 9, 9 < 10 true, log i to the console, i++
//i = 10, 10 < 10 FALSE, exit the loop!

// var john = ["John", "Smith", 1890, "teacher", false, "designer"];

// for(var i = 0; i < john.length; i++){
//     console.log(john[i]);
// }


// // while loop
// var i = 0
// while(i < john.length){
//     console.log(john[1]);
//     i++
// }

//continue and break statements

// var john = ["John", "Smith", 1890, "teacher", false, "designer"];

// for(var i = 0; i < john.length; i++){
//     if(typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== "string") break;
//     console.log(john[i]);
// }

// for (var i = 6 ; i < john.length; i--) {
//     if (typeof john[i] !== "string") break;
//     console.log(john[i]);


//looping backwards
// for (var i = john.length -1 ; i >=0; i--){
//     console.log(john[i]);
// }

var john = {
    bills:[124,48,268,180,42],
    tipsCalc:function (){
        this.tip = [];
        this.finalvalues = [];

        for (var i =0; i < this.bills.length; i++){
            
            // Determine percentage nased on tippign rules
            var percentage;
            var bill = this.bills[i]

            if (bill < 50){
                percentage =.20;
            }else if (bill >= 50 && bill < 200){
                percentage =.15;
            }else{
                percentage =.10;
            }
            


            //adding results
            this.tip[i] = bill * percentage;
            this.finalvalues[i] = bill + bill * percentage;
        }
    }

    }

    
var tips= []
function markTip (){
    var bills = [77,375,110,45];
    var percent;
    
    for(var i = 0;i < bills.length; i++){

        var bill = bills.length[i];

        if (bill < 100 ){
            percent =.20;
        }else if (bill >= 100 && bill <300){
            percent =.10
        }else{
            percent =.25
        }


    }
        return tips = bill*percent;

}
markTip()
console.log(markTip)

















john.tipsCalc()
console.log(john);



var joshua = {
    fullName: 'Joshua Ruvalcaba',
    age: [17,87,23,45,67,89],
    birthYear:function (){
        this.birthYear = [];
        
        for (var i = 0;i < this.age.length; i++){

            var age = this.age.length[i];
            var year;


            if (age < 50) {
            year = 2020;
            } else if (age >= 50 && age < 200) {
            year = 2020;
            } else {
            year = 2020;
            }
            


            this.birthYear[i] = Number(age - year);
    }
        }

        

};

joshua.birthYear();
console.log(joshua);

