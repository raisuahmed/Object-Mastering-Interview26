function add(num1, num2) {
    var result = num1 + num2;
    
    return result;
    
}

var sum = add(12, 34);
console.log(sum);
/////
function add(num1, num2) {
    var result = num1 + num2;
    console.log('name inside', result);
    return result;
    
}

var sum = add(12, 34);
console.log(sum);

//// ekhane name,add  global avriable
var name = 'kuddus'; 
function add(num1, num2) {
    var result = num1 + num2;
    console.log('name inside', name);
    function double(num) {
        return num *2;
        
    }
    var total = double(result);
    return total;
    
}
console.log('name outside', name);
var sum = add(12, 34);
console.log(sum);

/////
var name = 'kuddus'; 
function add(num1, num2) {
     result = num1 + num2;   //result er purbe var decleare na korar karone result global variable hoi.
    console.log('name inside', name);
    function double(num) {
        return num *2;
        
    }
    var total = double(result);
    return total;
    
}
console.log('name outside', name);
var sum = add(12, 34);
console.log(sum);
console.log('result outside', result);

