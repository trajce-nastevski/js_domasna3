// 1. Write a JavaScript conditional statement to sort three numbers. Print the result.
let a = 4;
let b = 6;
let c = 7;

if (c > b && b > a) {
    console.log(a + ' ' + b + ' ' + c);
} else if (c > a && a > b) {
    console.log(b + ' ' + a + ' ' + c);
} else if (a > c && c > b) {
    console.log(b + ' ' + c + ' ' + a);
} else if (b > c && c > a) {
    console.log(a + ' ' + c + ' ' + b);
} else if (b > a && a > c) {
    console.log(c + ' ' + a + ' ' + b);
} else if (a > b && b > c) {
    console.log(c + ' ' + b + ' ' + a);
} else {
    console.log('Some of the numbers are equal');
}

// 2. Write a JavaScript conditional statement to find the largest of five numbers. Print the result.
let number1 = 12;
let number2 = 2;
let number3 = 20;
let number4 = 9;
let number5 = 15;
console.log(Math.max(number1, number2, number3, number4, number5));

// 3. Compute the average marks of the following students. Then, use the average to determine the corresponding grade.
let grades = [80, 77, 88, 95, 68];
let max = grades[0] + grades[1] + grades[2] + grades[3] + grades[4];
let average = max / grades.length;
console.log(average);

if (average < 60){
    console.log('The average grade is an F');
} else if (average < 70){
    console.log('The average grade is a D');
} else if (average < 80){
    console.log('The average grade is a C');
} else if (average < 90){
    console.log('The average grade is a B');
} else if (average < 100){
    console.log('The average grade is an A');
} else {
    console.log('There is a problem with the system');
}

// 4. For a given hour, print out the corresponding greeting (Good morning, Good afternoon, Good evening).
let hour = 6;
if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
} else if (hour >= 12 && hour < 18){
    console.log('Good afternoon');
} else if (hour >= 18 && hour < 23){
    console.log('Good evening');
} else {
    console.log("It's night time");
}

// 5. For a given day, print out whether it is a day of the work week or weekend.
let Monday = 1;
let Tuesday = 2;
let Wensday = 3;
let Thursday = 4;
let Friday = 5;
let Saturday = 6;
let Sunday = 7;

let today = Wensday;

if (today >=1 && today <= 5) {
    console.log('It\'s a work day');
} else if (today == 6 || today == 7){
    console.log('It\'s the weekend');
} else {
    console.log('Invalid input');
}

// 6. For a given month, print out in which season it belongs.
let January = 1;
let February = 2;
let March = 3;
let April = 4;
let May = 5;
let June = 6;
let July = 7;
let August = 8;
let September = 9;
let October = 10;
let November = 11;
let December = 12;

let currentMonth = November;

if (currentMonth == 1 || currentMonth == 2 || currentMonth == 12) {
    console.log('It\'s Winter');
} else if (currentMonth == 3 || currentMonth == 4 || currentMonth == 5) {
    console.log('It\'s Spring');
} else if (currentMonth == 6 || currentMonth == 7 || currentMonth == 8) {
    console.log('It\'s Summer');
} else if (currentMonth == 9 || currentMonth == 10 || currentMonth == 11) {
    console.log('It\'s Autumn');
} else {
    console.log('Invalid Input');
}
