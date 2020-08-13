class person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson  = new person('hero', 'balam', 2000);
console.log(heroPerson);
const friendlyPerson = new person('hero', 'kamal', 3000);
console.log(friendlyPerson);


//class asa age function dea kora hoto

function person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    
}
const oldPerson = new person('grand', 'papa', 1200);
console.log(oldPerson);