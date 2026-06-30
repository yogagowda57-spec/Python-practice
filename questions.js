/**
 * ============================================================
 *  questions.js  —  PyPractice Question Bank
 * ============================================================
 *  HOW TO ADD A NEW QUESTION
 *  --------------------------
 *  Copy one of the objects below and paste it inside the
 *  QUESTIONS array. Fill in the fields:
 *
 *    id         : unique number (increment from last)
 *    concept    : must match one of the CONCEPTS list exactly
 *    title      : short question title
 *    difficulty : "Easy" | "Medium" | "Hard"
 *    problem    : full problem description (string)
 *    input      : sample input to the program (string, or "" if none)
 *    output     : expected output (string)
 *    hint       : optional hint string, or "" to hide
 *
 *  That's it — no other file needs to be changed!
 * ============================================================
 */

const CONCEPTS = [
  "Variables",
  "Input & Output",
  "Operators",
  "Conditional Statements",
  "Loops",
  "Functions",
  "Strings",
  "Lists",
  "Tuples",
  "Dictionaries",
  "Sets",
  "File Handling",
  "OOP"
];

const QUESTIONS = [

  // ── VARIABLES ──────────────────────────────────────────────
  {
    id: 1,
    concept: "Variables",
    title: "Store and Print a Number",
    difficulty: "Easy",
    problem: "Write a Python program to store the number 10 in a variable and print it.",
    input: "10",
    output: "10",
    hint: "Assign the value to a variable and use print()."
},
{
    id: 2,
    concept: "Variables",
    title: "Store and Print a Name",
    difficulty: "Easy",
    problem: "Write a Python program to read a name and store it in a variable, then print it.",
    input: "Ramesh",
    output: "Ramesh",
    hint: "Use input() to read the name."
},
{
    id: 3,
    concept: "Variables",
    title: "Print Two Variables",
    difficulty: "Easy",
    problem: "Write a Python program to read two values and print them on separate lines.",
    input: "10\n20",
    output: "10\n20",
    hint: "Store each input in a different variable."
},
{
    id: 4,
    concept: "Variables",
    title: "Swap Two Variables",
    difficulty: "Easy",
    problem: "Write a Python program to swap the values of two variables without using a third variable.",
    input: "5\n10",
    output: "10\n5",
    hint: "Use tuple unpacking: a, b = b, a."
},
{
    id: 5,
    concept: "Variables",
    title: "Store Integer and String",
    difficulty: "Easy",
    problem: "Write a Python program to read an integer and a string, then print both.",
    input: "25\nPython",
    output: "25\nPython",
    hint: "Store each value in separate variables."
},
{
    id: 6,
    concept: "Variables",
    title: "Print Variable Twice",
    difficulty: "Easy",
    problem: "Write a Python program to read a value and print it two times.",
    input: "Hello",
    output: "Hello\nHello",
    hint: "Use the same variable in two print statements."
},
{
    id: 7,
    concept: "Variables",
    title: "Store Three Numbers",
    difficulty: "Easy",
    problem: "Write a Python program to read three numbers and print them in the same order.",
    input: "5\n10\n15",
    output: "5\n10\n15",
    hint: "Use three variables."
},
{
    id: 8,
    concept: "Variables",
    title: "Print Variable with Message",
    difficulty: "Easy",
    problem: "Write a Python program to read a name and print 'Hello, Name'.",
    input: "Ravi",
    output: "Hello, Ravi",
    hint: "Use string formatting."
},
{
    id:9,
    concept: "Variables",
    title: "Copy Variable Value",
    difficulty: "Easy",
    problem: "Write a Python program to read a number, copy it to another variable, and print both values.",
    input: "50",
    output: "50\n50",
    hint: "Assign one variable to another."
},
{
    id: 10,
    concept: "Variables",
    title: "Update Variable Value",
    difficulty: "Easy",
    problem: "Write a Python program to store a number in a variable, increase it by 5, and print the updated value.",
    input: "10",
    output: "15",
    hint: "Use += 5."
},
{
    id: 11,
    concept: "Variables",
    title: "Store a Decimal Number",
    difficulty: "Easy",
    problem: "Write a Python program to read a decimal number and print it.",
    input: "12.5",
    output: "12.5",
    hint: "Use float(input())."
},
{
    id: 12,
    concept: "Variables",
    title: "Store a Boolean Value",
    difficulty: "Easy",
    problem: "Write a Python program to store the value True in a variable and print it.",
    input: "True",
    output: "True",
    hint: "Boolean values are True and False."
},
{
    id: 13,
    concept: "Variables",
    title: "Print Variables in One Line",
    difficulty: "Easy",
    problem: "Write a Python program to read two values and print them on the same line separated by a space.",
    input: "10\n20",
    output: "10 20",
    hint: "Use print(a, b)."
},
{
    id: 14,
    concept: "Variables",
    title: "Read and Print City",
    difficulty: "Easy",
    problem: "Write a Python program to read the name of a city and print it.",
    input: "Bengaluru",
    output: "Bengaluru",
    hint: "Store the city name in a variable."
},
{
    id: 15,
    concept: "Variables",
    title: "Store Favorite Color",
    difficulty: "Easy",
    problem: "Write a Python program to read your favorite color and print 'My favorite color is Color'.",
    input: "Blue",
    output: "My favorite color is Blue",
    hint: "Use string concatenation or an f-string."
},
{
    id: 16,
    concept: "Variables",
    title: "Read and Print Age",
    difficulty: "Easy",
    problem: "Write a Python program to read your age and print it.",
    input: "18",
    output: "My age is 18",
    hint: "Store the age in a variable."
},
{
    id: 17,
    concept: "Variables",
    title: "Store Multiple Values",
    difficulty: "Easy",
    problem: "Write a Python program to assign 10, 20, and 30 to three variables and print them.",
    input: "10\n20\n30",
    output: "10\n20\n30",
    hint: "Assign each value to a separate variable."
},
{
    id: 18,
    concept: "Variables",
    title: "Print Variable Three Times",
    difficulty: "Easy",
    problem: "Write a Python program to read a value and print it three times on separate lines.",
    input: "Python",
    output: "Python\nPython\nPython",
    hint: "Reuse the same variable."
},
{
    id: 19,
    concept: "Variables",
    title: "Exchange Two Names",
    difficulty: "Easy",
    problem: "Write a Python program to read two names, swap them, and print the updated values.",
    input: "Alice\nBob",
    output: "Bob\nAlice",
    hint: "Use tuple unpacking."
},
{
    id: 20,
    concept: "Variables",
    title: "Read and Print Roll Number",
    difficulty: "Easy",
    problem: "Write a Python program to read a student's roll number and print it.",
    input: "101",
    output: "101",
    hint: "Store the roll number in a variable and print it."
},
{
    id: 21,
    concept: "Variables",
    title: "#Type Casting, Convert String to Integer",
    difficulty: "Easy",
    problem: "Write a Python program to read a number as a string, convert it into an integer, and print it.",
    input: "25",
    output: "25",
    hint: "Use int() to convert the string into an integer."
},
{
    id: 22,
    concept: "Variables",
    title: "#Type Casting, Convert Integer to Float",
    difficulty: "Easy",
    problem: "Write a Python program to read an integer, convert it into a float, and print it.",
    input: "10",
    output: "10.0",
    hint: "Use float() to convert the integer."
},
{
    id: 23,
    concept: "Variables",
    title: "#Type Casting, Convert Float to Integer",
    difficulty: "Easy",
    problem: "Write a Python program to read a decimal number, convert it into an integer, and print it.",
    input: "15.8",
    output: "15",
    hint: "Use int(). It removes the decimal part."
},
{
    id: 24,
    concept: "Variables",
    title: "#Type Casting, Convert Number to String",
    difficulty: "Easy",
    problem: "Write a Python program to read an integer, convert it into a string, and print it.",
    input: "100",
    output: "100",
    hint: "Use str() to convert the number."
},
{
    id: 25,
    concept: "Variables",
    title: "#Type Casting, Add Two Numeric Strings",
    difficulty: "Easy",
    problem: "Write a Python program to read two numbers as strings, convert them to integers, and print their sum.",
    input: "12\n8",
    output: "20",
    hint: "Convert both inputs using int() before adding."
},
{
    id: 26,
    concept: "Variables",
    title: "#Type Casting, Multiply Numeric Strings",
    difficulty: "Easy",
    problem: "Write a Python program to read two numbers as strings, convert them into integers, and print their product.",
    input: "6\n7",
    output: "42",
    hint: "Use int() on both inputs."
},
{
    id: 27,
    concept: "Variables",
    title: "#Type Casting, Convert Integer to Boolean",
    difficulty: "Easy",
    problem: "Write a Python program to read an integer, convert it to a boolean, and print the result.",
    input: "1",
    output: "True",
    hint: "bool(0) is False; any other number becomes True."
},
{
    id: 28,
    concept: "Variables",
    title: "#Type Casting, Convert Boolean to Integer",
    difficulty: "Easy",
    problem: "Write a Python program to convert the boolean value True into an integer and print it.",
    input: "True",
    output: "1",
    hint: "Use int(True)."
},
{
    id: 29,
    concept: "Variables",
    title: "#Type Casting, Convert Character to String",
    difficulty: "Easy",
    problem: "Write a Python program to store a character, convert it into a string, and print it.",
    input: "A",
    output: "A",
    hint: "Characters are represented as strings of length 1 in Python."
},
{
    id: 30,
    concept: "Variables",
    title: "#Type Casting, Read Decimal and Print Integer",
    difficulty: "Easy",
    problem: "Write a Python program to read a decimal number, convert it to an integer, and print the result.",
    input: "99.99",
    output: "99",
    hint: "Use int() to remove the decimal part."
},
{
    id: 31,
    concept: "Variables",
    title: "#Type Casting, Read Integer and Print Float",
    difficulty: "Easy",
    problem: "Write a Python program to read an integer, convert it to a float, and print the result.",
    input: "45",
    output: "45.0",
    hint: "Use float()."
},
{
    id: 32,
    concept: "Variables",
    title: "#Type Casting, Convert Float String to Float",
    difficulty: "Easy",
    problem: "Write a Python program to read a decimal number as a string, convert it into a float, and print it.",
    input: "12.75",
    output: "12.75",
    hint: "Use float() to convert the string."
},
{
    id: 33,
    concept: "Variables",
    title: "#Type Casting, Sum of Integer and Float",
    difficulty: "Easy",
    problem: "Write a Python program to read an integer and a float, add them, and print the result.",
    input: "10\n2.5",
    output: "12.5",
    hint: "Convert the inputs using int() and float()."
},
{
    id: 34,
    concept: "Variables",
    title: "#Type Casting, Convert Number to String and Concatenate",
    difficulty: "Easy",
    problem: "Write a Python program to read a number, convert it into a string, and concatenate it with the word 'Python'.",
    input: "3",
    output: "Python3",
    hint: "Use str() before concatenation."
},
{
    id: 35,
    concept: "Variables",
    title: "#Type Casting, Find Data Type After Conversion",
    difficulty: "Easy",
    problem: "Write a Python program to read an integer, convert it into a float, and print its data type.",
    input: "25",
    output: "<class 'float'>",
    hint: "Use float() and type()."
},
{
    id: 36,
    concept: "Variables",
    title: "#Rotate Three Variables",
    difficulty: "Medium",
    problem: "Write a Python program to read three integers and rotate their values such that A becomes B, B becomes C, and C becomes A.",
    input: "10\n20\n30",
    output: "20\n30\n10",
    hint: "Use tuple assignment to rotate the variables."
},

  // ── INPUT & OUTPUT  ─────────────────────────────────────────
 {
    id: 37,
    concept: "Input & Output",
    title: "Reverse Two Inputs",
    difficulty: "Easy",
    problem: "Write a Python program that reads two inputs and prints them in reverse order.",
    input: "Hello\nWorld",
    output: "World\nHello",
    hint: "Store both inputs in separate variables and print the second one before the first."
},
{
    id: 38,
    concept: "Input & Output",
    title: "Print Inputs on One Line",
    difficulty: "Easy",
    problem: "Write a Python program that reads three inputs and prints them on a single line separated by spaces.",
    input: "Apple\nBanana\nMango",
    output: "Apple Banana Mango",
    hint: "Read each input separately and print them using a single print() statement."
},
{
    id: 39,
    concept: "Input & Output",
    title: "Swap and Print Three Inputs",
    difficulty: "Easy",
    problem: "Write a Python program that reads three inputs and prints them in reverse order.",
    input: "Red\nGreen\nBlue",
    output: "Blue\nGreen\nRed",
    hint: "Store all three inputs in separate variables."
},
{
    id: 40,
    concept: "Input & Output",
    title: "String slicing, Print Each Character on a New Line",
    difficulty: "Medium",
    problem: "Write a Python program that reads a word and prints each character on a separate line.",
    input: "Python",
    output: "P\ny\nt\nh\no\nn",
    hint: "Strings can be accessed character by character."
},
{
    id: 41,
    concept: "Input & Output",
    title: "Cross Printing",
    difficulty: "Easy",
    problem: "Write a Python program that reads two words and prints them in the following order: first word, second word, second word, first word.",
    input: "Hello\nPython",
    output: "Hello\nPython\nPython\nHello",
    hint: "Store both inputs and print them in the required sequence."
},
{
    id: 42,
    concept: "Input & Output",
    title: "Print Full Name",
    difficulty: "Easy",
    problem: "Write a Python program that reads the first name and last name and prints the full name.",
    input: "John\nDoe",
    output: "John Doe",
    hint: "Print both strings with a space between them."
},
{
    id: 43,
    concept: "Input & Output",
    title: "#String Manipulation, Convert to Uppercase",
    difficulty: "Easy",
    problem: "Write a Python program to convert a given string to uppercase.",
    input: "python",
    output: "PYTHON",
    hint: "Use the upper() method."
},
{
    id: 44,
    concept: "Input & Output",
    title: "#String Manipulation, Convert to Lowercase",
    difficulty: "Easy",
    problem: "Write a Python program to convert a given string to lowercase.",
    input: "HELLO",
    output: "hello",
    hint: "Use the lower() method."
},
{
    id: 45,
    concept: "Input & Output",
    title: "#String Manipulation, Capitalize First Letter",
    difficulty: "Easy",
    problem: "Write a Python program to capitalize only the first letter of a string.",
    input: "python",
    output: "Python",
    hint: "Use the capitalize() method."
},
{
    id: 46,
    concept: "Input & Output",
    title: "#String Slicing, Reverse a String",
    difficulty: "Easy",
    problem: "Write a Python program to print the reverse of a given string.",
    input: "apple",
    output: "elppa",
    hint: "Use slicing with a step of -1."
},
{
    id: 47,
    concept: "Input & Output",
    title: "#String Length, Count Characters",
    difficulty: "Easy",
    problem: "Write a Python program to print the total number of characters in a string.",
    input: "Hello",
    output: "5",
    hint: "Use the len() function."
},
{
    id: 48,
    concept: "Input & Output",
    title: "#String Indexing, Print Middle Character",
    difficulty: "Easy",
    problem: "Write a Python program to print the middle character of a string having an odd length.",
    input: "apple",
    output: "p",
    hint: "The middle index is len(string) // 2."
},
{
    id: 49,
    concept: "Input & Output",
    title: "#String Slicing, Print First Three Characters",
    difficulty: "Easy",
    problem: "Write a Python program to print the first three characters of a string.",
    input: "computer",
    output: "com",
    hint: "Use slicing from index 0 to 3."
},
{
    id: 50,
    concept: "Input & Output",
    title: "#String Slicing,Print Last Three Characters",
    difficulty: "Easy",
    problem: "Write a Python program to print the last three characters of a string.",
    input: "computer",
    output: "ter",
    hint: "Use negative slicing."
},
{
    id: 51,
    concept: "Input & Output",
    title: "#String Repetitionm, Repeat a String Five Times",
    difficulty: "Easy",
    problem: "Write a Python program to print the given string five times separated by spaces.",
    input: "Hi",
    output: "Hi Hi Hi Hi Hi",
    hint: "Use the * operator or repeated print statements."
},
{
    id: 52,
    concept: "Input & Output",
    title: "#String Manipulation, Remove Spaces",
    difficulty: "Easy",
    problem: "Write a Python program to remove all spaces from a string.",
    input: "Hello World",
    output: "HelloWorld",
    hint: "Use the replace() method."
},
{
    id: 53,
    concept: "Input & Output",
    title: "#String Comparison, Compare Two Strings",
    difficulty: "Easy",
    problem: "Write a Python program to read two strings and print True if they are equal, otherwise print False.",
    input: "apple\napple",
    output: "True",
    hint: "Use the == operator."
},
{
    id: 54,
    concept: "Input & Output",
    title: "#String Manipulation, Replace a Character",
    difficulty: "Easy",
    problem: "Write a Python program to replace all occurrences of the letter 'a' with '@' in a string.",
    input: "banana",
    output: "b@n@n@",
    hint: "Use the replace() method."
},
{
    id: 55,
    concept: "Input & Output",
    title: "#String Manipulation, Count Vowels",
    difficulty: "Medium",
    problem: "Write a Python program to count the number of vowels in a given string.",
    input: "education",
    output: "5",
    hint: "Check each character against 'aeiou'."
},
{
    id: 56,
    concept: "Input & Output",
    title: "#String Manipulation, Check Palindrome",
    difficulty: "Medium",
    problem: "Write a Python program to check whether a given string is a palindrome.",
    input: "madam",
    output: "Palindrome",
    hint: "Compare the string with its reverse."
},
{
    id: 57,
    concept: "Input & Output",
    title: "#String Formatting, Print Name and Age",
    difficulty: "Easy",
    problem: "Write a Python program that reads a name and age as input and prints them in the format: 'Name is Age years old'.",
    input: "Ramesh\n20",
    output: "Ramesh is 20 years old",
    hint: "Use string concatenation or an f-string to format the output."
},
{
    id: 58,
    concept: "Input & Output",
    title: "#String Repetition,Repeat a String Three Times",
    difficulty: "Easy",
    problem: "Write a Python program to print the given input string three times separated by spaces.",
    input: "apple",
    output: "apple apple apple",
    hint: "Use the * operator or print the string three times."
},
{
    id: 59,
    concept: "Input & Output",
    title: "#String Slicing, Print First Character",
    difficulty: "Easy",
    problem: "Write a Python program to print the first character of the given string.",
    input: "apple",
    output: "a",
    hint: "The first character is at index 0."
},
{
    id: 60,
    concept: "Input & Output",
    title: "#String Slicing, Print First and Last Character",
    difficulty: "Easy",
    problem: "Write a Python program to print the first and last character of the given string.",
    input: "apple",
    output: "a\ne",
    hint: "Use index 0 for the first character and -1 for the last character."
},
{
    id: 61,
    concept: "Input & Output",
    title: "#Numbers, Reverse a Two-Digit Number",
    difficulty: "Easy",
    problem: "Write a Python program to reverse a two-digit number.",
    input: "23",
    output: "32",
    hint: "Extract the digits using % and // operators."
},
{
    id: 62,
    concept: "Input & Output",
    title: "#String Length, Find Length of String",
    difficulty: "Easy",
    problem: "Write a Python program to print the length of a given string.",
    input: "apple",
    output: "5",
    hint: "Use the len() function."
},
{
    id: 63,
    concept: "Input & Output",
    title: "#String Length, Print Stars Equal to Length",
    difficulty: "Easy",
    problem: "Write a Python program that reads a word and prints '*' repeated as many times as the length of the word.",
    input: "apple",
    output: "*****",
    hint: "Multiply '*' by the length of the string."
},
{
    id: 64,
    concept: "Input & Output",
    title: "#String Indexing, Find Last Character Index",
    difficulty: "Easy",
    problem: "Write a Python program to print the index of the last character in a given string.",
    input: "apple",
    output: "4",
    hint: "The last index is len(string) - 1."
},
{
    id: 65,
    concept: "Input & Output",
    title: "#String Indexing, Print Last Character",
    difficulty: "Easy",
    problem: "Write a Python program to print the last character of the given string.",
    input: "apple",
    output: "e",
    hint: "Use negative indexing to access the last character."
},
{
    id: 66,
    concept: "Input & Output",
    title: "#String Length, Length Without First and Last Character",
    difficulty: "Easy",
    problem: "Write a Python program to print the length of a string excluding its first and last character.",
    input: "apple",
    output: "3",
    hint: "Subtract 2 from the total length of the string."
},
{
    id: 67,
    concept: "Input & Output",
    title: "#String Indexing, First and Last Character",
    difficulty: "Easy",
    problem: "Write a Python program to print the first and last character of a string.",
    input: "apple",
    output: "a e",
    hint: "Use index 0 and index -1."
},
{
    id: 68,
    concept: "Input & Output",
    title: "#String Slicing, Remove Ending Word",
    difficulty: "Medium",
    problem: "Write a Python program that reads two words w1 and w2, where w2 is at the end of w1, and prints w1 after removing w2.",
    input: "midterm\nterm",
    output: "mid",
    hint: "Slice the string using the length of w2."
},
{
    id: 69,
    concept: "Input & Output",
    title: "#String Indexing, Last Index After Removing Word",
    difficulty: "Medium",
    problem: "Write a Python program that reads two words w1 and w2, where w2 is at the end of w1, removes w2 from w1, and prints the last index of the remaining string.",
    input: "midterm\nterm",
    output: "2",
    hint: "Remove w2 first, then calculate len(result) - 1."
},
{
    id: 70,
    concept: "Input & Output",
    title: "#String Manipulation, Hide Middle Characters",
    difficulty: "Easy",
    problem: "Write a Python program that prints the first and last character of a string while replacing all middle characters with '*'.",
    input: "midterm",
    output: "m*****m",
    hint: "Keep the first and last character, and repeat '*' for the remaining characters."
},

  // ── OPERATORS ──────────────────────────────────────────────
{
    id: 71,
    concept: "Operators",
    title: "Add Two Numbers",
    difficulty: "Easy",
    problem: "Write a Python program to read two integers and print their sum.",
    input: "10\n20",
    output: "30",
    hint: "Use the + operator."
},
{
    id: 72,
    concept: "Operators",
    title: "Subtract Two Numbers",
    difficulty: "Easy",
    problem: "Write a Python program to read two integers and print their difference.",
    input: "25\n10",
    output: "15",
    hint: "Use the - operator."
},
{
    id: 73,
    concept: "Operators",
    title: "Multiply Two Numbers",
    difficulty: "Easy",
    problem: "Write a Python program to read two integers and print their product.",
    input: "7\n8",
    output: "56",
    hint: "Use the * operator."
},
{
    id: 74,
    concept: "Operators",
    title: "Divide Two Numbers",
    difficulty: "Easy",
    problem: "Write a Python program to read two numbers and print the result of division.",
    input: "20\n4",
    output: "5.0",
    hint: "Use the / operator."
},
{
    id: 75,
    concept: "Operators",
    title: "Find Remainder",
    difficulty: "Easy",
    problem: "Write a Python program to read two integers and print the remainder.",
    input: "17\n5",
    output: "2",
    hint: "Use the % operator."
},
{
    id: 76,
    concept: "Operators",
    title: "Integer Division",
    difficulty: "Easy",
    problem: "Write a Python program to perform floor division of two numbers.",
    input: "17\n5",
    output: "3",
    hint: "Use the // operator."
},
{
    id: 77,
    concept: "Operators",
    title: "Find Power",
    difficulty: "Easy",
    problem: "Write a Python program to read a base and exponent and print the result.",
    input: "2\n5",
    output: "32",
    hint: "Use the ** operator."
},
{
    id: 78,
    concept: "Operators",
    title: "Average of Two Numbers",
    difficulty: "Easy",
    problem: "Write a Python program to find the average of two numbers.",
    input: "10\n20",
    output: "15.0",
    hint: "Average = (a + b) / 2."
},
{
    id: 79,
    concept: "Operators",
    title: "Sum of Three Numbers",
    difficulty: "Easy",
    problem: "Write a Python program to read three integers and print their sum.",
    input: "5\n10\n15",
    output: "30",
    hint: "Use the + operator."
},
{
    id: 80,
    concept: "Operators",
    title: "Product of Three Numbers",
    difficulty: "Easy",
    problem: "Write a Python program to read three integers and print their product.",
    input: "2\n3\n4",
    output: "24",
    hint: "Multiply all three numbers."
},
{
    id: 81,
    concept: "Operators",
    title: "Area of Rectangle",
    difficulty: "Easy",
    problem: "Write a Python program to calculate the area of a rectangle.",
    input: "5\n8",
    output: "40",
    hint: "Area = length × width."
},
{
    id: 82,
    concept: "Operators",
    title: "Perimeter of Rectangle",
    difficulty: "Easy",
    problem: "Write a Python program to calculate the perimeter of a rectangle.",
    input: "5\n8",
    output: "26",
    hint: "Perimeter = 2 × (length + width)."
},
{
    id: 83,
    concept: "Operators",
    title: "Area of Square",
    difficulty: "Easy",
    problem: "Write a Python program to calculate the area of a square.",
    input: "6",
    output: "36",
    hint: "Area = side × side."
},
{
    id: 84,
    concept: "Operators",
    title: "Perimeter of Square",
    difficulty: "Easy",
    problem: "Write a Python program to calculate the perimeter of a square.",
    input: "6",
    output: "24",
    hint: "Perimeter = 4 × side."
},
{
    id: 85,
    concept: "Operators",
    title: "Area of Circle",
    difficulty: "Easy",
    problem: "Write a Python program to calculate the area of a circle using π = 3.14.",
    input: "7",
    output: "153.86",
    hint: "Area = 3.14 × r × r."
},
{
    id: 86,
    concept: "Operators",
    title: "Simple Interest",
    difficulty: "Easy",
    problem: "Write a Python program to calculate simple interest.",
    input: "1000\n5\n2",
    output: "100.0",
    hint: "SI = (P × R × T) / 100."
},
{
    id: 87,
    concept: "Operators",
    title: "Celsius to Fahrenheit",
    difficulty: "Easy",
    problem: "Write a Python program to convert Celsius to Fahrenheit.",
    input: "25",
    output: "77.0",
    hint: "F = (C × 9/5) + 32."
},
{
    id: 88,
    concept: "Operators",
    title: "Swap Using Third Variable",
    difficulty: "Easy",
    problem: "Write a Python program to swap two numbers using a third variable.",
    input: "10\n20",
    output: "20\n10",
    hint: "Use a temporary variable."
},
{
    id: 89,
    concept: "Operators",
    title: "Increment a Number",
    difficulty: "Easy",
    problem: "Write a Python program to read a number, add 1 to it, and print the result.",
    input: "9",
    output: "10",
    hint: "Use + or +=."
},
{
    id: 90,
    concept: "Operators",
    title: "Decrement a Number",
    difficulty: "Easy",
    problem: "Write a Python program to read a number, subtract 1 from it, and print the result.",
    input: "9",
    output: "8",
    hint: "Use - or -=."
},
{
    id: 91,
    concept: "Operators",
    title: "Check Equal",
    difficulty: "Easy",
    problem: "Write a Python program to read two integers and print True if they are equal, otherwise False.",
    input: "10\n10",
    output: "True",
    hint: "Use the == operator."
},
{
    id: 92,
    concept: "Operators",
    title: "Check Greater Number",
    difficulty: "Easy",
    problem: "Write a Python program to print True if the first number is greater than the second.",
    input: "15\n8",
    output: "True",
    hint: "Use the > operator."
},
{
    id: 93,
    concept: "Operators",
    title: "Check Less Than",
    difficulty: "Easy",
    problem: "Write a Python program to print True if the first number is less than the second.",
    input: "5\n10",
    output: "True",
    hint: "Use the < operator."
},
{
    id: 94,
    concept: "Operators",
    title: "Find Quotient and Remainder",
    difficulty: "Easy",
    problem: "Write a Python program to print the quotient and remainder when one number is divided by another.",
    input: "17\n5",
    output: "Quotient = 3\nRemainder = 2",
    hint: "Use // and % operators."
},
{
    id: 95,
    concept: "Operators",
    title: "Calculate Total Marks",
    difficulty: "Easy",
    problem: "Write a Python program to read marks of five subjects and print the total marks.",
    input: "80\n75\n90\n85\n70",
    output: "400",
    hint: "Add all five values together."
},
  // ── CONDITIONAL STATEMENTS ─────────────────────────────────
  {
    id: 96,
    concept: "Conditional Statements",
    title: "Relational Operations",
    difficulty: "Easy",
    problem: "Write a Python program that reads two numbers and prints the results of all relational operators (>, <, ==, >=, <=, !=).",
    input: "10\n20",
    output: ">\tFalse\n<\tTrue\n==\tFalse\n>=\tFalse\n<=\tTrue\n!=\tTrue",
    hint: "Use all six relational operators to compare the two numbers."
},
{
    id: 97,
    concept: "Conditional Statements",
    title: "#Relational Operations, Compare First Three Characters",
    difficulty: "Easy",
    problem: "Write a Python program that reads two words and checks whether the first three characters of the first word are equal to the first three characters of the second word. Print True if they are equal, otherwise print False.",
    input: "apple\napplication",
    output: "True",
    hint: "Use string slicing to compare the first three characters."
},
{
    id: 98,
    concept: "Conditional Statements",
    title: "#Relational Operations, Check Sunday",
    difficulty: "Easy",
    problem: "Write a Python program that reads a day number (1-7) and prints True if the day is Sunday, otherwise print False.",
    input: "7",
    output: "True",
    hint: "Sunday corresponds to day number 7."
},
{
    id: 99,
    concept: "Conditional Statements",
    title: "#Relational Operations, Negative Number",
    difficulty: "Easy",
    problem: "Write a Python program that reads a number and prints True if it is negative, otherwise print False.",
    input: "-25",
    output: "True",
    hint: "Check whether the number is less than zero."
},
{
    id: 100,
    concept: "Conditional Statements",
    title: "#Relational Operations, Valid Password",
    difficulty: "Easy",
    problem: "Write a Python program that reads a password and prints True if its length is greater than 7 characters, otherwise print False.",
    input: "audinex1",
    output: "True",
    hint: "Use the len() function to find the length of the string."
},
{
    id: 101,
    concept: "Conditional Statements",
    title: "#Relational Operations, Check Word Ending",
    difficulty: "Medium",
    problem: "Write a Python program that reads two words and checks whether the second word is present at the end of the first word. Print True if it is present, otherwise print False.",
    input: "blackhole\nhole",
    output: "True",
    hint: "Compare the last characters of the first word with the second word using string slicing."
},
{
    id: 102,
    concept: "Conditional Statements",
    title: "#Relational Operations, Greater by One",
    difficulty: "Easy",
    problem: "Write a Python program that reads two numbers a and b and prints True if b is greater than a by exactly one, otherwise print False.",
    input: "3\n4",
    output: "True",
    hint: "Check whether b == a + 1."
},
{
    id: 103,
    concept: "Conditional Statements",
    title: "#Relational Operations, Number Conditions",
    difficulty: "Medium",
    problem: "Write a Python program that reads a two-digit number. First, print True if the number is greater than 25, otherwise False. Then print True if the first digit is greater than the second digit, otherwise False.",
    input: "34",
    output: "True\nFalse",
    hint: "Use relational operators and extract the digits using division and modulus."
},
{
    id: 104,
    concept: "Conditional Statements",
    title: "#Relational Operations, Profit Check",
    difficulty: "Easy",
    problem: "Write a Python program that reads the buying price and selling price of an item and prints True if there is a profit, otherwise print False.",
    input: "340\n400",
    output: "True",
    hint: "A profit occurs when the selling price is greater than the buying price."
},
  {
    id: 105,
    concept: "Conditional Statements",
    title: "#Relational Operations, Grade Calculator",
    difficulty: "Easy",
    problem: "Read a student's marks (0–100) and print their grade: A (90+), B (75–89), C (60–74), D (45–59), or F (below 45).",
    input: "82",
    output: "Grade: B",
    hint: "Use if-elif-else to check ranges in order."
  },
  {
id:106,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Easy",
problem:"Write a Python program that reads two numbers and prints True if both numbers are negative, otherwise print False.",
input:"-5\n-8",
output:"True",
hint:"Use the and operator to check both conditions."
},
{
id:107,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Easy",
problem:"Write a Python program that reads two numbers and prints True if both numbers are greater than 9, otherwise print False.",
input:"15\n10",
output:"True",
hint:"Use the and operator."
},
{
id:108,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Easy",
problem:"Write a Python program that reads two numbers and prints True if both numbers are positive or greater than 80, otherwise print False.",
input:"81\n5",
output:"True",
hint:"Use the or operator."
},
{
id:109,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Easy",
problem:"Write a Python program that reads two numbers and prints True if both numbers are positive and their sum is not greater than 100, otherwise print False.",
input:"40\n50",
output:"True",
hint:"Use the and operator with the sum of the numbers."
},
{
id:110,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Easy",
problem:"Write a Python program that reads a number and prints True if it is between 25 and 75 (inclusive), otherwise print False.",
input:"50",
output:"True",
hint:"Use the and operator to check the range."
},
{
id:111,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Medium",
problem:"Write a Python program that reads the marks of Maths, Physics and Chemistry. Print True if either (Maths>=40 and Chemistry>=60 and Physics>=40) or the total marks are at least 120, otherwise print False.",
input:"40\n45\n60",
output:"True",
hint:"Use the or operator to combine the two conditions."
},
{
id:112,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Easy",
problem:"Write a Python program that reads three strings and prints True if any one of them is equal to 'audinex', otherwise print False.",
input:"python\naudinex\ncode",
output:"True",
hint:"Use the or operator to compare all three strings."
},
{
id:113,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Medium",
problem:"Write a Python program that reads two numbers and prints True if any one of the following conditions is satisfied: the sum of the numbers is less than 10, the absolute difference between the numbers is less than 10, or the first number is between 15 and 30.",
input:"16\n20",
output:"True",
hint:"Use the or operator."
},
{
id:114,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Easy",
problem:"Write a Python program that reads two numbers and prints True if the first number is between 45 and 75 and the second number is positive, otherwise print False.",
input:"60\n8",
output:"True",
hint:"Use the and operator."
},
{
id:115,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Medium",
problem:"Write a Python program that reads a two-digit number. Print True if the number is greater than 25 and the first digit is greater than the second digit, otherwise print False.",
input:"34",
output:"False",
hint:"Combine both conditions using the and operator."
},
{
id:116,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Medium",
problem:"Write a Python program that reads a three-digit number and prints True if it contains the digit 0, otherwise print False.",
input:"204",
output:"True",
hint:"Extract each digit and compare it with 0."
},
{
id:117,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Medium",
problem:"Write a Python program that reads a four-digit number and prints True if the first two digits are 52 and the last two digits are between 25 and 98, otherwise print False.",
input:"5278",
output:"True",
hint:"Extract the first two and last two digits separately."
},
{
id:118,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Hard",
problem:"Write a Python program that reads a three-digit number and prints True if any one of the following conditions is satisfied: each digit is greater than 7, or the product of any two digits is less than or equal to 100.",
input:"789",
output:"True",
hint:"Use the or operator to combine the conditions."
},
{
id:119,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Hard",
problem:"Write a Python program that reads a three-digit number and prints True if all of the following conditions are satisfied: the number contains the digit 1, the sum of its digits is less than 80, and the last digit is 5.",
input:"715",
output:"True",
hint:"Use the and operator to combine all conditions."
},
{
id:120,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Medium",
problem:"Write a Python program that reads a three-digit number and prints True if all three digits are equal, otherwise print False.",
input:"777",
output:"True",
hint:"Extract the digits and compare them."
},
{
    id: 121,
    concept: "Conditional Statements",
    title: "Compare Two Numbers",
    difficulty: "Easy",
    problem: "Write a program to read two numbers a and b. Print \"a is greater\" if a > b, print \"b is greater\" if b > a, otherwise print \"both are equal\".",
    input: "15\n10",
    output: "a is greater",
    hint: "Use if-elif-else to compare the two numbers."
},
{
    id: 122,
    concept: "Conditional Statements",
    title: "Positive, Negative or Zero",
    difficulty: "Easy",
    problem: "Write a program to read a number. Print \"Positive\" if the number is positive, print \"Negative\" if it is negative, otherwise print \"Zero\".",
    input: "-8",
    output: "Negative",
    hint: "Check positive and negative conditions before handling zero."
},
{
    id: 123,
    concept: "Conditional Statements",
    title: "Voting Eligibility",
    difficulty: "Easy",
    problem: "Write a program to read age and check if the person is eligible to vote. Print \"Eligible\" if age is greater than or equal to 18, otherwise print \"Not Eligible\".",
    input: "20",
    output: "Eligible",
    hint: "Compare the age with 18."
},
{
    id: 124,
    concept: "Conditional Statements",
    title: "Password Validation",
    difficulty: "Easy",
    problem: "Write a program to read a password. Print \"Valid Password\" if its length is greater than 7, otherwise print \"Invalid Password\".",
    input: "audinex1",
    output: "Valid Password",
    hint: "Use len() to find the password length."
},
{
    id: 125,
    concept: "Conditional Statements",
    title: "Compare First Three Characters",
    difficulty: "Easy",
    problem: "Write a program to read two strings. Print True if the first three characters of both strings are the same, otherwise print False.",
    input: "football\nfood",
    output: "True",
    hint: "Use string slicing to compare the first three characters."
},
{
    id: 126,
    concept: "Conditional Statements",
    title: "Check String Ending",
    difficulty: "Medium",
    problem: "Write a program to read two strings. Check whether the second string is present at the end of the first string. Print True if it is present, otherwise print False.",
    input: "blackhole\nhole",
    output: "True",
    hint: "Compare the last characters of the first string with the second string."
},
{
    id: 127,
    concept: "Conditional Statements",
    title: "Weekend or Weekday",
    difficulty: "Easy",
    problem: "Write a program to read a day number. Print \"Weekend\" if the day number is 6 or 7, otherwise print \"Weekday\".",
    input: "7",
    output: "Weekend",
    hint: "Use the or operator to check for Saturday or Sunday."
},
{
    id: 128,
    concept: "Conditional Statements",
    title: "Even or Odd",
    difficulty: "Easy",
    problem: "Write a program to read a number. Print \"Even\" if the number is divisible by 2, otherwise print \"Odd\".",
    input: "13",
    output: "Odd",
    hint: "Use the modulus operator (%) to check divisibility by 2."
},
{
    id: 129,
    concept: "Conditional Statements",
    title: "Profit or Loss",
    difficulty: "Easy",
    problem: "Write a program to read the buying price and selling price. Print \"Profit\" if the selling price is greater than the buying price, otherwise print \"Loss\".",
    input: "340\n400",
    output: "Profit",
    hint: "Compare the selling price with the buying price."
},
{
    id: 130,
    concept: "Conditional Statements",
    title: "Greater by One",
    difficulty: "Easy",
    problem: "Write a program to read two numbers a and b. Print True if b is greater than a by exactly 1, otherwise print False.",
    input: "3\n4",
    output: "True",
    hint: "Check whether b == a + 1."
},
{
    id: 131,
    concept: "Conditional Statements",
    title: "Both Numbers Negative",
    difficulty: "Easy",
    problem: "Write a program to read two numbers. Print \"Both Negative\" if both numbers are negative, otherwise print \"Condition Failed\".",
    input: "-5\n-8",
    output: "Both Negative",
    hint: "Use the and operator to check both numbers."
},
{
    id: 132,
    concept: "Conditional Statements",
    title: "Both Greater Than 50",
    difficulty: "Easy",
    problem: "Write a program to read two numbers. Print True if both numbers are greater than 50, otherwise print False.",
    input: "60\n75",
    output: "True",
    hint: "Use the and operator."
},
{
    id: 133,
    concept: "Conditional Statements",
    title: "Number in Range",
    difficulty: "Easy",
    problem: "Write a program to read a number. Print \"Inside Range\" if the number is between 25 and 75, otherwise print \"Outside Range\".",
    input: "50",
    output: "Inside Range",
    hint: "Check whether the number lies between 25 and 75."
},
{
    id: 134,
    concept: "Conditional Statements",
    title: "Subject Pass Check",
    difficulty: "Easy",
    problem: "Write a program to read marks of Maths, Physics and Chemistry. Print \"Pass\" if Maths ≥ 40, Physics ≥ 40 and Chemistry ≥ 60, otherwise print \"Fail\".",
    input: "45\n60\n70",
    output: "Pass",
    hint: "Use the and operator to combine all conditions."
},
{
    id: 135,
    concept: "Conditional Statements",
    title: "Find Audinex",
    difficulty: "Easy",
    problem: "Write a program to read three strings a, b and c. Print True if any one of them is equal to \"audinex\", otherwise print False.",
    input: "python\naudinex\njava",
    output: "True",
    hint: "Use the or operator."
},
{
    id: 136,
    concept: "Conditional Statements",
    title: "Sum or Difference Check",
    difficulty: "Medium",
    problem: "Write a program to read two numbers. Print True if the sum of both numbers is less than 20 or the difference between them is less than 5, otherwise print False.",
    input: "8\n10",
    output: "True",
    hint: "Use the or operator."
},
{
    id: 137,
    concept: "Conditional Statements",
    title: "Number Size",
    difficulty: "Easy",
    problem: "Write a program to read a number. Print \"Large\" if the number is greater than 100, otherwise if it is greater than 50 print \"Medium\", else print \"Small\".",
    input: "75",
    output: "Medium",
    hint: "Use if-elif-else."
},
{
    id: 138,
    concept: "Conditional Statements",
    title: "Compare Digits",
    difficulty: "Easy",
    problem: "Write a program to read a two-digit number. Print True if the first digit is greater than the second digit, otherwise print False.",
    input: "83",
    output: "True",
    hint: "Extract both digits using division and modulus."
},
{
    id: 139,
    concept: "Conditional Statements",
    title: "Contains Zero",
    difficulty: "Medium",
    problem: "Write a program to read a three-digit number. Print True if the number contains the digit 0, otherwise print False.",
    input: "204",
    output: "True",
    hint: "Extract each digit and compare it with 0."
},
{
    id: 140,
    concept: "Conditional Statements",
    title: "Special Four-Digit Number",
    difficulty: "Medium",
    problem: "Write a program to read a four-digit number. Print True if the first two digits are 52 and the last two digits are between 25 and 98, otherwise print False.",
    input: "5278",
    output: "True",
    hint: "Extract the first two and last two digits separately."
},
{
    id: 141,
    concept: "Conditional Statements",
    title: "Starts with a",
    difficulty: "Easy",
    problem: "Write a program to read a word. Print \"Starts with a\" if the first character is 'a', otherwise print \"Does not start with a\".",
    input: "apple",
    output: "Starts with a",
    hint: "Use string indexing."
},
{
    id: 142,
    concept: "Conditional Statements",
    title: "Ends with z",
    difficulty: "Easy",
    problem: "Write a program to read a word. Print True if the last character is 'z', otherwise print False.",
    input: "quiz",
    output: "True",
    hint: "Use negative indexing."
},
{
    id: 143,
    concept: "Conditional Statements",
    title: "Compare First Two Characters",
    difficulty: "Easy",
    problem: "Write a program to read two strings. Print True if the first two characters of both strings are the same, otherwise print False.",
    input: "flower\nflow",
    output: "True",
    hint: "Use string slicing."
},
{
    id: 144,
    concept: "Conditional Statements",
    title: "Even or Odd Length",
    difficulty: "Easy",
    problem: "Write a program to read a string. Print \"Even Length\" if the length of the string is even, otherwise print \"Odd Length\".",
    input: "python",
    output: "Even Length",
    hint: "Use len() and the modulus operator."
},
{
    id: 145,
    concept: "Conditional Statements",
    title: "Palindrome Checker",
    difficulty: "Easy",
    problem: "Write a program to read a string. Print \"Palindrome\" if the string is the same when reversed, otherwise print \"Not Palindrome\".",
    input: "madam",
    output: "Palindrome",
    hint: "Compare the string with its reverse using slicing."
},
{
id:146,
concept:"Conditional Statements",
title:"Logical Operations",
difficulty:"Hard",
problem:"Write a Python program that reads the three sides of a triangle and prints True if the sum of any two sides is greater than the third side, otherwise print False.",
input:"3\n4\n5",
output:"True",
hint:"Check all three triangle inequality conditions using the and operator."
},
  {
    id: 147,
    concept: "Conditional Statements",
    title: "Leap Year Checker",
    difficulty: "Medium",
    problem: "Write a program that reads a year and determines whether it is a leap year. A year is a leap year if it is divisible by 4, except for century years, which must be divisible by 400.",
    input: "2000",
    output: "2000 is a Leap Year",
    hint: "Condition: (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)"
  },
  {
    id: 148,
    concept: "Conditional Statements",
    title: "Simple Calculator",
    difficulty: "Easy",
    problem: "Read two numbers and an operator (+, -, *, /). Perform the selected operation and print the result. Handle division by zero gracefully.",
    input: "10\n2\n/",
    output: "Result: 5.0",
    hint: "Use if-elif to check the operator, and add a condition for division by zero."
  },
  // ── LOOPS ──────────────────────────────────────────────────
  {
    id: 13,
    concept: "Loops",
    title: "Multiplication Table",
    difficulty: "Easy",
    problem: "Read a number and print its multiplication table from 1 to 10.",
    input: "5",
    output: "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50",
    hint: "Use a for loop with range(1, 11)."
  },
  {
    id: 14,
    concept: "Loops",
    title: "Sum of Digits",
    difficulty: "Medium",
    problem: "Read a positive integer and compute the sum of its digits using a loop.",
    input: "12345",
    output: "Sum of digits: 15",
    hint: "Use modulus (% 10) to extract digits and integer division (// 10) to remove them."
  },
  {
    id: 15,
    concept: "Loops",
    title: "Pattern — Right Triangle",
    difficulty: "Medium",
    problem: "Read a number n and print a right-triangle star pattern of n rows.",
    input: "5",
    output: "*\n**\n***\n****\n*****",
    hint: "Use nested loops or print('*' * i)."
  },
  {
    id: 16,
    concept: "Loops",
    title: "Prime Numbers in Range",
    difficulty: "Hard",
    problem: "Print all prime numbers between two given integers (inclusive).",
    input: "10\n50",
    output: "11 13 17 19 23 29 31 37 41 43 47",
    hint: "For each number, check divisibility from 2 to its square root."
  },

  // ── FUNCTIONS ──────────────────────────────────────────────
  {
    id: 17,
    concept: "Functions",
    title: "Factorial Function",
    difficulty: "Easy",
    problem: "Write a function `factorial(n)` that returns the factorial of a non-negative integer n. Call it and print the result.",
    input: "6",
    output: "Factorial of 6 = 720",
    hint: "Factorial can be computed iteratively or recursively."
  },
  {
    id: 18,
    concept: "Functions",
    title: "Fibonacci with Default Argument",
    difficulty: "Medium",
    problem: "Write a function `fibonacci(n=10)` that returns a list of the first n Fibonacci numbers. Print the list.",
    input: "7",
    output: "[0, 1, 1, 2, 3, 5, 8]",
    hint: "Use a default parameter value and build the list with a loop."
  },
  {
    id: 19,
    concept: "Functions",
    title: "Lambda & Map",
    difficulty: "Hard",
    problem: "Using a lambda function and map(), square every number in a given list of integers and print the result.",
    input: "[1, 2, 3, 4, 5]",
    output: "[1, 4, 9, 16, 25]",
    hint: "list(map(lambda x: x**2, numbers))"
  },

  // ── STRINGS ────────────────────────────────────────────────
  {
    id: 20,
    concept: "Strings",
    title: "Reverse a String",
    difficulty: "Easy",
    problem: "Read a string and print it in reverse order.",
    input: "Python",
    output: "nohtyP",
    hint: "Use slicing: string[::-1]"
  },
  {
    id: 21,
    concept: "Strings",
    title: "Palindrome Check",
    difficulty: "Easy",
    problem: "Read a string and check whether it is a palindrome (reads the same forwards and backwards, ignoring case).",
    input: "Racecar",
    output: "Racecar is a Palindrome",
    hint: "Compare s.lower() with s.lower()[::-1]."
  },
  {
    id: 22,
    concept: "Strings",
    title: "Word Frequency Counter",
    difficulty: "Hard",
    problem: "Read a sentence and print each unique word along with how many times it appears, sorted alphabetically.",
    input: "the cat sat on the mat the cat",
    output: "cat: 2\nmat: 1\non: 1\nsat: 1\nthe: 3",
    hint: "Split the string, then use a dictionary or collections.Counter."
  },

  // ── LISTS ──────────────────────────────────────────────────
  {
    id: 23,
    concept: "Lists",
    title: "Find Maximum & Minimum",
    difficulty: "Easy",
    problem: "Given a list of integers, find and print the maximum and minimum values without using built-in max() or min().",
    input: "[3, 1, 4, 1, 5, 9, 2, 6]",
    output: "Max: 9\nMin: 1",
    hint: "Initialise max/min to the first element, then iterate."
  },
  {
    id: 24,
    concept: "Lists",
    title: "Remove Duplicates",
    difficulty: "Medium",
    problem: "Given a list with duplicate elements, return a new list with duplicates removed while preserving the original order.",
    input: "[1, 3, 2, 1, 5, 3, 4]",
    output: "[1, 3, 2, 5, 4]",
    hint: "Use a seen set and append only unseen elements."
  },
  {
    id: 25,
    concept: "Lists",
    title: "List Comprehension — Squares",
    difficulty: "Medium",
    problem: "Use a list comprehension to generate a list of squares for all even numbers from 1 to 20.",
    input: "",
    output: "[4, 16, 36, 64, 100, 144, 196, 256, 324, 400]",
    hint: "[x**2 for x in range(1, 21) if x % 2 == 0]"
  },

  // ── TUPLES ─────────────────────────────────────────────────
  {
    id: 26,
    concept: "Tuples",
    title: "Tuple Unpacking",
    difficulty: "Easy",
    problem: "Create a tuple containing a student's name, age, and grade. Unpack it into individual variables and print them on separate lines.",
    input: "('Alice', 20, 'A')",
    output: "Name: Alice\nAge: 20\nGrade: A",
    hint: "name, age, grade = student_tuple"
  },
  {
    id: 27,
    concept: "Tuples",
    title: "Named Tuple — Point",
    difficulty: "Medium",
    problem: "Use collections.namedtuple to create a Point type with x and y fields. Create two points and print the Euclidean distance between them.",
    input: "Point(1, 2), Point(4, 6)",
    output: "Distance: 5.0",
    hint: "import math; distance = math.sqrt((p2.x-p1.x)**2 + (p2.y-p1.y)**2)"
  },

  // ── DICTIONARIES ───────────────────────────────────────────
  {
    id: 28,
    concept: "Dictionaries",
    title: "Student Score Card",
    difficulty: "Easy",
    problem: "Create a dictionary mapping 5 student names to their scores. Print each name and score, then find and print the student with the highest score.",
    input: "{'Alice':88, 'Bob':73, 'Carol':95, 'Dave':60, 'Eve':82}",
    output: "Alice: 88\nBob: 73\nCarol: 95\nDave: 60\nEve: 82\nTop student: Carol (95)",
    hint: "Use max(scores, key=scores.get) to find the highest scorer."
  },
  {
    id: 29,
    concept: "Dictionaries",
    title: "Invert a Dictionary",
    difficulty: "Medium",
    problem: "Given a dictionary, write a function to invert it (swap keys and values). Handle the case where multiple keys share the same value by grouping them in a list.",
    input: "{'a':1, 'b':2, 'c':1}",
    output: "{1: ['a', 'c'], 2: ['b']}",
    hint: "Iterate items and append to inverted.setdefault(v, [])."
  },

  // ── SETS ───────────────────────────────────────────────────
  {
    id: 30,
    concept: "Sets",
    title: "Common Elements",
    difficulty: "Easy",
    problem: "Given two lists, find and print the common elements using sets.",
    input: "[1, 2, 3, 4, 5]\n[3, 4, 5, 6, 7]",
    output: "Common: {3, 4, 5}",
    hint: "Convert both lists to sets and use the & operator."
  },
  {
    id: 31,
    concept: "Sets",
    title: "Set Operations",
    difficulty: "Medium",
    problem: "Given two sets A and B, print their union, intersection, difference (A−B), and symmetric difference.",
    input: "A = {1,2,3,4}\nB = {3,4,5,6}",
    output: "Union: {1, 2, 3, 4, 5, 6}\nIntersection: {3, 4}\nDifference: {1, 2}\nSymmetric Diff: {1, 2, 5, 6}",
    hint: "Use |, &, -, and ^ operators on sets."
  },

  // ── FILE HANDLING ──────────────────────────────────────────
  {
    id: 32,
    concept: "File Handling",
    title: "Write and Read a File",
    difficulty: "Easy",
    problem: "Write a Python program that writes 5 lines of text to a file called `notes.txt`, then reads and prints the file contents.",
    input: "(no user input)",
    output: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5",
    hint: "Use open('notes.txt', 'w') to write and open('notes.txt', 'r') to read."
  },
  {
    id: 33,
    concept: "File Handling",
    title: "Count Words in a File",
    difficulty: "Medium",
    problem: "Read a text file and count the total number of words in it. Print the word count.",
    input: "(contents of story.txt)",
    output: "Total words: 128",
    hint: "Read the file, split by whitespace, and count the resulting list."
  },
  {
    id: 34,
    concept: "File Handling",
    title: "CSV Reader",
    difficulty: "Hard",
    problem: "Read a CSV file containing student names and scores. Calculate and print the average score, and list students who scored above average.",
    input: "name,score\nAlice,88\nBob,73\nCarol,95\nDave,60",
    output: "Average: 79.0\nAbove average: Alice, Carol",
    hint: "Use the csv module: import csv; reader = csv.DictReader(f)"
  },

  // ── OOP ────────────────────────────────────────────────────
  {
    id: 35,
    concept: "OOP",
    title: "Bank Account Class",
    difficulty: "Medium",
    problem: "Create a BankAccount class with attributes owner and balance. Implement deposit(), withdraw() (prevent overdraft), and get_balance() methods. Demonstrate with test operations.",
    input: "Owner: Alice\nDeposit: 500\nWithdraw: 200\nWithdraw: 400",
    output: "Balance: 300\nInsufficient funds!",
    hint: "Use self to refer to instance attributes. Check balance before withdrawing."
  },
  {
    id: 36,
    concept: "OOP",
    title: "Inheritance — Shapes",
    difficulty: "Hard",
    problem: "Create a base class Shape with an abstract method area(). Derive Circle and Rectangle from it. Instantiate both and print their areas.",
    input: "Circle r=7, Rectangle 4x5",
    output: "Circle area: 153.94\nRectangle area: 20",
    hint: "Use abc module: from abc import ABC, abstractmethod"
  },
  {
    id: 37,
    concept: "OOP",
    title: "Magic Methods — Vector",
    difficulty: "Hard",
    problem: "Implement a Vector2D class supporting addition (__add__), scalar multiplication (__mul__), and string representation (__repr__). Test with two vectors.",
    input: "v1 = Vector2D(2, 3)\nv2 = Vector2D(4, 1)",
    output: "v1 + v2 = Vector2D(6, 4)\nv1 * 3 = Vector2D(6, 9)",
    hint: "Define __add__ and __mul__ returning new Vector2D instances."
  }

];