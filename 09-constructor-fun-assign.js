function Bank(bankName,location,ifscCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
}
const yesBank=new Bank("Yes Bank","Mumbai","YESB0001234","YESBR001");
const sbiBank=new Bank("State Bank of India","Pune","SBIN0005678","SBIBR002");
const mahaBank=new Bank("Mah Bank","Nagpur","MAHB0002222","MAHBR003");
const axisBank=new Bank("Axis Bank","Nashik","UTIB0004321","AXISBR004");
console.log(`Bank Details is: ${yesBank.bankName},${yesBank.location},${yesBank.ifscCode},${yesBank.branchCode}`);
console.log(`Bank Details is: ${sbiBank.bankName},${sbiBank.location},${sbiBank.ifscCode},${sbiBank.branchCode}`);
console.log(`Bank Details is: ${mahaBank.bankName},${mahaBank.location},${mahaBank.ifscCode},${mahaBank.branchCode}`);
console.log(`Bank Details is: ${axisBank.bankName},${axisBank.location},${axisBank.ifscCode},${axisBank.branchCode}`);
console.log("==================================================");
Bank.prototype.openTime="9 AM IST";
console.log("==================================================");
Bank.prototype.closeTime="6 PM IST";
console.log(`SBI timing for ${sbiBank.bankName}:OPen-${sbiBank.openTime},Close-${sbiBank.closeTime}`);
console.log("==================================================");
console.log(`Yes Bank information:${yesBank.bankName},Branch Code-${yesBank.branchCode},Open Time-${yesBank.openTime}`);


