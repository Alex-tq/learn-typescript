export {};
//Specify types by adding ": typeName" after the variable.
//Typescript will also do type inference even if the type is not specified.

//Basic types
let id: number = 5;
let name: string = "Alex";
let isHuman: boolean = true;

let x: any = "Hello"; // Type any can be redeclared
x = "10";

//Arrays
let arr: number[] = [2, 4, 6, 6, 4, 8]; // An array of specific types. in this case is an array of numbers.
let arr2: any = [1, "hi", true]; // Array that accepts any type

//Tuple - Like an array with some specialized condition.
let person: [number, string, boolean] = [1, "brad", true]; // Assign specific types and order to the array.
let people: [number, string][] = [
  [1, "Jonh"],
  [2, "Jane"],
]; //Array of tuples

//Union - A variable that can store multuple types of values.

let num: string | number = 22; //Num cna be either a number or a string

//Enum - define a set of named constants

enum Directions1 {
  up = 2,
  down,
  left,
  right,
} //the 1st get a value of 0 by default and the value of the rest increment in order based on the value of the first.

enum Directions2 {
  up = "Up",
  down = "down",
  left = "left",
  right = "right",
}
