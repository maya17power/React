//console.log('app running es6 arrow functions 2');
// arguments object - NO LONGER BOUND WITH ARROW FUNCTION
//ES5 function scaffold
// const add = function (a,b){
//     console.log(arguments);
//     return a + b;
// }
// console.log(add(55,1, 1001));

//ES6 function scaffold
//no access "arguments" object
// const add2 = (a,b) => a + b;
// console.log(add2(50,50));

//'this' keyword - NO LONGER BOUND WITH ARROW FUNCTIONS
// const user = {
//     name: "Gee",
//     cities: ['sf', 'la', 'nrg'],
//     printPlacesLived: function(){
//         // console.log(this.name);
//         // console.log(this.cities);

//         // nested functions no longer support 'this' keyword in ES6
//         // this.cities.forEach(function(i){
//         //     console.log(this.name + " has lived in " + i);
//         // });

//         //nested ES6 Arrow functions support 'this' keyword.
//         this.cities.forEach((i)=>{
//             console.log(this.name + ' has lived in ' + i);
//         });
//     }
// }

//ES6 proper methods, remove colon and 'function' keyword text all together.
// const user2 = {
//     name: "Gee",
//     cities: ['sf', 'la', 'nrg'],
//     printPlacesLived(){
//         // console.log(this.name);
//         // console.log(this.cities);

//         // nested functions no longer support 'this' keyword in ES6
//         // this.cities.forEach(function(i){
//         //     console.log(this.name + " has lived in " + i);
//         // });

//         //nested ES6 Arrow functions support 'this' keyword.
//         //example forEach() method.
//         // this.cities.forEach((i)=>{
//         //     console.log(this.name + ' has lived in ' + i);
//         // });

//         //example Map() method.
//         // returns new array and keeps existing array as is
//         // const cityLocations = this.cities.map((i)=>{
//         //     return this.name + ' has lived in ' + i;
//         // });
//         // return cityLocations;
//         //slim version below:
//         return this.cities.map((i)=> this.name + ' has lived in ' + i);
//     }
// }
// console.log(user2.printPlacesLived());


//challenge area:








export default function App(){}