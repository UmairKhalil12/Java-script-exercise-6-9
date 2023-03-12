/* ----------- Exercise 6 - 9------------- */ 



// ---question 1---
var a  = 10; 
document.getElementById("a").innerHTML = a;

document.getElementById("++a").innerHTML = ++a;
document.getElementById("a1").innerHTML = a;


document.getElementById("a++").innerHTML = a++;
document.getElementById("a2").innerHTML = a;


document.getElementById("--a").innerHTML = --a;
document.getElementById("a3").innerHTML = a;


document.getElementById("a--").innerHTML = a--;
document.getElementById("a4").innerHTML = a;


// -- question 2 --

var a = 2;
var b = 1; 

document.getElementById("a5").innerHTML = a; 
document.getElementById("b").innerHTML = b;

var result = --a - --b + ++b + b-- ;

document.getElementById("result").innerHTML = result;

// -- question 3 --

function greeting(){
    var name = prompt("Enter your name");
    document.getElementById("greeting").innerHTML = "Hello " + name;
}

// -- question 4 --- 

function multiplication(){
    var value = +prompt("Enter value");
//     var value = 5; 
    document.getElementById("multiply1").innerHTML = value * 1;
    document.getElementById("multiply2").innerHTML = value * 2;
    document.getElementById("multiply3").innerHTML = value * 3;
    document.getElementById("multiply4").innerHTML = value * 4;
    document.getElementById("multiply5").innerHTML = value * 5;
    document.getElementById("multiply6").innerHTML = value * 6;
    document.getElementById("multiply7").innerHTML = value * 7;
    document.getElementById("multiply8").innerHTML = value * 8;
    document.getElementById("multiply9").innerHTML = value * 9;
    document.getElementById("multiply10").innerHTML = value * 10;
    
}

// -- Question 5 -- 

function marks_table(){

    var TotalMarks = 100; 
    var AllTotalMarks = 100 * 3;
    var subject1 = prompt("Enter Subject 1"); //english 
    var subject2 = prompt("Enter Subject 2"); // maths
    var subject3 = prompt("Enter Subject 3"); // urdu 
    
    var subject1Marks = +prompt("Enter Subject 1 marks");
    var subject2Marks = +prompt("Enter Subject 2 marks");
    var subject3Marks = +prompt("Enter Subject 3 marks"); 

    var ObtainedTotal = subject1Marks + subject2Marks + subject3Marks;

    document.getElementById("english").innerHTML = subject1;
    document.getElementById("math").innerHTML = subject2;
    document.getElementById("urdu").innerHTML = subject3;

    document.getElementById("english-marks").innerHTML = subject1Marks;
    document.getElementById("math-marks").innerHTML = subject2Marks;
    document.getElementById("urdu-marks").innerHTML = subject3Marks;
     

    document.getElementById("total-marks1").innerHTML = TotalMarks;
    document.getElementById("total-marks2").innerHTML = TotalMarks;
    document.getElementById("total-marks3").innerHTML = TotalMarks;
    document.getElementById("total-marks4").innerHTML = AllTotalMarks;

    document.getElementById("percentage1").innerHTML = (subject1Marks/TotalMarks) * 100;
    document.getElementById("percentage2").innerHTML = (subject2Marks/TotalMarks) * 100;
    document.getElementById("percentage3").innerHTML = (subject3Marks/TotalMarks) * 100;
    

    document.getElementById("obtained").innerHTML = ObtainedTotal;
    document.getElementById("overall-percentage").innerHTML = (ObtainedTotal/AllTotalMarks) * 100;

}









