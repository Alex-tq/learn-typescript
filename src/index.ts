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
  Up = 2,
  Down,
  Left,
  Right,
} //the 1st get a value of 0 by default and the value of the rest increment in order based on the value of the first.

enum Directions2 {
  Up = "Up",
  Down = "down",
  Left = "left",
  Right = "right",
}

//Objects

// specify the types for the keys in the object

// method 1
const user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John Doe",
};

//method 2

type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 2,
  name: "Jane Doe",
};

//Type Assertion - Tell typescript to treat something as a different type.

let cid = 1;
let customerId = <number>cid;
let customerId2 = cid as number;

//Functions

//----------------param types--------return type----
function addNum(a: number, b: number): number {
  return a + b;
}

//void: the funtion doesn't return anything
function log(message: string | number): void {
  console.log(message);
}

// Interfaces

//For objects
interface UserInterface {
  readonly id: number; //Can't be changed
  name: string;
  age?: number; //This "?" makes it optional
}

const user3: UserInterface = {
  id: 2,
  name: "Jane Doe",
};

//For functions
interface MathFunc {
  (a: number, b: number): number;
}

const add: MathFunc = (a: number, b: number): number => a + b;
const substract: MathFunc = (a: number, b: number): number => a - b;

//Classes

class Person {
  private id: number; //Access modifier "private" only accesible within the class
  protected name: string; //Access modifier "protected" only accesible withing the class or extended from class
  // Access modifier "public" means its accessible from anywhere. public is the default value.
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now Registered`;
  }
}

const john = new Person(1, "John Doe");
const jane = new Person(2, "Jane Doe");

// Define classes with interfaces

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person2 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now Registered`;
  }
}

const alex = new Person2(10, "alex");

// Extending classes
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name); // passes params to constructor class from which it extends
    this.position = position;
  }
}

const employee = new Employee(10, "alex", "Frontend Engineer");
