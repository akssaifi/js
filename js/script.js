// var greeting = "Welcome to the JavaScript world!";
// console.log(greeting);
// var x = 5;
// var y = 10;
// var sum = x + y;
// console.log("The sum of " + x + " and " + y + " is: " + sum);
// let s = 20;
// console.log(s);
// const pi = 3.14;
// console.log("The value of pi is: " + pi);

// let message = "Are you ready to learn JavaScript?";
// let userResponse = confirm(message);
// alert("User response: " + userResponse);

// var x = 5;
// var y = 10;
// let sum = x + y;
// console.log("The sum of " + x + " and " + y + " is: " + sum);
// let sub = x - y;
// console.log("The difference of " + x + " and " + y + " is: " + sub);
// let div = x / y;
// console.log("The division of " + x + " by " + y + " is: " + div);
// let mul = x * y;
// console.log("The product of " + x + " and " + y + " is: " + mul);
// let mod = x % y;
// console.log("The modulus of " + x + " and " + y + " is: " + mod);
// let first=prompt("Enter first number:");
// first=+first;
// let second=prompt("Enter second number:");
// second=+second;
// if(first >= second) {
//     alert("The first number is greater than the second number.");
// }
// else{
//     alert("The first number is less than the second number.");
// }
// let result=(first >= second)? "The first number is greater than or equal to the second number." : "The first number is less than the second number.";
// alert(result);
// console.log("Hello, World!");

// Check if a number is greater using if-else
// let a=5;
// let b=10;
// if(a>b){
//   console.log("a is greater than b");
// }
// else{
//   console.log("B is greater than A");
// }
// max=a>b?"a is greater than b":"B is greater than A";
// console.log(max);

// Check grade using if-else ladder
// 90-100=a+
// 80-<90=A
// 70-<80=B
// 60-<70=C
// else=D
// let a=106;
// if(a>=90&&a<=100){
//   console.log("A+");
// }
// else if(a>=80&&a<90){
//   console.log("A");
// }
// else if(a>=70&&a<80){
//   console.log("B");
// }
// else if(a>=60&&a<70){
//   console.log("C");
// }
// else if(a<60){
// console.log("D");
// }
// else{
//   console.log("Invalid input");
// }


// Check if a number is positive, negative, or zero using ternary operator
// let a=-4656;
// if(a>0){
//   console.log("Number is Positive");
// }
// else if(a<0){
//   console.log("Number is Negative");
// }
// else{
//   console.log("Number is equal to Zero");
// }




// Max of three numbers using ternary operator
// let a=90;
// let b=90;
// let c=30;
// let max=(a>=b&&a>=c)?a:(b>=a&&b>=c)?b:c;
// console.log(max);


// MAx of three with if else if ladder
// let a=55;
// let b=60;
// let c=55;
// if(a>=b&&a>=c){
//   console.log(a);
// }
// else if(b>=a&&b>=c){
//   console.log(b);
// }
// else if(c>=b&&c>=a){
//   console.log(c);
// }
// else if(a===b&&b===c&&c===a){
//   console.log("All are equal");
// }
// else{
//   console.log("Invalid input")
// }

// BItwise operators
// let a=55;
// let b=90;
// let andResult = a & b; // Bitwise AND
// let orResult = a | b; // Bitwise OR
// console.log("Bitwise AND of " + a + " and " + b + " is: " + andResult);
// console.log("Bitwise OR of " + a + " and " + b + " is: " + orResult);



// to find factorial of a number using for loop
// let n=8;
// let fact=1;
// for(let a=1;a<=n;a++){
//   fact=fact*a;
// }
// console.log(fact);



// to find the addition of all number in a number using while loop:But the answer comes 11.11111111116 instead of 10
// let n = 1234;
// let sum = 0;
// while(n>0){
//     sum = sum + n%10;
//     n /= 10;

// }
// Iterations
// 1. sum = 0;
// n%10 = 4
// sum = sum + 4
// sum = 4
// n/=10, n = 123

// 2. sum = 4;
// sum = 4 + 3 = 7
// n/=10, n=12

// 3. sum = 7;
// sum = 7 + 2 = 9;
// n/=10 , n = 1

// 4. sum = 9+1
// n/=10 = 0

// end!! condition false
// Yogesh Verma





// Write a program that asks the user for a number and prints the multiplication table for that number
// (from 1 to 10) using a do-while loop.
// let n=8;
// let product=1;
// for(let a=1;a<=10;a++){
//   product=n*a;
//   console.log(`${n} * ${a} = ${n*a}`);
// }

// Write a  program that asks the user to
// enter a number and repeatedly divides the
// number by 2 until it becomes less than or
// equal to 1. Print each result during the
// process using do-while loop.
// let n=44;
// do {
//   console.log(n);
//   n=n/2;
// } while (n>=1);






// Sample Input: 12 23 67 2 10
// let num=[12,23,67,2,10];
// let max=num[0];
// for(let i=1;i<num.length;i++){
// if(num[i]>max){
//   max=num[i];
// }
// }
// console.log(max);











// Complete the program to calculate and print the sum of elements of array.
// Input : 5 10 90 20 54
// let num=[5,10,90,20,54];
// let sum=0;
// for(let a=0;a<num.length;a++){
//   sum=sum+num[a];
// }
// console.log(sum);









// Calculate the Average of N Integers
// Input :4(no.of elements)
// 7 14 21 28
// Output : 17.5
// let num=[7,14,21,28];
// let sum=0;
// let avg=0;
// for(let a=0;a<num.length;a++){
//   sum=sum+num[a];
// }
// avg=sum/num.length;
// console.log(avg);







// function definition
// function maxoftwo(first, second){
//     console.log((first>second)?first:second);
// }

// // function invoke or call
// maxoftwo(10,5);
// maxoftwo(50,90);
// maxoftwo(1)





// // let and var difference
// let arr = [20,30,40,50];
// let sum = 0;
// for(let i = 0 ; i < arr.length ; i++){    sum+=arr[i];        
// }
// console.log(sum);
// console.log(i);








// // find the power
// function power(base, exponent){
//     let result=0;
//     result=base ** exponent;
//     console.log(result);
// }
// power(2,4);