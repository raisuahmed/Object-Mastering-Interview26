const normalPerson = {
    firstName:'Rahim',
    lastName:'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
   chargeBill: function(amount){
       console.log(this);
        this.salary = this.salary - amount; 
        return this.salary;
    }

} 
normalPerson.chargeBill(1500);
normalPerson.chargeBill(1500);
 console.log(normalPerson.salary);