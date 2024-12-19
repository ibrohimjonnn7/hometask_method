// function myfun(a, b){
//  let c = a.at(-1);
//  let d = a.substring(0, a.length - 1)
//  return d + c.repeat(b)
// }
// console.log(myfun("Hello", 3));

// function myfun(a){
//     let b = a.at(0) + a.at(-1);
//     return b;
// }
// console.log(myfun("Ibrohim"));
// function sum(a) {
//     if(typeof a==String){
//         return a.Number()

//     }
//     else {
//         return '"'+a.toString()+'"'
//     }
// }
// console.log(sum("77"));

// function nekaibot(a) {
//     if (typeof a == "string") {
//         return Number(a)
//     }
//     else {
//         return a.toString()
//     }
// }
// console.log(nekaibot("111"));
// function reverseAndUppercase(word) {
//     return word.split('').reverse().join('').toUpperCase();
//   }
//   console.log(reverseAndUppercase("molas"));

// Учитывая строку чисел, разделенных запятой и пробелом, верните произведение чисел


// 1primer in baroi on ast ki adadhoi dodashudaro bo hamdigar zarb kunad

// function myfun(a){
//    let sum = 1;
//     let text = a.split(",");
//     Number(text)
//     for (let i = 0; i < text.length; i++ ){
//       sum *= text[i];

//     }
//     return sum;
// }
// console.log(myfun("2,3"));

//2primer dar injo mo kalimaro bo hijo judo mekunem dar javob chanto hijo taqsim shudaast hamonro mebarorrad
// function myfunc(a) {
//   let text = a.split("-");
//   return text.length;
// }

// console.log(myfunc("su-fi-sa-id-mu-ham-mad-a-li"));

//3primer dar in jo dar agar text2 dar darunash chizhoi texti 2 boshad true naboshad false

// function myfun(a, b){
//     return a.includes(b);
// }
// console.log(myfun("abse", "a"))

//4primer dar in jo agar daruni text prabel doshta boshad true baror naboshad false

// function myfun(a) {
//   return a.includes(" ");
// }
// console.log(myfun("salom, ibrohim"));

//5primer dar in jo kalimaro medihem bo digar kalima jam meshavad

// function myfun(a){
//     return "hello ".concat(a);  
// }
// console.log(myfun("Ibrohim"));

//6primer dar injo agar darozii kalima toq boshad kalimai mobayngiro mebarorad agar juft boshad 2 harfashro 
//  function mul(a) {
//    if (a.length % 2 == 0) {
//      let b = a.at(a.length / 2 - 1);
//      let c = a.at(a.length / 2);
//      return b + c;
//    } else {
//      return a.at(Math.floor(a.length / 2));
//    }
//  }
//  console.log(mul("Heloo"));

//7 primer dar in jo agar dar kalima 2 harfi yakxela paydarpay boshad  true agar naboshad false 
// function doubleLetter(a){
//     let splitted = a.split("")
//     let n = ''
//     for (let i = 0 ; i < splitted.length ; i ++ )
//     {
//         if (splitted[i] == splitted[i+1]){
//             n=  'true' 
//             break
//         }   
//         else {n = 'false'}
//     }
//     return n
// }
// console.log(doubleLetter("ssalom"));

//8 primer dar in jo agar agar kalimai nemo dar jumla boshad jumlaro mebarorad
// function Nemo(a){
//     let spl = a.split(" ")    
//     for (let i = 1 ; i < spl.length ; i ++){
//         if (spl[i]=="Nemo") {
//             return 'I found Nemo at '+i+'!'

//         }
//     }
//     return 'I don`t found Nemo'
     
// }
// console.log(Nemo("I am finding Nemo !"));

//9primer dar injo kalimaro chapa mekunad
// function  reverse(a){
//     let splitted = a.split(" ")
//     for (let i = 0 ; i < splitted.length ; i ++){
//         let spl = splitted[i].split("")
//         if (spl.length >= 5)[
//             spl.reverse()
//         ]
//         splitted[i] = spl.join("")
//     }
//     let text = splitted.join(" ")
//   return text
    
// }
// console.log(reverse("Salom se aleykum du"));

//10primer dar in joo dar bayni harfho - memonad
// function dashed(a){
//     let spl = a.split("")
//     for (let i = 0 ; i < spl.length ; i ++){
//         if (spl[i]=="e"  spl[i]=="a" spl[i]=="i"  spl[i]=="o"  spl[i]=="u"  spl[i]=="E"  spl[i]=="A"  spl[i]=="I"  spl[i]=="O" || spl[i]=="U" ){
//             spl[i]="-"+spl[i]+"-"
//         }
//     }
//     let text = spl.join("")
//     return text
// }
// console.log(dashed("Carpe Diem"));

//11primer dar injo mo raqam medihem az to raqami dodagiyamon - monda meravad
// function  myfunc(a){
//      let num = Number(a)
//      let res = ""
//      for (let i = 1 ; i <= num-1 ; i ++){
//         res += i + "-"
//      }
//      return res + a
// }
// console.log(myfunc(10));


// 13

// function func(b,a) {
//     let k = 0;
//     for (let i = 0; i < a.length - 1; i++){
//         if (a.at(i) == b) {
//             k++;
//         }
//     }
//     return k;
// }
// console.log(func("m","Salom se aleykum du"));


// 14

// function func(a) {
//     let k = "";
//     let s = "";
//     for (let i = 0; i < a.length; i++){
//         if (a.at(i) == a.at(i).toUpperCase()) {
//             k += a.at(i);
//         }
//         else {
//             s += a.at(i);
//         }
//     }
//     return k + s;
// }
// console.log(func('nVAn'));


// 15

// function  func(a){
//     let str =a.toString()
//    let revers = str.split("").reverse().join("")
//    return revers + a
// }
// console.log(func(123));
