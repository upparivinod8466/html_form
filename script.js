// console.log("hi vinod") 
// console.info("information message")
// console.warn("warning message")
// console.error("er4ror message")
// console.log(new Date().toLocaleDateString())
// console.log(new Date().toLocaleTimeString())
// let num1=10;
// let num2=20;
// let sum=num1+num2;
// console.log("the sum of the number is"+sum)
// console.log(`sum ${sum}`)
// let a=10;
// let b=20;
// if (a>b)
// {
//     console.log("a is greater than b")
// }
// else 
// {
//     console.log("b is greate than a")
// }
//  a= "vinodd"
//  let c;
// console.log(typeof(a))
// console.log(typeof(sum))
// console.log(typeof(1.1))
// console.log(typeof(null))
// console.log(typeof(true))
// console.log(typeof(c))
// let num=520;
// if (520%2===0){
//     console.log("even")
// }else{
//     console.log("odd")
// }
// if (11,2,3,4,5){
//     console.log("true")
// }else{
//     console.log("false")
// }
// let x=10;
// console.log(x++)
// console.log(x--)
// console.log(--x)
// console.log(x++)
// console.log(x)
// let array =[10,20,30,40]
// console.log(array);
// console.log(typeof(array));
// array.push(20);
// console.log(array)
// console.log(array[0]);
// console.log(array[4]);
// var array1=new Array();
// array1[0]="vinod";
// array1[1]="10";
// array1[2]=20;
// array1[3]=80.0;
// console.log(array1);
// console.table(array1)
// let fruits12= new Array("vinod","kumar","uppari")
// console.log(fruits12)
// console.log(fruits12.length)
//  let array3=[10,50,60,40,30,20];
// // console.log(array3.sort((a,b)=>a-b));
// // console.log(array3.sort((a,b)=>b-a))
//  array3.shift();
// // console.log(array3)
// // array3.unshift(60)
// // console.log(array3)
// // array3.pop();
// // console.log(array3)
//  array3.splice(2,1,70,80,90)
// console.log(array3)
// a=array3.slice(0,5)
// console.log(a)
// a=array3.slice(-4,-2)
// console.log(a)
// a=array3.join("_")
// console.log(typeof (a))
// b=a.split("_")
// console.log(b)
// var student={"name":"vinod","age":28,"inst":"jntuh","branch":"egm"};
// // console.log(student.branch)
// // console.log(student["name"])
// // console.log(student["age"])
// // console.log(student["branch"])
// // for(var a in student)
// // {
// //     console.log(a+":"+student[a])
// // }
// console.log(student.name)
// console.log(student.age)
// var arr=[
//     {
//         "name":"vinod",
//          "id":"11",
//         "branch":"egm"
//     },
//     {
//         "name":"kumar",
//         "id":"12",
//         "branch":"ist"
//     },
//     {
//           "name":"uppari",
//           "id":"13",
//           "branch":"emt"  
//     }
// ]
// console.log(arr[2].name)
// console.log(arr[0]["name"])
// for(var i=0;i<arr.length;i++)
// {
//     console.log(arr[i].name,arr[i].branch)

// }
// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload=function()
// {
//     var data=JSON.parse(request.response);

    
//     console.log(data);
//     for(var i=0;i<data.length;i++)
//     {
//         console.log("CountryName"+":"+data[i].name+" : "+"capitalName"+":"+data[i].capital)
//     }
// }
// function sum(a,b)
// {
//     console.log(a+b)

// }
// sum(20,50)
// var res=function(a,b)
// {
//     return a+b;
// }
// console.log(res(10,80))
// function ar(arr,n){
// var res=()=>"vinod"
// console.log(res())
// var result=(a,b)=>a+b
// console.log(result(10,20))
// var a=(a,b)=>{
//     console.log("vinod")
//     return a+b
// }
// console.log(a(50,20))
// let num=10
// let num=20
// console.log(num)
// var num=10
// var num=20
// console.log(num)
// console.log(num)
// let num=10

