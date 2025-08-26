const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log("=================================================");

console.log("Total elements:",arrayNumbers.length);
console.log("=================================================");
console.log("First elements :",arrayNumbers[0]);
console.log("Last element :",arrayNumbers[arrayNumbers.length-1]);
console.log("=================================================");
const thirdLast=arrayNumbers[arrayNumbers.length-3];
console.log("Third last element :",thirdLast);
console.log("======================4===========================");

const even =[];
for(const num of arrayNumbers){
    if(num%2===0)even.push(num);
}
console.log("Even numbers :",even);
console.log("======================5===========================");
const odd=[];
for(const num of arrayNumbers){
    if(num%2!==0)odd.push(num);
}
console.log("Odd numbers :",odd);
console.log("========================6=========================");
const evenIndexElems=[];
let sumEvenIndex=0;
for(let i=0;i<arrayNumbers.length;i++){
    if(i%2===0){
        evenIndexElems.push(arrayNumbers[i]);
        sumEvenIndex +=arrayNumbers[i];
    }
}
console.log("Even-index elements (0-based):",evenIndexElems);
console.log("Sum (even-index):",sumEvenIndex);
console.log("========================7=========================");
const oddIndexElems=[];
let sumOddIndex=0;
for(let i=0;i<arrayNumbers.length;i++){
    if(i%2!==0){
        oddIndexElems.push(arrayNumbers[i]);
        sumOddIndex +=arrayNumbers[i];
    }
}
console.log("Odd-index elements (0-based):",oddIndexElems);
console.log("Sum (even-index):",sumOddIndex);





console.log("========================8=========================");
let totalSum=0;
for(const num of arrayNumbers)totalSum +=num;
console.log("Sum of all elements :",totalSum);
console.log("=======================9==========================");
const multiplesOf5=arrayNumbers.filter(n=>n%5===0);
console.log("Multiple of 5 :",multiplesOf5);
console.log("======================10===========================");
console.log("115 present?",arrayNumbers.includes(115));
console.log("=========================11========================");
console.log("23 present?:",arrayNumbers.includes(23));
console.log("Index of 23:",arrayNumbers.indexOf(23));
console.log("========================12=========================");
arrayNumbers.splice(3,0,55,66);
console.log("After inserting 55,66 at index 3 :",arrayNumbers);
console.log("=========================13========================");
const removed=arrayNumbers.splice(4,3);
console.log("Removed elements :",removed);
console.log("Array after deletion :",arrayNumbers);









