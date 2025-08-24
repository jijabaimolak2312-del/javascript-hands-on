let rollNumbers = [11, 22, 33, 44, 55, 66, 77];

console.log(rollNumbers);

 

console.log("======== Length Of the Array ===========");

console.log(`Length of array is: ${rollNumbers.length}`);

 

console.log("======== Accessing Array Elements using Index =============");

const elementAtIndex2 = rollNumbers[2];

console.log(elementAtIndex2);

console.log(`0th Index element is: ${rollNumbers[0]}`);

console.log(`Last Element of the array: ${rollNumbers[rollNumbers.length-1]}`);

 

console.log("======== Updating Array Elements using Index =============");

rollNumbers[3] = 99;
console.log("======== indexOf() =============");

let rollNum = [11, 22, 33, 44, 55, 44, 44];

const indexOf44 = rollNum.indexOf(44);

console.log(`Index of element 44 is: ${indexOf44}`);

 

console.log(`Index of element 101 is: ${rollNum.indexOf(101)} `);
console.log("======== Traversing array element using traditional for loop =============");

for (let index = 0; index < rollNum.length; index++) {

    const element = rollNum[index];

    console.log(element);

}
console.log("======== Traversing array element in reverse order =============");

let array = [11, 22, 33, 44, 55, 44, 48];

for (let index = array.length-1; index >= 0; index--) {

    const element = array[index];

    console.log(element); 

}
console.log("======== Log the even elements from the array =============");

for (let index = 0; index < array.length; index++) {

    const element = array[index];

    if (element%2==0) {

        console.log(element);

    }
}
console.log("======== sum the array elements =============");

let arrayNum = [2, 1, 4, 5, 9, 6];

let sum = 0;

for (let index = 0; index < arrayNum.length; index++) {

    const element = arrayNum[index];

    sum = sum + element;

}

console.log(sum);
console.log("======== Adding or Inserting elements in the beginning =============");

let arrayNumbers = [2, 1, 4, 5, 9, 6];

console.log(`Before adding or inserting elements `);

console.log(arrayNumbers);

console.log(`After adding or inserting elements `);

arrayNumbers.unshift(300, 400, 999);

console.log(arrayNumbers);

console.log("======== Adding or Inserting elements at the end of the array =============");

let arrayNumber = [2, 1, 4, 5, 9, 6];

console.log(`Before adding or inserting elements `);

console.log(arrayNumber);

console.log(`After adding or inserting elements `);

arrayNumber.push(44, 22, 22);

console.log(arrayNumber);

console.log("======== Removing or Deleting elements from the end of the array =============");

let arrayNums = [2, 1, 4, 5, 9, 6];

console.log(`Before Removing or Deleting elements `);

console.log(arrayNums);

console.log(`After Removing or Deleting elements `);

arrayNums.pop();

console.log(arrayNums);

console.log("======== Removing or Deleting the first element =============");

let arrayNumms = [2, 1, 4, 5, 9, 6];

console.log(`Before Removing or Deleting the first element `);

console.log(arrayNumms);

console.log(`After Removing or Deleting the first element `);

arrayNumms.shift();

console.log(arrayNumms);
"=========================================================================="
console.log("======== Selecting elements from an array =============");

let arrayNumm = [2, 1, 4, 5, 9, 6, 10, 70, 80, 55];

const spliceArray = arrayNumm.slice(2);

console.log("Original Array ");

console.log(arrayNumm);

console.log("After slice with only start index");

console.log(spliceArray);

 

console.log("After slice with start and end index");

const sliceArrays =arrayNumm.slice(2, 5)

console.log(sliceArrays);
"===================================="
console.log("======= splice() - To Remove the elements =================");

let numArray = [2, 1, 4, 5, 9, 6];

const spliceArray0 = numArray.splice(3);

console.log("====== Original Array =========");

console.log(numArray);

console.log("======  After splice with only start index =========");

console.log(spliceArray0);

 

let numberArray = [2, 1, 4, 5, 9, 6, 99, 88, 44, 66];

const spliceArray1 = numberArray.splice(3, 5);

console.log("====== Original Array =========");

console.log(numberArray);

console.log("======  After splice with start index and delete count =========");

console.log(spliceArray1);

"===================================================="
console.log("======= splice() - To Insert the elements without deleting any existing elements =================");

let numberArrays = [2, 1, 4, 5, 9, 6];

const numberArray0 = numberArrays.splice(3, 0, 99, 77);

console.log("====== Original Array =========");

console.log(numberArrays);

console.log("======= Inserting an elements without replacing any existing any elements==========");

console.log(numberArray0);

 

console.log("======= splice() - To Insert the elements by deleting or replacing the elements =================");

let numberArrs = [2, 1, 4, 5, 9, 6];

const numberArray1 = numberArrs.splice(2, 3, 100, 200);

console.log("====== Original Array =========");

console.log(numberArrs);

console.log("======= Inserting an elements with replacing any existing any elements==========");

console.log(numberArray1);

"========================================================================"

console.log("====== for of loop ===========");

let numberArr = [2, 1, 4, 5, 9, 6];

for (const element of numberArr) {

   console.log(element);

}

"========================================================================"

console.log("====== for in loop ===========");

for (const index in numberArr) {

   const element = numberArr[index];

   console.log(element);

}

"=========================================================================="
console.log("====== join() ===========");

let numArr = [2, 1, 4, 5, 9, 6];

const resultArray = numArr.join(",");

console.log(resultArray);






