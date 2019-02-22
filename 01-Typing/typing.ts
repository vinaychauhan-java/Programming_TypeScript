// TypeScripts - "Strong Typing" allows us to define types for our variables and class members. 
// The compiler will throw an erro if we assign a value of a wrong type to such a variable or member.

// Declaring a variable with a type

// Using the 'let' keyword to create a variable ('const' would define an immutable constant)
let myString: string;
myString = 'This is a string';

// This will resolve in a compilation error
// myString = 4;

// TypeScript can also infer types
let anotherString = 'This is a string without :string'; // Here, 'string' type  was inferred from the assigned value

// This will still resolve in a compilation error
// anotherString = 4;

// TypeScript may only infer values when those values are assigned at the declaration. Therefore, it will not work:
let yetAnotherString;
yetAnotherString = 'This is a string';

// TypeScript does not know the type, therefore we will get an error
yetAnotherString = 5;

// Some other basic types
let aString: string;
let aNumber: number;
let aBoolean: boolean;
let anArray: Array<string>;
let anything: any; // Any can be used if we don't know the actual Type

