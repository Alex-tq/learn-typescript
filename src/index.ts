export {};
//Specify types by adding ": typeName" after the variable.
//Typescript will also do type inference even if the type is not specified.

//Basic types
let id: number = 5;
let name: string = "Alex";
let isHuman: boolean = true;

let x: any = "Hello"; // Type any can be redeclared
x = "10";
