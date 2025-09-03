const showMsg=()=>console.log("Good Morning,Today is Friday");
    showMsg();
const multiply=(n1,n2,n3=1)=>{
    const product=n1*n2*n3;
    console.log(`Multiplication of ${n1},${n2},${n3}=${product},`);
        
        };
        multiply(5,5,2);
        multiply(10,4);
        const addFive=(a,b,c,d,e)=>a+b+c+d+e;
        const sumNums=addFive(100,100,200,349,756);
        console.log(`Addition of numbers=${sumNums} `);

        const sumStrings=addFive(" I am "," Learning" ," ES6", " featues", " in depth");
        console.log(`Concatenation of string =${sumStrings}`);
        
        

