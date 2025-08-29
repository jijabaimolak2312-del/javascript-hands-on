console.log("step 1");
const bankSbi={
    bankName:"SBI",
    branch:"Dange Chowk ,Pune",
    ifsc:"SBIN0000456",
    establishedYear:1955,
};


console.log(bankSbi);

console.table(bankSbi);
console.log("Step 2");
const bankLocation={
    street:"Dange Chowk",
    city:"Pune",
    pin:411004,
};

console.log(bankLocation);

console.table(bankLocation);
//console.log("Step 3 object.assign()");
//const bankSbiClone=Object.assign({},bankSbi);
//const bankLocationClone=Object.assign({},bankLocation);
//console.log(`Step 3 - cloned bank : ${bankSbiClone.bankName}(branch: ${bankSbiClone.branch},IFSC:${bankSbiClone.ifsc})`);
//console.log(`Step 3 - Cloned  location : ${bankLocationClone.street},${bankLocationClone.city}${bankLocationClone.pin}`);
console.log("=============================Object.assign()===========================");
Object.assign(bankSbi, bankLocation);

 console.log(bankSbi);
Object.assign(bankLocation, bankSbi);
console.log(bankLocation);
console.log("============================Step 4================================");

const rateOfInterest={
    homeLoanInterest:8.35,
    personalLoanInterest:11.5,
    dueInterest:13.75,
};
console.table(rateOfInterest);

console.log("=============================Step 5===============================");
const sbiDetails=Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log("SBI details merged:",sbiDetails);
console.log(`Bank ${sbiDetails.bankName} at $ {sbiDetails.street},${sbiDetails.city} ${sbiDetails.pin}.Home lone:${sbiDetails.homeLoanInterest}%.`);
console.log("=============================Step 6 Traversing =====================================");
for(let key in sbiDetails){
    if(sbiDetails.hasOwnProperty(key)){
        console.log(`sbiDetails.${key}=${sbiDetails[key]}`);
        
    }
}











