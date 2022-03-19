/* This file contains a program that will produce roulette statistics
*/

"use strict"
const SAMPLES = 1000;

/* This program will simulate the spinning of a roulette wheel */
function roulette() {
    // Ask user for number
        console.log("Please enter your guess (0-36):");
        console.requestInput("> ", produceStats);
}

// This function will create roulette statistics
// It takes in one argument, which is the number the user entered
// It will also use the constant SAMPLES that determines how many times the wheel is spun
function produceStats(user) {

}