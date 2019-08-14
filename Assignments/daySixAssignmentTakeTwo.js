/* 
 * The Pokemart
 *
 * This assignment has you working with Objects and Functions/Methods.
 * The goal is to create code to represent a pokemart that sells items, and then
 * simulate a player purchasing some items from the pokemart.
 * 
 * Requirements [READ CAREFULLY]:
 * The pokemart must be an Object containing at least 10 items. You can pick what
 * items are sold and at what price.
 * The player must have a predetermined amount of money, and must buy at least 20 items,
 * at least 3 of which must be unique (duplicates are allowed, make sure to give the player enough money).
 * Log how much money the player has to the console when the script starts.
 * Use an object to keep track of what is currently in the player's cart. Use functions/methods to add items to the cart.
 * Do NOT allow a player to have a negative number of an item in their cart.
 * Log when an item is added to the cart to the console, including the quantity.
 * The pokemart must have a checkout method to calculate how much money the player pays for the items.
 * The checkout method must log:
 * - A line for each item being purchased including the name of the item, quantity, and cost.
 * - A line for the total cost of the cart
 * - A line either saying how much money the player has left OR
 * - A line stating the player cannot afford the purchase
 * The checkout method must not allow a purchase that the player cannot afford.
 * OPTIONAL BONUS: Add an extra item that cannot be purchased but it can be obtained in a simaler way to premier balls in the pokemon games.
 * - If you do this, make sure this item cannot be added to the cart, and note how many were given (if > 0) after sucessfully checking out.
 * OPTIONAL BONUS 2: Make it so that the player can remove items from their cart. This can be a new function/method or built into
 * - the one for adding items to the cart (maybe a negative value indicates a removal?)
 * OPTIONAL BONUS 3: Empty the player's cart after they checkout (in the checkout function), and have them make a second purchase.
 * - (Second purchase only needs a total of 1 item and 1 unique item, unlike the first).
 * 
 * HINTS:
 * DRY (Don't repeat yourself)
 * Try to make your code industrial strength. This means verify function arguments before doing what was asked.
 * For example: When adding to cart, make sure the requested item is a valid item & can be purchased, also make sure
 * the player will not have a negative number of that item in their cart after (or just block negative values).
 * You can use the return keyword to terminate a function early, even if the return value is unimportant to the function.
 * Use Math.floor(NUMBER) to round NUMBER down to the nearest whole number (returns an integer).
 */

 'use strict'

 let pokemart = {
    pokeBall: 2.00,
    greatBall: 6.00,
    ultraBall: 10.00,
    superPotion: 7.00,
    hyperPotion: 15.00,
    maxPotion: 25.00,
    fullRestore: 30.00,
    revive: 20.00,
    paralyzeHeal: 3.00,
    awakening: 1.00,
    checkout(toBuy){
        let totalCost = 0; 
        for ( let item in toBuy){
            let cost = toBuy[item] * this[item]; 
            totalCost += cost; 
            console.log("Checking Out, Items in Cart");
            console.log(toBuy[item] + " " + item + " for " + cost);
        }
        if (!totalCost){
            return console.log("Player left with nothing"); 
        }
        if (playerMoney > totalCost) {
            playerMoney -= totalCost;
            console.log("Player has " + playerMoney + " left."); 
        }
        else{
            console.log("Player cannot afford these items."); 
        }

    },
 };

let cart = {};
let playerMoney = 500; 

function addToCart(item, amount){
    if (!pokemart[item] || item === "checkout"){
        return; 
    }
    if (amount <= 0){
        return;
    }
    if (cart[item] === undefined) cart[item] = 0;
    cart[item] += amount; 
}

console.log("Player has $" + playerMoney);
addToCart("pokeBall", 10);
addToCart("revive", 5);
addToCart("superPotion", 10);
pokemart.checkout(cart); 