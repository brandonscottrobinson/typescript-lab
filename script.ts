"use strict";

interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19342 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

const findNameOfTallestMountain = (array: Mountain[]): string => {
  if (array.length > 0) {
    let currentTallest: Mountain = array[0];
    array.forEach((mountain) => {
      if (mountain.height > currentTallest.height) {
        currentTallest = mountain;
      }
    });
    return currentTallest.name;
  } else {
    return "";
  }
};

console.log(findNameOfTallestMountain(mountains));

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Blueberries", price: 4 },
  { name: "Bananas", price: 2 },
];

const calcAverageProductPrice = (array: Product[]): number => {
  let sum: number = 0;
  array.forEach((produce) => {
    sum += produce.price;
  });
  return sum / array.length;
};

// let result = calcAverageProductPrice(products);
// console.log(result);
//same thing
console.log(calcAverageProductPrice(products));

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  //the product is using the Product interface to make an object inside an object
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1 }, quantity: 20 },
];

const calcInventoryValue = (array: InventoryItem[]): number => {
  let sum: number = 0;
  array.forEach((item) => {
    sum += item.product.price * item.quantity;
  });
  return sum;
};

console.log(calcInventoryValue(inventory));

//prctc
const tellMeTheValue = (item: InventoryItem): number => {
  return item.product.price * item.quantity;
};

console.log(tellMeTheValue(inventory[0]));

const findProductByNameAndGiveMeTheValue = (
  array: InventoryItem[],
  name: string
): number | undefined => {
  let found: InventoryItem | undefined = array.find((item) => {
    return item.product.name === name;
  });
  if (found != undefined) {
    return found.product.price * found.quantity;
  } else {
    return 0;
  }
};

console.log(findProductByNameAndGiveMeTheValue(inventory, "sensor"));

interface Person {
  firstName: string;
  siblings: string[];
}

let students: Person[] = [
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
const howManySiblings = (array: Person[], name: string): number | string => {
  let found: Person | undefined = array.find((person) => {
    return person.firstName === name;
  });
  if (found != undefined) {
    return found.siblings.length;
  } else {
    return "Name is not found in our records.";
  }
};

console.log(howManySiblings(students, "Brandon"));
