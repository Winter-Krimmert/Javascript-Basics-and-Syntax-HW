//Task 1 Declare variables
let studentName; //String
let studentAge; //Number
let studentGrade; //String
let isPresent; //Boolean

//Task 2: Assign sample values
studentName = "John Smith";
studentAge = 18;
studentGrade = "A";
isPresent = true;

//Task 3: Display the student information
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Student Grade:", studentGrade);
console.log("Attendance Status:", isPresent);


// Task 1: Declare variables
let num1;
let num2;

// Task 2: Assign sample numeric values
num1 = 10;
num2 = 5;

//Task 3: Perform arithmetic operations
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// Task 4: Explore assignment operators
num1 += 2; // equivalent to num1 = num1 + 2
num2 += 3; // equivalent to num2 = num2 + 3
console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

// Task 5: Use comparison operators
console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 !== num2);

// Task 6: Apply logical operators
let isPositive = (num1 >0) && (num2 > 0); // (and) both conditions on either side must be true. 
let isEven = (num1 % 2 === 0) || (num2 % 2 === 0); // (or) either condition on either side must be true.
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);