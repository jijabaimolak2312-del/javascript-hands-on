class Vehicle{
    constructor(make,model,year,color,mileage){
        this.make=make;
        this.model=model;
        this.year=year;
        this.color=color;
        this.mileage=mileage;
    }
    logDetails(){
        console.log(
            `Vehicle Details:${this.make} ${this.model}(${this.year})-Color:${this.color};Mileage:${this.mileage}km.`
        );
        
    };
    
}
console.log("create object ");
const v1=new Vehicle('Maruti','Swift',2018,'Red',45000);
const v2=new Vehicle('Hyundai','i20',2020,'White',48000);
const v3=new Vehicle('Tata','Nexon',2022,'Blue',8000);
const v4=new Vehicle('Honda','City',2017,'Black',60000);
const v5=new Vehicle('Kia','Seltos',2019,'Silver',30000);
[v1,v2,v3,v4,v5].forEach(v=> v.logDetails());

class College{
    constructor(name,city,established,courses,studentCount=null){
        this.name=name;
        this.city=city;
        this.established=established;
        this.courses=courses;
        this.studentCount=studentCount;
    }
    display(){
        console.log(`College:${this.name}-${this.city}`);
        console.log(`Established:${this.established}`);
        console.log(`Courses Offered:${this.courses.join(',')}`);
        if(this.studentCount!==null){
            console.log(`Student Count:${this.studentCount}`);
            
        }
        console.log('Full Object details:',this);
        
              
        
    }
}
const c1=new College('Shivaji Vidyapeeth','Kolhapur',1988,['BTech','MTech'],4200);
const c2=new College('Avishkar College','Pune',1995,['BSc','BCom','BA'],6500);
const c3=new College('Shivaji Vidyapeeth','Kolhapur',1988,['BTech','MTech'],4200);
const c4=new College('National Science College','Nagpur',1975,['BSc','MSc','Research'],5400);
[c1,c2,c3,c4].forEach(col =>{
    console.log('=======================================');
    col.display();
    
});