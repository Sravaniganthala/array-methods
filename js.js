//question-1
// let a=["hello every one"]
// a.push("how","are","you","all")
// console.log("adding a:",a);
// //Question-2  removing the last element
// a.pop("all")
// console.log(a)
// //Question-3
// a.unshift("hii")
// console.log(a)
// //Question-4
// a.shift("")
// console.log(a);
// //Question-5
// a.reverse("")
// console.log(a)
// //Question-6 find the index of specific value in array
// // a.indexOf("every")
// console.log("indexOf:",a.indexOf("every"));
// //Question-7
// let checkvalue=a.includes("i am")
// console.log("exists array value:",checkvalue)
// //Question-8
// let num=[1,9,2,8,3,7]
// num.sort((a,b)=> a-b)
// console.log("sorted:",num.sort());
// console.log("sort ascending order:",num)
// //Question-9
// var arr=[1,2,3,4,5]
// var str=arr.join(",")
// console.log(str)

// //MULTIPLE ARRAY METHODS
// //Question-1
var arr=["apple","banana","mango"]
arr.push("orangr")
arr.shift()
console.log(arr);
//Question-2
var arr=["apple","banana","mango"]
var reversestr=arr.reverse().join(",");
console.log(reversestr);
//Question-3
var x=[9,1,8,2,7,3]
x.sort((a,b)=>a-b)
console.log(x)
x.pop()
console.log(x);
//Question-4
var z=["apple","banana"]
z.unshift("mango","lemon")
//remove 1st element
z.shift()
console.log(arr);
console.log(z.length);
//Question-5
let arr1=[1,2,3]
let arr2=[4,5,6]
let combine=arr1.concat(arr2)
combine.sort((a,b)=>a-b)
console.log(combine);























