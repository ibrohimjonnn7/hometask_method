// recursion

let cnt = 1;
function myfunc(num){
if(num == 0){
  return cnt;
}
cnt *= num;
return myfunc(num - 1);

}
console.log(myfunc(5));


// 2пример
// function myfunc(a){
//     if (a == 0){
//         return 0;
//     }
//     return a + myfunc(a - 1);
    
// }
// console.log(myfunc(5));

// clousure

// 1пример

// function myfunc(a){
//     return (b) => {
//         return a + b;
//     };
// }
// console.log(myfunc(5)(5));

// 2пример

// function myfunc(){
//   let cnt = 0;
//   return () => {
//     return cnt++;
//   }
// }

// let myfunc2 = myfunc()
// console.log(myfunc2());
// console.log(myfunc2());
// console.log(myfunc2());
// console.log(myfunc2());

// 1zadacha

// function myfunc() {
//   let cnt = 0;
//   return () => {
//     return cnt +=5;
//   };
// }

// let myfunc2 = myfunc(5);
// console.log(myfunc2());
// console.log(myfunc2());
// console.log(myfunc2());
// console.log(myfunc2());

// 2zadacha
// let snt = 1;
// function myfunc(a){
//   if (a == 0 ){
//     return snt;
//   }
//   snt *= a;
//   return myfunc(a-1);
// }
// console.log(myfunc(5))

// 3zadacha

// let snt = 0;
// function myfunc(a,b) {
//   if (b == 0){
//     return 1;
//   }
//   return a * myfunc(a, b -1);
// }
// console.log(myfunc(2,5));

// 4zadacha
//  function myfunc(a,b){
//    let cnt
//    return () => {
//      return cnt=a+b;
//    }
//  }
//  console.log(myfunc(5,4)());
