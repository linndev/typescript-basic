"use strict";
class Employee {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        Employee.count++;
    }
    static sayHello() {
        return "Hi There";
    }
}
Employee.count = 0;
console.log(Employee.sayHello());
const emp1 = new Employee('Linn', "Htet");
console.log(Employee.count);
const emp2 = new Employee('John', "Smith");
console.log(Employee.count);
