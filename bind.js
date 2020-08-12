const normalPerson = {
    firstName:'Rahim',
    lastName:'Uddin',
    salary: 15000,
    getFullName: function(){
      
        console.log(this.firstName, this.lastName);
    },
   chargeBill: function(amount){
      
        this.salary = this.salary - amount; 
        return this.salary;
    }

    } 

    const heroPerson = {
        firstName:'rasel',
        lastName:'Ahmed',
        salary : 23000,
    }

    const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
    heroChargeBill(2000);
    heroChargeBill(1000);
    console.log(heroPerson.salary);
