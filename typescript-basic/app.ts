/*******************************************
 * LECTURE: DATATYPES IN TYPESCRIPT
 *******************************************/
/*let num=100; 
let str = 'Hello, World!';*/


/*******************************************
 * LECTURE 4: VARIABLES IN TYPESCRIPT
 *******************************************/

//1. STRING DATATYPE
/*const str1 = 'This is a string created using single quotes';
const str2 = "This is a string created using double quotes";
const str3 = `This is a string created using back ticks`;*/

//2. NUMBER DATATYPE
/*let num1=123;
let pi = 3.142;*/

//3. BOOLEAN DATATYPE
/*let isEligible=true;
let isEqual = false;*/

/**************************************************************
 * LECTURE 5: TYPE ASSIGNMENT AND TYPE INFERANCE IN TYPESCRIPT
 *************************************************************/

/*function sum(num1:number, num2:number, isPrint:boolean){
    if(isPrint){
        let s = num1 + num2;
        console.log("Sum = ", s)
    }
    return num1 + num2;
}

let n1:number=10;
let n2:number=15;
let isPrint:boolean=true;

console.log(sum(n1,n2, isPrint))*/

/**************************************************************
 * LECTURE 6: OBJECT TYPE IN TYPESCRIPT
 *************************************************************/
/*let person = {
    name: "John",
    age: 29,
    address: {
        city: 'London',
        country: 'UK'
    }
}
console.log(person['address'])*/

/**************************************************************
 * LECTURE 7: ARRAY TYPE IN TYPESCRIPT
 *************************************************************/
/*let person = [
    'John', 28, 'male', 1000
]
let names:string[]=[];
let birthYears = [1995, 1996, 1997];
names.push("John")
for(let year of birthYears){
    console.log(year)
}*/
/**************************************************************
 * LECTURE 8: TUPLES IN TYPESCRIPT
 *************************************************************/
/*let employee:[number, string, number, boolean] = [123, 'john', 2000, true];
employee.push(100)
console.log(employee)*/

/**************************************************************
 * LECTURE 9: ENUMS IN TYPESCRIPT
 *************************************************************/
/*enum ROLES{
    ADMIN, READ_ONLY, WRITE_ONLY, READ_WRITE
}
const user = {
    name: "John",
    age: 30,
    gender:'male',
    role: ROLES.ADMIN
}
if(user.role === ROLES.ADMIN){
    console.log('This user is an admin');
}*/

/**************************************************************
 * LECTURE 10: ANY TYPE IN TYPESCRIPT
 *************************************************************/
/*let dynamicData: any;
dynamicData = 100;
dynamicData="John"*/

/**************************************************************
 * LECTURE 11: UNION TYPE IN TYPESCRIPT
 *************************************************************/
/*let user:{name:string, age:number} | null= null;
function getUser(){
    const uname="John"
    const uage=25;
    user={
        name: uname,
        age: uage
    }
    return user;
}

getUser()*/

/*function printStatus(message:string, code: string | number){
    if(typeof code === 'string'){
        console.log(`${message}. Status code: ${code.trim()}`);
    }else{
        console.log(`${message}. Status code: ${code}`);
    }
}

printStatus('Request was successful', 200)
printStatus('Resource was not found', '404')
printStatus('Request was successful', ' 404 ')*/

/**************************************************************
 * LECTURE 12: LITERAL TYPE IN TYPESCRIPT
 *************************************************************/
/*function roleMessage(role:'admin' | 'read' | 'read-write'){
    switch(role){
        case 'admin':
            console.log('You have admin permission on this site.');
            break;
        case 'read':
            console.log('You have read permission on this site.');
            break;
        case 'read-write':
            console.log('You have read | write permission on this site');
            break;
        default:
            console.log('unknown user permission');
    }
}

roleMessage('admin')*/

/**************************************************************
 * LECTURE 13: TYPE ALIAS IN TYPESCRIPT
 *************************************************************/
/*type stringOrNumber = string | number

function printStatus(message:string, code: stringOrNumber){
    if(typeof code === 'string'){
        console.log(`${message}. Status code: ${code.trim()}`);
    }else{
        console.log(`${message}. Status code: ${code}`);
    }
}

printStatus('Request was successful', 200)
printStatus('Resource was not found', '404')
printStatus('Request was successful', ' 404 ')*/

/*type roleType = 'admin' | 'read' | 'read-write'

function roleMessage(role: roleType){
    switch(role){
        case 'admin':
            console.log('You have admin permission on this site.');
            break;
        case 'read':
            console.log('You have read permission on this site.');
            break;
        case 'read-write':
            console.log('You have read | write permission on this site');
            break;
        default:
            console.log('unknown user permission');
    }
}

roleMessage('admin') */
/*type User = {firstname: string, lastname: string, age: number};

function getFullName(user: User){
    return user.firstname + ' ' + user.lastname;
}

function isEligibleForVote(user: User){
    return user.age >= 18;
}

let user: User = { firstname: 'john', lastname: 'smith', age:32 }; 

console.log(getFullName(user))
console.log(isEligibleForVote(user))*/

/**************************************************************
 * LECTURE 14: FUNCTION RETURN TYPE IN TYPESCRIPT
 *************************************************************/
/*function add(num1: number, num2: number) : void{
    console.log(num1 + num2);
    return;
}

console.log(add(12, 13));*/

/**************************************************************
 * LECTURE 15: FUNCTION AS TYPE IN TYPESCRIPT
 *************************************************************/
/*type User = {username: string, age: number};
function greetUser(user: User){
    const message = "Hello, " + user.username;
    console.log(message)
}

function sum(num1:number, num2:number){
    return num1 + num2;
}

function isEligible(user: User){
    console.log(user.age >= 18);
}

let greet:(user: User) => void;
greet = greetUser;

let user: User = { username: 'John Smith', age: 32 };
greet(user)

// greet = 1000;
// greet(user) //not working

// greet=sum;
// console.log(greet(user)) //not working

greet=isEligible;
greet(user)*/

/**************************************************************
 * LECTURE 16: FUNCTION TYPE FOR CALLBACK IN TYPESCRIPT
 *************************************************************/

/*function getResult(num1: number, num2: number, print: (msg: string, result: number)=> void){
    const result = num1 + num2;
    print("Sum = ", result);
}

function display(msg: string, result: number){
    console.log(msg + result);
}

getResult(12, 13, display); */

/**************************************************************
 * LECTURE 17: UNKNOWN TYPE IN TYPESCRIPT
 *************************************************************/
/*let inputVal: unknown;
let uname: string = 'Something';

inputVal = 100;
if(typeof inputVal === 'string') 
    uname = inputVal;

console.log(uname)
console.log(typeof inputVal)*/

/**************************************************************
 * LECTURE 18: NEVER TYPE IN TYPESCRIPT
 *************************************************************/
/*function greetUser(name: string) : void{
    console.log("Hello, ", name);
}

greetUser("John Smith");

function CreateError(errMsg: string, errorCode: number): never{
    throw {message: errMsg, code: errorCode};
}

try{
    fetch('https://jsonplaceholder.org/userss')
    .then(async response => {
        console.log(response)
        if(!response.ok){
            CreateError("Resource not found", response.status)
        }
        return response.json();
    })
    .then(json=> {
        console.log(json);
    })
}catch(err){
    console.log(err)
} */