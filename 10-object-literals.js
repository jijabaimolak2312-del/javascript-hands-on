let person = {

    firstName: "Elon",

    lastName : "Musk",

    age: 55,

    isMarried: true,

    designation: "CEO",

    companies: ["Tesla", "SpaceX", "Twitter", "Boeing", "Neuralink"],

};

 

console.log(person);

console.table(person);

 

console.log("======== Accessing or reading the object properties =============");

console.log("===== Using . dot notation ====");

const firstName = person.firstName;

console.log(`Person first name: ${firstName}`);

 

console.log("===== Using [] square bracket notation ====");

console.log(`Person Last name: ${person["lastName"]}`);
console.log("===== Adding property into the object ========");

person.networth = "4 Trillion $";
console.log("===== Delete property from the object ========");

delete person.designation;
console.log("===== update the property of an object ========");

person.age = 58;

console.log(person);
person.companies.push("Solar City");

 

console.log("====== Companies ========");

console.log(person.companies);

for (const element of person.companies) {

    console.log(element);

}
console.log(person);

console.table(person);

 

console.log("======== Accessing or reading the object properties =============");

console.log("===== Using . dot notation ====");

const firstNamee = person.firstName;

console.log(`Person first name: ${firstNamee}`);

 

console.log("===== Using [] square bracket notation ====");

console.log(`Person Last name: ${person["lastName"]}`);

 

console.log("===== Adding property into the object ========");

person.networth = "4 Trillion $";

 

console.log("===== Delete property from the object ========");

delete person.designation;

 

console.log("===== update the property of an object ========");

person.age = 58;

console.log(person);

 

person.companies.push("Solar City");

 

console.log("====== Companies ========");

console.log(person.companies);

for (const element of person.companies) {

    console.log(element);

}
 

console.log("====== Nested Object =========");

console.log(`Elon Science marks : ${person.marks.science}`);


console.log(person);

console.table(person);

 

console.log("======== Accessing or reading the object properties =============");

console.log("===== Using . dot notation ====");

const firstNameee= person.firstName;

console.log(`Person first name: ${firstNameee}`);

 

console.log("===== Using [] square bracket notation ====");

console.log(`Person Last name: ${person["lastName"]}`);

 

console.log("===== Adding property into the object ========");

person.networth = "4 Trillion $";

 

console.log("===== Delete property from the object ========");

delete person.designation;

 

console.log("===== update the property of an object ========");

person.age = 58;

console.log(person);

 

person.companies.push("Solar City");

 

console.log("====== Companies ========");

console.log(person.companies);

for (const element of person.companies) {

    console.log(element);

}

 

console.log("====== Nested Object =========");

console.log(`Elon Science marks : ${person.marks.science}`);
console.log("======== Empty object =======");

 

let student = {

 

}

let employee = {

    fullName: "Stew Jobs",

    age: 23,

    isMarried: false,

    details: function(){

        console.log(`Employee details: Full Name ${this.fullName}, Age: ${this.age}, Married status: ${this.isMarried} `);  

    }

}

employee.details();

