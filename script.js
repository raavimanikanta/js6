function add (a,b){
    return a+b;
}
console.log(add(5,5))

const Fun1=function (){
    console.log("This is function expression ")
}
Fun1();

function Person (name1,age,location){
    this.name1=name1;
    this.age=age;
    this.location=location;
}
var PersonObject=new Person ("john",23,"inter")
console.log(PersonObject)

// (function(){
//   console.log("invokes only once");
// })();

// (function(){
//     console.log("this is a anonymous function");
// }());



function add (a,b){
  return a+b;
}

const Fun2 = function(a){
    return a(5,5)
}
console.log(Fun2(add))

function SubmitHomework (){
   console.log("Now I have to Submit home work ");
}

function CopyHomeWork (Callback){
    console.log("I have to copy home work from my friend ");
    Callback();
 }
CopyHomeWork(SubmitHomework)

function multiple(a,b){
    console.log(a*b)
}
function Result(multiple){
          multiple(5,5)
}
(Result(multiple))