// const num=2
// if (num==1)
// {
//     const num=2
//     console.log(num)
// }
// console.log(num)
//  let array=[10,20,30,40,50,60]
// let num1,num2,num3;
// [num1,num2,num3]=array
// console.log(num1,num2,num3)
// let emp={
//     name:"vinod",
//     age:28,
//     designation: "student",
//     address:{
//         city:"hyd",
//         state:"telungana",
//         country:"indian"
//     }
// }
// let {name,age,address}=emp
// console.log(name,age,address)
// let arr=["vinod","kumar","uppari","male",28]
// let [fn,mn,ln,g,age,]=arr
// console.log(fn,mn,ln,g,age)
// let data={fn:"vinod",mn:"kumar",ln:"uppari",g:"male",age:28}
// let {fn,mn,ln,g,age}=data
// console.log(fn,mn,ln,g,age)
// let array=[10,20,30,40,50]
//  let arr=[10,20,...array,30]
//  console.log(arr)
// array.push(80)
// console.log(array)
// console.log(arr)
// let arr=["vinod","samsung","nokia","xiami"]
// let arra=["iphone","iphone2","iphone3"]
// let array=[...arr,...arra]
// console.log(array)
// let user1={name:"vinod",age:28}
// let user2={name1:"kumar",age1:25}
// let user={...user1,...user2}
// console.log(user)
// function getsum(num1,...numbers)
// {
//     let sum=0;
//     for(let i=0;i<numbers.length;i++)
//     {
//         sum=sum+numbers[i]

//     }
//     return sum
// }
// console.log(getsum(10,20,30,40,50))
// function getcolors(color1,color2,...colors){
//     console.log(color1)
//     console.log(colors)

// }
// getcolors("red","blue","green","white")
// function getcolors(color1,color2,...colors)
// {
//     console.log(colors[0])
// }
// getcolors("red","blue","green","yellow","black")
// function getsorteddata(...array){
//     let sort=array.sort((a,b)=>a-b);
//     console.log(sort)
// }
// getsorteddata(10,50,30,40,20)
// immediately invoked function expression iife
// (function (num1,num2){
//     let sum=num1+num2
//     console.log(sum);
// })(10,20)
// (function(arr){
//     let even=[];
//     for(var i in arr)
//     {
//         if (arr[i]%2==0){
//             even.push(arr[i])
//         }
        
//     }
//     console.log(even)
// })([1,2,3,4,5,6,7,8,9,10])
// let num=10%2;
// console.log(num)
// class vehicle{}
// let obj=new vehicle();
// obj.type="car"
// obj.model="bmw"
// obj.color="red"
// obj.year=2018
// obj.price=2000000
// console.log(obj)
// class vehicle{
//     constructor(type,color,year){
//         this.type=type
//         this.color=color
//         this.year=year
//     }
//     getdetails(){
//         return (this.type+
//         this.color+
//         this.year)
//     }

// }
// let obj=new vehicle("car","red",2020)
// console.log(obj.getdetails())
// class man{
//     constructor (name)
//     {
//         this.name=name;
//     }
// }
// class emp extends man{
//     constructor(name,position){
//         super(name);
//         this.position=position;
//     }
// }
// let parentobj=new man("vinod")
// let emp1=new emp("kumar","senior")
// console.log(parentobj.name)
// console.log(emp1.position)
// class person{
//     static companyname="amazon"
//     constructor(name,age,city){
//         this.name=name
//         this.age=age
//         this.city=city
//     }
//     getdetails(){
//         let data=`name=${this.name}
//                    age=${this.age}
//                    city=${this.city}`
//         console.log(data)
//     }
//     static getcompanyname(){
//         console.log(person.companyname)
//     }
// }
// class emp extends person{
//     static companyname1="google"
//     constructor(name,age,city,desig,salary){
//         super(name,age,city)
//         this.desig=desig
//         this.salary=salary
//     }
//     getempdetails(){
//         let empdata=`${this.name}
//                       ${this.age}
//                       ${this.city}
//                       ${this.desig}
//                       ${this.salary}`
//      console.log(empdata)
//     }
// }
// let objperson=new person("jhon",28,"hyd")
// let objemp=new emp("vinod",29,"tandur","student",35000)
// console.log(objperson.name)
// console.log(objemp.name)
// console.log(person.companyname)
// console.log(emp.companyname1)
// objemp.getempdetails()
// objperson.getdetails()
// (person.getcompanyname())