//var x=15;
//{
//let x=5;
//console.log(x);
//}

//console.log(x);
// var y=function(x,y){
//     return x+y;
// };
//console.log(y(9,6));

// const a=(x,y)=>x+y;
// console.log(a(7,10));

// const q1=["jan","feb","mar"]
// const q2=["arp","may","jun"]
// const q3=["july","aug","sept"]
// const q4=["oct","nov","dec"]
// const year=[...q1,...q2,...q3,...q4]
// console.log(year)

// const mynum=[23,67,78,90];
// let max=Math.max(...mynum);
// console.log(max);

// const mynum=[23,67,78,90];
// let val=0;
// for(let num of mynum){
//   val=val+num;
// }
// console.log(sum);

// const name="Cipherschools";
// let text="";
// for(let ch of name)
// {
//     text=text+ch;
// }
// console.log(text);

// const fruits=new Map([
//     ["apple",500],
//     ["banana",900],
//     ["oranges",700]]);
// console.log(fruits);
// console.log(fruits.get("oranges"));

// const letter=new Set();
// letter.add("a");
// letter.add("b");
// letter.add("a");
// console.log(letter);

// class car{
//     constructor(name,model){
//         this.name=name;
//         this.model=model;
//     }
// }
// const mycar1=new car("suzuki",9907);
// const mycar2=new car("mahindra",5678);
// console.log(mycar1,mycar2);

// const myfunction=()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("This is inside promise");
//         resolve();
//     },2000);
// });};
// myfunction()
// .then(()=>{
//     console.log("Resolved");
// })
// .catch(()=>{
//     console.log("error");
// });

// const person={
//     firstname:"John",
//     lastname:"william",
//     age:30,
//     eyecolor:blue,
// };
// let id=Symbol("id");
// person[id]=14011;
// console.log(person);

// const addtwonum=(a,b=10)=>a+b;
// console.log(addtwonum(10));

const addnum=(...args)=>{
    console.log(args);
    let sum=0;
    for(let arg of args)
    {
        sum=sum+arg;
    }
    return sum;
}
console.log(addnum(10,14,17,28,90));