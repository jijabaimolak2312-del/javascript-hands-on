const professor={
    name:"Dr.Sunita Patil",
    age:45,
    subject:"Computer Engineering",
    college:"COEP Pune",
    isTenured:true,
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        BSc:"Mathematics",
        MSc:"Computer Science"
    },
    certificates:[
        "Hacker Rank Participation",
        "Certificate in IFE course",
        "Certificate in Adv Programming"
    ]
};
console.log("Step 4:Initial professor object :");
console.log(professor);
professor.totalExperiance="14 years";
console.log("\n step 5 : After adding totalExperience:");
console.log(professor);
professor.college="IIT Bombay";
console.log("\nstep 6:After modifying 'college':");
console.log(professor);
professor.certificates.splice(2,0,"Oracle Certified");
console.log("\nstep 7:After inserting 'Oracle Certified'at index 2 :");
console.log(professor.certificates);
const lastcert=professor.certificates[professor.certificates.length-1];
console.log("\nStep 8: Last certificate :");
console.log(lastcert);
console.log("\nStep 9:Traverse certificates with for.....of:");
for(const cert of professor.certificates){
    console.log(cert);
    
}










