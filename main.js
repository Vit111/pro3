let number = parseInt(prompt('Write a number?', '').replaceAll(' ', ''));
let x = 0;
let y = 1;
let str = ' ';
for(let i = 1; i <= number; i++){
    let z = x + y;
    str += x;
    if(i < number){
        str += ', ';
    }
    x = y;
    y = z;
};
console.log(str)













































// let number = parseInt(prompt('Write a number?', '').replaceAll(' ', ''));
// for(let i = 1 ; i <= number; i++) {
//     x = 1;
//     y = 0;
//     z = x + y;

//     console.log(m)
// }

// let number = parseInt(prompt('Write a number?', '').replaceAll(' ', ''));
// for(let i = 1 ; i <= number; i++) {
//     x = 1;
//     y = 0;
//     z = x + y;
//     if( z => 0)
//     { m = z + i}
//     console.log(m)
// }




// let number = parseInt(prompt('Write a number?', '').replaceAll(' ', ''));
// for(let i = 1, l = 0 ; i <= number; i++, l++) {
//     y = (i - 2) ;
//     p = (i - 1);
//     n1 = y + p;
//     n2 = n1 + (l - 2) + ( l - 1);
//     if(n1,n2 <= 0){
//         n1,n2 = 0;
//     }
//     console.log(n2);
// }

// for(let j = 0; j <= i; j++) {
//             console.log(++j);
//         }










// for(let i = 1; i <= number; i++) {
//     if (y === -1) { y = 0;
//     console.log(y)}
//     y = (i - 2) + (i - 1);
//     console.log(y);
// }
// while(number <= 8){
//     console.log(number);
//     number++;
// }
// x = 1;
// y = 0; 
// number = x + y ;
// lnumber = number + x;
// nnumber = lnumber + number;

// var fibonacci = [];
// y = 0;
// x = 1;
// for (var i = 2; i < 5; i++) {
//   fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
// }
// console.log(fibonacci);