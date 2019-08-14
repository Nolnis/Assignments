'use strict'

// For each of the exercises below, assume you are starting with the following "pokemon" array.

var pokemon = ["Marshadow", "Pikachu", "Lucario", "Flareon"];

// 1. Using a loop, iterate through this array and console.log all of the Pokemon.
// 2. Using a loop, find the index of "Lucario" from the array. (Remember: Indexes start at 0!)
// 3. Using a loop, iterate through this array and after console.log-ing "Pikachu", exit from the loop.
/* 4. Create a variable called "hasSnorlax". Using a loop, iterate through this array and 
    set hasSnorlax to whether the array contains Snorlax.*/
/* 5. Create a variable called "hasFlareon". Using a loop, iterate through this array and
    set hasFlareon to whether the array contains Flareon. */

for (let x = 0; x < pokemon.length; x++){
    console.log(pokemon[x]);
}

for (let y = 0; y < pokemon.length; y++){
    if (pokemon[y] === "Lucario"){
        console.log("Lucario is located at index number " + y);
    }
}

for (let z = 0; z < pokemon.length; z++){
    if(pokemon[z] === "Pikachu"){
        console.log("Pikachu is located at index number " + z);
        break;
    }
}

let snorlaxIndex = -1
let hasSnorlax = 0;
while (snorlaxIndex === -1 && hasSnorlax < pokemon.length){
    if (pokemon[hasSnorlax] === "Snorlax"){
        snorlaxIndex = hasSnorlax; 
    }
    hasSnorlax ++;
}
if (snorlaxIndex < 0){
    console.log("Snorlax was not found in the array.");
}
else{
    console.log("Snorlax was found at index number " + snorlaxIndex + '.');
}

let flareonIndex = -1;
let hasFlareon = 0;
while (flareonIndex === -1 && hasFlareon < pokemon.length){
    if (pokemon[hasFlareon] === "Flareon"){
        flareonIndex = hasFlareon;
    }
    hasFlareon ++; 
}
if (flareonIndex < 0){
    console.log("Flareon was not found in the array.")
}
else{
    console.log("Flareon was found at index number " + flareonIndex + '.');
}