# learn-typescript

Leaning typescript syntax

## Install typescript

From the terminal use this command to install typescrip:

$ npm i typescript

or to install globally use:

$ npm i -g typescript

## To Start writing typescript

To be able to use typescript the file extension should be .ts or .tsx for React.

## Compile Typescript

To compile a specific typescript file from the terminal
type the following command:

$ tsc filename

Or let typescript find and complile all files automtically

$ tsc

## Watch a File for Compiling on Save

To complile automaticlly everytime you save on the typescript file, type this into the terminal:

$ tsc --watch filiname

## Get Typescript's Configuration File

To configure typescript you must modify the tsconfig.json file. to get this file type the following command in the terminal:

$ tcs --init

## Compile to ES6

By default typescript will compile your code to es5. to change this go to the "compilerOptions" section of the tsconfig.json file and set the value of "target" to "es6"

## Control Where the Compiled JavasCript Goes.

To specify were you want typescript to create your compiled javaSript file, in the tsconfig.json file set the "rootDir" key to the name of the folder where your typescript code will be, and set "outDir" key to the name of where you want the compiled javascript code to be.
