const normalPerson = {
    firstName:'Rahim',
    lastName:'Uddin',
    salary: 15000,
    getFullName: function(){
              
        console.log(this.firstName, this.lastName);
    },
   chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax; 
        return this.salary;
     }

} 

    const heroPerson = {
        firstName:'rasel',
        lastName:'Ahmed',
        salary : 23000,
    }
    const raisPerson = {
        firstName:'rais',
        lastName:'Ahmed',
        salary : 13000,
    }

    // normalPerson.chargeBill(1500,100, 50);
    // normalPerson.chargeBill(1500, 100, 50);

    //  normalPerson.chargeBill.call(heroPerson, 1000, 100, 50);
    //  normalPerson.chargeBill.call(heroPerson, 1500, 200, 80);
    
     normalPerson.chargeBill.call(raisPerson, 1000, 200, 100)
       console.log(raisPerson.salary);
   
    // avabei kora jabe call or apply
    normalPerson.chargeBill.apply(heroPerson, [1000, 100, 30]);
    console.log(heroPerson.salary);
    
    
    
    
    //  console.log(normalPerson.salary);
 