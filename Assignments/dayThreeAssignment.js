'use strict'
/*
    * Instructions:
    * Write a script that counts up from 1 to 100, including both 1 and 100 one number at a time.
    * As you count up, log the current number to the console. However, if the current number
    * is divisible by 4, print "Ludi" to the console, if the current number is divisible
    * by 6, log "colo" to the console, and if the current number is divisible by 4 AND 6,
    * log "Ludicolo" to the console. If you log one of the above strings to the console
    * do not log the current number to the console.
*/

for(let x = 1; x <= 100; x++){
    if(!(x % 4) && !(x % 6)){
        console.log("Ludicolo");
    }
    else if (!(x % 6)){
        console.log("Colo"); 
    }
    else if(!(x % 4)){
        console.log("Ludi"); 
    }
    else{
        console.log(x); 
    }
}

/* 
    * The FocusMiss Script
    * If you have ever played competetive pokemon and used a low accuracy move such as
    * Focus Blast or Stone Edge, it always seems to miss at the worst times possible,
    * or even worse just never hit. This script plays off of that concept.
    * I want you to build on this template that I have written and calculate how many times
    * Focus Blast (or another Pokemon move with 70 accuracy or less) hits in a row.
    * To make this assignment work, you would need to use some JavaScript code that
    * you have not learned yet, as a result I have written a small function for you
    * that handles the parts that you have not learned yet. Please see the comment
    * above the function for details about how it works. Once you have calculated how many
    * times your move has hit before missing, log that result to the console, perferebly
    * in a nice string such as "MOVENAME hit HITS time(s) before missing!".
 */

function runMove(accuracy = 70) {
	return Math.floor(Math.random() * 100) < accuracy;
}

//let y = runMove(70);
let z = 0;

while (true){
    if (runMove(70) === false){
        console.log("Focus Blast hit " + z + " time(s) before missing!");
        break;
    }
    else{
        z++;
    }
}