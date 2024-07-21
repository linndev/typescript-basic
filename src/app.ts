/*********************************************************
 * LECTURE 37 && 38: CREATING AND USING CLASS IN TYPESCRIPT                    
 ********************************************************/
/*class User{
    firstname: string;
    lastname: string;
    age: number;
    gender: string;

    constructor(fn:string, ln:string, a:number, g:string){
        this.firstname = fn;
        this.lastname = ln;
        this.age = a;
        this.gender = g
    }

    greetUser(salutation: string){
        const msg = `Hello, ${salutation} ${this.firstname} ${this.lastname}`;
        console.log(msg)
    }
}

const user1 = new User("Linn", "Htet", 29, 'male');
const user2 = new User("Khin", "Myat Mon", 25, 'female');
const user3 = new User("sout", "paul lay", 1, 'female');

user1.greetUser('Mr.');*/

// console.log(user1)
// console.log(user2)
// console.log(user3)

/*********************************************************
 * LECTURE 39: ACCESS MODIFIERS IN TYPESCRIPT                    
 ********************************************************/
/*class Employee{
    empName: string;
    private salary: number;
    baseLocation: string;
    isEligible: boolean;
    private hikePercent: number;

    constructor(name: string, sal: number, loc: string, isEligible: boolean, hike: number){
        this.empName = name;
        this.salary = sal;
        this.baseLocation = loc;
        this.isEligible= isEligible;
        this.hikePercent=hike;
    }

    getSalary(){
        if(this.isEligible){
            return this.getNewSalary();
        }
        this.salary;
    }

    private getNewSalary(){
        return this.salary + this.salary * this.hikePercent / 100;
    }

}
const employee = new Employee("Linn Htet", 1400000, "Yangon", true, 20);
console.log(employee.getSalary()) */

/*********************************************************
 * LECTURE 40: SHORTHAND PROPERTY IN TYPESCRIPT                    
 ********************************************************/
/*class Employee{

    constructor(public empName: string, private salary: number, public location: string, public isEligible: boolean, private hikePercent: number){

    }

    getSalary(){
        if(this.isEligible){
            return this.getNewSalary();
        }
        return this.salary;
    }

    private getNewSalary(){
        return this.salary + this.salary * this.hikePercent / 100;
    }

}
const employee = new Employee("Linn Htet", 1400000, "Yangon", true, 20);
console.log(employee.getSalary())*/

/*********************************************************
 * LECTURE 41: READ ONLY PROPERTY IN TYPESCRIPT                    
 ********************************************************/
/*class Employee{
    readonly empId: number;
    constructor(public empName: string, private salary: number, public location: string, public isEligible: boolean, private hikePercent: number, empId: number){
        this.empId = empId;
    }

    getSalary(){
        if(this.isEligible){
            return this.getNewSalary();
        }
        return this.salary;
    }

    private getNewSalary(){
        return this.salary + this.salary * this.hikePercent / 100;
    }

}
const employee = new Employee("Linn Htet", 1400000, "Yangon", true, 20, 1);
console.log(employee.getSalary())
console.log(employee.empId);*/

/*********************************************************
 * LECTURE 42: UNDERSTANDING INHERITANCE IN TYPESCRIPT                    
 ********************************************************/
/*class Person{
    name: string;
    gender: string
    dob: string
    constructor(name: string, gender: string, dob: string){
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }

    calculateAge(){
        return new Date().getFullYear() - new Date(this.dob).getFullYear();
    }
}

class Employee extends Person{
    salary: number;
    bonus: number;
    constructor(name: string, gender: string, dob: string, salary: number, bonus: number){
        super(name, gender, dob)
        this.salary = salary;
        this.bonus = bonus;
    }
    calculateSalary(){
        return this.salary + this.bonus;
    }
}

// const person = new Person('Linn Htet', 'male', '1995')
const employee = new Employee('Linn Htet', 'male', '1995', 1400000, 0);
console.log(employee.calculateSalary())*/

/*********************************************************
 * LECTURE 43: METHOD OVERRIDING AND PROTECTED MODIFIER IN TYPESCRIPT                    
 ********************************************************/
/*class Person{
    name: string;
    gender: string
    protected dob: string
    constructor(name: string, gender: string, dob: string){
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }

    calculateAge(){
        return new Date().getFullYear() - new Date(this.dob).getFullYear();
    }
}

class Employee extends Person{
    salary: number;
    bonus: number;
    constructor(name: string, gender: string, dob: string, salary: number, bonus: number){
        super(name, gender, dob)
        this.salary = salary;
        this.bonus = bonus;
    }
    calculateSalary(){
        return this.salary + this.bonus;
    }

    calculateAge(): number {
        return 2023 - new Date(this.dob).getFullYear()
    }
}

// const person = new Person('Linn Htet', 'male', '1995')
const employee = new Employee('Linn Htet', 'male', '01-25-1995', 1400000, 0);
console.log(employee.calculateAge())*/

/*********************************************************
 * LECTURE 44: GETTER AND SETTER METHODS IN TYPESCRIPT                    
 ********************************************************/
/*class Person{
    public _name: string;
    private _age: number | null = null;

    get age(){
        if(this._age != null){
            return this._age;
        }
        throw new Error('Age is not defined for person '+ this._name);
    }

    set age(value:number){
        if(value > 18){
             this._age = value;
        }else{
            throw new Error('Age should be greater than 18.')
        }
    }

    constructor(name: string){
        this._name = name;
    }
}

const person = new Person('Linn Htet');
person.age = 15
console.log(person.age);*/

/*class Circle{
    private _radius: number ;

    get radius(){
        return this._radius;
    }

    set radius(value:number){
        this._radius = value;
    }
    
    get diameter(){
        return this._radius * 2;
    }

    set diameter(value: number){
        this._radius = value / 2;
    }
}*/

/*********************************************************
 * LECTURE 45: STATIC METHODS AND PROPERTIES IN TYPESCRIPT                    
 ********************************************************/

class Employee{
    fname: string;
    lname: string;
    static count: number = 0;

    constructor(fname: string, lname: string){
        this.fname = fname;
        this.lname = lname;
        Employee.count++;
    }
    static sayHello(){
        return "Hi There";
    }
}

console.log(Employee.sayHello());

const emp1 = new Employee('Linn', "Htet");
console.log(Employee.count)

const emp2 = new Employee('John', "Smith");
console.log(Employee.count)