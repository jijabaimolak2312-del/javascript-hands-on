const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((num,idx)=>{
    console.log(`index ${idx}:${num}`);
    
});

console.log("====================positive no ====================");
arrayNumbers.forEach(num=>{
    if(num>0){
        console.log(num);
        
    }
});
console.log("=================== negative no=====================");
const negativeNumbers=[];
arrayNumbers.forEach(num=>{
    if(num<
        0){
            negativeNumbers.push(num);
        
    }
});
console.log("Negative numbers:",negativeNumbers);
console.log("========================================");
arrayNumbers.forEach(num=>{
    if(num%2 === 0){
        console.log(num);
        
    }
});
console.log("========================================");
let sum=0;
arrayNumbers.forEach(num=>{
    sum+=num;
});
console.log("Sum :",sum);
console.log("========================================");
arrayNumbers.forEach((num,idx)=>{
    if(idx %2 === 0 ){
        console.log(`Index ${idx}: ${num}`);
        
    }
});


