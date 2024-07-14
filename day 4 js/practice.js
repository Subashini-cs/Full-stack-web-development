/*basic declaration of variable*/
console.log("Hello world!");
var name="John";
const pi=3.14;
{let a=4;
let b=5;
let c=a+b;
console.log(c)
}
console.log(name);
console.log(pi);


/*function*/
function print()
{
    console.log("Hiii!");
}
print();
print();


/*if condition*/
var n=15;
if(n>0){
    console.log("positive number");
}
else if(n<0)
{
    console.log("negative number");
}
else{
    console.log("zero");
}


/*for loop*/
for(var i=0;i<5;++i)
{
    console.log("Iteration "+i);
}


/*array and obj*/
let vegetable=['carrot','beetroot']
vegetable.push("tomato");
vegetable.push("potato");
vegetable.pop();
console.log(vegetable);

let person={name:"suba",age:25,dept:"aids"}
person.age=18;
console.log(person);


/*E6+ feature -> simple single line code*/
const x=10;
const y=15;
const add=(x,y)=>x+y;
console.log(add(x,y));

const names="john";
console.log(`Hello, ${names}!`);





