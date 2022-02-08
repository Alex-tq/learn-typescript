"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let name = "Alex";
let isHuman = true;
let x = "Hello";
x = "10";
let arr = [2, 4, 6, 6, 4, 8];
let arr2 = [1, "hi", true];
let person = [1, "brad", true];
let people = [
    [1, "Jonh"],
    [2, "Jane"],
];
let num = 22;
var Directions1;
(function (Directions1) {
    Directions1[Directions1["Up"] = 2] = "Up";
    Directions1[Directions1["Down"] = 3] = "Down";
    Directions1[Directions1["Left"] = 4] = "Left";
    Directions1[Directions1["Right"] = 5] = "Right";
})(Directions1 || (Directions1 = {}));
var Directions2;
(function (Directions2) {
    Directions2["Up"] = "Up";
    Directions2["Down"] = "down";
    Directions2["Left"] = "left";
    Directions2["Right"] = "right";
})(Directions2 || (Directions2 = {}));
const user1 = {
    id: 1,
    name: "John Doe",
};
const user2 = {
    id: 2,
    name: "Jane Doe",
};
let cid = 1;
let customerId = cid;
let customerId2 = cid;
function addNum(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
