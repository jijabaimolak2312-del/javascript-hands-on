const fruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits);

console.log(`First Element of the array: ${fruits[1]}`);
console.log(`Last Element of the array: ${fruits[fruits.length-1]}`);

fruits.unshift("Papaya");
console.log(fruits);


const mangoIndex=fruits.indexOf("Mango");
if(mangoIndex !== -1)fruits.splice(mangoIndex,1);
console.log(fruits);

const pushmeth=fruits.push("Pineapple");
console.log(pushmeth);
console.log(fruits);

const watermleonIndex=fruits.indexOf("Water Melon");
if(watermleonIndex !== -1) fruits.splice(watermleonIndex,0,"Dragon Fruits");
console.log(fruits);

const orangeIndex=fruits.indexOf("Orange");
if(orangeIndex !==-1)fruits[orangeIndex]="Kiwi";
console.log(fruits);






const as=fruits.slice(1,5);
console.log(as);

const last3=fruits.slice(fruits.length-3);
console.log(last3);

//nsole.log(fruits);


