// 1пример ин адади дода шударо бо хамдигар чам мекунад

// function myfunc(a){
// if(a == 0){
//     return a;
// }
// return (a % 10) + myfunc(Math.floor(a/10));
// }
// console.log(myfunc(123));

// 2пример ин зарб ва чавоби зарбро чам мекунад

// function hello(a, b = 10) {
//   if (b == 1) {
//     return a * b;
//   }
//   return a * b + hello(a, b - 1);
// }
// console.log(hello(1));

// 3пример таксимкунандаи камтарини ду адад

// function myfunc(a, b){
//     if (b == 0){
//         return a;
//     }
//     return myfunc(b, a & b);

// }
// console.log(myfunc(32, 8));

// 4пример ин адади чуфт е ток ро мебарорад
// function myfunc(a) {
//   if (a == 0) {
//     return true;
//   }

//   if (a == 1 || a == -1) {
//     return false;
//   }

//   return myfunc(a - 2);
// }

// console.log(myfunc(122));

// closure 5 пример да ягон ном ягон чиз чам кардан

// function myfunc(a){
//      return (b) => {
//          return b + a;
//      };
//  }
//  let myfunc2 = myfunc("jonnn.7");
//  console.log(myfunc2("ibrohim"));

//  5 пример ин барои хамаи функсияхоро дар охирон чам мекунад

// function myfunc(a) {
//   return (b = 0) => {
//     return (c = 0) => {
//       return (d = 0) => {
//         return (e = 0) => {
//           return (f = 0) => {
//             return a + b + c + d + e + f;
//           };
//         };
//       };
//     };
//   };
// };
// console.log(myfunc(1)(2)(3)(4)()(6));

//  6 пример  ин барои он даркор аст ки ададро д10 то дато зиед мекунад
// function myfunc(a) {
//   let cnt = a;
//   return (b) => {
//     return (cnt += b);
//   };
// }

// let myfunc2 = myfunc(5);
// console.log(myfunc2(10));
// console.log(myfunc2(10));
// console.log(myfunc2(10));


//  8 пример  recurse  ин барои фактариали двайной мебошад 

// function mul(a) {
//   if (a == 1) {
//     return 1;
//   }
//   if (a == 0) {
//     return 1;
//   }
//   return a * mul(a - 2);
// }
// console.log(mul(9));



// 10 барои ба дарача бардоштан

// function hello(a, b) {
//   if (b == 0) {
//     return 1;
//   }
//   return a * hello(a, b - 1);
// }
// console.log(hello(2, 3));