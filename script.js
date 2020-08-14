"use strict";
let mountains = [
    { name: "Kilimanjaro", height: 19342 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
const findNameOfTallestMountain = (array) => {
    if (array.length > 0) {
        let currentTallest = array[0];
        array.forEach((mountain) => {
            if (mountain.height > currentTallest.height) {
                currentTallest = mountain;
            }
        });
        return currentTallest.name;
    }
    else {
        return "";
    }
};
console.log(findNameOfTallestMountain(mountains));
let products = [
    { name: "Blueberries", price: 4 },
    { name: "Bananas", price: 2 },
];
const calcAverageProductPrice = (array) => {
    let sum = 0;
    array.forEach((produce) => {
        sum += produce.price;
    });
    return sum / array.length;
};
// let result = calcAverageProductPrice(products);
// console.log(result);
//same thing
console.log(calcAverageProductPrice(products));
let inventory = [
    //the product is using the Product interface to make an object inside an object
    { product: { name: "motor", price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1 }, quantity: 20 },
];
const calcInventoryValue = (array) => {
    let sum = 0;
    array.forEach((item) => {
        sum += item.product.price * item.quantity;
    });
    return sum;
};
console.log(calcInventoryValue(inventory));
//prctc
const tellMeTheValue = (item) => {
    return item.product.price * item.quantity;
};
console.log(tellMeTheValue(inventory[0]));
const findProductByNameAndGiveMeTheValue = (array, name) => {
    let found = array.find((item) => {
        return item.product.name === name;
    });
    if (found != undefined) {
        return found.product.price * found.quantity;
    }
    else {
        return 0;
    }
};
console.log(findProductByNameAndGiveMeTheValue(inventory, "sensor"));
let students = [
    {
        firstName: "Brandon",
        siblings: ["Max", "Patrick"],
    },
    {
        firstName: "Joe",
        siblings: ["One", "Two"],
    },
    {
        firstName: "Jill",
        siblings: [],
    },
];
//How many siblings by name
const howManySiblings = (array, name) => {
    let found = array.find((person) => {
        return person.firstName === name;
    });
    if (found != undefined) {
        return found.siblings.length;
    }
    else {
        return "Name is not found in our records.";
    }
};
console.log(howManySiblings(students, "Brandon"));
